class Users::RegistrationsController < Devise::RegistrationsController
  layout false
  # before_action :configure_permitted_parameters, if: :devise_controller?

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
  def update
    self.resource = resource_class.to_adapter.get!(send(:"current_#{resource_name}").to_key)
    prev_unconfirmed_email = resource.unconfirmed_email if resource.respond_to?(:unconfirmed_email)
    resource_updated = update_resource(resource, account_update_params)
    yield resource if block_given?
    if resource_updated
      set_flash_message_for_update(resource, prev_unconfirmed_email)
      bypass_sign_in resource, scope: resource_name if sign_in_after_change_password?
      respond_with resource, location: after_update_path_for(resource)
    else
      clean_up_passwords resource
      set_minimum_password_length
      redirect_to edit_user_registration_path, inertia: { errors: resource.errors.messages }
    end
  end

  def configure_permitted_parameters
    devise_parameter_sanitizer.permit(:user, keys: %i[name email password])
  end

  # DEFAULT_PERMITTED_ATTRIBUTES =

  #     {
  #       sign_in: [:password, :remember_me],
  #       sign_up: [:password, :password_confirmation],
  #       account_update: [:password, :password_confirmation, :current_password]
  #     }
end
