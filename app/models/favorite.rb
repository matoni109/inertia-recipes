class Favorite < ApplicationRecord
  belongs_to :favoritable, polymorphic: true
  belongs_to :user, inverse_of: :favorites

  # vales
  validates :user_id, uniqueness: {
    scope: %i[favoritable_id favoritable_type],
    message: 'can only favorite an item once'
  }

  # scopes
  scope :recipes, -> { where(favoritable_type: 'Recipe') }
end

#  @user.favorites << Favorite.new(favoritable: Recipe.find(151))
#  @user.favorites.recipes
#  @user.favorites.build(favoritable: Recipe.find(152))
