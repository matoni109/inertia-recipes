Rails.application.routes.draw do
  # devise_for :users

  devise_for :users, skip: %i[sessions passwords registrations]
  as :user do
    get 'login', to: 'users/sessions#new', as: :new_user_session
    post 'login', to: 'users/sessions#create', as: :user_session
    match 'logout', to: 'users/sessions#destroy', as: :destroy_user_session, via: Devise.mappings[:user].sign_out_via
  end

  root to: 'recipes#index'
  get 'inertia-example', to: 'inertia_example#index'
  get 'pages/home'
  # root to: 'pages#home'
  resources :recipes, only: %i[index show new create edit update destroy]
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  resources :users, only: [:destroy]
end
