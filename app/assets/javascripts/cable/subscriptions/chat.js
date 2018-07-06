document.addEventListener('DOMContentLoaded', function() {
  var chatBox = document.querySelector('.chat');

  var postToScreen = function(data) {
    var li = document.createElement('li');

    li.innerText = data.message;

    chatBox.appendChild(li);
  };

  App.chatChannel = App.cable.subscriptions.create({
    channel: "ChatChannel",
    room: 'main'
  }, {
    received: function(data) {
      postToScreen(data);
    }
  });
  
  var message = document.querySelector('#message');
  var send = document.querySelector('#send');

  send.addEventListener('click', function(event) {
    event.preventDefault();

    let _msg = message.value;

    App.chatChannel.send({ message: _msg });

    message.value = "";
  });
});
