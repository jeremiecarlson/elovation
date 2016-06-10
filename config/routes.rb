Elovation::Application.routes.draw do
  get 'hello_world', to: 'hello_world#index'
  resources :games do
    resources :results, only: [:create, :destroy, :new]
    resources :ratings, only: [:index]
  end

  resources :players do
    resources :games, only: [:show], controller: 'player_games'
  end

  get '/dashboard' => 'dashboard#show', as: :dashboard

  get 'pong_app', to: 'pong_app#index'

  root 'pong_app#index'
end
