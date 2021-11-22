
interface componentInfo {
    [propName: string]: {
        name: string,
        fakeId: string,
        skinId: string,
        type: string,
        isEcharts: boolean,
        codePosition: string,
        icon: string,
        isSelected: boolean
    }
}

const COMPONENT_LIST: componentInfo = {
    "cartesianHeatMap": {
        "name": "笛卡尔坐标系热力图",
        "fakeId": "fake-id-for-preview",
        "skinId": "",
        "type": "柱状/直方",
        "isEcharts": true,
        "codePosition": "inside",
        "icon": "uer-component-cartesianHeatMap",
        "isSelected": false
    },
    "select": {
        "name": "下拉列表",
        "fakeId": "fake-id-for-preview",
        "skinId": "",
        "type": "web交互",
        "isEcharts": false,
        "codePosition": "inside",
        "icon": "uer-component-Drop-downListBox",
        "isSelected": false
    },
    "query": {
        "name": "查询组件",
        "fakeId": "",
        "skinId": "",
        "type": "web交互",
        "isEcharts": false,
        "codePosition": null,
        "icon": "uer-component-QueryWidget",
        "isSelected": false
    },
    "textEdit": {
        "name": "文本编辑",
        "fakeId": "",
        "skinId": "",
        "type": "web交互",
        "isEcharts": false,
        "codePosition": "inside",
        "icon": "uer-component-TextEditor",
        "isSelected": false
    },
    "checkbox": {
        "name": "复选框",
        "fakeId": "fake-id-for-preview",
        "skinId": "",
        "type": "web交互",
        "isEcharts": false,
        "codePosition": "inside",
        "icon": "uer-component-CheckBox",
        "isSelected": false
    },
    "text": {
        "name": "文字控件",
        "fakeId": "",
        "skinId": "",
        "type": "web交互",
        "isEcharts": false,
        "codePosition": "inside",
        "icon": "uer-component-TextWidget",
        "isSelected": false
    },
    "radio": {
        "name": "单选组",
        "fakeId": "fake-id-for-preview",
        "skinId": "",
        "type": "web交互",
        "isEcharts": false,
        "codePosition": "inside",
        "icon": "uer-component-RadioGroup",
        "isSelected": false
    },
    "switch": {
        "name": "开关",
        "fakeId": "fake-id-for-preview",
        "skinId": "",
        "type": "web交互",
        "isEcharts": false,
        "codePosition": null,
        "icon": "uer-component-Switch",
        "isSelected": false
    },
    "button": {
        "name": "按钮组件",
        "fakeId": "",
        "skinId": "",
        "type": "web交互",
        "isEcharts": false,
        "codePosition": null,
        "icon": "uer-component-ButtonWidget",
        "isSelected": false
    },
    "textLink": {
        "name": "超链接",
        "fakeId": "",
        "skinId": "",
        "type": "web交互",
        "isEcharts": false,
        "codePosition": null,
        "icon": "uer-component-Hyperlink",
        "isSelected": false
    },
    "tree": {
        "name": "层级树",
        "fakeId": "fake-id-for-preview",
        "skinId": "",
        "type": "web交互",
        "isEcharts": false,
        "codePosition": "inside",
        "icon": "uer-component-Level_Tree",
        "isSelected": false
    },
    "searchContainer": {
        "name": "查询容器",
        "fakeId": "",
        "skinId": "",
        "type": "web交互",
        "isEcharts": false,
        "codePosition": "outside",
        "icon": "uer-component-QueryContainer",
        "isSelected": false
    },
    "rangeinput": {
        "name": "范围输入",
        "fakeId": "",
        "skinId": "",
        "type": "web交互",
        "isEcharts": false,
        "codePosition": null,
        "icon": "uer-component-RangeInputBox",
        "isSelected": false
    },
    "breadCrumb": {
        "name": "面包屑导航",
        "fakeId": "fake-id-for-preview",
        "skinId": "",
        "type": "web交互",
        "isEcharts": false,
        "codePosition": "inside",
        "icon": "uer-component-TextWidget",
        "isSelected": false
    },
    "clock": {
        "name": "时钟控件",
        "fakeId": "",
        "skinId": "",
        "type": "web交互",
        "isEcharts": false,
        "codePosition": null,
        "icon": "uer-component-clock",
        "isSelected": false
    },
    "enewDate": {
        "name": "时间控件",
        "fakeId": "",
        "skinId": "",
        "type": "web交互",
        "isEcharts": false,
        "codePosition": null,
        "icon": "uer-component-enewDate",
        "isSelected": false
    },
    "mytextarea": {
        "name": "多行文本编辑",
        "fakeId": "",
        "skinId": "",
        "type": "web交互",
        "isEcharts": false,
        "codePosition": "inside",
        "icon": "uer-component-mytextarea",
        "isSelected": false
    },
    "mytextarearead": {
        "name": "文本段落",
        "fakeId": "",
        "skinId": "",
        "type": "web交互",
        "isEcharts": false,
        "codePosition": "inside",
        "icon": "uer-component-mytextarearead",
        "isSelected": false
    },
    "newTree": {
        "name": "递归树",
        "fakeId": "id",
        "skinId": "",
        "type": "web交互",
        "isEcharts": false,
        "codePosition": "inside",
        "icon": "uer-component-newTree",
        "isSelected": false
    },
    "timeAxis": {
        "name": "时间轴",
        "fakeId": "id",
        "skinId": "",
        "type": "web交互",
        "isEcharts": false,
        "codePosition": "inside",
        "icon": "uer-component-timeAxis",
        "isSelected": false
    },
    "timeInterval": {
        "name": "相对时间",
        "fakeId": "",
        "skinId": "",
        "type": "web交互",
        "isEcharts": false,
        "codePosition": null,
        "icon": "uer-component-timeInterval",
        "isSelected": false
    },
    "tabs": {
        "name": "tab容器",
        "fakeId": "",
        "skinId": "",
        "type": "功能",
        "isEcharts": false,
        "codePosition": "outside",
        "icon": "uer-component-TabContainer",
        "isSelected": false
    },
    "container": {
        "name": "容器组件",
        "fakeId": "",
        "skinId": "",
        "type": "功能",
        "isEcharts": false,
        "codePosition": "outside",
        "icon": "uer-component-ContainerWidget",
        "isSelected": false
    },
    "image": {
        "name": "图片",
        "fakeId": "",
        "skinId": "",
        "type": "功能",
        "isEcharts": false,
        "codePosition": null,
        "icon": "uer-component-Image",
        "isSelected": false
    },
    "filmContainer": {
        "name": "胶片容器",
        "fakeId": "",
        "skinId": "",
        "type": "功能",
        "isEcharts": false,
        "codePosition": "outside",
        "icon": "uer-component-FilmContainer",
        "isSelected": false
    },
    "eIframe": {
        "name": "内部框架",
        "fakeId": "",
        "skinId": "",
        "type": "功能",
        "isEcharts": false,
        "codePosition": null,
        "icon": "uer-component-InternalFrame",
        "isSelected": false
    },
    "datasource": {
        "name": "数据源组件",
        "fakeId": "",
        "skinId": "",
        "type": "功能",
        "isEcharts": false,
        "codePosition": "inside",
        "icon": "uer-component-datasource",
        "isSelected": false
    },
    "downLoader": {
        "name": "下载控件",
        "fakeId": "",
        "skinId": "",
        "type": "功能",
        "isEcharts": false,
        "codePosition": null,
        "icon": "xiazaizujian",
        "isSelected": false
    },
    "imagematrix": {
        "name": "图像矩阵",
        "fakeId": "",
        "skinId": "",
        "type": "功能",
        "isEcharts": false,
        "codePosition": null,
        "icon": "uer-component-TextWidget",
        "isSelected": false
    },
    "jeDate": {
        "name": "日历组件",
        "fakeId": "fake-id-for-preview",
        "skinId": "",
        "type": "功能",
        "isEcharts": false,
        "codePosition": "inside",
        "icon": "uer-component-calendar",
        "isSelected": false
    },
    "navContainer": {
        "name": "导航容器",
        "fakeId": "",
        "skinId": "",
        "type": "功能",
        "isEcharts": false,
        "codePosition": null,
        "icon": "uer-component-TextWidget",
        "isSelected": false
    },
    "panorama": {
        "name": "全景图",
        "fakeId": "",
        "skinId": "",
        "type": "功能",
        "isEcharts": false,
        "codePosition": null,
        "icon": "uer-component-panorama",
        "isSelected": false
    },
    "picswiper": {
        "name": "图片轮播器",
        "fakeId": "",
        "skinId": "",
        "type": "功能",
        "isEcharts": false,
        "codePosition": null,
        "icon": "uer-component-picswiper",
        "isSelected": false
    },
    "swiper": {
        "name": "轮播容器",
        "fakeId": "",
        "skinId": "",
        "type": "功能",
        "isEcharts": false,
        "codePosition": null,
        "icon": "uer-component-swiper",
        "isSelected": false
    },
    "tipsContainer": {
        "name": "tips容器",
        "fakeId": "",
        "skinId": "",
        "type": "功能",
        "isEcharts": false,
        "codePosition": "outside",
        "icon": "uer-component-tipsContainer",
        "isSelected": false
    },
    "videoPlayer": {
        "name": "视频组件",
        "fakeId": "",
        "skinId": "",
        "type": "功能",
        "isEcharts": false,
        "codePosition": null,
        "icon": "uer-component-videoPlayer",
        "isSelected": false
    },
    "videoSource": {
        "name": "实时视频组件",
        "fakeId": "",
        "skinId": "",
        "type": "功能",
        "isEcharts": false,
        "codePosition": null,
        "icon": "zujian-shipin",
        "isSelected": false
    },
    "swiper3d": {
        "name": "3d轮播",
        "fakeId": "",
        "skinId": "",
        "type": "功能",
        "isEcharts": false,
        "codePosition": null,
        "icon": "uer-component-TextWidget",
        "isSelected": false
    },
    "remoteContainer": {
        "name": "遥控器容器",
        "fakeId": "",
        "skinId": "",
        "type": "功能",
        "isEcharts": false,
        "codePosition": "outside",
        "icon": "uer-component-TextWidget",
        "isSelected": false
    },
    "rect": {
        "name": "矩形",
        "fakeId": "",
        "skinId": "",
        "type": "样式",
        "isEcharts": false,
        "codePosition": null,
        "icon": "uer-component-Rectangle",
        "isSelected": false
    },
    "baseLine": {
        "name": "线条",
        "fakeId": "",
        "skinId": "",
        "type": "样式",
        "isEcharts": false,
        "codePosition": null,
        "icon": "uer-component-StraightLine",
        "isSelected": false
    },
    "bezier": {
        "name": "贝塞尔曲线",
        "fakeId": "",
        "skinId": "",
        "type": "样式",
        "isEcharts": false,
        "codePosition": null,
        "icon": "uer-component-bezier",
        "isSelected": false
    },
    "border": {
        "name": "边框",
        "fakeId": "",
        "skinId": "",
        "type": "样式",
        "isEcharts": false,
        "codePosition": null,
        "icon": "uer-component-border",
        "isSelected": false
    },
    "brush": {
        "name": "画笔",
        "fakeId": "",
        "skinId": "",
        "type": "样式",
        "isEcharts": false,
        "codePosition": null,
        "icon": "uer-component-TextWidget",
        "isSelected": false
    },
    "decorate": {
        "name": "装饰",
        "fakeId": "",
        "skinId": "pluginPreview",
        "type": "样式",
        "isEcharts": false,
        "codePosition": null,
        "icon": "uer-component-decorate",
        "isSelected": false
    },
    "vectorIcon": {
        "name": "矢量图标组件",
        "fakeId": "",
        "skinId": "",
        "type": "样式",
        "isEcharts": false,
        "codePosition": null,
        "icon": "uer-component-vectorIcon",
        "isSelected": false
    },
    "weather": {
        "name": "天气",
        "fakeId": "fake-id-for-preview",
        "skinId": "",
        "type": "样式",
        "isEcharts": false,
        "codePosition": "inside",
        "icon": "tianqi",
        "isSelected": false
    },
    "webglContainer": {
        "name": "webgl容器",
        "fakeId": "",
        "skinId": "",
        "type": "样式",
        "isEcharts": false,
        "codePosition": null,
        "icon": "uer-component-TextWidget",
        "isSelected": false
    },
    "webglCtn": {
        "name": "3D容器",
        "fakeId": "",
        "skinId": "",
        "type": "样式",
        "isEcharts": false,
        "codePosition": null,
        "icon": "uer-component-TextWidget",
        "isSelected": false
    },
    "strip": {
        "name": "条形图",
        "fakeId": "fake-id-for-preview",
        "skinId": "",
        "type": "柱状/直方",
        "isEcharts": true,
        "codePosition": "inside",
        "icon": "uer-component-BarChart",
        "isSelected": false
    },
    "mixed": {
        "name": "混合图",
        "fakeId": "fake-id-for-preview",
        "skinId": "",
        "type": "柱状/直方",
        "isEcharts": true,
        "codePosition": "inside",
        "icon": "uer-component-CombinationChart",
        "isSelected": false
    },
    "bar": {
        "name": "柱状图",
        "fakeId": "fake-id-for-preview",
        "skinId": "",
        "type": "柱状/直方",
        "isEcharts": true,
        "codePosition": "inside",
        "icon": "uer-component-ColumnChart",
        "isSelected": false
    },
    "barHeap": {
        "name": "柱状堆积图",
        "fakeId": "fake-id-for-preview",
        "skinId": "",
        "type": "柱状/直方",
        "isEcharts": true,
        "codePosition": "inside",
        "icon": "uer-component-ColumnStackedChart",
        "isSelected": false
    },
    "stripHeap": {
        "name": "条形堆积图",
        "fakeId": "fake-id-for-preview",
        "skinId": "",
        "type": "柱状/直方",
        "isEcharts": true,
        "codePosition": "inside",
        "icon": "uer-component-BarStackedChart",
        "isSelected": false
    },
    "fall": {
        "name": "瀑布图",
        "fakeId": "fake-id-for-preview",
        "skinId": "",
        "type": "柱状/直方",
        "isEcharts": true,
        "codePosition": "inside",
        "icon": "uer-component-WaterfallChart",
        "isSelected": false
    },
    "playBar": {
        "name": "时序柱状图",
        "fakeId": "fake-id-for-preview",
        "skinId": "",
        "type": "柱状/直方",
        "isEcharts": true,
        "codePosition": "inside",
        "icon": "lujing",
        "isSelected": false
    },
    "multidimensionBar": {
        "name": "多维条形图",
        "fakeId": "fake-id-for-preview",
        "skinId": "",
        "type": "柱状/直方",
        "isEcharts": true,
        "codePosition": "inside",
        "icon": "uer-component-multidimensionBar",
        "isSelected": false
    },
    "barMountain": {
        "name": "山峰种柱状图",
        "fakeId": "fake-id-for-preview",
        "skinId": "",
        "type": "柱状/直方",
        "isEcharts": true,
        "codePosition": "inside",
        "icon": "uer-component-barMountain",
        "isSelected": false
    },
    "pictoGraphic": {
        "name": "象形柱状图",
        "fakeId": "fake-id-for-preview",
        "skinId": "",
        "type": "柱状/直方",
        "isEcharts": true,
        "codePosition": "inside",
        "icon": "uer-component-pictoGraphic",
        "isSelected": false
    },
    "ringPie": {
        "name": "环形柱状图",
        "fakeId": "fake-id-for-preview",
        "skinId": "",
        "type": "柱状/直方",
        "isEcharts": true,
        "codePosition": "inside",
        "icon": "uer-component-ringPie",
        "isSelected": false
    },
    "bothStrip": {
        "name": "双向条形图",
        "fakeId": "fake-id-for-preview",
        "skinId": "",
        "type": "柱状/直方",
        "isEcharts": true,
        "codePosition": "inside",
        "icon": "uer-component-bothStrip",
        "isSelected": false
    },
    "waterbubble2": {
        "name": "动态水球",
        "fakeId": "",
        "skinId": "",
        "type": "饼图/占比",
        "isEcharts": false,
        "codePosition": "inside",
        "icon": "uer-component-WaterBubble2",
        "isSelected": false
    },
    "funnel": {
        "name": "漏斗图",
        "fakeId": "fake-id-for-preview",
        "skinId": "",
        "type": "饼图/占比",
        "isEcharts": true,
        "codePosition": "inside",
        "icon": "uer-component-FunnelChart",
        "isSelected": false
    },
    "pie": {
        "name": "饼图",
        "fakeId": "fake-id-for-preview",
        "skinId": "",
        "type": "饼图/占比",
        "isEcharts": true,
        "codePosition": "inside",
        "icon": "uer-component-PieChart",
        "isSelected": false
    },
    "radar": {
        "name": "雷达图",
        "fakeId": "fake-id-for-preview",
        "skinId": "",
        "type": "饼图/占比",
        "isEcharts": true,
        "codePosition": "inside",
        "icon": "uer-component-RadarDiagram",
        "isSelected": false
    },
    "rose": {
        "name": "南丁格尔玫瑰图",
        "fakeId": "fake-id-for-preview",
        "skinId": "",
        "type": "饼图/占比",
        "isEcharts": true,
        "codePosition": "inside",
        "icon": "uer-component-RoseDiagram",
        "isSelected": false
    },
    "nestingPie": {
        "name": "嵌套饼图",
        "fakeId": "fake-id-for-preview",
        "skinId": "",
        "type": "饼图/占比",
        "isEcharts": true,
        "codePosition": "inside",
        "icon": "uer-component-NestedPieChart",
        "isSelected": false
    },
    "gauge": {
        "name": "仪表盘",
        "fakeId": "fake-id-for-preview",
        "skinId": "",
        "type": "饼图/占比",
        "isEcharts": true,
        "codePosition": null,
        "icon": "uer-component-GaugeChart",
        "isSelected": false
    },
    "ring": {
        "name": "环形图",
        "fakeId": "fake-id-for-preview",
        "skinId": "",
        "type": "饼图/占比",
        "isEcharts": true,
        "codePosition": "inside",
        "icon": "uer-component-TextWidget",
        "isSelected": false
    },
    "progressbar": {
        "name": "进度条",
        "fakeId": "",
        "skinId": "pluginPreview",
        "type": "饼图/占比",
        "isEcharts": false,
        "codePosition": null,
        "icon": "uer-component-ProgressBar",
        "isSelected": false
    },
    "waterbubble": {
        "name": "水球图",
        "fakeId": "",
        "skinId": "",
        "type": "饼图/占比",
        "isEcharts": false,
        "codePosition": null,
        "icon": "uer-component-WaterBubble",
        "isSelected": false
    },
    "nestingHierarchyPie": {
        "name": "嵌套层级饼图",
        "fakeId": "fake-id-for-preview",
        "skinId": "",
        "type": "饼图/占比",
        "isEcharts": true,
        "codePosition": "inside",
        "icon": "uer-component-TextWidget",
        "isSelected": false
    },
    "pieEffect": {
        "name": "动效饼图",
        "fakeId": "fake-id-for-preview",
        "skinId": "",
        "type": "饼图/占比",
        "isEcharts": false,
        "codePosition": "inside",
        "icon": "uer-component-TextWidget",
        "isSelected": false
    },
    "progressGroup": {
        "name": "进度条组",
        "fakeId": "fake-id-for-preview",
        "skinId": "pluginPreview",
        "type": "饼图/占比",
        "isEcharts": false,
        "codePosition": "inside",
        "icon": "zujian-jingdutiaozu",
        "isSelected": false
    },
    "polarRose": {
        "name": "极坐标玫瑰图",
        "fakeId": "fake-id-for-preview",
        "skinId": "",
        "type": "饼图/占比",
        "isEcharts": true,
        "codePosition": "inside",
        "icon": "meiguitu",
        "isSelected": false
    },
    "printButton": {
        "name": "打印按钮",
        "fakeId": "",
        "skinId": "",
        "type": "功能",
        "isEcharts": false,
        "codePosition": null,
        "icon": "print",
        "isSelected": false
    },
    "area": {
        "name": "面积图",
        "fakeId": "fake-id-for-preview",
        "skinId": "",
        "type": "折线/面积",
        "isEcharts": true,
        "codePosition": "inside",
        "icon": "uer-component-AreaGraph",
        "isSelected": false
    },
    "line": {
        "name": "折线图",
        "fakeId": "fake-id-for-preview",
        "skinId": "",
        "type": "折线/面积",
        "isEcharts": true,
        "codePosition": "inside",
        "icon": "uer-component-LineGraph",
        "isSelected": false
    },
    "lineHeap": {
        "name": "折线堆积图",
        "fakeId": "fake-id-for-preview",
        "skinId": "",
        "type": "折线/面积",
        "isEcharts": true,
        "codePosition": "inside",
        "icon": "uer-component-LineStackedChart",
        "isSelected": false
    },
    "areaHeap": {
        "name": "面积堆积图",
        "fakeId": "fake-id-for-preview",
        "skinId": "",
        "type": "折线/面积",
        "isEcharts": true,
        "codePosition": "inside",
        "icon": "uer-component-AreaStackedChart",
        "isSelected": false
    },
    "wordCloud": {
        "name": "字符云",
        "fakeId": "fake-id-for-preview",
        "skinId": "",
        "type": "表格/数字",
        "isEcharts": true,
        "codePosition": "inside",
        "icon": "uer-component-CharacterCloud",
        "isSelected": false
    },
    "crossTable": {
        "name": "交叉表",
        "fakeId": "fake-id-for-preview",
        "skinId": "",
        "type": "折线/面积",
        "isEcharts": false,
        "codePosition": "inside",
        "icon": "uer-component-crossTable",
        "isSelected": false
    },
    "detailTable": {
        "name": "动态看板",
        "fakeId": "id",
        "skinId": "",
        "type": "折线/面积",
        "isEcharts": false,
        "codePosition": "inside",
        "icon": "uer-component-RegularTable",
        "isSelected": false
    },
    "dynamicWordCloud": {
        "name": "动态词云图",
        "fakeId": "fake-id-for-preview",
        "skinId": "",
        "type": "折线/面积",
        "isEcharts": false,
        "codePosition": "inside",
        "icon": "uer-component-dynamicWordCloud",
        "isSelected": false
    },
    "numShow": {
        "name": "数字显示",
        "fakeId": "",
        "skinId": "",
        "type": "折线/面积",
        "isEcharts": false,
        "codePosition": "inside",
        "icon": "uer-component-numShow",
        "isSelected": false
    },
    "digitRoller": {
        "name": "数字翻牌器",
        "fakeId": "",
        "skinId": "pluginPreview",
        "type": "折线/面积",
        "isEcharts": false,
        "codePosition": "inside",
        "icon": "shuzifanpaiqi",
        "isSelected": false
    },
    "indicatorCard": {
        "name": "指标卡",
        "fakeId": "fake-id-for-preview",
        "skinId": "pluginPreview",
        "type": "折线/面积",
        "isEcharts": false,
        "codePosition": "inside",
        "icon": "uer-component-indicatorCard",
        "isSelected": false
    },
    "particlesNum": {
        "name": "粒子数字",
        "fakeId": "fake-id-for-preview",
        "skinId": "",
        "type": "折线/面积",
        "isEcharts": false,
        "codePosition": "inside",
        "icon": "uer-component-particlesNum",
        "isSelected": false
    },
    "tableGrid": {
        "name": "统计表",
        "fakeId": "",
        "skinId": "",
        "type": "折线/面积",
        "isEcharts": false,
        "codePosition": "inside",
        "icon": "uer-component-tableGrid",
        "isSelected": false
    },
    "newsList": {
        "name": "新闻列表",
        "fakeId": "",
        "skinId": "",
        "type": "折线/面积",
        "isEcharts": false,
        "codePosition": null,
        "icon": "xinwen",
        "isSelected": false
    },
    "sunburst": {
        "name": "旭日图",
        "fakeId": "fake-id-for-preview",
        "skinId": "",
        "type": "高级",
        "isEcharts": false,
        "codePosition": "inside",
        "icon": "uer-component-SunburstChart",
        "isSelected": false
    },
    "tcbubble": {
        "name": "填充气泡图",
        "fakeId": "fake-id-for-preview",
        "skinId": "",
        "type": "高级",
        "isEcharts": false,
        "codePosition": "inside",
        "icon": "uer-component-FillingBubbleChart",
        "isSelected": false
    },
    "largeScatter": {
        "name": "大规模散点图",
        "fakeId": "fake-id-for-preview",
        "skinId": "",
        "type": "高级",
        "isEcharts": true,
        "codePosition": "inside",
        "icon": "uer-component-ScaleScatterChart",
        "isSelected": false
    },
    "bubble": {
        "name": "标准气泡图",
        "fakeId": "fake-id-for-preview",
        "skinId": "",
        "type": "高级",
        "isEcharts": true,
        "codePosition": "inside",
        "icon": "uer-component-BasicBubbleChart",
        "isSelected": false
    },
    "graphForce": {
        "name": "力导图",
        "fakeId": "fake-id-for-preview",
        "skinId": "",
        "type": "高级",
        "isEcharts": true,
        "codePosition": "inside",
        "icon": "uer-component-ForceOrientedMap",
        "isSelected": false
    },
    "dynamicBubbles": {
        "name": "热词气泡",
        "fakeId": "fake-id-for-preview",
        "skinId": "",
        "type": "高级",
        "isEcharts": false,
        "codePosition": "inside",
        "icon": "uer-component-dynamicBubbles",
        "isSelected": false
    },
    "radarScan": {
        "name": "雷达扫描",
        "fakeId": "fake-id-for-preview",
        "skinId": "",
        "type": "高级",
        "isEcharts": false,
        "codePosition": "inside",
        "icon": "leida",
        "isSelected": false
    },
    "scatterChart": {
        "name": "散点图",
        "fakeId": "fake-id-for-preview",
        "skinId": "",
        "type": "高级",
        "isEcharts": true,
        "codePosition": "inside",
        "icon": "uer-component-scatterChart",
        "isSelected": false
    },
    "exTree": {
        "name": "树图",
        "fakeId": "fake-id-for-preview",
        "skinId": "",
        "type": "高级",
        "isEcharts": true,
        "codePosition": "inside",
        "icon": "uer-component-newTree",
        "isSelected": false
    },
    "sanKey": {
        "name": "桑基图",
        "fakeId": "fake-id-for-preview",
        "skinId": "",
        "type": "高级",
        "isEcharts": true,
        "codePosition": "inside",
        "icon": "uer-component-sanKey",
        "isSelected": false
    },
    "migrationMap": {
        "name": "迁移地图",
        "fakeId": "fake-id-for-preview",
        "skinId": "",
        "type": "地图",
        "isEcharts": true,
        "codePosition": "inside",
        "icon": "uer-component-MigrationMap",
        "isSelected": false
    },
    "distributionMapUp": {
        "name": "分布地图",
        "fakeId": "fake-id-for-preview",
        "skinId": "",
        "type": "地图",
        "isEcharts": true,
        "codePosition": "inside",
        "icon": "uer-component-DistributionMap",
        "isSelected": false
    },
    "heatMap": {
        "name": "热力地图",
        "fakeId": "fake-id-for-preview",
        "skinId": "",
        "type": "地图",
        "isEcharts": true,
        "codePosition": "inside",
        "icon": "uer-component-heatMap",
        "isSelected": false
    },
    "pointMap": {
        "name": "标注地图",
        "fakeId": "fake-id-for-preview",
        "skinId": "",
        "type": "地图",
        "isEcharts": true,
        "codePosition": "inside",
        "icon": "uer-component-pointMap",
        "isSelected": false
    },
    "svgMap": {
        "name": "svg地图",
        "fakeId": "svgEdit",
        "skinId": "",
        "type": "地图",
        "isEcharts": false,
        "codePosition": "inside",
        "icon": "uer-component-svgMap",
        "isSelected": false
    },
    "area3d": {
        "name": "2.5D面积图",
        "fakeId": "fake-id-for-preview",
        "skinId": "",
        "type": "2.5D",
        "isEcharts": true,
        "codePosition": "inside",
        "icon": "uer-component-TextWidget",
        "isSelected": false
    },
    "barC": {
        "name": "2.5D柱状图",
        "fakeId": "fake-id-for-preview",
        "skinId": "",
        "type": "2.5D",
        "isEcharts": true,
        "codePosition": "inside",
        "icon": "uer-component-TextWidget",
        "isSelected": false
    },
    "barHeap25d": {
        "name": "2.5D柱状堆积图",
        "fakeId": "fake-id-for-preview",
        "skinId": "",
        "type": "2.5D",
        "isEcharts": true,
        "codePosition": "inside",
        "icon": "uer-component-TextWidget",
        "isSelected": false
    },
    "funnel3d": {
        "name": "2.5D漏斗图",
        "fakeId": "fake-id-for-preview",
        "skinId": "",
        "type": "2.5D",
        "isEcharts": true,
        "codePosition": "inside",
        "icon": "uer-component-TextWidget",
        "isSelected": false
    },
    "gauge3d": {
        "name": "2.5D仪表盘",
        "fakeId": "fake-id-for-preview",
        "skinId": "",
        "type": "2.5D",
        "isEcharts": false,
        "codePosition": null,
        "icon": "uer-component-TextWidget",
        "isSelected": false
    },
    "unitValue": {
        "name": "单值组件",
        "fakeId": "fake-id-for-preview",
        "skinId": "",
        "type": "2.5D",
        "isEcharts": false,
        "codePosition": null,
        "icon": "dantixianshi",
        "isSelected": false
    },
    "mixed25d": {
        "name": "2.5D混合图",
        "fakeId": "fake-id-for-preview",
        "skinId": "",
        "type": "2.5D",
        "isEcharts": true,
        "codePosition": "inside",
        "icon": "uer-component-TextWidget",
        "isSelected": false
    },
    "bottomChassis": {
        "name": "自定义底盘",
        "fakeId": "",
        "skinId": "pluginPreview",
        "type": "2.5D",
        "isEcharts": false,
        "codePosition": "inside",
        "icon": "uer-component-bottomChassis",
        "isSelected": false
    },
    "pieCd": {
        "name": "2.5D饼图",
        "fakeId": "fake-id-for-preview",
        "skinId": "",
        "type": "2.5D",
        "isEcharts": true,
        "codePosition": "inside",
        "icon": "uer-component-TextWidget",
        "isSelected": false
    },
    "ringCd": {
        "name": "2.5D环形图",
        "fakeId": "fake-id-for-preview",
        "skinId": "",
        "type": "2.5D",
        "isEcharts": true,
        "codePosition": "inside",
        "icon": "uer-component-ringCd",
        "isSelected": false
    },
    "digitalTurntable": {
        "name": "数字转盘",
        "fakeId": "fake-id-for-preview",
        "skinId": "pluginPreview",
        "type": "3D",
        "isEcharts": false,
        "codePosition": "inside",
        "icon": "uer-component-TextWidget",
        "isSelected": false
    },
    "gaussMap3d": {
        "name": "3d高斯地图",
        "fakeId": "fake-id-for-preview",
        "skinId": "",
        "type": "3D",
        "isEcharts": false,
        "codePosition": "inside",
        "icon": "uer-component-gaussMap3d",
        "isSelected": false
    },
    "scatterplot3d": {
        "name": "3d散点图",
        "fakeId": "fake-id-for-preview",
        "skinId": "",
        "type": "3D",
        "isEcharts": false,
        "codePosition": "inside",
        "icon": "uer-component-scatterplot3d",
        "isSelected": false
    },
    "thmHistg3d": {
        "name": "多维柱状图",
        "fakeId": "fake-id-for-preview",
        "skinId": "",
        "type": "3D",
        "isEcharts": false,
        "codePosition": "inside",
        "icon": "uer-component-TextWidget",
        "isSelected": false
    },
    "timeRiver": {
        "name": "时间河流",
        "fakeId": "fake-id-for-preview",
        "skinId": "",
        "type": "3D",
        "isEcharts": false,
        "codePosition": "inside",
        "icon": "uer-component-timeRiver",
        "isSelected": false
    },
    "titlebox3d": {
        "name": "立方标题",
        "fakeId": "",
        "skinId": "",
        "type": "3D",
        "isEcharts": false,
        "codePosition": null,
        "icon": "uer-component-Ttitlebox3dextWidget",
        "isSelected": false
    },
    "s3dBar": {
        "name": "3D柱状图",
        "fakeId": "fake-id-for-preview",
        "skinId": "",
        "type": "3D",
        "isEcharts": false,
        "codePosition": "inside",
        "icon": "uer-component-thmHistg3d",
        "isSelected": false
    },
    "s3dPie": {
        "name": "3D饼图",
        "fakeId": "fake-id-for-preview",
        "skinId": "",
        "type": "3D",
        "isEcharts": false,
        "codePosition": "inside",
        "icon": "Dbingtu",
        "isSelected": false
    },
    "s3dFunnel": {
        "name": "3D漏斗图",
        "fakeId": "fake-id-for-preview",
        "skinId": "",
        "type": "3D",
        "isEcharts": false,
        "codePosition": "inside",
        "icon": "uer-component-s3dFunnel",
        "isSelected": false
    },
    "s3dArea": {
        "name": "3D面积图",
        "fakeId": "fake-id-for-preview",
        "skinId": "",
        "type": "3D",
        "isEcharts": false,
        "codePosition": "inside",
        "icon": "uer-component-s3dArea",
        "isSelected": false
    },
    "threedEarth": {
        "name": "3D地球",
        "fakeId": "idEarth",
        "skinId": "",
        "type": "3D",
        "isEcharts": false,
        "codePosition": "inside",
        "icon": "uer-component-threedEarth",
        "isSelected": false
    },
    "threeChassis": {
        "name": "3D底盘",
        "fakeId": "fake-id-for-preview",
        "skinId": "pluginPreview",
        "type": "3D",
        "isEcharts": false,
        "codePosition": "inside",
        "icon": "uer-component-Ddipan",
        "isSelected": false
    },
    "w3d": {
        "name": "W3D",
        "fakeId": "",
        "skinId": "",
        "type": "3D",
        "isEcharts": false,
        "codePosition": null,
        "icon": "uer-component-WD1",
        "isSelected": false
    },
    "magicCube": {
        "name": "数据魔方",
        "fakeId": "fake-id-for-preview",
        "skinId": "",
        "type": "3D",
        "isEcharts": false,
        "codePosition": "inside",
        "icon": "mofangtubiao",
        "isSelected": false
    }
}
export default COMPONENT_LIST;