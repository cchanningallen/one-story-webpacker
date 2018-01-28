Rails.application.routes.draw do
  root to: "pages#home"

  namespace :api, defaults: { format: :json } do
    resources :log_entries, only: [:index, :show]
  end
end
