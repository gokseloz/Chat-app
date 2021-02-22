let input = document.querySelector(".input-msg")
let screenChat = document.querySelector(".screen-chat")
let sendBtn = document.querySelector(".send")

function sendMsg(){
    let ownerMsg = document.createElement("p");
    ownerMsg.classList.add("message")
    ownerMsg.classList.add("dog-owner")
    ownerMsg.innerText = input.value

    if (input.value.length == 0) {
        return false
    } else {
        screenChat.appendChild(ownerMsg)
        input.value = ""
    }
    screenChat.scrollTop = screenChat.scrollHeight
    
}

sendBtn.addEventListener("click", sendMsg)

input.addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        sendBtn.click();
    }
});



