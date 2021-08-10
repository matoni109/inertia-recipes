class RecipesController < ApplicationController
  def index
    render inertia: 'RecipeList', props: {
      recipes: current_user.recipes
    }
  end

  def show
    # /recipes/4
    render inertia: 'RecipeShow', props: {
      recipe: Recipe.find(params[:id])
    }
  end

  def new
    render inertia: 'CreateRecipe'
  end

  def create
    recipe = current_user.recipes.create recipe_params
    # redirect_to recipe_path(recipe)
    if recipe.persisted?
      redirect_to recipe_path(recipe)
    else
      redirect_to new_recipe_path, inertia: { errors: recipe.errors }
    end
  end

  private

  def recipe_params
    params.permit(:name, :description)
  end
end
