import { useMemo } from 'react';
import { Dispatch, bindActionCreators } from 'redux';
import { createAction } from 'redux-actions';

export namespace MapActions {
  export enum Type {
    EDIT_MAP = 'EDIT_MAP',
    ADD_ATTACKER_TO_MAP = 'ADD_ATTACKER_TO_MAP',
    REMOVE_ATTACKER_FROM_MAP = 'REMOVE_ATTACKER_FROM_MAP',
    RESTART_MAP = 'RESTART_MAP'
  }

  export const editMap = createAction(Type.EDIT_MAP);
  export const restartMap = createAction(Type.RESTART_MAP);
  export const addAttackerToMap = createAction(Type.ADD_ATTACKER_TO_MAP);
  export const removeAttackerFromMap = createAction(Type.REMOVE_ATTACKER_FROM_MAP);
}

export type MapActions = Omit<typeof MapActions, 'Type'>;
export const useMapActions = (dispatch: Dispatch) => {
  const { Type, ...actions } = MapActions;
  return useMemo(() => bindActionCreators(actions as any, dispatch), [dispatch]) as MapActions;
};
