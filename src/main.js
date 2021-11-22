/*
 * @description: 
 * @Author: Gouxinyu
 * @Date: 2020-05-14 14:34:41
 */
import $ from 'jquery';
import Vue from 'vue';
import Uebox from './inject/Uebox.vue';
import store from '../store';
import Message from './components/Message/index';
// import "../assets/font/iconfont.css";

Vue.config.productionTip = false;

window.jquery = window.$ = $;

Vue.use(Message);
window.app = new Vue({
    el: '#ue-helper-box',
    store,
    render: h => h(Uebox)
});