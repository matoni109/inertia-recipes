class Users::SessionsController < Devise::SessionsController
  # GET /login
  def new
    render inertia: 'Auth/Login', props: {}
    # super
  end

  def create
    super
  end

  # DELETE /logout
  def destroy
    super
  end
end
