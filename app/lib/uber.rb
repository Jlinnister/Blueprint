require 'uber'
class UberClient
  def initialize
    client = Uber::Client.new do |config|
      config.server_token  = "OxUNWkPoXPhcgg-13Vc-zBQZkkaJD90WYqxtzZFy"
      config.client_id     = "h30usB55K2xXyCrW2Cd-dmZ1IH7RQfpK"
      config.client_secret = "naDjuRqaaGxJZr5UPXXqjHV6VAWusIOffkG5Ap4Y"
    end
  end

  def prices(start_lat, start_long, end_lat, end_long)
    diffs = [-0.002, -0.001, 0.001, 0.002]
    prices = []
    diffs.each do |diff1|
      diffs.each do |diff2|
        prices << self.client.price_estimations(start_lat + diff1, start_long + diff2, end_lat, end_long)[0].estimate
      end
    end
  end

end
