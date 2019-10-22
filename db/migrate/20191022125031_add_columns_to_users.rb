class AddColumnsToUsers < ActiveRecord::Migration[5.2]
  def up
    add_column :users, :role, :string, null: false, default: "student"
    add_column :users, :fname, :string, null: false
    add_column :users, :lname, :string, null: false
    add_column :users, :username, :string, null: false
  end

  def down
    remove_column :users, :role
    remove_column :users, :fname
    remove_column :users, :lname
    remove_column :users, :username
  end
end
