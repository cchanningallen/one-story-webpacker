# AdminUser.create(email: 'admin@example.com', password: 'password', password_confirmation: 'password') if Rails.env.development?

LogEntry.create(
  datetime: 2.days.ago,
  content: 'good',
  category: 'feeling',
)

LogEntry.create(
  datetime: 1.day.ago,
  content: %Q(15 min amrap

    15x power snatch, 75#
    30x double-under
    15x wall-ball, 20#
    30x double-under

    Score: 3 + 64
  ),
  category: 'exercise',
)

LogEntry.create(
  datetime: 5.minutes.ago,
  content: 'so-so',
  category: 'feeling',
)
