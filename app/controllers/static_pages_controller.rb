require_relative '../lib/uber'
class StaticPagesController < ApplicationController
  def root
  end

  def uber
    api = UberClient.new
    api.client.price_estimations(start_latitude: 37.773049, start_longitude:-122.392914, end_latitude:37.759507, end_longitude:-122.425078)
  end
end
