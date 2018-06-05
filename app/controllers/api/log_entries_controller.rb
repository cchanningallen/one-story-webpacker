class Api::LogEntriesController < ApplicationController
  skip_before_action :verify_authenticity_token, only: :text
  before_action :validate_twilio_request, only: :text

  def index
    @log_entries = LogEntry.all.order(datetime: :desc)
  end

  def show
    @log_entry = LogEntry.find(params[:id])
  end

  def text
    ap "*"*100
    ap "RECEIVED A TEXT!!!"
    ap TextToLogEntry.new(text_params[:Body]).create
    ap "*"*100
  end

  private

  def text_params
    params.permit(:Body, :From)
  end

  def validate_twilio_request
    params[:From] == "+#{ENV['TWILIO_ACCOUNT_NUMBER']}"
  end
end
