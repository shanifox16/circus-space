require 'rails_helper'

RSpec.describe PersonalVideo, type: :model do
  it { should have_many :video_comments }
  it { should belong_to :course }
  it { should belong_to :user }

  it { should have_valid(:title).when("Star Drop practice") }
  it { should_not have_valid(:title).when(nil, "") }

  it { should have_valid(:body).when("This was after class 4 - body shape is improving!") }
  it { should_not have_valid(:body).when(nil, "") }
end
