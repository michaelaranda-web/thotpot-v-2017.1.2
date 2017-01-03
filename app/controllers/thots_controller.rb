class ThotsController < ApplicationController
  def index
    @categories = Category.all
  end

  def category
    category_id = Category.find_by(url_friendly_title: params[:category_title]).id
    @thots = Thot.where(category_id: category_id)
  end
end
