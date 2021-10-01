class Recipe < ApplicationRecord
  belongs_to :user
  has_many :favorites, as: :favoritable
  has_many :comments, as: :commentable

  validates :name, presence: true
  validates :description, presence: true
end
