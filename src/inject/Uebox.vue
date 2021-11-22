<!--
 * @description: 
 * @Author: Gouxinyu
 * @Date: 2020-08-02 22:15:19
--> 
<template>
    <div id="ue-helper" ref="ueHepler">
        <!-- 固定头部 -->
        <div class="ue-header-background" ref="ueHeader" @mousedown.stop="movePanel">
            <div class="ue-header-box">
                <ul>
                    <li class="ue-type">
                        <span>{{ueStatus}}</span>
                    </li>
                    <li class="ue-menu-item">
                        <i class="uer uer-menu" @click.stop="openMenuPanel"></i>
                    </li>
                    <li class="ue-right-list">
                        <i class="uer uer-loading-sync" @click.stop="refreshComponentList"></i>
                        <i class="uer uer-shrink" @click.stop="scalePanel"></i>
                        <i class="uer uer-dialog-close" @click.stop="closePanel"></i>
                    </li>
                </ul>
            </div>
        </div>
        <!-- 菜单 -->
        <menu-panel v-if="pageShowStatus.menu"></menu-panel>
        <!-- 动态组件 -->
        <transition>
            <keep-alive>
                <component :is="currentComponent"></component>
            </keep-alive>
        </transition>
        <!-- iframe -->
        <!-- <iframe-panel></iframe-panel> -->
    </div>
</template>

<script lang="ts">
import { mapState } from "vuex";
import ComponentView from '../components/ComponentView/ComponentView.vue';
import MenuPanel from "../components/MenuPanel/MenuPanel.vue";
import CodeStore from "../components/CodeStore/CodeStore.vue";
import IframePanel from "../components/IframePanel/IframePanel.vue";
export default {
    name: "Uebox",
    data() {
        return {
            message: "ue",
        };
    },
    computed: {
        ...mapState({
            designerService: (state: any) => state.designerService,
            ueStatus: (state: any) => state.ueStatus,
            pageShowStatus: (state: any) => state.pageShowStatus,
            currentComponent: (state: any) => state.currentComponent
        }),
    },
    mounted() {
        this.postMessage();
        this.getMessage();
    },
    methods: {
        async postMessage() {
            const info = {
                language: "china",
                type: 1,
                data: 1,
                ueExtensionPost: true,
            };

            window.postMessage(info, "*");
        },
        async getMessage() {
            window.addEventListener(
                "message",
                (e) => {
                    if (
                        e.data.ueExtensionPost ||
                        (!e.data.postAgain && !e.data.ueInjectPost)
                    ) {
                        return;
                    }

                    this.postMessage();
                },
                false
            );
        },
        getDesignerComponent() {
            this.$store.commit("changeUeStatus", "设计器");
            this.watchComponentsChange();
            console.log("生成组件列表", this.designerService);
        },
        // 监听页面变化
        watchComponentsChange() {
            // 选择需要观察变动的节点
            const targetNode = $("#editContent")[0];
            const tabNode = $("div.contentTab")[0];

            // 观察器的配置（需要观察什么变动）
            const pageConfig = {
                attributes: false,
                childList: true,
                subtree: false,
            };

            // 观察器的配置（需要观察什么变动）
            const tabConfig = {
                attributes: true,
                childList: true,
                subtree: true,
            };

            // 当观察到变动时执行的回调函数
            const pageCallback = (mutationsList, observer) => {
                console.log("组件变动", mutationsList);
                this.$store.commit("refreshComponentList");
            };

            // 监听切换页面tab时
            const tabCallback = (mutationsList, observer) => {
                pageObserver.disconnect();
                const pageId =
                    this.designerService.getCurrentPage() &&
                    this.designerService.getCurrentPage().pageId;
                const newTargetNode = $(`#${pageId}>.canvas`)[0];

                console.log("newTargetNode", newTargetNode);
                if (newTargetNode) {
                    pageObserver.observe(newTargetNode, pageConfig);
                }
                this.$store.commit("changeUeStatus", "设计器");
            };

            // 创建一个观察器实例并传入回调函数
            const pageObserver = new MutationObserver(pageCallback);
            const tabObserver = new MutationObserver(tabCallback);

            // 以上述配置开始观察目标节点
            pageObserver.observe(targetNode, pageConfig);
            tabObserver.observe(tabNode, tabConfig);
        },
        // 刷新组件列表
        refreshComponentList() {
            this.$store.commit("refreshComponentList");
        },
        // 关闭插件
        closePanel() {
            $("#ue-helper").hide();

            window.postMessage({ isFromUeHelper: true }, "*");
        },
        openMenuPanel() {
            this.$store.commit('changePageShowStatus', {type:'menu', status: true})
        },
        // 拖拽插件
        movePanel(e) {
            if (e.target.localName === "i") {
                return;
            }
            const el = $("#ue-helper");
            const os = el.offset();
            const dx = e.pageX - os.left;
            const dy = e.pageY - os.top;
            const height = $("#ue-helper").height();
            const width = $("#ue-helper").width();
            const clientWidth = document.body.clientWidth;
            const clientHeight = document.body.clientHeight;

            const moveEvent = (e) => {
                let top = e.pageY - dy;
                let left = e.pageX - dx;
                let right = clientWidth - width;
                let bottom = clientHeight - height;

                let offSet = {
                    top: top,
                    left: left,
                };

                if (top < 0) {
                    offSet.top = 0;
                } else if (top > bottom) {
                    // 底部
                    // offSet.top = bottom;
                } else if (left < 0) {
                    offSet.left = 0;
                } else if (left > right) {
                    offSet.left = right;
                }

                if (left > right && top < 0) {
                    offSet.top = 0;
                    offSet.left = right;
                } else if (left > right && top > bottom) {
                    // 右下角
                    // offSet.top = bottom;
                    // offSet.left = right;
                } else if (left < 0 && top > bottom) {
                    // 左下角
                    // offSet.top = bottom;
                    // offSet.left = 0;
                } else if (left < 0 && top < 0) {
                    offSet.top = 0;
                    offSet.left = 0;
                }

                el.offset(offSet);
            };

            const moveUpEvent = (e) => {
                // e.stopImmediatePropagation();
                document.removeEventListener("mousemove", moveEvent);
                document.removeEventListener("mouseup", moveUpEvent);
            };

            document.addEventListener("mousemove", moveEvent);
            document.addEventListener("mouseup", moveUpEvent);
        },

        scalePanel() {
            this.$refs.ueHepler.style.height = 0;

            setTimeout(() => {
                this.$refs.ueHepler.style.display = "none";
                $("#ue-box").show();
            }, 500);
        },
    },
    watch: {
        /**
         * @description: 若获取到designerService，说明是设计器
         * @Author: Gouxinyu
         * @param {type}
         * @Date: 2020-08-05 01:32:29
         */
        designerService: {
            handler(newVal, oldVal) {
                if (newVal !== oldVal && newVal !== null) {
                    this.getDesignerComponent();
                }
            },
        },
    },
    components: {
        ComponentView,
        MenuPanel,
        CodeStore,
        IframePanel
    },
};
</script>

<style scoped lang="less">
.flex-between-start {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
}

.flex-between-center {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.flex-center {
    display: flex;
    justify-content: center;
    align-items: center;
}

#ue-helper {
    position: fixed;
    top: 15px;
    right: 15px;
    width: 500px;
    height: 700px;
    min-width: 30px;
    background-color: rgba(255, 255, 255, 0.99);
    z-index: 99999;
    overflow: hidden;
    animation: showList 0.5s ease-in-out;
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.2) 0 1px 5px 0px;
    transition: width 0.5s ease-in-out, height 0.5s ease-in-out;

    .ue-header-background {
            .flex-between-start();
            width: 100%;
            height: 170px;
            border-radius: 10px;
            background: #4608e2;
            color: #fff;
            cursor: move;
        }

    .ue-header-box {
        position: absolute; 
        top:0;
        left: 0;
        right:0;
        width: 450px;
        height: 60px;
                margin: auto;
                color: #fff;
                ul {
                    width: 100%;
                    height: 100%;
                    .flex-between-center();
                    list-style-type: none;
                    margin: 0;
                    padding: 0;
                    li {
                        width: 80px;
                        height: 24px;
                        display: inline-block;
                        font-weight: bolder;
                        &.ue-type {
                            display: flex;
                            justify-content: flex-start;
                            align-items: center;

                            span {
                                font-size: 16px;
                                font-weight: bold;
                            }
                        }

                        &.ue-menu-item {
                            .flex-center();
                        }
                        &.ue-right-list {
                            display: flex;
                            justify-content: space-between;
                            align-items: center;
                        }

                        &.ue-menu-item,
                        &.ue-right-list {
                            .uer {
                                width: 24px;
                                height: 24px;
                                border-radius: 50%;
                                background: transparent;
                                .flex-center();
                                &:hover {
                                    background: rgba(0, 0, 0, 0.2);
                                }

                                cursor: pointer;
                            }
                        }
                    }
                }  
    }
}
</style>
