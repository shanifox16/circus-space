class Api::V1::CoursesController < ApiController
  def show
    render json: Course.find(params[:id])
  end
end
