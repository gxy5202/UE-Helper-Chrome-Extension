<!--
 * @description: 头部组件
 * @Author: Gouxinyu
 * @Date: 2020-08-02 22:15:19
--> 
<template>
    <div id="ue-iframe-panel">
        <iframe id="ue-frame-item" src="https://www.baidu.com" frameborder="0"></iframe>
    </div>
</template>

<script lang="ts">
import { mapState } from "vuex";
// import Prism from 'prismjs';
// import 'prismjs/themes/prism-tomorrow.css'
export default {
    name: "IframePanel",
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

#ue-iframe-panel {
    position: fixed;
    margin: auto;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    width: 600px;
    height: 400px;
    background: red;

    iframe {
        width: 100%;
        height: 100%;
    }
}

</style>
