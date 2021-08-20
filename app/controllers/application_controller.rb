class ApplicationController < ActionController::Base
  protect_from_forgery with: :null_session
  before_action :authenticate_user!

  # these are in app/concerns

  include InertiaCsrf
  include InertiaFlash
  # user lamba gives current user
  inertia_share user: -> { current_user }

  # Logout Path
  def after_sign_out_path_for(_resource_or_scope)
    new_user_session_path
  end
end
