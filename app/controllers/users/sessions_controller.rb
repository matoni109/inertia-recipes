class Users::SessionsController < Devise::SessionsController
  # GET /login
  def new
    render inertia: 'Auth/Login', props: {}
    # super
  end

  # POST /login
  def create
    super
  end

  # DELETE /logout
  def destroy
    # raise
    super
    #     signed_out = (Devise.sign_out_all_scopes ? sign_out : sign_out(resource_name))
    # set_flash_message! :notice, :signed_out if signed_out
    # yield if block_given?
    # respond_to_on_destroy
    # # super
    # @user = current_user
    # sign_out @user
    # redirect_to new_user_session_path
    # render inertia: 'Auth/Login', props: {}
  end
end

# DELETE /resource/sign_out
# def destroy
#   signed_out = (Devise.sign_out_all_scopes ? sign_out : sign_out(resource_name))
#   set_flash_message! :notice, :signed_out if signed_out
#   yield if block_given?
#   respond_to_on_destroy
# end

# Processing by Users::SessionsController#destroy as TURBO_STREAM
#   Parameters: {"authenticity_token"=>"Z7fEZ_O874rPd-3raSAsULoifTknxrNXCXW0kIdh8t_yoF8Tk6Abm4D6sCzBeF-OyJRegkFueKTHN8b1aUhqsw"}
