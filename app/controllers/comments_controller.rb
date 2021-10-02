class CommentsController < ApplicationController
  # before_action :authenticate_user!
  # https://levelup.gitconnected.com/per-my-last-comment-creating-reply-threads-in-your-react-rails-app-d8334a00dfa1
  # https://codesandbox.io/s/llmk22kz19?file=/src/Comments.jsx
  # https://codesandbox.io/s/use-comments-demo-tailwind-pvhgw?file=/src/index.js
  # https://www.commont.app/docs

  def create
    @comment = @commentable.comments.new(comment_params)
    @comment.user = current_user
    if @comment.save
      redirect_to @commentable
    else
      redirect_to @commentable, alert: 'Something went wrong'
    end
  end

  private

  def comment_params
    params.require(:comment).permit(:body, :parent_id)
  end
end
