class SummaryComment < ApplicationRecord
  validates :body, presence: true

  belongs_to :user
  belongs_to :class_summary
end
