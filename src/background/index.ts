/*
 * @description: 
 * @Author: Gouxinyu
 * @Date: 2020-08-02 20:11:11
 */
// 单例模式

const PAGE_ACTION = {
	QUERY_SET: {
		active: true,
		currentWindow: true,
	},
	isOpen: false,
	sendMessageToContentScript: function (callback) {
		chrome.tabs.query(this.QUERY_SET, (tabs) => {
			const url = tabs[0].url;
			this.isOpen = !this.isOpen;
			let params = {
				isOpen: this.isOpen,
				type: "designer",
				name: "设计器",
				notUE: false,
			};

			chrome.tabs.sendMessage(tabs[0].id, params, (response) => {
				if (callback) callback(response);
			});
		});
	},
};


// 点击插件图标时触发
chrome.browserAction.onClicked.addListener(function () {
	/**
	 * @description: 与content.js通信, 保证点击的时候才执行
	 * @Author: Gouxinyu
	 * @param {type}
	 * @Date: 2020-02-09 18:22:17
	 */
	//chrome.cookies.getAll({ url: window.location.origin, name: 'user-info' }, function (e) { console.log(e, '123') });
	PAGE_ACTION.sendMessageToContentScript((response) => {
		// console.log('来自content的回复：'+response);
	});
});

// 监听来自content-script的消息
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
	PAGE_ACTION.isOpen = request;
	sendResponse("success");
});