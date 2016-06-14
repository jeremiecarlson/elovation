import Immutable from 'immutable';


export const Game = Immutable.Record({
  name: null,
  ratings: null,
  results: null,
});

export const Rating = Immutable.Record({
  player: null,
  value: null,
});

export const Result = Immutable.Record({
  winner: null,
  loser: null,
  created_at: null,
});

export const Player = Immutable.Record({
  id: null,
  email: null,
  name: null,
  created_at: null,
  updated_at: null,
});

export function hydrateRatings(ratings) {
  return ratings
      .map(Rating)
      .map((r) => r.update('player', Player));
}

export function hydrateGame(game) {
  return Game(Immutable.fromJS(game))
      .update('results', (results) => results.map(Result))
      .update('ratings', hydrateRatings);
}
