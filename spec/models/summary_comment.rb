require 'rails_helper'

RSpec.describe SummaryComment, type: :model do
  it { should belong_to :user }
  it { should belong_to :class_summary }

  it { should have_valid(:body).when("Help, I'm stuck!") }
  it { should_not have_valid(:body).when(nil, "") }
end
