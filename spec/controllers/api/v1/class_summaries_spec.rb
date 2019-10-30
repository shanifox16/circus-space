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
  let!(:summary1) { ClassSummary.create(
    title: "Class 1 Summary",
    body: "This is the summary",
    homework: "Homework",
    individual_class: class1
  ) }

  describe "GET#show" do
    it "should return the specified class summary" do
      user = FactoryBot.create(:user)
      sign_in user
      get :show, params: {id: summary1.id}
      returned_json = JSON.parse(response.body)

      expect(response.status).to eq 200
      expect(response.content_type).to eq("application/json")
      expect(returned_json.length).to eq 1

      expect(returned_json["class_summary"]["title"]).to eq "Class 1 Summary"
      expect(returned_json["class_summary"]["body"]).to eq "This is the summary"
      expect(returned_json["class_summary"]["homework"]).to eq "Homework"
      expect(returned_json["class_summary"]["individual_class_id"]).to eq 1
    end
  end

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
