class CreatePersonalVideos < ActiveRecord::Migration[5.2]
  def change
    create_table :personal_videos do |t|
      t.string :title, null: false
      t.string :body, null: false
      t.boolean :public, default: false
      t.boolean :certified, default: false
      t.belongs_to :user, null: false
      t.belongs_to :course, null: false

      t.timestamps
    end
  end
end
