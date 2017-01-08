class CreateThotReferenceToOtherThots < ActiveRecord::Migration
  def change
    add_reference :thots, :parent, foreign_key: true
  end
end
