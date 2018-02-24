// var icon
// var interval
//
// document.addEventListener('DOMContentLoaded', async () => {
//
//         await listen()
//
//         // test messages and response
//         const handShakeresp = await popJsSendMsg({
//             msg: 'handShake'
//         })
//         console.log('--->handShakeresp:', JSON.stringify(handShakeresp))
//
//         const testMsgResp = await popJsSendMsg({
//             msg: 'testMsg'
//         })
//         console.log('--->testMsgResp:', JSON.stringify(testMsgResp))
//
//         // init UI elements event listeners
//         const startBtn = document.getElementById('start')
//         const stopBtn = document.getElementById('stop')
//
//         startBtn.onclick = () => {
//             startBtn.disabled = true
//             stopBtn.disabled = false
//
//             interval = setInterval(() => {
//                 icon = !icon || icon === 'green.png' ? 'red.png' : 'green.png'
//
//                 chrome.browserAction.setIcon({
//                     path: icon
//                 })
//             }, 1000)
//
//             console.log('--->interval:', interval)
//         }
//
//         stopBtn.onclick = () => {
//             stopBtn.disabled = true
//             startBtn.disabled = false
//
//             clearInterval(interval)
//         }
//
// })
//
// async function listen() {
//     return new Promise((resolve, reject) => {
//         chrome.runtime.onMessage.addListener((message,sender,sendResponse) => {
//             switch (message.msg) {
//                 case 'handShakeFromBg':
//                     sendResponse({
//                         msg: 'handShake resp From pop'
//                     })
//                     break
//                 case 'requestFailed':
//                     // change icon and alarm
//                     // sendMsg response: clear interval
//                     break
//             }
//         })
//         console.log('--->popJsListener listening')
//         resolve()
//     })
// }
//
// async function popJsSendMsg(msg) {
//     return new Promise((resolve, reject) => {
//         chrome.runtime.sendMessage(msg, (response) =>{
//             if (response) {
//                 resolve(response)
//             }else {
//                 reject()
//             }
//         })
//     })
// }