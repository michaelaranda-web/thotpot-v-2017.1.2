class ThotsController < ApplicationController
  def index
    @thots = Thot.all
  end

  def category
  end
end
