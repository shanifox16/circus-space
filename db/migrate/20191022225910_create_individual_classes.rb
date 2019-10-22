class CreateIndividualClasses < ActiveRecord::Migration[5.2]
  def change
    create_table :individual_classes do |t|
      t.string :name, null: false
      t.date :date, null: false
      t.belongs_to :course

      t.timestamps
    end
  end
end
