import { params } from './const'

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {

    switch (message.key) {
        case params.handShake.key:
            sendResponse({
                msg: params.handShake.val.success
            })
            break
        case 'requestFailed':
            // change icon and alarm
            // sendMsg response: clear interval
            break
    }
})