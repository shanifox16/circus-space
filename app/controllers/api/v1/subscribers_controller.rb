class Api::V1::SubscribersController < ApiController

  def index
    data = HTTParty.get('https://us20.api.mailchimp.com/3.0/lists/fa6ed98e87/members',
      basic_auth: {username: ENV["MAILCHIMP_USERNAME"], password: ENV["MAILCHIMP_PASSWORD"]}
    )
    render json: data["members"]
  end

  def create
    data = HTTParty.post('https://us20.api.mailchimp.com/3.0/lists/fa6ed98e87/members',
      basic_auth: {username: ENV["MAILCHIMP_USERNAME"], password: ENV["MAILCHIMP_PASSWORD"]},
      content_type: "application/json",
      body: ({
        "email_address": params["email"],
        "status": "subscribed",
        "merge_fields": {
          "FNAME": params["fname"],
          "LNAME": params["lname"]
        }
      }).to_json
    )
    render json: data
  end
end
