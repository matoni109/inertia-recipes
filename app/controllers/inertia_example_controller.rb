class InertiaExampleController < ApplicationController
  def index
    render inertia: 'InertiaExample', props: {
      name: 'Worlds'
    }
  end
end
