Dgswebsite::Application.routes.draw do
  get "posts/index"
  root to: 'posts#index'
end
