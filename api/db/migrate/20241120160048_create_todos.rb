class CreateTodos < ActiveRecord::Migration[7.1]
  def change
    create_table :todos do |t|
      t.string :title, null: false
      t.text :description, null: true
      t.integer :status, null: false, default: 0
      t.datetime :duedate, null: true

      t.timestamps
    end
  end
end
