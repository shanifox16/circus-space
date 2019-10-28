class IndividualClassSerializer < ActiveModel::Serializer
  attributes :id, :name, :date

  has_one :class_summary
end
