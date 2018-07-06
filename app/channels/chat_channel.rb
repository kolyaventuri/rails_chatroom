class ChatChannel < ApplicationCable::Channel
  def subscribe
    stream_for "chat"
  end
end
