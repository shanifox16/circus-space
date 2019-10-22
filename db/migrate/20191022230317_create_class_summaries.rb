class CreateClassSummaries < ActiveRecord::Migration[5.2]
  def change
    create_table :class_summaries do |t|
      t.string :title, null: false
      t.string :body, null: false
      t.string :homework, null: false
      t.belongs_to :individual_class

      t.timestamps
    end
  end
end
