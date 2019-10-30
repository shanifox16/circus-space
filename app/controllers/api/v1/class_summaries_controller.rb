class Api::V1::ClassSummariesController < ApiController
  def show
    summary = ClassSummary.find(params[:id])
    render json: summary, serializer: ClassSummarySerializer, scope: {current_user: current_user}
  end

  def create
    summary = ClassSummary.new(summary_params)
    individual_class = IndividualClass.find(params[:individual_class_id])
    summary.individual_class = individual_class

    if summary.save
      render json: summary
    else
      render json: {
        errors: summary.errors.messages,
        fields: summary
      }
    end
  end

  private

  def summary_params
    params.permit(:title, :body, :homework, :video)
  end
end
