<!--
 * @description: 
 * @Author: Gouxinyu
 * @Date: 2020-08-02 22:15:19
--> 
<template>
    <div id="ue-component-list">
        <ul v-if="componentList.length > 0" class="ue-component-list-ul">
            <li
                class="ue-component-item"
                :class="{'selected': item.isSelected}"
                :id="`ue-${item.id}`"
                v-for="item in componentList"
                :key="item.id"
                v-show="item.searchShow"
                @click.stop="selectComponent(item)"
            >
                <div class="component-item-left">
                    <div class="component-item-name">
                        <i class="uer" :class="item.icon"></i>
                        <span
                            class="component-name"
                            :title="`${item.name}(${item.pluginName})`"
                        >{{ item.name }} ({{item.pluginName}})</span>
                    </div>
                    <i title="复制组件id" class="uer uer-id" @click.stop="copyComponentId(item)"></i>
                </div>
                <right-list-component :currentItem="item"></right-list-component>
            </li>
        </ul>
        <div v-else class="component-empty">
            <span>
                <i class="uer uer-kong"></i>
            </span>
        </div>
    </div>
</template>

<script lang="ts">
import { mapState } from "vuex";
import RightListComponent from "../RightListComponent/RightListComponent.vue";
import MorePanel from "./MorePanel.vue";
export default {
    name: "ComponentList",
    data() {
        return {
            showID: false,
            isOnePanel: false,
            lockStatus: ["锁定", "解锁"],
            moreLeft: 0,
            moreTop: 0,
            isClickInTime: 0
        };
    },
    computed: {
        ...mapState({
            componentList: (state: any) => state.componentList,
            designerService: (state: any) => state.designerService,
        }),
    },
    methods: {
        // 选中组件
        selectComponent(item: any) {
            if( window.removeSelectClass ) { clearTimeout(window.removeSelectClass); }
           
            // 移出上次选中组件的样式
            const lastSelectId = this.$store.getters.getLastSelectUeComponent;
            console.log(lastSelectId);
            if( lastSelectId ) { $(`#_${lastSelectId}`).removeClass('high-light-select') };

            const component = $(`#${item.id}`);
            component.trigger('click');
            component[0].scrollIntoView({behavior: "smooth"});

            $(`#_${item.id}`).addClass('high-light-select');
            this.$store.commit("changeSelectUeComponent", item.id);

            window.removeSelectClass = setTimeout(() => {
               $(`#_${item.id}`).removeClass('high-light-select');
            }, 3000)
            
            // this.$store.commit("refreshComponentList");
            // this.$store.commit("changeSelectStatus", {
            //     id: item.id,
            //     isSelected: true,
            // });
        },
        /**
         * @description: 判断组件是否被锁定
         * @Author: Gouxinyu
         * @param {string} id 组件id
         * @param {object} item 组件对象
         * @Date: 2020-08-12 00:19:43
         */
        async checkLock(id: string = "", item: any) {
            return new Promise((resolve, reject) => {
                $(`#${id}`).click();
                if (item.isLock) {
                    let basicSetting = this.designerService.getCurrentPlugin()
                        .basicSetting;
                    basicSetting.isLock = false;
                }
                resolve("success");
            });
        },
        /**
         * @description: 复制组件id
         * @Author: Gouxinyu
         * @Date: 2020-08-13 00:08:46
         */
        copyComponentId(item) {
            // 如果不是https，安全问题无法使用clipboard API
            if (typeof window.navigator.clipboard === "undefined") {
                const textArea = document.createElement("textarea");
                textArea.value = item.id;
                textArea.style.position = "fixed";
                document.body.appendChild(textArea);
                textArea.focus();
                textArea.select();

                try {
                    const successful = document.execCommand("copy");

                    this.$Message({
                        content: `已复制ID：${item.id}`,
                        time: 2000,
                        type: "success",
                    });
                } catch (err) {
                    console.warn("Was not possible to copy the text: ", err);
                }

                document.body.removeChild(textArea);
                return;
            }
            // 如果是https，则直接使用clipboard API
            navigator.clipboard.writeText(item.id).then(
                 () => {
                    this.$Message({
                        content: `已复制ID：${item.id}`,
                        time: 2000,
                        type: "success",
                    });
                },
                (err) => {
                    console.warn("unsuccessful!", err);
                }
            );
        },
    },
    components: {
        RightListComponent,
    },
};
</script>

<style scoped lang="less">
.flex-center {
    display: flex;
    justify-content: center;
    align-items: center;
}

.flex-between {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.flex-between-column {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
}

.selected {
    border-color: #4608e1 !important;
}

#ue-component-list {
    height: 56%;
    width: 100%;
    overflow-y: overlay;

    .scrollbar {
        width: 20px;
        height: 300px;
        margin: 0 auto;
    }

    &::-webkit-scrollbar {
        /*滚动条整体样式*/
        width: 10px; /*高宽分别对应横竖滚动条的尺寸*/
        height: 0px;
    }
    &::-webkit-scrollbar-thumb {
        /*滚动条里面小方块*/
        border-radius: 10px;
        background: #535353;
    }
    &::-webkit-scrollbar-track {
        /*滚动条里面轨道*/
        border-radius: 10px;
        background: none;
    }

    .ue-component-list-ul {
        text-align: center;
        list-style-type: none;
        padding: 0;
        .ue-component-item {
            .flex-between();
            width: 446px;
            height: 51px;
            margin: 20px auto;
            background: #fff;
            border: 2px solid transparent;
            border-radius: 10px;
            box-shadow: rgba(0, 0, 0, 0.05) 0 10px 15px;
            .uer-id {
                display: none;
            }
            &:hover {
                border-color: #4608e1;
                i {
                    display: inline;
                }
            }

            .component-item-left {
                text-align: left;
                width: 45%;
                position: relative;
                display: flex;
                .component-item-name {
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                }

                .uer {
                    margin-left: 10px;
                    color: #4608e1;
                    font-weight: bold;
                }
                .component-name {
                    font-size: 14px;
                    font-weight: bold;
                }

                .uer-id {
                    margin-left: 3px;
                    margin-top: -7px;
                    cursor: pointer;
                }
            }
        }
    }
}

.component-empty {
    width: 100%;
    height: 100%;
    position: relative;

    span {
        width: 100%;
        height: 100%;
        display: flex;
        text-align: center;
        justify-content: center;
        align-items: center;

        .uer-kong {
            font-size: 140px;
            color: #4608e1;
        }
    }
}

</style>