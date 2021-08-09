class InertiaExampleController < ApplicationController
  def index
    render inertia: 'InertiaExample', props: {
      name: 'You Tube'
      # user: current_user
    }
  end
end
