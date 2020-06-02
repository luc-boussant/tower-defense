import { handleActions } from 'redux-actions';
import { AttackerState } from './state';
import { AttackersActions } from 'app/actions';
import { AttackerModel } from 'app/models';

const initialState: AttackerState = { byId: {}, allIds: [] };

export const attackersReducer = handleActions<AttackerState, AttackerModel>(
  {
    [AttackersActions.Type.ADD_ATTACKER]: (state, action) => {
      // Attacker with this id already exists
      if (state.byId[action.payload.id]) {
        return state;
      }

      const newState = { ...state };
      newState.byId[action.payload.id] = action.payload;
      newState.allIds.push(action.payload.id);
      return newState;
    },
    [AttackersActions.Type.EDIT_ATTACKER]: (state, action) => {
      // Attacker does not exist
      if (!state.byId[action.payload.id]) {
        return state;
      }

      const newState = { ...state };
      newState.byId[action.payload.id] = action.payload;
      return newState;
    },
    [AttackersActions.Type.REMOVE_ATTACKER]: (state, action) => {
      // Attacker does not exist
      if (!state.byId[action.payload.id]) {
        return state;
      }

      const newState = { ...state };
      delete newState.byId[action.payload.id];
      newState.allIds = newState.allIds.filter((value) => value !== action.payload.id);
      return newState;
    },
    [AttackersActions.Type.RESTART_ATTACKERS]: () => {
      return initialState;
    }
  },
  initialState
);
