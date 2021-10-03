class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  before_commit :add_default_avatar, on: %i[create update]
  attribute :name, :string, default: 'User'

  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable

  has_many :recipes, dependent: :destroy
  has_many :favorites, inverse_of: :user, dependent: :destroy
  has_many :comments, dependent: :nullify

  has_one_attached :avatar do |attachable|
    attachable.variant :thumb, resize: '100x100'
  end

  private

  def add_default_avatar
    unless avatar.attached?
      avatar.attach(
        io: File.open(
          Rails.root.join(
            'app', 'assets', 'images', 'default.jpeg'
          )
        ),
        filename: 'default.jpeg',
        content_type: 'image/jpeg'
      )
    end
  end
end

# begin
#   person = User.first
#   person.destroy! #=> Note the exclamation mark which will cause an error if it fails
# rescue ActiveRecord::RecordNotDestroyed => error
#   puts "errors that prevented destruction: #{error.record}"
# end

# https://github.com/jenseng/immigrant/issues/31
