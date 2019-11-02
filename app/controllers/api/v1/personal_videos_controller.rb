class Api::V1::PersonalVideosController < ApiController
  def index
    render json: PersonalVideo.where(public: true)
  end

  def show
    render json: PersonalVideo.find(params[:id])
  end

  def new
    render json: current_user.courses
  end

  def create
    params[:course] = params[:course].to_i
    video = PersonalVideo.new(
      title: params[:title],
      body: params[:body],
      public: params[:public],
      video: params[:video],
      course_id: params[:course]
    )
    video.user = current_user

    if video.save
      render json: video
    else
      render json: {
        errors: video.errors.messages,
        fields: video
      }
    end
  end
end
