
module Api
  module V1
    class TodosController < ApplicationController
      before_action :set_todo, only: [:show, :update, :destroy, :change_state]

      def index
        page = params[:page].presence.to_i || 1
        todos = Todo.all
        todos = todos.where_title_or_description_contains(params[:search]) if params[:search].present?
        todos = todos.page(page)
        render json: { todos: todos, meta: { total_pages: todos.total_pages } }, status: :ok
      end

      def show
        render json: @todo, status: :ok
      end

      def create
        todo = Todo.new(todo_params)
        if todo.save
          render json: todo, status: :created
        else
          render json: { error: { message: todo.errors.messages }}, status: :unprocessable_entity
        end
      end

      def update
        if @todo.update(todo_params)
          render json: @todo, status: :ok
        else
          render json: { error: { message: @todo.errors.messages }}, status: :unprocessable_entity
        end
      end

      def destroy
        @todo.destroy
        render status: :no_content
      end

      def change_state
        @todo.update(status: params[:status])
        render json: @todo, status: :ok
      end

      private

      def set_todo
        @todo = Todo.find(params[:id])
      end

      def todo_params
        params.require(:todo).permit(:title, :description, :duedate, :status)
      end
    end
  end
end
