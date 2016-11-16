Rails.application.routes.draw do
  resources :welcome, only: [:index]
  root 'welcome#index'
  get '/welcome/events', to: 'welcome#events', as: 'events'
end
