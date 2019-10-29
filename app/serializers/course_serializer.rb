class CourseSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :current_user

  has_many :individual_classes
  has_many :users

  def current_user
    scope[:current_user]
  end
end
