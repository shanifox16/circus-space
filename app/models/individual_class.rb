class IndividualClass < ApplicationRecord
  validates :name, presence: true
  validates :date, presence: true

  belongs_to :course
  has_one :class_summary
end
