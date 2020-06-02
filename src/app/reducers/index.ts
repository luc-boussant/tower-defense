import { combineReducers } from 'redux';
import { RootState } from './state';
import { attackersReducer } from 'app/reducers/attacker';
import { towerReducer } from 'app/reducers/tower';
import { gameReducer } from 'app/reducers/game';
import { mapReducer } from 'app/reducers/map';

export { RootState };

export const rootReducer = combineReducers<RootState>({
  game: gameReducer,
  map: mapReducer,
  towers: towerReducer,
  attackers: attackersReducer
});
