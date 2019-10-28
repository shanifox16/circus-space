class UserSerializer < ActiveModel::Serializer
  attributes :id, :email, :fname, :lname, :role
end
