class ChangeDueDateType < ActiveRecord::Migration[7.1]
  def up
    change_column :todos, :duedate, :date
  end

  def down
    change_column :todos, :duedate, :datetime
  end
end
