class ApplicationController < ActionController::Base
  before_action :authenticate_user!
  # user lamba gives current user
  inertia_share user: -> { current_user }
end
