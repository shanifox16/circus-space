require 'rails_helper'

RSpec.describe Registration, type: :model do
  it { should belong_to :user }
  it { should belong_to :course }
end
