Rails.application.routes.draw do
  #users routing
  get 'users/index' => "users#index"
  get 'users/new' => "users#new"
  
  #home routing
  get '/' => "home#top"


end
