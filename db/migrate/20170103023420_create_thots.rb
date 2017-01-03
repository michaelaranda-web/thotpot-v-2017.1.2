class CreateThots < ActiveRecord::Migration
  def change
    create_table :thots do |t|
      t.string :title
      t.text :details

      t.timestamps null: false
    end
  end
end
