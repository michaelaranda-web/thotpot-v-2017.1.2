# TODO: Namespace for Internal Api
# TODO: Create Thot Presenter
class Api::ThotsController < ApplicationController
  def show
    thot = Thot.find(params[:id])
    render json: {
        thot: thot
    }.to_json
  end

  def search
    thot_results = Thot.search(params[:keyword])
    render json: {
        results: thot_results
    }
  end
end