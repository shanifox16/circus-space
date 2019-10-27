class AddVideosColumns < ActiveRecord::Migration[5.2]
  def up
    add_column :class_summaries, :video, :string
    add_column :personal_videos, :video, :string
  end

  def down
    remove_column :class_summaries, :video
    remove_column :personal_videos, :video
  end
end
