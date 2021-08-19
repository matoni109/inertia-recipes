class ApplicationController < ActionController::Base
  protect_from_forgery with: :reset_session
  # protect_from_forgery
  skip_before_action :verify_authenticity_token

  before_action :authenticate_user!
  # user lamba gives current user
  inertia_share user: -> { current_user }

  # Logout Path
  # def after_sign_out_path_for(_resource_or_scope)
  #   # raise 'SIGN IN TEST'
  #   redirect_to new_user_session_path
  # end

  inertia_share flash: lambda {
    {
      message: flash.notice
    }
  }
end
