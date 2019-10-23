require 'rails_helper'

RSpec.describe Course, type: :model do
  it { should have_many :registrations }
  it { should have_many :users }
  it { should have_many :individual_classes }
  it { should have_many :personal_videos }

  it { should have_valid(:name).when("Silks 1") }
  it { should_not have_valid(:name).when(nil, "") }

  it { should have_valid(:description).when("This is a class") }
  it { should_not have_valid(:description).when(nil, "") }
end
