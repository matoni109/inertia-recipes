class Recipe < ApplicationRecord
  belongs_to :user
  has_many :favorites, as: :favoritable

  validates :name, presence: true
  validates :description, presence: true
end
