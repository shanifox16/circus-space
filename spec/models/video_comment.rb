require 'rails_helper'

RSpec.describe VideoComment, type: :model do
  it { should belong_to :user }
  it { should belong_to :video }

  it { should have_valid(:body).when("Wow - amazing work!") }
  it { should_not have_valid(:body).when(nil, "") }
end
