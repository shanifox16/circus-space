class Api::V1::PersonalVideosController < ApiController
  def create
  end

  private

  def video_params
    # Add video here
    # Using params[:video] will access the video file from Dropzone
  end
end
