class FavoritesController < ApplicationController
  before_action :find_favorite

  # def new
  #   https://api.rubyonrails.org/classes/ActionController/Redirecting.html#method-i-redirect_to
  # end

  def create
    # raise
    # @favorite = @favoriter.comments.create(params[:comments])
    @favorite = current_user.favorites.create(favoritable: @favoriter)
    # @favorite = current_user.favorites.create favorite_params
    # raise

    if @favorite.persisted?
      redirect_to @favoriter, notice: "#{@favoriter.name} added to Favorites"
    else
      redirect_to @favoriter, inertia: { errors: @favorite.errors }
    end
  end

  private

  def find_favorite
    @klass = params[:favoritable_type].capitalize.constantize
    @favoriter = @klass.find(params[:favoritable_id])
  end

  def favorite_params
    params.permit(:favoritable_type, :favoritable_id)
  end
end

#  @user.favorites << Favorite.new(favoritable: Recipe.find(151))
#  @user.favorites.recipes
#  @user.favorites.build(favoritable: Recipe.find(152))

#  recipe = current_user.recipes.create recipe_params
