class Api::LogEntriesController < ApplicationController
  def index
    @log_entries = LogEntry.all
  end

  def show
    @log_entry = LogEntry.find(params[:id])
  end
end
