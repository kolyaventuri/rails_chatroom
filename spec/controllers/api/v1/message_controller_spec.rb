require 'rails_helper'

describe Api::V1::MessagesController, type: :controller do
  it 'should broadcast to create when a message is POSTed to /api/v1/messages' do
    expect { post :create, message: { text: 'Hello, World!', user: 'BillyBob' } }.to
      have_broadcasted_to('chat').with( { text: 'Hello, World!', user: 'BillyBob' })
  end
end
