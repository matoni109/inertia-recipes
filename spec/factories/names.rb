FactoryBot.define do
  factory :name do
    Comment { "MyString" }
    user { nil }
    commentable { nil }
    parent_id { 1 }
    body { "MyText" }
  end
end
