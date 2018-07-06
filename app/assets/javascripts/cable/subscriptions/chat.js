document.addEventListener('DOMContentLoaded', function() {
  var chatBox = document.querySelector('.chat');

  var message = document.querySelector('#message');
  var name = document.querySelector('#name');
  var send = document.querySelector('#send');

  var postToScreen = function(data) {
    var li = document.createElement('li');
    var name = document.createElement('p');
    var message = document.createElement('p');

    name.setAttribute('class', 'name');
    name.innerText = data.name;

    message.innerText = data.message;

    li.appendChild(name);
    li.appendChild(message);

    chatBox.appendChild(li);
  };

  var doSendMessage = function() {
    let _msg = message.value;

    App.chatChannel.send({ message: _msg, name: name.value });

    message.value = "";
  };

  App.chatChannel = App.cable.subscriptions.create({
    channel: "ChatChannel",
    room: 'main'
  }, {
    received: function(data) {
      postToScreen(data);
    }
  });

  send.addEventListener('click', function(event) {
    event.preventDefault();
    doSendMessage();
  });

  message.addEventListener('keydown', function(e) {
    if(e.keyCode === 13) {
      doSendMessage();
    }
  })
});
