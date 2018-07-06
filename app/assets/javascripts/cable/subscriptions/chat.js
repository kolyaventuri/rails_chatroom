App.chatChannel = App.cable.subscriptions.create(
  {
    channel: "ChatChannel",
    recieved: recieved
  }
);

var recieved = function(data) {
  console.log(data);
};

App.chatChannel.send({ text: 'Hello World!', user: 'Me' });

