class Users::RegistrationsController < Devise::RegistrationsController
  layout false
  before_action :configure_permitted_parameters, if: :devise_controller?

  def new
    render inertia: 'Users/FormDevise', props: {
      user: resource
    }
  end

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

  protected

  def configure_permitted_parameters
    devise_parameter_sanitizer.permit(:user, keys: %i[name email password])
  end
end
