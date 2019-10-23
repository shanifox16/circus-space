class User < ApplicationRecord
  validates :fname, presence: true
  validates :lname, presence: true
  validates :role, inclusion: { in: %w(student instructor) }

  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
  mount_uploader :profile_photo, ProfilePhotoUploader

  has_many :registrations
  has_many :courses, through: :registrations
  has_many :summary_comments
  has_many :personal_videos
  has_many :video_comments
end
