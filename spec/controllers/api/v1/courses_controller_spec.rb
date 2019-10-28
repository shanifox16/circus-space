require "rails_helper"

RSpec.describe Api::V1::CoursesController, type: :controller do
  let!(:course1) { Course.create(
    name: "Silks 1",
    description: "This is a beginner aerial silks course. No prior knowledge required"
  ) }
  let!(:class1) { IndividualClass.create(
    name: "Class 1",
    date: "2019/10/08",
    course: course1
  ) }
  let!(:class2) { IndividualClass.create(
    name: "Class 2",
    date: "2019/17/08",
    course: course1
  ) }
  let!(:summary1) { ClassSummary.create(
    title: "Class 1 Summary",
    body: "This is the summary",
    homework: "Homework",
    individual_class: class1
  ) }
  let!(:student1) { FactoryBot.create(:user) }
  let!(:student2) { FactoryBot.create(:user, role: "instructor") }

  describe "GET#show" do
    it "should return the specified course, classes, summaries, students, and instructors" do
      user = FactoryBot.create(:user)
      sign_in user
      get :show, params: {id: course1.id}
      returned_json = JSON.parse(response.body)

      expect(response.status).to eq 200
      expect(response.content_type).to eq("application/json")
      expect(returned_json.length).to eq 1

      expect(returned_json["course"]["name"]).to eq "Silks 1"
      expect(returned_json["course"]["description"]).to eq "This is a beginner aerial silks course. No prior knowledge required"
      expect(returned_json["course"]["individual_classes"][0]["name"]).to eq "Class 1"
      expect(returned_json["course"]["individual_classes"][0]["date"]).to eq "2019-10-08"
      expect(returned_json["course"]["individual_classes"][0]["class_summary"]["title"]).to eq "Class 1 Summary"
      expect(returned_json["course"]["individual_classes"][0]["class_summary"]["body"]).to eq "This is the summary"
      expect(returned_json["course"]["individual_classes"][0]["class_summary"]["homework"]).to eq "Homework"
    end
  end
end
