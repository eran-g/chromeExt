import { params } from './const'
import { sendMsg } from './msgUtils'

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    switch (message.msg) {
        case 'handShakeFromBg':
            sendResponse({
                msg: 'handShake resp From pop'
            })
            break
        case 'requestFailed':
            // change icon and alarm
            // sendMsg response: clear interval
            break
    }
})

document.addEventListener('DOMContentLoaded', async () => {

    const handShakeresp = await sendMsg({
        key: params.handShake.key
    })
    console.log('--->handShakeresp:', JSON.stringify(handShakeresp))

    // init UI elements event listeners
    const startBtn = document.getElementById('start')
    const stopBtn = document.getElementById('stop')

    startBtn.onclick = () => {
        startBtn['disabled'] = true
        stopBtn['disabled'] = false
    }

    stopBtn.onclick = () => {
        stopBtn['disabled'] = true
        startBtn['disabled'] = false
    }
})