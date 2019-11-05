require "google/apis/calendar_v3"

class Api::V1::NotificationsController < ApiController
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
      time_max: (DateTime.now).rfc3339,
      single_events: true,
      order_by: "startTime",
      time_min: (DateTime.now-1).rfc3339
    )

    mailchimpData = HTTParty.get('https://us20.api.mailchimp.com/3.0/lists/fa6ed98e87/members',
      basic_auth: {username: ENV["MAILCHIMP_USERNAME"], password: ENV["MAILCHIMP_PASSWORD"]}
    )

    notification_list = []
    recentSummaries = []
    recentComments = []
    recentVideos = []
    recentSubscribers = []

    ClassSummary.all.each do |summary|
      if summary.created_at > (Date.today - 3)
        recentSummaries << summary
      end
    end

    SummaryComment.all.each do |comment|
      if comment.created_at > (Date.today - 3)
        recentComments << comment
      end
    end

    PersonalVideo.all.each do |video|
      if video.created_at > (Date.today - 3)
        recentVideos << video
      end
    end

    mailchimpData["members"].each do |member|
      if Date.strptime(member["last_changed"]) > (Date.today - 3)
        recentSubscribers << member
      end
    end

    activity_data = []
    summaryCount = 0
    commentCount = 0
    eventCount = 0
    videoCount = 0
    subscriberCount = 0

    recentSummaries.each do |summary|
      notification_list << summary
      summaryCount += 1
    end

    recentComments.each do |comment|
      notification_list << comment
      commentCount += 1
    end

    events.items.each do |event|
      notification_list << event_info(event)
      eventCount += 1
    end

    recentVideos.each do |video|
      notification_list << video
      videoCount += 1
    end

    recentSubscribers.each do |subscriber|
      notification_list << member_info(subscriber)
      subscriberCount += 1
    end

    activity_data = [
      ["Activity", "Posts"],
      ["Summaries", summaryCount],
      ["Comments", commentCount],
      ["Events", eventCount],
      ["Videos", videoCount],
      ["Subscribers", subscriberCount]
    ]

    notification_list.sort_by! { |notification| notification[:created_at] }.reverse!

    render json: {
      current_user: current_user,
      users: User.all,
      notifications: notification_list,
      activity_data: activity_data
    }
  end

  def member_info(member)
    date = Time.zone.parse(member["last_changed"])
    {
      id: member["unique_email_id"],
      email: member["email_address"],
      fname: member["merge_fields"]["FNAME"],
      lname: member["merge_fields"]["LNAME"],
      created_at: date
    }
  end

  def event_info(event)
    date = Time.zone.parse(event.start.date_time.to_s)
    {
      id: event.id,
      summary: event.summary,
      created_at: date
    }
  end
end
