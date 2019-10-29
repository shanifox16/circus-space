Rails.application.routes.draw do
  root 'homes#index'
  devise_for :users, controllers: { omniauth_callbacks: "users/omniauth_callbacks" }

  get '/dashboard', to: 'homes#index'
  get '/courses/:id', to: 'homes#index'
  get '/individual_classes/:id/class_summaries/new', to: 'homes#index'
  get '/class_summaries/:id', to: 'homes#index'

  namespace :api do
    namespace :v1 do
      resources :courses, only: [:show] do
        resources :individual_classes, only: [:index]
      end
      resources :individual_classes, only: [:show] do
        resources :class_summaries, only: [:index, :create]
      end
      resources :class_summaries, only: [:show]
      resources :events, only: [:index]
    end
  end
end
