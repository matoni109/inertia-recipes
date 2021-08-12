require 'rails_helper'
# https://github.com/inertiajs/inertia-rails/blob/master/spec/inertia/rspec_helper_spec.rb

RSpec.describe RecipesController, inertia: true, type: :request do
  # before { sign_in! }
  let!(:user) { sign_in! }

  describe '#new', inertia: true do
    # pending "add some examples (or delete) #{__FILE__}"
    # send request to / new
    it 'renders an inertia component' do
      # see if what we expect to be return is returned
      get new_recipe_path

      # puts response.status
      expect_inertia.to render_component 'CreateRecipe'
    end
  end

  describe '#index' do
    ## make sure u use the bang !
    let!(:recipes) { create_list :recipe, 2, user: user }

    it 'renders the recipes list' do
      get recipes_path
      expect_inertia.to render_component 'RecipeList'
      expect_inertia.to include_props({
                                        recipes: recipes
                                      })
    end
  end

  describe '#show' do
    ## make sure u use the bang !
    let!(:recipe) { create :recipe, user: user }

    it 'renders a recipe' do
      get recipe_path(recipe)
      expect_inertia.to render_component 'RecipeShow'
      expect_inertia.to include_props({
                                        recipe: recipe
                                      })
    end
  end

  ## no inertia needed here
  describe '#create' do
    ## make sure u use the bang !
    let!(:recipe) { build :recipe }

    it 'renders a recipe' do
      post recipes_path, params: { name: recipe.name, description: recipe.description }
      # new_recipe = Recipe.first
      new_recipe = user.recipes.first
      expect(new_recipe.name).to eq recipe.name
      expect(new_recipe.description).to eq recipe.description
      # expect_inertia.to render_component 'RecipeShow'
      expect(response).to redirect_to recipe_path(new_recipe)
    end
  end
end
