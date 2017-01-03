class RemoveCategoryFromThot < ActiveRecord::Migration
  def change
    remove_column :thots, :category, :string
  end
end
