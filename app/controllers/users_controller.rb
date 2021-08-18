class UsersController < ApplicationController
  def destroy
    @user = current_user
    sign_out @user
    redirect_back fallback_location: user_session_path, allow_other_host: false
    # redirect_to user_session_path
  end

  private

  def user_params
    params.permit(:id, :user)
  end
end
# https://kshitijchoudhary.medium.com/for-anyone-who-is-still-struggling-with-this-heres-how-the-logout-would-work-fb4053026f42
# https://blog.usejournal.com/devise-with-react-webpacker-and-rails-dacbf9ae0233
