# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#

Comment.destroy_all
User.destroy_all
Favorite.destroy_all
Recipe.destroy_all

# Kills all Active storage items ##
ActiveStorage::Attachment.all.each { |attachment| attachment.purge }
puts 'cleaning finished :)'

user_array = [
  {
    first_name: 'Taylor',
    last_name: 'Scott',
    email: 'taylor@democorp.com',
    password: '123456',
    password_confirmation: '123456'

  },
  {
    first_name: 'Jamie',
    last_name: 'Lambstock',
    email: 'jamie@democorp.com',
    password: '123456',
    password_confirmation: '123456'

  },
  {
    first_name: 'Ash',
    last_name: 'Smith',
    email: 'ash@democorp.com',
    password: '123456',
    password_confirmation: '123456'

  },
  {
    first_name: 'Alex',
    last_name: 'Quinn',
    email: 'alex@democorp.com',
    password: '123456',
    password_confirmation: '123456'

  }
]

user_array.each_with_index do |user, index|
  file = File.open("./db/avatars/#{index}.jpeg")
  make_me = User.create!(
    name: user[:first_name],
    # last_name: user[:last_name],
    email: user[:email],
    password: '123456',
    password_confirmation: '123456'
  )
  make_me.avatar.attach(io: file, filename: "#{make_me.name}.jpeg", content_type: 'image/jpg')
  puts "made #{make_me.name} "
end

50.times { Recipe.create(name: Faker::Food.dish, description: Faker::Food.description, user: User.all.sample) }

puts '--- Making Favourites Start !'

count_fav = 0
until count_fav == 25
  # make_me = Favourite.new(
  #   favorited_type: Bike,
  #   favorited_id: Bike.pluck(:id).sample,
  #   user_id: User.pluck(:id).sample
  # )
  make_me = User.where(id: User.pluck(:id).sample).first
                .favorites.build(favoritable: Recipe.where(id: Recipe.pluck(:id).sample).first)
  if make_me.valid?
    make_me.save!
    count_fav += 1
    puts "made Favourite # #{make_me.id}"
  else
    puts "Fav didn't work out ..."
  end

end
## comment generator
# each Recipe
Recipe.all.each do |recipe|
  comment_one = Comment.create!(
    body: Faker::Quote.unique.yoda,
    parent_id: nil,
    commentable_type: 'Recipe',
    commentable_id: recipe.id,
    user_id: recipe.user_id
  )
  puts recipe.name.to_s
  puts "made Comment # #{comment_one.id}"
  user_id_array = User.all.ids.delete_if { |n| n == recipe.user_id }

  comment_two = Comment.create!(
    body: Faker::Quote.robin,
    parent_id: nil,
    commentable_type: 'Recipe',
    commentable_id: recipe.id,
    user_id: user_id_array.sample
  )
  puts "made Comment # #{comment_two.id}"
  user_id_array_comment_2 = user_id_array.delete_if { |n| n == comment_two.user_id }

  comment_two_b = Comment.create!(
    body: Faker::Quote.unique.most_interesting_man_in_the_world,
    parent_id: comment_two.id,
    commentable_type: 'Recipe',
    commentable_id: recipe.id,
    user_id: user_id_array_comment_2.sample
  )
  puts "made Comment # #{comment_two_b.id}"
  user_id_array_comment_2b = user_id_array.delete_if { |n| n == comment_two_b.user_id }

  comment_two_c = Comment.create!(
    body: Faker::Quote.unique.most_interesting_man_in_the_world,
    parent_id: comment_two_b.id,
    commentable_type: 'Recipe',
    commentable_id: recipe.id,
    user_id: user_id_array_comment_2b.sample
  )
  puts "made Comment # #{comment_two_c.id}"

  Faker::UniqueGenerator.clear # Clears used values for all generators
end
