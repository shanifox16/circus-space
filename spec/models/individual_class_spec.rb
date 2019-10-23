require 'rails_helper'

RSpec.describe IndividualClass, type: :model do
  it { should belong_to :course }
  it { should have_one :class_summary }

  it { should have_valid(:name).when("Class 1") }
  it { should_not have_valid(:name).when(nil, "") }

  it { should have_valid(:date).when("2019/10/08") }
  it { should_not have_valid(:date).when(nil, "") }
end
