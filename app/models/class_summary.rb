class ClassSummary < ApplicationRecord
  validates :title, presence: true
  validates :body, presence: true
  validates :homework, presence: true

  belongs_to :individual_class
  has_many :summary_comments
end
