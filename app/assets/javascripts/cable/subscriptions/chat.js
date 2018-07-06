var postToScreen = function(data) {
  console.log(data);
};

App.chatChannel = App.cable.subscriptions.create({
  channel: "ChatChannel",
  room: 'main'
}, {
  received: function(data) {
    postToScreen(data);
  }
});


