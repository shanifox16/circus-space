class Api::V1::SummaryCommentsController < ApiController
  def create
    comment = SummaryComment.new(comment_params)
    comment.class_summary = ClassSummary.find(params[:class_summary_id])
    comment.user = current_user

    if comment.save
      render json: comment
    else
      render json: {
        errors: comment.errors.messages,
        fields: comment
      }
    end
  end

  private

  def comment_params
    params.require(:summary_comment).permit(:body)
  end
end
