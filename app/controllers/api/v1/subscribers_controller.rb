class Api::V1::SubscribersController < ApiController

  def index
    data = HTTParty.get('https://us20.api.mailchimp.com/3.0/lists/fa6ed98e87/members',
      basic_auth: {username: ENV["MAILCHIMP_USERNAME"], password: ENV["MAILCHIMP_PASSWORD"]}
    )
    render json: data["members"]
  end

  def create
    if params["status"] == "subscribed"
      data = HTTParty.post('https://us20.api.mailchimp.com/3.0/lists/fa6ed98e87/members',
        basic_auth: {username: ENV["MAILCHIMP_USERNAME"], password: ENV["MAILCHIMP_PASSWORD"]},
        content_type: "application/json",
        body: ({
          "email_address": params["email"],
          "status": params["status"],
          "merge_fields": {
            "FNAME": params["fname"],
            "LNAME": params["lname"]
          }
        }).to_json
      )
    else
      data = HTTParty.patch("https://us20.api.mailchimp.com/3.0/lists/fa6ed98e87/members/#{params["mailchimpId"]}",
        basic_auth: {username: ENV["MAILCHIMP_USERNAME"], password: ENV["MAILCHIMP_PASSWORD"]},
        content_type: "application/json",
        body: ({
          "status": params["status"]
        }).to_json
      )
    end
    render json: data
  end
end
