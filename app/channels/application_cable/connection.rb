module ApplicationCable
  class Connection < ActionCable::Connection::Base
    identified_by :current_user

    def connect
      self.current_user = cookies.encrypted[:_rails_chatroom_session]["session_id"]
    end
  end
end
