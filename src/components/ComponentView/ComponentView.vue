<!--
 * @description: 头部组件
 * @Author: Gouxinyu
 * @Date: 2020-08-02 22:15:19
--> 
<template>
    <div id="ue-component-view">
         <header>
            <search-box></search-box>
        </header>
        <header-box></header-box>
        <component-list></component-list>
    </div>
</template>

<script lang="ts">
import HeaderBox from "../HeaderBox/HeaderBox.vue";
import SearchBox from "../SearchBox/SearchBox.vue";
import ComponentList from "../ComponentList/ComponentList.vue";

export default {
    name: "ComponentView",
    data() {
        return {
            message: "ue",
        };
    },
    components: {
        HeaderBox,
        SearchBox,
        ComponentList
    }
};
</script>

<style scoped lang="less">

#ue-component-view {
    height: 700px;
    header {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        margin-top: 60px;
    }
}

</style>
