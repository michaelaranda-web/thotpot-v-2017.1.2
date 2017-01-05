class ThotsController < ApplicationController
  def index
  end

  def new
  end

  def create
    category_param = params[:category]
    category = Category.find_by(title: category_param)

    if category.nil?
      category = Category.create!(
          title: category_param,
          url_friendly_title: category_param.gsub(' ', '_').underscore
      )
    end

    @created_thot = Thot.create!(
        title: params[:title],
        details: params[:details],
        category_id: category.id
    )

    redirect_to thots_index_path
  end

  def category
    category_id = Category.find_by(url_friendly_title: params[:category_title]).id
    @thots = Thot.where(category_id: category_id)
  end

  def categories
    @categories = Category.all
  end

  def destroy
    @thot = Thot.destroy(params[:id])
  end
end
