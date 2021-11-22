/*
 * @description: 
 * @Author: Gouxinyu
 * @Date: 2020-08-02 20:53:39
 */
import $ from 'jquery';

function injectCustomJs(jsPath: string = "inject/index.js") {
  if ($('#ue-hepler-indected').length > 0) { return; }

  const src = chrome.extension.getURL(jsPath);
  const scriptLink = `
          <script id="ue-hepler-indected" defer="defer" type="text/javascript" src=${src}>
      `;

  $("head").append(scriptLink);
}

window.onload = function () {
  const stylePath = chrome.extension.getURL("inject/index.css");
  const css = `
          <link rel="stylesheet" type="text/css" href="${stylePath}">
          <style>
            .high-light-select {
                border: 5px rgba(70, 8, 225,0.3) solid;
                animation: selectStyle 3s ease-in-out 3;
            }

            @keyframes selectStyle {
                0% {
                    border-color: rgba(70, 8, 225, 0.3);
                }
                50% {
                    border-color: rgba(70, 8, 225, 1);
                }
                100% {
                    border-color: rgba(70, 8, 225, 0.3);
                }
            }
          </style>
      `;
  $("head").append(css);

  const ueBox = document.getElementById('ue-box');
  if (!ueBox) {
    const picPath = chrome.extension.getURL("assets/icons/icon64.png");
    const HTML_ELEMENT = `
        <div id="ue-box" style="display:none; position: absolute; top: 30px; right: 20px; z-inde: 99999; width: 64px; height: 64px; border-radius: 50%; cursor: pointer; background: url(${picPath}) no-repeat"></div>
    `
    $("body").append(HTML_ELEMENT);
    $('#ue-box').off('click').on('click', function () {
      $('#ue-helper').show().css('height', '700px');
      $(this).hide();
    })
  }
};

try {
  window.onbeforeunload = function () {
    chrome.runtime.sendMessage(false, function (response) {
      if (response === "success") {
        console.log("close ueHepler");
      }
    });
  }
} catch (e) {
  console.warn(e);
}



chrome.runtime.onMessage.addListener(function (params, sender, sendResponse) {

  if (params && params.isOpen) {
    const ueHelperBox = document.getElementById('ue-helper-box');
    if (!ueHelperBox) {
      const HTML_ELEMENT = `
        <div id="ue-helper-box"></div>
    `
      $("body").append(HTML_ELEMENT);
    }

    $('#ue-helper').show();
    // 若点击了插件图标才执行
    injectCustomJs();
    sendResponse("success");
  } else {
    $('#ue-helper').hide();
  }
});



window.addEventListener("message", function (e) {
  if (e.data.isFromUeHelper) {
    chrome.runtime.sendMessage(false, function (response) {
      if (response === "success") {
        console.log("close ueHepler");
      }
    });
  }
}, false);