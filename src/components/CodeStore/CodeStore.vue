<!--
 * @description: 头部组件
 * @Author: Gouxinyu
 * @Date: 2020-08-02 22:15:19
--> 
<template>
    <div id="ue-code-store">
        <div class="code-store-title-box">
            <div class="code-store-title">
                <span>插件库</span>
            </div>
        </div>
        <div class="code-store-list-box">
            <ul class="ue-code-store-list">
                <li class="code-store-item" v-for="item in codeStoreList" :key="item.id">
                    <i class="uer" :class="item.icon"></i>
                    <span class="code-item-name">{{item.name}}</span>
                </li>
            </ul>
        </div>
    </div>
</template>

<script lang="ts">
import { mapState } from "vuex";
// import Prism from 'prismjs';
// import 'prismjs/themes/prism-tomorrow.css'
export default {
    name: "CodeStore",
    data() {
        return {
            message: "ue",
        };
    },
    computed: {
        ...mapState({
            menuList: (state: any) => state.menuList,
            designerService: (state: any) => state.designerService,
            codeStoreList: (state: any) => state.codeStoreList
        }),
    },
    methods: {
        closeMenu() {
            this.$emit("closeMenu");
        },
    },
};
</script>

<style scoped lang="less">
.flex-center {
    display: flex;
    justify-content: center;
    align-items: center;
}

#ue-code-store {
    position: absolute;
    left: 0;
    top: 70px;
    bottom: 0;
    right: 0;
    margin: auto;
    width: 100%;
    height: 90%;
    box-sizing: border-box;
    
    .code-store-title-box {
        width: 100%;
        height: 150px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .code-store-title {
        width: 450px;
        height: 150px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        background: #fff;
        box-shadow: rgba(0, 0, 0, 0.1) 0 10px 15px 0;
        border-radius: 10px;
    }
    .code-store-list-box {
        width: 100%;
        height: 71.5%;
        padding: 0 25px;
        box-sizing: border-box;
        overflow-y: overlay;
        margin-top: 20px;
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
        .ue-code-store-list {
            list-style-type: none;
            margin: 0;
            padding: 0;
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            .code-store-item {
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                width: 213px;
                height: 210px;
                background: #fff;
                border-radius: 10px;
                border: 3px solid rgba(0,0,0,0);
                margin-bottom: 10px;
                box-shadow: rgba(0, 0, 0, 0.05) 0 10px 15px;
                cursor: pointer;
                .uer {
                    font-size: 80px;
                    color: #4608e2;
                    margin-bottom: 10px;
                }
                .code-item-name {
                    font-weight: bold;
                    color: #4608e2;
                }

                &:hover {
                    border-color:#4608e2;
                }
            }
        }
    }
}
</style>
