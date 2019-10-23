require 'rails_helper'

RSpec.describe ClassSummary, type: :model do
  it { should have_many :summary_comments }
  it { should belong_to :individual_class }

  it { should have_valid(:title).when("Summary for Class 1") }
  it { should_not have_valid(:title).when(nil, "") }

  it { should have_valid(:body).when("Here's your summary y'all!") }
  it { should_not have_valid(:body).when(nil, "") }

  it { should have_valid(:homework).when("Do 10 hollow body exercises every day") }
  it { should_not have_valid(:homework).when(nil, "") }
end
