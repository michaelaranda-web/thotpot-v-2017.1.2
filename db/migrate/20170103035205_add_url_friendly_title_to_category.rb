class AddUrlFriendlyTitleToCategory < ActiveRecord::Migration
  def change
    add_column :categories, :url_friendly_title, :string
  end
end
