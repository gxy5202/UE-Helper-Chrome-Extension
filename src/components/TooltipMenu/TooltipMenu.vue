<!--
 * @description: 
 * @Author: Gouxinyu
 * @Date: 2020-08-02 22:15:19
--> 
<template>
            <div
                    ref="morePanel"
                    class="ue-more-panel"
                    :id="`ue-more-panel-${currentItem.id}`"
                    v-show="showMore"
                    :style="{left: moreLeft, top: moreTop}"
                    @mouseenter.stop="mouseInPanel($event, true)"
                    @mouseleave.stop="mouseInPanel($event, false)"
                >
                    <ul>
                        <li v-if="currentItem.codePosition" @click.stop="openCodeWin(currentItem)">
                            <i class="uer uer-code1"></i>
                            <span>代码注入</span>
                        </li>
                        <!-- <li v-if="currentItem.isEcharts">
                            <i class="uer uer-code1"></i>
                            <span>echarts属性</span>
                        </li>-->
                        <li @click="copyComponent(currentItem)">
                            <i class="uer uer-copy"></i>
                            <span>复制</span>
                        </li>
                        <li>
                            <i class="uer uer-all"></i>
                            <span>技术栈</span>
                        </li>
                    </ul>
                </div>
</template>

<script lang="ts">
import { mapState } from "vuex";
import { openCodeWindow } from "../../../utils/utils";
export default {
    name: "RightListComponent",
    props: ["currentItem"],
    data() {
        return {
            showMore: false,
            isOnPanel: false,
            lockStatus: ["锁定", "解锁"],
            moreLeft: 0,
            moreTop: 0,
            time: 0,
        };
    },
    computed: {
        ...mapState({
            componentList: (state: any) => state.componentList,
            designerService: (state: any) => state.designerService,
        }),
    },
    methods: {
        keyBoardEvent(
            type: string,
            keyCode: number,
            key: string,
            ctrlKey: boolean
        ) {
            return new KeyboardEvent(type, {
                keyCode, // UE必须要该属性
                code: key,
                key,
                ctrlKey,
            });
        },
        // 获取组件widget信息
        getWidgetInfo(currentItem) {
            const info = $(`#${currentItem.id}`).widget();
            const name = currentItem.name;

            // 打印组件信息
            console.log(name, info);
        },
        // 删除组件
        deleteComponent(currentItem) {
            // 监听键盘事件
            $(document).on("keydown", this.keyFunc);

            // 选中组件
            $(`#${currentItem.id}`).click();

            if (currentItem.isLock) {
                let basicSetting = this.designerService.getCurrentPlugin()
                    .basicSetting;
                basicSetting.isLock = false;
            }

            document.dispatchEvent(
                this.keyBoardEvent("keydown", 46, "Delete", false)
            );
            document.dispatchEvent(
                this.keyBoardEvent("keyup", 46, "Delete", false)
            );
        },
        // 锁定/解锁组件
        setLock(currentItem) {
            // 不采取先点击的方式(如果页面卡顿，可能点击事件会很慢), 采取遍历组件
            const designerComponentsList = this.designerService.getCurrentPageComponents();

            for (let plugin of designerComponentsList) {
                if (plugin.id === currentItem.id) {
                    plugin.config.isLock = currentItem.isLock ? false : true;
                    break;
                }
            }
            this.$store.commit("refreshComponentList");
        },
        // 复制组件
        copyComponent(currentItem) {
            // 监听键盘事件
            $(document).on("keydown", this.keyFunc);

            // 选中组件
            $(`#${currentItem.id}`).click();

            document.dispatchEvent(
                this.keyBoardEvent("keydown", 67, "C", true)
            );
            document.dispatchEvent(this.keyBoardEvent("keyup", 67, "C", true));
            document.dispatchEvent(
                this.keyBoardEvent("keydown", 86, "V", true)
            );
            document.dispatchEvent(this.keyBoardEvent("keyup", 86, "V", true));
        },
        // 打开代码注入窗口
        openCodeWin(currentItem: any) {
            openCodeWindow.start('component', currentItem);
        },
        // 解绑监听事件
        keyFunc() {
            return (e) => {
                console.log("keydown", e);
                $(document).off("keydown", this.keyFunc);
            };
        },
        // 显示更多面板
        showMorePanel(e: any, status: boolean, id: string) {
            if (status) {
                this.showMore = true;
                this.isOnPanel = true;
                this.moreLeft = `${
                    e.target.getBoundingClientRect().left - 50
                }px`;
                const panelHeight = $(`#ue-more-panel-${id}`).height();
                this.moreTop = `${
                    e.target.getBoundingClientRect().top - panelHeight
                }px`;
            } else {
                this.showMore = false;
                this.isOnPanel = false;
            }
        },
        // 鼠标移入更多面板
        mouseInPanel(e, status) {
            if (status) {
                this.showMore = true;
            } else {
                if (!this.isOnPanel) {
                    this.showMore = false;
                }
            }
        },
    },
};
</script>

<style scoped lang="less">
.flex-center {
    display: flex;
    justify-content: flex-start;
    align-items: center;
}

.flex-between {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.flex-center-column {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.component-item-right {
    padding-right: 10px;
    .right-dolist {
        .uer {
            color: #4608e1;
            font-size: 20px;
            font-weight: bold;
            cursor: pointer;
        }

        .uer-lock {
            color: #68d279;
        }

        .uer-unlock {
            color: #fe6d68;
        }

        .uer-ellipsis {
            &:hover {
                more-panel {
                    display: block;
                }
            }
        }
    }
}

.ue-more-panel {
    position: fixed;
    width: 80px;
    ul {
        .flex-center-column();
        margin: 0;
        padding: 0;
        width: 100%;
        height: 100%;
        list-style-type: none;
        background: #fff;
        border: 1px solid #4608e1;
        box-shadow: rgba(0, 0, 0, 0.1) 0 10px 15px;
        box-sizing: border-box;
        border-radius: 3px;
        li {
            width: 100%;
            padding: 2px 5px;
            .flex-center();
            font-size: 12px;
            color: #4608e1;
            box-sizing: border-box;
            font-weight: bold;
            &:hover {
                .uer {
                    color: #fff;
                }
                color: #fff;
                background: #4608e1;
            }
        }
    }
}
</style>