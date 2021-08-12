FactoryBot.define do
  factory :recipe do
    name { Faker::Food.dish }
    description { Faker::Food.description }
  end
end
