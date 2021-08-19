class Users::RegistrationsController < Devise::RegistrationsController
  layout false
  before_action :configure_permitted_parameters, if: :devise_controller?

  def new
    render inertia: 'Users/FormDevise', props: {
      user: resource
    }
  end

  def create
    resource = params
    super do |resource|
      raise
      unless resource.persisted?
        clean_up_passwords resource
        set_minimum_password_length
        session[:errors] = resource.errors
        redirect_to new_user_registration_path, alert: 'There was a problem in your registration'
        return
      end
    end
  end

  protected

  def configure_permitted_parameters
    devise_parameter_sanitizer.permit(:registration, keys: %i[name email password])
  end
end
