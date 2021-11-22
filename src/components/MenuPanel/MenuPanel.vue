<!--
 * @description: 头部组件
 * @Author: Gouxinyu
 * @Date: 2020-08-02 22:15:19
--> 
<template>
    <div id="ue-menu-panel">
        <div class="menu-left-panel">
            <div class="menu-close">
                <i class="uer uer-close" @click.stop="closeMenu"></i>
            </div>
            <ul class="ue-menu-list">
                <li v-for="item in menuList" :key="item.id" @click="toCurrentItem(item)">
                    <i></i>
                    <span>{{item.name}}</span>
                </li>
            </ul>
        </div>
        <div></div>
    </div>
</template>

<script lang="ts">
import { mapState } from "vuex";
import CodeStore from '../CodeStore/CodeStore.vue';

export default {
    name: "MenuPanel",
    data() {
        return {
            message: "ue",
            codeStoreShow: false
        };
    },
    computed: {
        ...mapState({
            menuList: (state: any) => state.menuList,
            designerService: (state: any) => state.designerService,
        }),
    },
    methods: {
        closeMenu() {
            this.$store.commit('changePageShowStatus', {type:'menu', status: false})
        },
        // 点击跳转具体菜单项
        toCurrentItem(item){
                this.closeMenu();
                this.$store.commit('changeCurrentComponent',item.component);
        }
    },
    components: {
        CodeStore
    }
};
</script>

<style scoped lang="less">
.flex-center {
    display: flex;
    justify-content: center;
    align-items: center;
}

#ue-menu-panel {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    backdrop-filter: blur(10px);
    background: rgba(0,0,0,0.5);
    z-index: 99999;
    .menu-left-panel {
        width: 100px;
        height: 100%;
        //border-radius: 10px;
        backdrop-filter: blur(20px);
        background: linear-gradient(to bottom, #6322e6a8, #4608e2b9, #6322e6a8);
        animation: panelShow 0.5s ease-in-out;

        .menu-close {
            height: 100px;
            .flex-center();
            .uer {
                color: #fff;
                font-size: 30px;
                cursor: pointer;
            }
        }

        .ue-menu-list {
            list-style-type: none;
            margin: 0;
            padding: 0;
            li {
                margin: auto;
                padding: 10px;
                text-align: center;
                animation: listShow 2s ease-in-out forwards;
                &:hover {
                    background: #fff;
                    span {
                        color: #4608e2b9
                    }
                    cursor: pointer;
                }
                
                span {
                    font-size: 16px;
                    color: #fff;
                    cursor: pointer;
                }
            }
        }

        .menu-close,
        .ue-menu-list {
            animation: listShow 0.5s ease-in-out;
        }
    }
    
}

@keyframes panelShow {
    0% {
        width: 0
    }
    100% {
        width: 100px;
    }
}

@keyframes listShow {
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
}
</style>
