class PersonalVideoSerializer < ActiveModel::Serializer
  attributes :id, :title, :body, :public, :certified, :video, :current_user

  belongs_to :user
  belongs_to :course

  def current_user
    scope[:current_user]
  end
end
