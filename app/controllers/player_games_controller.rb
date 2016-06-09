class PlayerGamesController < ApplicationController
  def show
    @player = Player.find(params[:player_id])
    @game = Game.find(params[:id])
    @chart_data = @game.ratings
                      .where(player_id: @player.id)
                      .flat_map(&:history_events)
                      .map { |event| [event.created_at, event.value] }

    respond_to do |format|
      format.html
      format.json do
        # render json: @game
        render json: [
          { player: {id: @player.id, name: @player.name, email: @player.email} },
          { game: @game },
          { rating_history: @chart_data }
        ]
      end
    end
  end
end
