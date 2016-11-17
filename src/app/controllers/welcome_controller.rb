require 'open-uri'
require 'json'

class WelcomeController < ApplicationController
  def index

  end

  def events
    if request.xhr?
      response = open('https://api.meetup.com/find/topics?key=263d71513f6e51917279201a185875&sign=true&photo-host=public&query=open-source&page=20')
      response_hash = JSON.parse(response.read)

      render json: {response: response_hash}
    end
  end
end
