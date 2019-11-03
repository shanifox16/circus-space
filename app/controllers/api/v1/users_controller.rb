class Api::V1::UsersController < ApiController
  def personal_videos
    user_videos = PersonalVideo.where(user_id: params[:id])
    render json: user_videos
  end
end
