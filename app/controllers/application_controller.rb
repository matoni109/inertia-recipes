class ApplicationController < ActionController::Base
  protect_from_forgery with: :null_session
  before_action :authenticate_user!

  # these are in app/concerns

  include InertiaCsrf
  include InertiaFlash
  # user lamba gives current user
  # avatar_blob
  # avatar_attachment

  inertia_share data: {
    avatar: -> { User.find_by(id: current_user.id).avatar },
    user: -> { current_user }
  }

  # Logout Path
  def after_sign_out_path_for(_resource_or_scope)
    new_user_session_path
  end

  # Update Path
  def after_update_path_for(resource)
    edit_user_registration_path(resource)
  end
end
