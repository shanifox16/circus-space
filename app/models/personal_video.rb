class PersonalVideo < ApplicationRecord
  validates :title, presence: true
  validates :body, presence: true

  belongs_to :user
  belongs_to :course
  has_many :video_comments

  mount_uploader :video, VideoUploader
end
