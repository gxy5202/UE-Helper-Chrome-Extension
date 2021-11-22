/*
 * @description: 注入页面代码 
 * @Author: Gouxinyu
 * @Date: 2020-08-02 20:53:49
 */

import $ from 'jquery';
import Vue from 'vue';
import store from '../../store';
import Uebox from './Uebox.vue';
import '../../assets/font/iconfont.css';
import Message from '../components/Message/index';

interface Window {
  designerService: Object,
  store: Object,
  utils: Object
}

declare var window: Window & typeof globalThis;

; (function (store) {
  try {
    if ($('#ue-hepler').length > 0) { return; }
    Vue.use(Message);

    new Vue({
      el: '#ue-helper-box',
      store,
      render: h => h(Uebox)
    });

    window.addEventListener(
      "message",
      function (e) {
        // 如果插件已经生成则不再执行
        if (store.state.isInit) { return; }

        // 如果不是ue插件触发，则再次执行
        if (e.data.ueInjectPost) { return; }

        if (!e.data.ueExtensionPost) {
          window.postMessage({
            postAgain: true,
            ueInjectPost: true
          }, '*')

          return;
        }

        store.commit('changeInitStatus', true);

        window.designerService
          ? store.commit('setDesignerService', window.designerService)
          : $.noop();


        console.log('store', store);
      },
      false
    );
  } catch (e) {
    console.warn(e);
  }

})(store);