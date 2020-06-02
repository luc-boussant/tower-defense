import { useMemo } from 'react';
import { Dispatch, bindActionCreators } from 'redux';
import { createAction } from 'redux-actions';

export namespace TowerActions {
  export enum Type {
    EDIT_TOWER = 'EDIT_TOWER',
    RESTART_TOWER = 'RESTART_TOWER',
    REMOVE_TOWER = 'REMOVE_TOWER',
    ADD_TOWER = 'ADD_TOWER'
  }

  export const editAttacker = createAction(Type.EDIT_TOWER);
  export const restartTower = createAction(Type.RESTART_TOWER);
  export const removeAttacker = createAction(Type.REMOVE_TOWER);
  export const addAttacker = createAction(Type.ADD_TOWER);
}

export type TowerActions = Omit<typeof TowerActions, 'Type'>;
export const useTowerActions = (dispatch: Dispatch) => {
  const { Type, ...actions } = TowerActions;
  return useMemo(() => bindActionCreators(actions as any, dispatch), [dispatch]) as TowerActions;
};
