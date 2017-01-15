# TODO: Namespace for Internal Api
# TODO: Create Thot Presenter
class Api::ThotsController < ApplicationController
  def create
    Thot.create!(title: params[:title],
                 details: params[:details],
                 parent_id: params[:parent_id])

    #I know this is a lazy way to re-render the ThotWindow after an update of adding
    #a new response, but whatever let's just finish this.
    parent_thot = Thot.find(params[:parent_id])
    render json: {
        thot: parent_thot,
        relatedThots: related_thots_json_array(parent_thot)
    }.to_json
  end

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