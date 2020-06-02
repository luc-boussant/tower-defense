import { handleActions } from 'redux-actions';
import { MapState } from './state';
import { AttackerModel, MapModel } from 'app/models';
import { MapActions } from 'app/actions';

const initialState: MapState = {
  sizeX: 5,
  sizeY: 10,
  map: {}
};

export const mapReducer = handleActions<MapState, MapModel>(
  {
    [MapActions.Type.EDIT_MAP]: (state, action) => {
      return { ...state, ...action.payload };
    },
    [MapActions.Type.RESTART_MAP]: (state, action) => {
      return initialState;
    },
    [MapActions.Type.ADD_ATTACKER_TO_MAP]: (state, action) => {
      const newState = { ...state };
      const attacker = (action.payload as any) as AttackerModel;
      if (newState.map[attacker.currentPositionKey]) {
        newState.map[attacker.currentPositionKey].attackers.push(attacker.id);
      } else {
        newState.map[attacker.currentPositionKey] = { attackers: [attacker.id], towers: [] };
      }
      return newState;
    },
    [MapActions.Type.REMOVE_ATTACKER_FROM_MAP]: (state, action) => {
      const newState = { ...state };
      const attacker = (action.payload as any) as AttackerModel;
      if (newState.map[attacker.currentPositionKey]) {
        newState.map[attacker.currentPositionKey].attackers = state.map[attacker.currentPositionKey].attackers.filter(
          (value) => value !== attacker.id
        );
      }
      return newState;
    }
  },
  initialState
);
