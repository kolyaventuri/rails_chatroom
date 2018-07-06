require 'rails_helper'

describe MessageController, type: :controller do
  expect { post :create, message: { text: 'Hello, World!', user: 'BillyBob' } }.to
      have_broadcasted_to('chat').with( { text: 'Hello, World!', user: 'BillyBob' })
end
