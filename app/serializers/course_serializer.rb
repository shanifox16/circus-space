class CourseSerializer < ActiveModel::Serializer
  attributes :id, :name, :description

  has_many :individual_classes
  has_many :users
end
