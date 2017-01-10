class Thot < ActiveRecord::Base
  belongs_to :parent, class_name: "Thot"
  has_many :thots, foreign_key: "parent_id"

  def self.search(search)
    search_results = where("title || details LIKE ?", "%#{search}%")
    filter_child_results(search_results)
  end

  private

  def self.filter_child_results(query)
    query.where(parent_id: nil)
  end
end
