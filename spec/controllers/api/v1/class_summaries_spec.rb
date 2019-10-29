require "rails_helper"

RSpec.describe Api::V1::ClassSummariesController, type: :controller do
  let!(:course1) { Course.create(
    name: "Silks 1",
    description: "This is a beginner aerial silks course. No prior knowledge required"
  ) }
  let!(:class1) { IndividualClass.create(
    name: "Class 1",
    date: "2019/10/08",
    course: course1
  ) }

  describe "POST#create" do
    it "creates a new class summary" do
      user = FactoryBot.create(:user)
      sign_in user
      post_json = {
        title: "Hardest class",
        body: "This was a tough one",
        homework: "Take a break",
        individual_class_id: class1.id
      }
      prev_count = ClassSummary.count
      post :create, params: post_json, format: :json
      expect(ClassSummary.count).to eq(prev_count + 1)
    end
  end
end
