module Api
  class UsersController < ApplicationController
  
    before_action :authenticate_user_from_token!

    def index
      if current_user
        @users = User.all
      	render json: @users
      else
      	render json: {}, status: :unauthorized
      end
    end

  end
end