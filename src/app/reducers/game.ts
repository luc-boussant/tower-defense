import { handleActions } from 'redux-actions';
import { GameState } from './state';
import { GameActions } from 'app/actions';
import { GameModel } from 'app/models';
import { uuid } from 'uuidv4';

const initialState: GameState = {
  id: uuid(),
  lifePoints: 10,
  attackersLeft: 20,
  completed: false
};

export const gameReducer = handleActions<GameState, GameModel>(
  {
    [GameActions.Type.EDIT_GAME]: (state, action) => {
      return { ...state, ...action.payload };
    },
    [GameActions.Type.RESTART_GAME]: (state, action) => {
      return initialState;
    },
    [GameActions.Type.DAMAGE_PLAYER]: (state, action) => {
      const damage: number = action.payload as any;
      return { ...state, lifePoints: state.lifePoints - damage };
    },
    [GameActions.Type.REDUCE_ATTACKERS_LEFT]: (state, action) => {
      const nbAttackersAddedToGame: number = action.payload as any;
      return { ...state, attackersLeft: state.attackersLeft - nbAttackersAddedToGame };
    }
  },
  initialState
);
