---
title: 'eva-call 音视频组件'
description: '前端组件'
position: 1
category: '小程序组件'
version: 1.0
menuTitle: 'eva-call 音视频组件'
---


<alert type="info">组件依赖于声网 RTC 和 RTM 服务</alert>


## 属性



 | prop               | 类型     | 默认值 | 说明                        |
 | ------------------ | -------- | ------ | --------------------------- |
 | `key`              | `String` | -      | 声网 appId                  |
 | `inviteAwaitDelay` | `Number` | `3000` | 呼叫等待延迟，默认 3000 ms  |
 | `userId`           | `string` | guid   | 用户id，默认guid            |
 | `source`           | `Array`  | `[]`   | 呼叫列表，格式见下方        |
 | `total`            | `Number` | `0`    | 呼叫列表的长度              |
 | `type`             | `Number` | `1`    | 音视频类型    1 视频 2 语音 |
 | `maxCallTime`      | `Number` | `40`   | 最大呼叫时间 单位 秒        |



## 回调



| 回调                     | 参数列表                                        | 说明                                     |
| ------------------------ | ----------------------------------------------- | ---------------------------------------- |
| `dispatchLoginFailed`    | `error`                                         | RTM登录失败的回调                        |
| `MemberJoined`           | `memberId`                                      | 用户加入 RTM 频道的回调                  |
| `MemberLeft`             | `channelName`,`args`                            | 用户离开频道的回调                       |
| `ConnectionStateChanged` | `args`                                          | 链接状态改变的事件回调                   |
| `MessageFromPeer`        | `message`, `peerId`                             | 收到对方放送的消息的回调                 |
| `inviteEnd`              | -                                               | 调度结束的回调                           |
| `log`                    | `invite`, `state`                               | 每一次状态变更都会触发，用来打日志       |
| `networkError`           | -                                               | 网络错误的回调                           |
| `inviteBefore`           | `inviteInstance`                                | 发送呼叫邀请前的操作                     |
| `extra`                  | `extra`, `invitee`                              | 呼叫之前的准备工作，可以处理一些传递数据 |
| `inviteTimeout`          | `inviteInstance`                                | 呼叫实例超时的回调                       |
| `playChange`             | `e`                                             | 播放状态更新                             |
| `netChange`              | `e`                                             | 网络状态更新                             |
| `inviteAccept`           | `channel`, `target`,`id`                        | 接收邀请的回调                           |
| `streamSuccess`          | `uid`,`url`                                     | 音视频流准备完毕的回调                   |
| `streamRotation`         | `rotation`, `uid`                               | 流发生旋转的回调                         |
| `streamAdded`            | `uid`                                           | 流加入的回调                             |
| `streamSubscribe`        | `url`, `uid`                                    | 流订阅成功                               |
| `streamError`            | `code`                                          | 流发送错误                               |
| `streamUpdate`           | `url`, `uid`                                    | 流更新的回调                             |
| `streamRemoved`          | `relatedId`, `callTime`, `target`, `inviteTime` | 音视频流移除的回调                       |



## 方法



<alert type="info">方法可以通过 `selectComponent(id)` 调用</alert>




| 方法名              | 参数                | 说明                   |
| ------------------- | ------------------- | ---------------------- |
| `sendMessageByPeer` | `message`, `peerId` | 发送点对点消息         |
| `reAgoraChannel`    | `uid`,`channel`     | 重新加入频道           |
| `onClose`           | `isActive`,`isSend` | 挂断方法               |
| `hasEnd`            | -                   | 判断是否邀请完毕的方法 |



## 插槽



| 插槽名称  | 说明                                                   |
| --------- | ------------------------------------------------------ |
| `empty`   | 空状态插槽，会在没有开始音视频时渲染，开始音视频后销毁 |
| `content` | 主内容插槽                                             |
| `footer`  | 底部插槽                                               |

