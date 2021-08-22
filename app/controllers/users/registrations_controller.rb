class Users::RegistrationsController < Devise::RegistrationsController
  layout false
  before_action :configure_permitted_parameters, if: :devise_controller?

  # GET /resource/
  def new
    render inertia: 'Devise/Registrations/New', props: {
      user: resource
    }
  end

  # POST /resource
  def create
    super do |resource|
      # raise
      unless resource.persisted?
        clean_up_passwords resource
        set_minimum_password_length
        session[:errors] = resource.errors.messages
        redirect_to new_user_registration_path, inertia: { errors: resource.errors.messages }
        return
      end
    end
  end

  # GET /resource/edit
  def edit
    render inertia: 'Devise/Registrations/Edit', props: {
      user: resource
    }
  end

  # PUT /resource
  # We need to use a copy of the resource because we don't want to change
  # the current user in place.
  def update
    super
  end

  protected

  def configure_permitted_parameters
    devise_parameter_sanitizer.permit(:user, keys: %i[name email password])
  end
end
