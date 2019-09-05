class Api::SessionsController < ApplicationController

  def create
    user = User.find_by_credentials(
      params[:user][:username],
      params[:user][:password]
    )

    if user
      sign_in(user)
      # render the show of the user!!!!!!
    else
      render json: { errors: 'Invalid credentials' }, status: 422
    end
  end

  def destroy
    if current_user
      sign_out
      render json: {}
    else
      render json: { errors: current_user.errors.full_messages }, status: 404
    end
  end
end
