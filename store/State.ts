/*
 * @description: 全局状态管理
 * @Author: Gouxinyu
 * @Date: 2020-08-03 23:27:27
 */

interface stateObj {
    isInit: boolean, // 是否已经加载
    designerService: Object, // UE接口对象
    ueStatus: string, // UE设计器还是运行器,
    currentProject: string, // 当前工程名称
    currentPage: string, // 当前页面名称
    componentsNum: number, // 画布组件数
    componentList: Object, // 画布区组件列表
    [propName: string]: any
}

const state: stateObj = {
    isInit: false,
    designerService: null,
    ueStatus: '设计器',
    currentProject: 'default',
    currentPage: 'default',
    componentsNum: 0,
    // 当前选中组件id
    selectUeComponent: null,
    // 页面显示状态
    pageShowStatus: {
        menu: false,
        codePanel: false,
        language: false,
        about: false
    },
    currentComponent: 'ComponentView',
    // 测试用，正式环境默认为空数组
    componentList: [
        {
            "name": "下拉列表",
            "fakeId": "fake-id-for-preview",
            "skinId": "",
            "type": "web交互",
            "isEcharts": false,
            "codePosition": "inside",
            "isLock": false,
            "searchShow": true,
            'pluginName': 'search',
            "id": "a123123",
            "icon": "uer-component-LineGraph"
        },
        {
            "name": "下拉列表",
            "fakeId": "fake-id-for-preview",
            "skinId": "",
            "type": "web交互",
            "isEcharts": false,
            "codePosition": null,
            "isLock": false,
            "searchShow": true,
            'pluginName': 'search',
            "id": "a123",
            "icon": "uer-component-LineGraph"
        },
        {
            "name": "下拉列表",
            "fakeId": "fake-id-for-preview",
            "skinId": "",
            "type": "web交互",
            "isEcharts": false,
            "codePosition": "inside",
            "isLock": false,
            "searchShow": true,
            'pluginName': 'search',
            "id": "a1",
            "icon": "uer-component-LineGraph"
        },
        {
            "name": "下拉列表",
            "fakeId": "fake-id-for-preview",
            "skinId": "",
            "type": "web交互",
            "isEcharts": false,
            "codePosition": "inside",
            "isLock": false,
            "searchShow": true,
            'pluginName': 'search',
            "id": "a2",
            "icon": "uer-component-LineGraph"
        },
        {
            "name": "下拉列表",
            "fakeId": "fake-id-for-preview",
            "skinId": "",
            "type": "web交互",
            "isEcharts": false,
            "codePosition": "inside",
            "isLock": false,
            "searchShow": true,
            'pluginName': 'search',
            "id": "a3",
            "icon": "uer-component-LineGraph"
        },
        {
            "name": "下拉列表",
            "fakeId": "fake-id-for-preview",
            "skinId": "",
            "type": "web交互",
            "isEcharts": false,
            "codePosition": "inside",
            "isLock": false,
            "searchShow": true,
            'pluginName': 'search',
            "id": "a4",
            "icon": "uer-component-LineGraph"
        },
        {
            "name": "下拉列表",
            "fakeId": "fake-id-for-preview",
            "skinId": "",
            "type": "web交互",
            "isEcharts": false,
            "codePosition": "inside",
            "isLock": false,
            "searchShow": true,
            'pluginName': 'search',
            "id": "a5",
            "icon": "uer-component-LineGraph"
        },
        {
            "name": "下拉列表",
            "fakeId": "fake-id-for-preview",
            "skinId": "",
            "type": "web交互",
            "isEcharts": false,
            "codePosition": "inside",
            "isLock": false,
            "searchShow": true,
            'pluginName': 'search',
            "id": "a6",
            "icon": "uer-component-LineGraph"
        },
        {
            "name": "下拉列表",
            "fakeId": "fake-id-for-preview",
            "skinId": "",
            "type": "web交互",
            "isEcharts": false,
            "codePosition": "inside",
            "isLock": false,
            "searchShow": true,
            'pluginName': 'search',
            "id": "a7",
            "icon": "uer-component-LineGraph"
        },
        {
            "name": "下拉列表",
            "fakeId": "fake-id-for-preview",
            "skinId": "",
            "type": "web交互",
            "isEcharts": false,
            "codePosition": "inside",
            "isLock": false,
            "searchShow": true,
            'pluginName': 'search',
            "id": "a8",
            "icon": "uer-component-LineGraph"
        },
        {
            "name": "下拉列表",
            "fakeId": "fake-id-for-preview",
            "skinId": "",
            "type": "web交互",
            "isEcharts": false,
            "codePosition": "inside",
            "isLock": false,
            "searchShow": true,
            'pluginName': 'search',
            "id": "a9",
            "icon": "uer-component-LineGraph"
        },
        {
            "name": "下拉列表",
            "fakeId": "fake-id-for-preview",
            "skinId": "",
            "type": "web交互",
            "isEcharts": false,
            "codePosition": "inside",
            "isLock": false,
            "searchShow": true,
            'pluginName': 'search',
            "id": "a10",
            "icon": "uer-component-LineGraph"
        },
        {
            "name": "下拉列表",
            "fakeId": "fake-id-for-preview",
            "skinId": "",
            "type": "web交互",
            "isEcharts": false,
            "codePosition": "inside",
            "isLock": false,
            "searchShow": true,
            'pluginName': 'search',
            "id": "a11",
            "icon": "uer-component-LineGraph"
        },
        {
            "name": "下拉列表",
            "fakeId": "fake-id-for-preview",
            "skinId": "",
            "type": "web交互",
            "isEcharts": false,
            "codePosition": "inside",
            "isLock": false,
            "searchShow": true,
            'pluginName': 'search',
            "id": "a12",
            "icon": "uer-component-LineGraph"
        },
    ],
    // 菜单列表
    menuList: [
        {
            id: 'editHelper',
            name: '画布助手',
            component: 'ComponentView',
            icon: 'uer uer-code'
        },
        {
            id: 'code',
            name: '插件库',
            component: 'CodeStore',
            icon: 'uer uer-code'
        },
        {
            id: 'code',
            name: '组件分类',
            component: 'ComponentView',
            icon: 'uer uer-code'
        },
        {
            id: 'code',
            name: '切换语言',
            component: 'ComponentView',
            icon: 'uer uer-code'
        },
        {
            id: 'code',
            name: '插件设置',
            component: 'ComponentView',
            icon: 'uer uer-code'
        },
        {
            id: 'code',
            name: '更多功能',
            component: 'ComponentView',
            icon: 'uer uer-code'
        },
        {
            id: 'code',
            name: '关于作者',
            component: 'ComponentView',
            icon: 'uer uer-code'
        }
    ],
    // 插件库列表
    codeStoreList: [
        {
            name: '图表类',
            icon: "uer-component-LineGraph",
            path: ''
        },
        {
            name: '轮播类',
            icon: 'uer-component-picswiper',
            path: ''
        },
        {
            name: '文字类',
            icon: 'uer-component-TextWidget',
            path: 'uer-component-TextWidget'
        },
        {
            name: '导航类',
            icon: '',
            path: ''
        },
        {
            name: '文字类',
            icon: '',
            path: ''
        },
        {
            name: '导航类',
            icon: '',
            path: ''
        },
        {
            name: '文字类',
            icon: '',
            path: ''
        },
        {
            name: '导航类',
            icon: '',
            path: ''
        },
    ]
}

export default state;