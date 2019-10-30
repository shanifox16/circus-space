require "rails_helper"

RSpec.describe Api::V1::SummaryCommentsController, type: :controller do
  let!(:course1) { Course.create(
    name: "Silks 1",
    description: "This is a beginner aerial silks course. No prior knowledge required"
  ) }
  let!(:class1) { IndividualClass.create(
    name: "Class 1",
    date: "2019/10/08",
    course: course1
  ) }
  let!(:summary1) { ClassSummary.create(
    title: "Class 1 Summary",
    body: "This is the summary",
    homework: "Homework",
    individual_class: class1
  ) }

  describe "POST#create" do
    it "creates a new summary comment" do
      user = FactoryBot.create(:user)
      sign_in user
      post_json = {
        summary_comment: {
          body: "I need help with this class!",
          user_id: user.id
        },
        class_summary_id: summary1.id
      }
      prev_count = SummaryComment.count
      post :create, params: post_json, format: :json
      expect(SummaryComment.count).to eq(prev_count + 1)
    end
  end
end
