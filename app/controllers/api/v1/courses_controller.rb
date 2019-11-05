class Api::V1::CoursesController < ApiController
  def index
    user_courses = []
    courses = Course.all
    courses.each do |course|
      course.users.each do |user|
        if user.id == current_user.id
          user_courses << course
        end
      end
    end
    render json: user_courses, each_serializer: CourseSerializer, scope: {current_user: current_user}
  end

  def show
    render json: Course.find(params[:id]), serializer: CourseSerializer, scope: {current_user: current_user}
  end
end
