Rails.application.routes.draw do
  root 'homes#index'
  devise_for :users, controllers: { omniauth_callbacks: "users/omniauth_callbacks" }

  get '/dashboard', to: 'homes#index'
  get '/courses', to: 'homes#index'
  get '/courses/:id', to: 'homes#index'
  get '/individual_classes/:id/class_summaries/new', to: 'homes#create'
  get '/class_summaries/:id', to: 'homes#index'
  get '/personal_videos', to: 'homes#index'
  get '/personal_videos/new', to: 'homes#index'
  get '/personal_videos/:id', to: 'homes#index'
  get '/users/:id/personal_videos', to: 'homes#index'
  get '/events/new', to: 'homes#create'

  namespace :api do
    namespace :v1 do
      resources :courses, only: [:index, :show] do
        resources :individual_classes, only: [:index]
      end
      resources :individual_classes, only: [:show] do
        resources :class_summaries, only: [:index, :create]
      end
      resources :class_summaries, only: [:show] do
        resources :summary_comments, only: [:index, :create]
      end
      resources :users, only: [:show] do
        member do
          get :personal_videos
          post :delete_personal_video
        end
      end
      resources :personal_videos, only: [:index, :show, :new, :create, :update]
      resources :notifications, only: [:index]
      resources :events, only: [:index, :create]
      resources :subscribers, only: [:index, :create]
    end
  end
end
