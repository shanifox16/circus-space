class AddTokensToUsers < ActiveRecord::Migration[5.2]
  def up
    add_column :users, :access_token, :string
    add_column :users, :refresh_token, :string
  end

  def down
    remove_column :users, :access_token
    remove_column :users, :refresh_token
  end
end
