/*
 * @description: 全局mutations， 修改state的方法
 * @Author: Gouxinyu
 * @Date: 2020-08-03 23:26:28
 */
import COMPONENT_LIST from "../src/inject/componentList";
import methods from './methods';

interface mutationObj {
    changeInitStatus: Function, // 改变插件加载状态
    setDesignerService: Function, // UE接口对象
    [propName: string]: any
}

const mutations: mutationObj = {
    /**
     * @description: 改变插件加载状态
     * @Author: Gouxinyu
     * @param {boolean} data 
     * @Date: 2020-08-03 23:32:16
     */
    changeInitStatus(state, data) {
        state.isInit = data;
    },
    setDesignerService(state, data) {
        state.designerService = data;
    },
    /**
     * @description: 获取当前UE信息
     * @Author: Gouxinyu
     * @param {type} 
     * @Date: 2020-08-05 22:38:05
     */
    changeUeStatus(state, data: string = "default") {
        state.ueStatus = data;

        const designerService = state.designerService;
        if (designerService) {
            // 获取当前页面名
            state.currentPage = designerService.getCurrentPage
                && designerService.getCurrentPage()
                && designerService.getCurrentPage().name;
            // 获取当前工程名
            state.currentProject = designerService.getCurrentProjectInfo
                && (designerService.getCurrentProjectInfo().name || designerService.getCurrentProjectInfo().projectName);

            // 生成组件列表
            if (designerService.getCurrentPageComponents) {
                const componentList = designerService.getCurrentPageComponents();
                // 获取当前组件数量
                state.componentsNum = componentList.length;
                // 生成组件列表
                state.componentList = methods.getComponentList(componentList, COMPONENT_LIST);
            }
        }
    },
    /**
     * @description: 刷新组件列表
     * @Author: Gouxinyu
     * @param {type} 
     * @Date: 2020-08-12 00:29:54
     */
    refreshComponentList(state) {
        const designerService = state.designerService;
        // 生成组件列表
        if (designerService.getCurrentPageComponents) {
            const componentList = designerService.getCurrentPageComponents();
            // 获取当前组件数量
            state.componentsNum = componentList.length;
            // 生成组件列表
            state.componentList = methods.getComponentList(componentList, COMPONENT_LIST);
        }
    },
    /**
     * @description: 搜索列表
     * @Author: Gouxinyu
     * @param {type} 
     * @Date: 2020-08-07 23:53:40
     */
    searchList(state, data: string = "") {
        state.componentList = state.componentList.map((v) => {
            const status = {
                notInName: !v.name.includes(data) && !data.includes(v.name),
                notInId: !v.id.includes(data) && !data.includes(v.id),
                notInPluginName: !v.pluginName.includes(data) && !data.includes(v.pluginName),
            }

            if (status.notInName && status.notInId && status.notInPluginName) {
                v.searchShow = false;
            } else {
                v.searchShow = true;
            }

            return v;
        })
    },
    // 改变选中状态
    changeSelectStatus(state, data: any) {
        state.componentList = state.componentList.map((v) => {
            if (v.id === data.id) {
                v.isSelected = data.isSelected;
            }
            return v;
        })
    },
    // 修改页面显示状态
    changePageShowStatus(state, data: any) {
        state.pageShowStatus[data.type] = data.status;
    },
    // 切换组件
    changeCurrentComponent(state, data: string) {
        state.currentComponent = data;
    },
    // 修改当前选中组件
    changeSelectUeComponent(state, id: string) {
        state.selectUeComponent = id;
    }
}

export default mutations;