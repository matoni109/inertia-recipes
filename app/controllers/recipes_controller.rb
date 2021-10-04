class RecipesController < ApplicationController
  def index
    render inertia: 'RecipeList', props: {
      recipes: current_user.recipes,
      favList: current_user.favorites.recipe_ids
      # recipes: Recipe.all
    }
  end

  def favorites
    # raise
    render inertia: 'RecipeList', props: {
      recipes: Recipe.all.where(id: current_user.favorites.recipe_ids),
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
      recipe_owner_avatar: Recipe.find(params[:id]).user.avatar_blob,
      allComments: render_comments
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

  def render_comments
    @recipe = current_user.recipes.find(params[:id])
    @comments = @recipe.comments ## all of them

    # @comments.where(parent_id: nil).map do |parent|
    #   byebug
    #   parent.replies
    #   # parent_array = []
    #   # parent_array << parent.as_json

    #   # parent_array.filter_map do |element|
    #   #   # element is a hash
    #   #   pp element
    #   #   byebug
    #   # element << @comments.select { |childen| element['id'] == childen.parent_id }.as_json
    # end
  end
end

# [ # <Comment:0x000055e34e0b9230
#   [{ id: 852,
#      user_id: 17,
#      commentable_type: 'Recipe',
#      commentable_id: 201,
#      parent_id: nil,
#      body: 'Difficult to see. Always in motion is the future...' }],

#   [{
#     # <Comment:0x000055e34e0b9050
#     id: 853,
#     user_id: 20,
#     commentable_type: 'Recipe',
#     commentable_id: 201,
#     parent_id: nil,
#     body: 'Holy Olfactory'
#   },
#    {
#      # <Comment:0x000055e34e0b8ab0
#      id: 856,
#      user_id: 19,
#      commentable_type: 'Recipe',
#      commentable_id: 201,
#      parent_id: 853,
#      body: 'Cars look both ways for him, before driving down a street'
#    },
#    {
#      # <Comment:0x000055e34e0b8e70
#      id: 854,
#      user_id: 18,
#      commentable_type: 'Recipe',
#      commentable_id: 201,
#      parent_id: 853,
#      body: 'His feet don’t get blisters, but his shoes do'
#    },
#    {
#      # <Comment:0x000055e34e0b8c90
#      id: 855,
#      user_id: 19,
#      commentable_type: 'Recipe',
#      commentable_id: 201,
#      parent_id: 854,
#      body: 'When a tree falls in a forest and no one is there, he hears it'
#    }]
# ]
