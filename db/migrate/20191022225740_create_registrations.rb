class CreateRegistrations < ActiveRecord::Migration[5.2]
  def change
    create_table :registrations do |t|
      t.belongs_to :user
      t.belongs_to :course

      t.timestamps
    end
  end
end
