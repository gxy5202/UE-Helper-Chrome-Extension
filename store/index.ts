/*
 * @description: 
 * @Author: Gouxinyu
 * @Date: 2020-08-02 23:04:30
 */
import Vue from 'vue';
import Vuex from 'vuex';
import state from './State';
import mutations from './Mutations';
import actions from './Actions';
import getters from './Getters';

Vue.use(Vuex);

const store = new Vuex.Store({
    state,
    mutations,
    actions,
    getters
})

export default store;