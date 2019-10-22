class User < ApplicationRecord
  validates :fname, presence: true
  validates :lname, presence: true
  validates :username, presence: true
  validates :role, presence: true

  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
  mount_uploader :profile_photo, ProfilePhotoUploader

end
