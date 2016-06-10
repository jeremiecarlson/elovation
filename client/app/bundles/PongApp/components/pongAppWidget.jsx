import React, { PropTypes } from 'react';
import _ from 'lodash';

export default class PongAppWidget extends React.Component {
  static propTypes = {
    game: PropTypes.object.isRequired,
    results: PropTypes.object.isRequired,
    players: PropTypes.object.isRequired,
  };

  constructor(props, context) {
    super(props, context);

    // Uses lodash to bind all methods to the context of the object instance, otherwise
    // the methods defined here would not refer to the component's class, not the component
    // instance itself.
    // _.bindAll(this, 'handleChange');
  }

  render() {
    const { game, results, players } = this.props;
    console.log(this.props)
    const topResults = game.get('ratings');
    const latestGames = game.get('results');
    return (
      <div className="container">
        <h1>Pong App</h1>
        <h2>Top 5</h2>
        {
          topResults.map((result, i)=> {
            const player = result.get('player')
            return <div key={`player ${i}`}>
              {player.get('name')} - {result.get('value')}
            </div>
          })
        }
        <h2>Recent Games</h2>
        {
          latestGames.map((result, i)=> {
            return <div key={`result ${i}`}>
              <p>
                <span>{result.get('winner')}</span> defeats <span>{result.get('loser')}</span>
              </p>
            </div>
          })
        }
      </div>
    );
  }
}
