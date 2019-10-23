require 'rails_helper'

RSpec.describe User, type: :model do
  it { should have_many :registrations }
  it { should have_many :courses }
  it { should have_many :summary_comments }
  it { should have_many :personal_videos }
  it { should have_many :video_comments }

  it { should have_valid(:fname).when("John") }
  it { should_not have_valid(:fname).when(nil, "") }

  it { should have_valid(:lname).when("Doe") }
  it { should_not have_valid(:lname).when(nil, "") }

  it { should have_valid(:role).when("student") }
  it { should have_valid(:role).when("instructor") }
  it { should_not have_valid(:role).when(nil, "") }
  it { should_not have_valid(:role).when("something") }
end
