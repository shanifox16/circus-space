Rails.application.routes.draw do
  root 'homes#index'
  devise_for :users, controllers: { omniauth_callbacks: "users/omniauth_callbacks" }

  namespace :api do
    namespace :v1 do
      resources :events, only: [:index]
    end
  end
end
