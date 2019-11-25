App.room = App.cable.subscriptions.create("RoomChannel", {
    connected: function () {
        console.log('connected')
    },

    disconnected: function () {
        // Called when the subscription has been terminated by the server
    },

    received: function (template) {
        const messages = document.getElementById('messages')
        messages.innerHTML += template
    },

    speak: function (content) {
        // RoomChannelのspeakメソッドを呼び出す。
        return this.perform('speak', {message: content});
    }
});

document.addEventListener('DOMContentLoaded', function(){
    const input = document.getElementById('chat-input')
    const button = document.getElementById('button')
    button.addEventListener('click', function(){
        const content = input.value
        // room.jsのspeakメソッドを用いる
        App.room.speak(content)
        input.value = ''
    })
})
