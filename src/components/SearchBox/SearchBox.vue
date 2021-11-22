<!--
 * @description: 
 * @Author: Gouxinyu
 * @Date: 2020-08-02 22:15:19
--> 
<template>
    <div id="ue-search-box">
        <input name="search" type="text" placeholder="search" v-model="searchValue" @input="search" />
    </div>
</template>

<script lang="ts">
import { mapState } from "vuex";
import { debounce } from "../../../utils/utils";
export default {
    name: "SearchBox",
    data() {
        return {
            searchValue: "",
            timer: null,
        };
    },
    computed: {
        ...mapState({}),
    },
    methods: {
        /**
         * @description: 搜索
         * @Author: Gouxinyu
         * @Date: 2020-08-08 00:21:31
         */
        search() {
            const val = this.searchValue;
            debounce(
                () => {
                    this.$store.commit("searchList", val);
                },
                400,
                this.timer
            );
        },
        /**
         * @description: 节流方法
         * @Author: Gouxinyu
         * @param {function} func
         * @param {number} delay
         * @Date: 2020-08-08 00:20:38
         */
    },
};
</script>

<style scoped lang="less">
.flex-center {
    display: flex;
    justify-content: center;
    align-items: center;
}
#ue-search-box {
    border-radius: 20px;
    margin-bottom: 15px;
    input {
        border: 2px solid #4608e2;
        outline: none;
        border-radius: 30px;
        width: 446px;
        height: 50px;
        padding: 0 10px;
        box-sizing: border-box;
        box-shadow: rgba(0, 0, 0, 0.1) 0 10px 15px 0;
    }
}
</style>
