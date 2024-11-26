class ApplicationController < ActionController::API
  before_action :check_token

  rescue_from ActiveRecord::RecordNotFound, with: :record_not_found
  rescue_from StandardError, with: :internal_server_error

  private

  def check_token
    return if request.headers["Authorization"] == ENV["API_TOKEN"]

    render json: {
      error: {
        code: "unauthorized",
        message: "Please provide the secret authorization token in the request",
      }
    }, status: :unauthorized
  end

  def record_not_found(exception)
    render json: {
      error: {
        code: "not_found",
        message: exception.message,
        details: {
          resource: exception.model,
          id: exception.id
        }
      }
    }, status: :not_found
  end

  def internal_server_error(exception)
    extra_info = if Rails.env.production?
      {}
    else
      { details: { error_class: exception.class.name, error_message: exception.message } }
    end

    render json: {
      error: {
        code: "internal_server_error",
        message: "An unexpected error occurred",
        **extra_info
      }
    }, status: :internal_server_error
  end
end
