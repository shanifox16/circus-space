class SummaryCommentSerializer < ActiveModel::Serializer
  attributes :id, :body, :created_at

  belongs_to :user

  def created_at
    object.created_at.strftime("%m/%d %l:%M%P")
  end
end
