class RecipesController < ApplicationController
  def index
    render inertia: 'RecipeList', props: {

      recipes: current_user.recipes

    }
  end

  def show
    # /recipes/4
    render inertia: 'Recipe', props: {

      recipe: Recipe.find(params[:id])
    }
  end
end
