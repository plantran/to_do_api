# This file should ensure the existence of records required to run the application in every environment (production,
# development, test). The code here should be idempotent so that it can be executed at any point in every environment.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Example:
#
#   ["Action", "Comedy", "Drama", "Horror"].each do |genre_name|
#     MovieGenre.find_or_create_by!(name: genre_name)
#   end

todo_seeds = [
  {
    title: "My first todo",
    description: "I must do something important",
    duedate: 2.weeks.from_now
  },
  {
    title: "Something not important",
    status: :in_progress,
  },
  {
    title: "Something I already did",
    status: :completed,
  },
  {
    title: "Another casual thing to do",
    description: "Lorem ipsum",
    duedate: 3.hours.from_now
  },
  {
    title: "Create a Rails application",
    status: :in_progress,
  },
]

Todo.destroy_all
Todo.create!(todo_seeds)
p "Created #{Todo.count} to-dos"
