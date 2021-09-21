class RecipesController < ApplicationController
  def index
    render inertia: 'RecipeList', props: {
      recipes: current_user.recipes,
      favList: current_user.favorites.recipe_ids
      # recipes: Recipe.all
    }
  end

  def show
    # /recipes/4
    #

    render inertia: 'RecipeShow', props: {
      is_favorite: current_user.favorites.recipe_ids.include?(params[:id].to_i),
      recipe: Recipe.find(params[:id]),
      recipe_owner: Recipe.find(params[:id]).user,
      recipe_owner_avatar: Recipe.find(params[:id]).user.avatar_blob
    }
  end

  def new
    render inertia: 'CreateRecipe'
  end

  def edit
    # /recipes/4/edit
    render inertia: 'EditRecipe', props: {
      recipe: Recipe.find(params[:id])
    }
  end

  def update
    # redirect_to recipe_path(recipe)
    recipe = current_user.recipes.find(params[:id])
    recipe.update recipe_params

    if recipe.valid?
      redirect_to recipe_path(recipe), notice: 'Recipe Updated'
    else
      redirect_to edit_recipe_path(recipe), inertia: { errors: recipe.errors }
    end
  end

  def create
    recipe = current_user.recipes.create recipe_params
    # redirect_to recipe_path(recipe)
    if recipe.persisted?
      redirect_to recipe_path(recipe), notice: 'Recipe Created'
    else
      redirect_to new_recipe_path, inertia: { errors: recipe.errors }
    end
  end

  def destroy
    # /recipes/4
    recipe = current_user.recipes.find(params[:id])
    recipe.destroy

    redirect_to recipes_path, notice: 'Recipe Deleted'
  end

  private

  def recipe_params
    params.permit(:name, :description)
  end
end
