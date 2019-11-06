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
    auth.expires_in = 1.week.from_now
    calendar = Google::Apis::CalendarV3::CalendarService.new
    calendar.authorization = auth
    calendar.authorization.refresh!

    events = calendar.list_events("primary",
      time_max: (DateTime.now+14).rfc3339,
      single_events: true,
      order_by: "startTime",
      time_min: (DateTime.now-1).rfc3339
    )
    render json: events.items
  end

  def create
    auth = Signet::OAuth2::Client.new(
      token_credential_uri: 'https://oauth2.googleapis.com/token',
      access_token: current_user.access_token,
      client_id: ENV["GOOGLE_CLIENT_ID"],
      client_secret: ENV["GOOGLE_CLIENT_SECRET"],
      refresh_token: current_user.refresh_token
    )
    auth.expires_in = 1.week.from_now
    calendar = Google::Apis::CalendarV3::CalendarService.new
    calendar.authorization = auth
    calendar.authorization.refresh!

    start_date = DateTime.parse("#{params[:date]} #{params[:start]}")
    end_date = DateTime.parse("#{params[:date]} #{params[:end]}")
    new_event = Google::Apis::CalendarV3::Event.new({
      'summary': params[:name],
      'start': {
        'date_time': start_date,
        'time_zone': Time.now.getlocal.zone
      },
      'end': {
        'date_time': end_date,
        'time_zone': Time.now.getlocal.zone
      },
      'location': params[:location],
      'attendees': [{'email': params[:attendee]}]
    })
    calendar.insert_event('primary', new_event)

    render json: new_event
  end
end
