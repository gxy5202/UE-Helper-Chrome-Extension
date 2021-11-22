<!--
 * @description: 
 * @Author: Gouxinyu
 * @Date: 2020-09-06 06:22:55
-->
<template>
    <div class="ue-message-box" :class="type" v-if="visible">
        <div class="ue-message-show-box">
            <i :class="['uer', `uer-${type}-fill`, type]"></i>
            <span class="ue-message-content">{{content}}</span>
        </div>
    </div>
</template>

<script>
export default {
    name: "Message",
    data() {
        return {
            content: "",
            time: 3000,
            visible: false,
            type: "success", //‘success‘,‘warning‘,‘error‘
        };
    },
    mounted() {
        this.close();
    },
    methods: {
        close() {
            window.setTimeout(() => {
                this.visible = false;
            }, this.time);
        },
    },
};
</script>

<style lang="less" scoped>
.flex-center {
    display: inline-flex;
    justify-content: center;
    align-items: center;
}
.ue-message-box {
    position: absolute;
    .flex-center();
    height: 40px;
    top: 20px;
    margin: auto;
    left: 0;
    right: 0;

    .ue-message-show-box {
        .flex-center();
        padding: 0 10px;
        min-width: 150px;
        max-width: 350px;
        height: 100%;
        background: #fff;
        border-radius: 5px;
        box-shadow: rgba(0, 0, 0, 0.05) 0 10px 15px;
        animation: move 0.5s ease-in-out;

        .uer {
            font-size: 20px;
        }

        .ue-message-content {
            font-weight: bold;
            margin-left: 5px;
        }
    }
}

@keyframes move {
    0% {
        transform: translateY(-50px);
    }
    100% {
        transform: translateY(0);
    }
}
.success {
    color: #31c17c;
}
</style>