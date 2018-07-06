class ChatChannel < ApplicationCable::Channel
  def subscribed
    stream_from "chat_#{params[:room]}"
  end

  def receive(data)
    data["name"] = "Default Name" if data["name"].length < 1
    ActionCable.server.broadcast("chat_#{params[:room]}", data)
  end
end
