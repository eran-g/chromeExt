chrome.runtime.onMessage.addListener(function(message, sender, sendResponse){

    switch (message.msg) {
        case 'handShake':
            sendResponse({
                msg: 'handShake resp'
            })
            break
        case 'testMsg':
            sendResponse({
                msg: 'testMsg resp'
            })

            bgJsSendMsg({
                msg: 'handShakeFromBg'
            })

            break
    }
})

async function bgJsSendMsg(msg) {
    return new Promise((resolve) => {
        chrome.runtime.sendMessage(msg,function(response){
            // alert('--->bgJsSendMsg response:' + JSON.stringify(response))
            resolve()
        })
    })
}

