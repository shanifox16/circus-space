class Api::V1::CoursesController < ApiController
  def show
    render json: Course.find(params[:id]), serializer: CourseSerializer, scope: {current_user: current_user}
  end
end
