import { params } from './const'
import { sendMsg } from './msgUtils'

document.addEventListener('DOMContentLoaded', async () => {

    await listen()

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

async function listen() {
    return new Promise((resolve, reject) => {
        chrome.runtime.onMessage.addListener((message,sender,sendResponse) => {
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

        resolve()
    })
}