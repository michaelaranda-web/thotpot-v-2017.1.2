class Thot < ActiveRecord::Base
  def self.search(search)
    where("title || details LIKE ?", "%#{search}%")
  end
end
