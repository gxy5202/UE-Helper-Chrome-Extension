/*
 * @description: 
 * @Author: Gouxinyu
 * @Date: 2020-09-05 00:14:00
 */
/**
 * @description: 防抖
 * @Author: Gouxinyu
 * @param {type} 
 * @Date: 2020-09-05 00:42:22
 */
export const debounce = (func: Function, delay: number, timer: any) => {
    if (timer) {
        clearTimeout(timer);
    }

    timer = setTimeout(() => {
        func();
    }, delay);
}

/**
 * @description: 打开代码注入窗口统一
 * @Author: Gouxinyu
 * @param {*}
 * @Date: 2020-11-06 14:46:57
 */
export const openCodeWindow = {
    time: 0,
    // 打开模型设置框
    openModule: function (id: string) {
        this.time++;
        const openDom = $(`#_${id} .comEditbarSpanSetting.comEditbarshow`);
        if (openDom.length > 0) {
            this.time = 0;
            openDom.trigger('click');
            this.openInsideCodeWindow();
        } else if (this.time < 5) {
            setTimeout(this.openModule, 500);
        }
    },
    // 打开代码注入窗口
    openInsideCodeWindow() {
        this.time++;
        setTimeout(() => {
            if ($(".code").length > 0) {
                this.time = 0;
                const codeDom = $(".code span");
                codeDom.length > 0
                    ? codeDom.trigger('click')
                    : $(".code .uefont-code").trigger('click');
                $("#code-window-loading").hide();
            } else if (this.time < 5) {
                this.openInsideCodeWindow();
            } else {
                $("#code-window-loading").hide();
            }
        }, 500);
    },
    // 打开高级设置中的代码注入
    openOutsideCodeWindow: function () {
        this.time++;
        setTimeout(() => {
            if ($(".chartList #codeEditor").length > 0) {
                this.time = 0;
                $(".chartList #codeEditor").trigger('click');
                $("#code-window-loading").hide();
            } else if (this.time < 5) {
                this.openOutsideCodeWindow();
            } else {
                $("#code-window-loading").hide();
            }
        }, 500);
    },
    // 打开高级设置
    openAdavance: function () {
        this.time++;
        const openDom = $(`.moduleCtr .module-nav>li:eq(2)`);
        if (openDom.length > 0) {
            this.time = 0;
            openDom.trigger('click');
            this.openOutsideCodeWindow();
        } else if (this.time < 5) {
            setTimeout(this.openAdavance, 500);
        }
    },
    // 打开代码注入窗口
    openComponentCodeWin: function (currentItem: any) {
        const id = currentItem.id;
        const codePosition = currentItem.codePosition;
        const element = $(`#${id}`);

        //先选中组件
        element.trigger("click");

        if (codePosition === "inside") {
            this.openModule(id);
        } else {
            this.openAdavance();
        }
    },
    // 
    start: function (type: string, currentItem?: any) {
        if (
            $("#code-editor-wrapper").length > 0 ||
            $("#newModuleCtrlDialog").length > 0
        ) {
            new window.tinyWidget.Message({
                content: "请先关闭当前窗口",
                type: "error",
                mode: "single",
            }).show();
            return;
        }

        // 添加蒙版
        if (!$("#code-window-loading").length) {
            $("body").append(
                '<div id="code-window-loading" style="display:block;position:absolute;margin:auto; left:0;right:0;top:0;bottom:0;width:100%;height: 100%;background: rgba(255,255,255, 0.9);z-index:99998"></div>'
            );
        } else {
            $("#code-window-loading").show();
        }

        if (type === 'page') {
            window.ievent.itrigger('click.canvas.blank');
            this.openAdavance();
        } else {
            this.openComponentCodeWin(currentItem);
        }
    }
}