class ApplicationController < ActionController::Base
  before_action :authenticate_user!
  # user lamba gives current user
  inertia_share user: -> { current_user }

  # Logout Path
  def after_sign_out_path_for(_resource_or_scope)
    # raise 'SIGN IN TEST'
    new_user_session_path
  end

  inertia_share flash: lambda {
    {
      message: flash.notice
    }
  }
end
