FactoryBot.define do
  factory :user do
    email { Faker::Internet.email }
    name { Faker::Name.name }
    password { '123456' }
    password_confirmation { '123456' }
    # user
  end
end

# {
#   first_name: 'Ash',
#   last_name: 'Smith',
#   email: 'ash@democorp.com',
#   password: '123456',
#   password_confirmation: '123456'
# }
