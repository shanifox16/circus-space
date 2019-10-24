class User < ApplicationRecord
  validates :fname, presence: true
  validates :lname, presence: true
  validates :role, inclusion: { in: %w(student instructor) }

  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable,
         :omniauthable, omniauth_providers: [:google_oauth2]
  mount_uploader :profile_photo, ProfilePhotoUploader

  has_many :registrations
  has_many :courses, through: :registrations
  has_many :summary_comments
  has_many :personal_videos
  has_many :video_comments

  def self.from_omniauth(access_token)
    data = access_token.info
    user = User.where(email: data['email']).first

    unless user
      user = User.create(
         email: data['email'],
         password: Devise.friendly_token[0,20],
         fname: data['first_name'],
         lname: data['last_name']
      )
    end
    user
  end
end
