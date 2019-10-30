require "google/apis/calendar_v3"

class Api::V1::EventsController < ApiController
  def index
    auth = Signet::OAuth2::Client.new(
      token_credential_uri: 'https://oauth2.googleapis.com/token',
      access_token: current_user.access_token,
      client_id: ENV["GOOGLE_CLIENT_ID"],
      client_secret: ENV["GOOGLE_CLIENT_SECRET"],
      refresh_token: current_user.refresh_token
    )
    auth.scope = 'https://www.googleapis.com/auth/calendar.events'
    auth.fetch_access_token!
    calendar = Google::Apis::CalendarV3::CalendarService.new
    calendar.authorization = auth
    events = calendar.list_events("primary",
      time_max: (DateTime.now+3).rfc3339,
      single_events: true,
      order_by: "startTime",
      time_min: DateTime.now.rfc3339
    )
    render json: events.items
  end
end
