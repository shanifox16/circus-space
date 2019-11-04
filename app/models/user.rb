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

  def self.from_omniauth(auth)
    data = auth.info
    user = User.find_or_initialize_by(email: data.email)
    user.fname = data.first_name
    user.lname = data.last_name
    user.email = data.email
    user.password = Devise.friendly_token[0, 20]
    user.access_token = auth.credentials.token
    user.refresh_token = auth.credentials.refresh_token
    user.save!
    user
  end
end
