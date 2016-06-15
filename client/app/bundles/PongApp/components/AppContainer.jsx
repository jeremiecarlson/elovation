import React, { PropTypes } from 'react';
import { Link, withRouter } from 'react-router';
import _ from 'lodash';
import $ from 'jQuery';
import Immutable from 'immutable';

class AppContainer extends React.Component {
  static propTypes = {
    game: PropTypes.object.isRequired,
    results: PropTypes.object.isRequired,
    players: PropTypes.object.isRequired,
    addResult: PropTypes.func.isRequired,
    updateResults: PropTypes.func.isRequired,
  };

  constructor(props, context) {
    super(props, context);

    // Uses lodash to bind all methods to the context of the object instance, otherwise
    // the methods defined here would not refer to the component's class, not the component
    // instance itself.
    _.bindAll(this, 'handleClick');
  }

  componentWillUpdate(nextProps) {
  }

  routerWillLeave(nextLocation) {
    console.log('leaving', nextLocation)
  }

  handleClick = () => {
    // POST to server in this format
    $.ajax({
      url: "games/1/results",
      type: "POST",
      dataType: "json",
      data: {
        result: {
          "teams": {
            "0": {
              "players": ["1"],
              "relation": "defeats"
            },
            "1": {
              "players": ["2"]
            }
          }
        }
      },
      success: (response) => {
        this.props.updateResults(response[0].game);
      },
    });
  }

  render() {
    console.log(this.props)
    const { game, players } = this.props;
    const { ratings, results } = game;
    return (
      <div className="container">
        <h1>Pong App</h1>
        <Link to="/new">
          Add Result
        </Link>
        <h2>Top 5</h2>
        {
          ratings.map(({ player })=> {
            return <div key={player.id}>
              {player.name} - {player.value}
            </div>
          })
        }
        <h2>Recent Games</h2>
        {
          results.map((result, i)=> {
            return <div key={`result ${i}`}>
              <p>
                <span>{result.winner}</span> defeats <span>{result.loser}</span>
              </p>
            </div>
          })
        }
        <button onClick={this.handleClick}>Add New</button>
      </div>
    );
  }
}

export default withRouter(AppContainer)
