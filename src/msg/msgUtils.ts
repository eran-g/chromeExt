export async function sendMsg(msg) {
    return new Promise((resolve, reject) => {
        chrome.runtime.sendMessage(msg, (response) =>{
            if (response) {
                resolve(response)
            }else {
                reject()
            }
        })
    })
}