class CreateCourses < ActiveRecord::Migration[5.2]
  def change
    create_table :courses do |t|
      t.string :name, null: false
      t.string :description, null: false

      t.timestamps
    end
  end
end
