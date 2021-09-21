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
  scope :recipe_ids, -> { where(favoritable_type: 'Recipe').map(&:favoritable_id) }
end

#  @user.favorites << Favorite.new(favoritable: Recipe.find(151))
#  @user.favorites.recipes
#  @user.favorites.build(favoritable: Recipe.find(152))
#  Favorite.last.user.recipes.ids
#
#  Favorite.includes(:favoritable).map(&:favoritable_id)
#
# Favorite.joins(:user).where(favoritable_type: "Recipe").map(&:favoritable_id)
