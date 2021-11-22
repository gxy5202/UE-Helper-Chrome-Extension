<!--
 * @description: 头部组件
 * @Author: Gouxinyu
 * @Date: 2020-08-02 22:15:19
--> 
<template>
	<div id="ue-header-box">
		<div class="ue-header-box-left">
			<div class="ue-project-name">
				<span>当前工程：{{ currentProject }}</span>
			</div>
			<div class="devide-line"></div>
			<div class="ue-page-name">
				<span>当前页面：{{ currentPage }}</span>
			</div>
		</div>
		<div class="ue-header-box-right">
			<div
				title="页面代码注入"
				class="components-num-name"
				@click="openCodeWin"
			>
				<span>
					<i class="uer uer-code"></i>
				</span>
			</div>
			<div class="components-num">
				<span>{{ componentsNum }}</span>
			</div>
			<div
				title="一键清空画布"
				class="delete-all-components"
				@click="deleteAllComponents"
			>
				<span>
					<i class="uer uer-ashbin"></i>
				</span>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import { mapState } from "vuex";
import { openCodeWindow } from "../../../utils/utils";

export default {
	name: "HeaderBox",
	data() {
		return {
			message: "ue",
			time: 0,
		};
	},
	computed: {
		keyAllSelectDownEvent() {
			return new KeyboardEvent("keydown", {
				keyCode: 65, // UE必须要该属性
				code: "A",
				key: "A",
				ctrlKey: true,
			});
		},
		keyAllSelectUpEvent() {
			return new KeyboardEvent("keyup", {
				keyCode: 65, // UE必须要该属性
				code: "A",
				key: "A",
				ctrlKey: true,
			});
		},
		// 创建键盘按下事件
		keyDownEvent() {
			return new KeyboardEvent("keydown", {
				keyCode: 46, // UE必须要该属性
				code: "Delete",
				key: "Delete",
			});
		},
		// 创建键盘松开事件
		keyUpEvent() {
			return new KeyboardEvent("keyup", {
				keyCode: 46,
				code: "Delete",
				key: "Delete",
			});
		},
		...mapState({
			currentProject: (state: any) => state.currentProject,
			currentPage: (state: any) => state.currentPage,
			componentsNum: (state: any) => state.componentsNum,
			componentList: (state: any) => state.componentList,
			designerService: (state: any) => state.designerService,
		}),
	},
	methods: {
		/**
		 * @description: 删除画布所有组件
		 * @Author: Gouxinyu
		 * @Date: 2020-08-12 00:20:30
		 */
		async deleteAllComponents() {
			const componentList = this.componentList;

			// 监听键盘事件
			$(document).on("keydown", this.keyFunc);
			const currentPage = this.designerService.getCurrentPage();
			for (let i = 0; i < componentList.length; i++) {
				const id: string = componentList[i].id;
				if (currentPage && currentPage._getPlugin(id)) {
					currentPage._getPlugin(id).basicSetting.isLock
						? (currentPage._getPlugin(
								id
						  ).basicSetting.isLock = false)
						: $.noop();
				}
			}

			// 全选
			document.dispatchEvent(this.keyAllSelectDownEvent);
			document.dispatchEvent(this.keyAllSelectUpEvent);
			document.dispatchEvent(this.keyDownEvent);
			document.dispatchEvent(this.keyUpEvent);
			/*
            for (let i = 0; i < componentList.length; i++) {
                const id: string = componentList[i].id;
                // 先判断组件是否被锁定
                this.checkLock(id, componentList)
                    .then(() => {
                        $(`#_${id}`).click();

                        // 触发键盘delete事件
                        document.dispatchEvent(this.keyDownEvent);
                        document.dispatchEvent(this.keyUpEvent);
                        $(".paint.active").click();
                    })
                    .then(() => {
                        if (i === componentList.length - 1) {
                            console.log("iiiii", i);
                            // this.$store.commit("refreshComponentList");
                        }
                    });
            }
            */
		},
		/**
		 * @description: 判断组件是否被锁定
		 * @Author: Gouxinyu
		 * @param {string} id 组件id
		 * @param {object} item 组件对象
		 * @Date: 2020-08-12 00:19:43
		 */
		async checkLock(id: string = "", item: any) {
			return new Promise((resolve, reject) => {
				$(`#${id}`).click();
				if (item.isLock) {
					let basicSetting = this.designerService.getCurrentPlugin()
						.basicSetting;
					basicSetting.isLock = false;
				}
				resolve("success");
			});
		},
		// 解绑监听事件
		keyFunc() {
			return (e) => {
				console.log("keydown", e);
				$(document).off("keydown", this.keyFunc);
			};
		},
		// 打开页面代码注入入口
		openCodeWin() {
			openCodeWindow.start("page");
		},
	},
};
</script>

<style scoped lang="less">
.flex-center {
	display: flex;
	justify-content: center;
	align-items: center;
}
#ue-header-box {
	position: absolute;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0 20px;
	box-sizing: border-box;
	margin: auto;
	right: 0;
	left: 0;
	top: 60px;
	width: 450px;
	height: 150px;
	background: #fff;
	box-shadow: rgba(0, 0, 0, 0.1) 0 10px 15px 0;
	border-radius: 10px;

	.ue-header-box-left {
		width: 50%;
		height: 80%;
		.flex-center();
		flex-direction: column;
		font-weight: bolder;

		.ue-project-name {
			border-bottom: 1px solid transparent;
			border-image: linear-gradient(to right, #000, rgba(0, 0, 0, 0)) 1 10;
		}

		.ue-project-name,
		.ue-page-name {
			width: 80%;
			text-align: left;
			padding: 20px 0;
			overflow: hidden;
			text-overflow: ellipsis;
			white-space: nowrap;

			span {
				font-size: 14px;
				font-weight: bold;
			}
		}
	}

	.ue-header-box-right {
		position: relative;
		.flex-center();
		width: 50%;
		height: 80%;
		background: none;

		.components-num-name {
			position: absolute;
			width: 60px;
			height: 60px;
			.flex-center();
			border-radius: 50%;
			background: #c14aca;
			box-shadow: rgba(0, 0, 0, 0.2) 0 1px 5px 0px;
			left: 5px;
			top: 0;

			span {
				font-size: 14px;
				font-weight: bold;
				color: #fff;
			}
			cursor: pointer;
			&:hover {
				animation: upAndDown 0.8s ease-in-out;
			}
		}

		.components-num {
			.flex-center();
			width: 130px;
			height: 130px;
			border-radius: 50%;
			background: #6322e6;
			box-shadow: rgba(0, 0, 0, 0.2) 0 1px 5px 0px;
			overflow: hidden;
			span {
				font-size: 60px;
				font-weight: bold;
				color: #fff;
			}
		}

		.delete-all-components {
			position: absolute;
			width: 40px;
			height: 40px;
			.flex-center();
			border-radius: 50%;
			background: #4608e2;
			box-shadow: rgba(0, 0, 0, 0.2) 0 1px 5px 0px;
			left: 30px;
			bottom: 0px;
			cursor: pointer;
			span {
				color: #fff;
				.uer-ashbin {
					font-size: 26px;
				}
			}

			&:hover {
				animation: upAndDown 0.8s ease-in-out;
			}
		}
	}
}

@keyframes upAndDown {
	0% {
		transform: scale(1);
	}
	50% {
		transform: scale(1.1);
	}
	100% {
		transform: scale(1);
	}
}
</style>
