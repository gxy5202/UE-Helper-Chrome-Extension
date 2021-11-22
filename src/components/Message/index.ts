/*
 * @description: 
 * @Author: Gouxinyu
 * @Date: 2020-09-06 06:59:05
 */
import Vue from 'vue';
import Message from "./Message.vue";

Vue.prototype.$Message = function (options) {
    if (options === undefined || options === null) {
        options = {
            content: ""
        }
    } else if (typeof options === 'string' || typeof options === 'number') {
        options = {
            content: options
        }
    }
    const message = Vue.extend(Message);
    const component = new message({
        data: options
    }).$mount()

    const ueHelperBox = document.getElementById('ue-helper');
    ueHelperBox.appendChild(component.$el)
    Vue.nextTick(() => {
        component.visible = true
    })
}
Message.install = function (Vue) {
    Vue.component(Message.name, Message);
}
export default Message;