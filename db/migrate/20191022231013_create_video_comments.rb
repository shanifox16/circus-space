class CreateVideoComments < ActiveRecord::Migration[5.2]
  def change
    create_table :video_comments do |t|
      t.string :body, null: false
      t.belongs_to :personal_video, null: false
      t.belongs_to :user, null: false

      t.timestamps
    end
  end
end
