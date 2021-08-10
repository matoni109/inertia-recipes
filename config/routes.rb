Rails.application.routes.draw do
  devise_for :users
  root to: 'inertia_example#index'
  get 'inertia-example', to: 'inertia_example#index'
  get 'pages/home'
  # root to: 'pages#home'
  resources :recipes, only: %i[index show new create]
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
