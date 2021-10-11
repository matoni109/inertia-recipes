class Comment < ApplicationRecord
  belongs_to :user, optional: true
  belongs_to :commentable, polymorphic: true
  belongs_to :parent, optional: true, class_name: 'Comment'
  ## below might be optional ??
  has_many :replies, class_name: 'Comment', foreign_key: :parent_id, dependent: :destroy

  ## validations :
  validates :body, length: { minimum: 2, too_short: '%{count} characters is the minimum allowed' }

  ## scope
  scope :comment_user, -> { comments_user_hash }

  def comments
    Comment.where(commentable: commentable, parent_id: id)
  end

  def destroy
    update(user: nil, body: 'comment deleted by user')
  end

  def deleted?
    user.nil?
  end

  def comments_hash
    {
      user: user,
      avatar_key: user.avatar.key,
      comment: self
    }
  end
  # Alternatively, we could move all the children to point to our parent instead

  # def child_comments
  # Comment.where(parent: self)
  # end

  # before_destroy :handle_children

  # def handle_children
  # child_comments.update_all(parent_id: parent_id)
  # end
end
