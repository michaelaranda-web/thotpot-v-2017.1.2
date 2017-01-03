class AddCategoryToThots < ActiveRecord::Migration
  def change
    add_reference :thots, :category, index: true, foreign_key: true
  end
end
