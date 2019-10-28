Rails.application.routes.draw do
  root 'homes#index'
  devise_for :users, controllers: { omniauth_callbacks: "users/omniauth_callbacks" }

  get '/dashboard', to: 'homes#index'
  get '/courses/:id', to: 'homes#index'

  namespace :api do
    namespace :v1 do
      resources :courses, only: [:show] do
        resources :individual_classes, only: [:index] do
          resources :class_summaries, only: [:index]
        end
      end
      resources :events, only: [:index]
    end
  end
end
