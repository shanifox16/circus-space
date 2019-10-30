class ClassSummarySerializer < ActiveModel::Serializer
  attributes :id, :title, :body, :homework, :video, :individual_class_id, :date, :current_user

  has_many :summary_comments

  def date
    object.individual_class.date
  end

  def current_user
    scope[:current_user]
  end
end
