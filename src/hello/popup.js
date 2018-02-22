async function popJsSendMsg(msg) {
    return new Promise((resolve, reject) => {
        chrome.runtime.sendMessage(msg, function(response){
            if (response) {
                resolve(response)
            }else {
                reject()
            }
        })
    })
}

async function popJsListener() {
    return new Promise((resolve) => {
        chrome.runtime.onMessage.addListener(function(message,sender,sendResponse) {
            switch (message.msg) {
                case 'handShakeFromBg':
                    sendResponse({
                        msg: 'handShake resp From pop'
                    })
                    break
            }
        })
        console.log('--->popJsListener listening')
        resolve()
    })
}

async function f() {
    await popJsListener()

    const handShakeresp = await popJsSendMsg({
        msg: 'handShake'
    })
    console.log('--->handShakeresp:', JSON.stringify(handShakeresp))

    const testMsgResp = await popJsSendMsg({
        msg: 'testMsg'
    })
    console.log('--->testMsgResp:', JSON.stringify(testMsgResp))
}

f()