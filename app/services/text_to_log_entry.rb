class TextToLogEntry
  def initialize(text_body)
    @text_body = text_body
    @text_lines = @text_body.split("\n")
  end

  def create
    @text_lines.length == 1 ? create_from_single_line_text : create_from_multi_line_text
  end

  def create_from_single_line_text
    line = @text_lines[0]

    # If numeric single line text, it's a feeling
    if line !~ /\D/
      return LogEntry.create(
        category: 'feeling',
        content: LogEntry::FEELING_TYPES[line.to_i - 1],
        datetime: DateTime.now,
      )
    end

    LogEntry.create(
      content:line,
      datetime: DateTime.now,
    )
  end

  def create_from_multi_line_text

  end
end
