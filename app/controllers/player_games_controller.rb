class PlayerGamesController < ApplicationController
  def show
    @player = Player.find(params[:player_id])
    @game = Game.find(params[:id])
    @chart_data = @game.ratings
                      .where(player_id: @player.id)
                      .flat_map(&:history_events)
                      .map { |event| [event.created_at, event.value] }

    total_wins = 0
    total_losses = 0
    @game.all_ratings.each do |rating|
      total_wins += @player.wins(@game, rating.player)
      total_losses += @player.results.losses.for_game(@game).against(rating.player).size
    end

    respond_to do |format|
      format.html
      format.json do
        render json: [
          {
            player: {
              id: @player.id,
              name: @player.name,
              email: @player.email,
              latest_rating: @chart_data[0][1],
              total_wins: total_wins,
              total_losses: total_losses
            }
          },
          { results: @player.results },
          { rating_history: @chart_data }
        ]
      end
    end
  end
end
