# # app/controllers/concerns/Inertiable.rb
# require 'active_support/concern'

# module Inertiable
#   extend ActiveSupport::Concern

#   included do
#     inertia_share errors: lambda {
#       session.delete(:errors) || []
#     }
#   end

#   def redirect_to(options = {}, response_options = {})
#     if (errors = response_options.delete(:errors))
#       session[:errors] = errors
#     end

#     super(options, response_options)
#   end
# end
