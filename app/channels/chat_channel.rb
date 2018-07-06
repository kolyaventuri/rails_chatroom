class ChatChannel < ApplicationCable::Channel
  def subscribed
    stream_from "chat_#{params[:room]}"
  end

  def receive(data)
    data["color"] = "#000000" unless code ~= regex
    data["name"] = "Default Name" if data["name"].length < 1
    ActionCable.server.broadcast("chat_#{params[:room]}", data)
  end

  def regex
    /\b(?<=#)(([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3}))\b/i
  end
end
