class ApplicationController < ActionController::Base
  protect_from_forgery with: :null_session
  before_action :authenticate_user!

  # these are in app/concerns

  include InertiaCsrf
  include InertiaFlash
  # include Inertiable
  # user lamba gives current user
  # avatar_blob
  # avatar_attachment
  # https://edgeguides.rubyonrails.org/active_storage_overview.html

  inertia_share data: {
    avatar: -> { User.find_by(id: current_user.id).avatar_blob if current_user && current_user.avatar.attached? },
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
