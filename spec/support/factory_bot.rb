require 'factory_bot'

FactoryBot.define do
  factory :user do
    sequence(:email) {|n| "user#{n}@example.com" }
    sequence(:fname) {|n| "firstuser#{n}" }
    sequence(:lname) {|n| "lastuser#{n}" }
    role { 'student' }
    password { 'abc123' }
    password_confirmation { 'abc123' }
  end
end
