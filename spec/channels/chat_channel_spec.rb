require 'rails_helper'

describe ChatChannel, type: :channel do
  before do
    stub_connection
  end

  it 'subscribes to the room' do
    subscribe

    expect(subscription).to be_confirmed
  end
end
