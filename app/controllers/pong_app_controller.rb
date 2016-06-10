class PongAppController < ApplicationController
  def index
    @games = Game.all

    @pong_app_props = {
      game: @games[0],
      results: Result.all,
      players: Player.all,
    }
  end
end
