Rails.application.routes.draw do
  #
  # export the whole app to js_routes
  defaults export: true do
    devise_for :users, skip: %i[sessions passwords registrations]
    as :user do
      get 'login', to: 'users/sessions#new', as: :new_user_session
      post 'login', to: 'users/sessions#create', as: :user_session
      get 'new', to: 'users/registrations#new', as: :new_user_registration
      post 'new', to: 'users/registrations#create', as: :user_registration
      get 'edit', to: 'users/registrations#edit', as: :edit_user_registration
      patch 'edit', to: 'users/registrations#update', as: :update_user_registration
      match 'logout', to: 'users/sessions#destroy', as: :destroy_user_session, via: Devise.mappings[:user].sign_out_via
    end

    root to: 'recipes#index'
    get 'inertia-example', to: 'inertia_example#index'
    get 'pages/home'
    # root to: 'pages#home'
    resources :recipes, only: %i[index show new create edit update destroy]
    # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
    resources :users, only: [:show]
  end
end
