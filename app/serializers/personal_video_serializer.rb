class PersonalVideoSerializer < ActiveModel::Serializer
  attributes :id, :title, :body, :public, :certified, :video

  belongs_to :user
  belongs_to :course
end
