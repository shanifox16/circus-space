require 'factory_bot'

FactoryBot.define do
  factory :user do
    sequence(:email) {|n| "user#{n}@example.com" }
    sequence(:username) {|n| "user#{n}" }
    sequence(:fname) {|n| "firstuser#{n}" }
    sequence(:lname) {|n| "lastuser#{n}" }
    role { 'student' }
    password { 'password' }
    password_confirmation { 'password' }
  end

end
