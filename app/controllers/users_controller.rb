class UsersController < ApplicationController
  def destroy
    @user = current_user
    sign_out @user
    render inertia: 'Auth/Login', props: {}
  end

  private

  def user_params
    params.permit(:id, :user)
  end
end
# https://kshitijchoudhary.medium.com/for-anyone-who-is-still-struggling-with-this-heres-how-the-logout-would-work-fb4053026f42
# https://blog.usejournal.com/devise-with-react-webpacker-and-rails-dacbf9ae0233
# https://gitlab.com/zedtux/rails-react-devise-bootstrap
# https://www.linkedin.com/pulse/polymorphic-favorites-rails-6-hotwire-enoch-tamulonis/
# https://stackoverflow.com/questions/21817019/rails-polymorphic-favorites-user-can-favorite-different-models
# https://gorails.com/search?q=nested+comments+
