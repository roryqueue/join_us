require 'sinatra'
require 'pry'



def get_images
  files = []
  images = []
  Dir.foreach("public/images") { |f| files << f}
  files.each do |i|
    if i.end_with?("jpg")
      images << i
    end
  end
  images.shuffle!
end

# binding.pry


get '/' do
  @images = get_images
  erb :join
end

get '/game' do
  erb :game
end
