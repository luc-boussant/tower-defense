import { handleActions } from 'redux-actions';
import { TowerState } from './state';
import { TowerActions } from 'app/actions';
import { TowerModel } from 'app/models';

const initialState: TowerState = { byId: {}, allIds: [] };

export const towerReducer = handleActions<TowerState, TowerModel>(
  {
    [TowerActions.Type.ADD_TOWER]: (state, action) => {
      // Tower with this id already exists
      if (state.byId[action.payload.id]) {
        return state;
      }

      const newState = { ...state };
      newState.byId[action.payload.id] = action.payload;
      newState.allIds.push(action.payload.id);
      return newState;
    },
    [TowerActions.Type.EDIT_TOWER]: (state, action) => {
      // Tower does not exist
      if (!state.byId[action.payload.id]) {
        return state;
      }

      const newState = { ...state };
      newState.byId[action.payload.id] = action.payload;
      return newState;
    },
    [TowerActions.Type.REMOVE_TOWER]: (state, action) => {
      // Tower does not exist
      if (!state.byId[action.payload.id]) {
        return state;
      }

      const newState = { ...state };
      delete newState.byId[action.payload.id];
      newState.allIds = newState.allIds.filter((value) => value === action.payload.id);
      return newState;
    },
    [TowerActions.Type.RESTART_TOWER]: () => {
      return initialState;
    }
  },
  initialState
);
