class HomesController < ApplicationController
  before_action :authenticate_user!
  before_action :authorize_user, only: [:create]

  def index
  end

  def create
  end

  protected
  def authorize_user
    if !user_signed_in? || current_user.role != "instructor"
      raise ActionController::RoutingError.new("As a student, you do not have access to this page")
    end
  end
end
