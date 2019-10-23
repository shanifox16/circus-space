class CreateSummaryComments < ActiveRecord::Migration[5.2]
  def change
    create_table :summary_comments do |t|
      t.string :body, null: false
      t.belongs_to :user
      t.belongs_to :class_summary

      t.timestamps
    end
  end
end
