# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
# require faker
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all
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

# user_array.each_with_index do |user, index|
#   file = File.open("./db/avatars/#{index}.jpeg")
#   make_me = User.create!(
#     first_name: user[:first_name],
#     last_name: user[:last_name],
#     email: user[:email],
#     password: '123456',
#     password_confirmation: '123456',
#     terms_of_service: true,
#     admin: false
#   )
#   make_me.avatar.attach(io: file, filename: "#{make_me.first_name}.jpeg", content_type: 'image/jpg')
#   puts "made #{make_me.first_name} #{make_me.last_name}"
# end
