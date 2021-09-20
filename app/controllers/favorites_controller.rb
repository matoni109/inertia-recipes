class FavoritesController < ApplicationController
  before_action :find_favorite

  def create
    # raise
    # @favorite = @favoriter.comments.create(params[:comments])
    @favorite = current_user.favorites.create(favoritable: @favorited)
    # @favorite = current_user.favorites.create favorite_params

    if @favorite.persisted?
      redirect_to @favorited, notice: "#{@favorited.class.name} added to Favorites"
    else
      redirect_to @favorited, inertia: { errors: @favorite.errors }
    end
  end

  def destroy
    @favorite = current_user.favorites.find_by(favorite_params)
    # raise
    if @favorite
      @favorite.destroy
      redirect_to @favorited, alert: "#{@favorited.class.name} removed to Favorites"

    else
      redirect_to @favorited, alert: "#{@favorited.class.name} not in fav"
    end
  end

  private

  def find_favorite
    @klass = params[:favoritable_type].capitalize.constantize
    @favorited = @klass.find(params[:favoritable_id])
  end

  def favorite_params
    params.permit(:favoritable_type, :favoritable_id)
  end
end

#  @user.favorites << Favorite.new(favoritable: Recipe.find(151))
#  @user.favorites.recipes
#  @user.favorites.build(favoritable: Recipe.find(152))

#  recipe = current_user.recipes.create recipe_params
