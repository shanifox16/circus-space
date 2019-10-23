require 'rails_helper'

feature 'profile photo' do
  scenario 'user uploads a profile photo' do
    visit new_user_registration_path

    select('student', from: 'Role')
    fill_in 'Email', with: 'john@example.com'
    fill_in 'First Name', with: 'John'
    fill_in 'Last Name', with: 'Doe'
    fill_in 'Password', with: 'password'
    fill_in 'Password confirmation', with: 'password'
    attach_file :user_profile_photo, "#{Rails.root}/app/assets/images/shani_profile_photo.jpg"

    click_button 'Sign up'

    expect(page).to have_content("Welcome! You have signed up successfully")
  end
end
