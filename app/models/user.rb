class User < ApplicationRecord
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable

  validates :fname, presence: true
  validates :lname, presence: true
  validates :username, presence: true
  validates :role, presence: true
end
