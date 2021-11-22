/*
 * @description: 方法存放
 * @Author: Gouxinyu
 * @Date: 2020-08-07 22:23:57
 */

interface methodsObj {
    getComponentList: Function, // 获取组件列表
    [propName: string]: any
}

const methods: methodsObj = {
    getComponentList<T>(originList: T[], chromeList: Object = []): T[] {
        const nodeList = [];
        // 遍历组件列表, 赋值相关属性
        originList.forEach((v: any) => {
            const { pluginType } = v.config; // 组件类别
            const { name } = v.config; // 组件名称
            const { display } = v.config; // 组件是否显示
            const { isLock } = v.config; // 组件是否锁定

            if (chromeList[pluginType]) {
                const currentComponent = chromeList[pluginType];

                const item = {
                    // name: list[pluginType].name + num,
                    name,
                    pluginName: currentComponent.name,
                    pluginType,
                    id: v.id,
                    fakeId: currentComponent.fakeId,
                    skinId: currentComponent.skinId,
                    type: currentComponent.type,
                    isEcharts: currentComponent.isEcharts,
                    codePosition: currentComponent.codePosition,
                    display,
                    isLock,
                    searchShow: true,
                    icon: currentComponent.icon,
                    isSelected: currentComponent.isSelected
                };

                nodeList.unshift(item);
            }
        })

        return nodeList;
    }
}

export default methods;