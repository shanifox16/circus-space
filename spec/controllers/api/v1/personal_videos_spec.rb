require "rails_helper"

RSpec.describe Api::V1::PersonalVideosController, type: :controller do
  let!(:course1) { Course.create(
    name: "Silks 1",
    description: "This is a beginner aerial silks course. No prior knowledge required"
  ) }
  let!(:user1) { FactoryBot.create(:user) }
  let!(:video1) { PersonalVideo.create(
    title: "Star Drop",
    body: "Sideways-facing drop",
    course: course1,
    user: user1,
    public: true,
    certified: false
  ) }
  let!(:video2) { PersonalVideo.create(
    title: "360 Drop",
    body: "Vertical drop",
    course: course1,
    user: user1,
    public: false,
    certified: false
  ) }

  describe "GET#index" do
    it "should return all public videos" do
      user = FactoryBot.create(:user)
      sign_in user
      get :index
      returned_json = JSON.parse(response.body)

      expect(response.status).to eq 200
      expect(response.content_type).to eq("application/json")
      expect(returned_json.length).to eq 1

      expect(returned_json["personal_videos"][0]["title"]).to eq "Star Drop"
      expect(returned_json["personal_videos"][0]["body"]).to eq "Sideways-facing drop"
      expect(returned_json["personal_videos"][0]["public"]).to eq true
      expect(returned_json["personal_videos"][0]["certified"]).to eq false
    end
  end

  describe "GET#show" do
    it "should return the specified video" do
      user = FactoryBot.create(:user)
      sign_in user
      get :show, params: {id: video1.id}
      returned_json = JSON.parse(response.body)

      expect(response.status).to eq 200
      expect(response.content_type).to eq("application/json")
      expect(returned_json.length).to eq 1

      expect(returned_json["personal_video"]["title"]).to eq "Star Drop"
      expect(returned_json["personal_video"]["body"]).to eq "Sideways-facing drop"
      expect(returned_json["personal_video"]["public"]).to eq true
      expect(returned_json["personal_video"]["certified"]).to eq false
    end
  end

  describe "POST#create" do
    it "creates a new video" do
      user = FactoryBot.create(:user)
      sign_in user
      post_json = {
        title: "Newest video",
        body: "Making progress",
        course: course1,
        user: user1,
        public: true,
        certified: false
      }
      prev_count = PersonalVideo.count
      post :create, params: post_json, format: :json
      expect(PersonalVideo.count).to eq(prev_count + 1)
    end
  end
end
