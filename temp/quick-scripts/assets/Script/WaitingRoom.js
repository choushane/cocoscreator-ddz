(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Script/WaitingRoom.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, 'a9a2d9UCxFHuLyIG/uSBiwQ', 'WaitingRoom', __filename);
// Script/WaitingRoom.js

"use strict";

var _net = require("net");

// Learn cc.Class:
//  - [Chinese] http://www.cocos.com/docs/creator/scripting/class.html
//  - [English] http://www.cocos2d-x.org/docs/editors_and_tools/creator-chapters/scripting/class/index.html
// Learn Attribute:
//  - [Chinese] http://www.cocos.com/docs/creator/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/editors_and_tools/creator-chapters/scripting/reference/attributes/index.html
// Learn life-cycle callbacks:
//  - [Chinese] http://www.cocos.com/docs/creator/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/editors_and_tools/creator-chapters/scripting/life-cycle-callbacks/index.html

cc.Class({
    extends: cc.Component,

    properties: {
        leftName: cc.Label,
        rightName: cc.Label,
        playerName: cc.Label
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad: function onLoad() {
        //获取房间信息
        Network.socket.emit("getRoomData", Global.roomNum);
        Network.socket.on("getRoomDataBack", function (data) {
            console.log(data);
            //处理位置关系
            var playerIndex = 0;
            for (var index = 0; index < data.length; index++) {
                var element = data[index];
                if (element == Global.playerName) {
                    playerIndex = index;
                }
            }
            this.playerName.string = data[playerIndex];
            if (playerIndex == 0) {
                this.leftName.string = data[2];
                this.rightName.string = data[1];
            } else if (playerIndex == 1) {
                this.leftName.string = data[0];
                this.rightName.string = data[2];
            } else {
                this.leftName.string = data[1];
                this.rightName.string = data[0];
            }
        });
    },
    start: function start() {}
}

// update (dt) {},
);

cc._RF.pop();
        }
        if (CC_EDITOR) {
            __define(__module.exports, __require, __module);
        }
        else {
            cc.registerModuleFunc(__filename, function () {
                __define(__module.exports, __require, __module);
            });
        }
        })();
        //# sourceMappingURL=WaitingRoom.js.map
        