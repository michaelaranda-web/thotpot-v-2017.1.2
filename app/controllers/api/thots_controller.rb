# TODO: Namespace for Internal Api
# TODO: Create Thot Presenter
class Api::ThotsController < ApplicationController
  def show
    thot = Thot.find(params[:id])
    render json: {
      thot: thot,
      relatedThots: related_thots_json_array(thot)
    }.to_json
  end

  def search
    thot_results = Thot.search(params[:keyword])
    render json: {
      results: thot_results
    }
  end

  private

  def related_thots_json_array(thot)
    related_thots = []
    thot.thots.each do |currentThot|
      thot_json = {
        id: currentThot.id,
        title: currentThot.title,
        details: currentThot.details
      }
      related_thots << thot_json
    end

    related_thots
  end
end