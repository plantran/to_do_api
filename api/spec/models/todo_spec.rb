require 'rails_helper'

RSpec.describe Todo, type: :model do
  it "is is invalid without a title" do
    todo = Todo.new(title: nil)
    expect(todo).to_not be_valid
  end

  it "is invalid with a title longer than 100 characters" do
    todo = Todo.new(title: "a" * 101)
    expect(todo).to_not be_valid
  end

  it "is invalid with a duedate in the past" do
    todo = Todo.new(duedate: 1.day.ago)
    expect(todo).to_not be_valid
  end
end
