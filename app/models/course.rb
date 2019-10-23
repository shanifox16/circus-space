class Course < ApplicationRecord
  validates :name, presence: true
  validates :description, presence: true

  has_many :registrations
  has_many :users, through: :registrations
  has_many :individual_classes
  has_many :personal_videos
end
