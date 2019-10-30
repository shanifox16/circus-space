class Api::V1::SubscribersController < ApiController

  def index
    data = HTTParty.get('https://us20.api.mailchimp.com/3.0/lists/fa6ed98e87/members',
      basic_auth: {username: 'shanifox16', password: '73c8ed95e3ecc43e886481a1ef158901-us20'}
    )
    render json: data["members"]
  end

  def create
    data = HTTParty.post('https://us20.api.mailchimp.com/3.0/lists/fa6ed98e87/members',
      basic_auth: {username: 'shanifox16', password: '73c8ed95e3ecc43e886481a1ef158901-us20'},
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
