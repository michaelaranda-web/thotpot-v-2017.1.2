class Thot < ActiveRecord::Base
  belongs_to :parent, class_name: "Thot"
  has_many :thots, foreign_key: "parent_id"

  def self.search(search)
    where("title || details LIKE ?", "%#{search}%")
  end
end
