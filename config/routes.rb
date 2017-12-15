Rails.application.routes.draw do
  devise_for :admin_users, ActiveAdmin::Devise.config
  ActiveAdmin.routes(self)
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :contacts, only: [:new, :create]
  resources :tours, only: [:new, :create, :edit, :update, :destroy]
  resources :videos, only: [:new, :create, :edit, :update, :destroy]
  root "home#index"
end
