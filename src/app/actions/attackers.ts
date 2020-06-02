import { useMemo } from 'react';
import { Dispatch, bindActionCreators } from 'redux';
import { createAction } from 'redux-actions';

export namespace AttackersActions {
  export enum Type {
    EDIT_ATTACKER = 'EDIT_ATTACKER',
    RESTART_ATTACKERS = 'RESTART_ATTACKERS',
    REMOVE_ATTACKER = 'REMOVE_ATTACKER',
    ADD_ATTACKER = 'ADD_ATTACKER'
  }

  export const editAttacker = createAction(Type.EDIT_ATTACKER);
  export const restartAttackers = createAction(Type.RESTART_ATTACKERS);
  export const removeAttacker = createAction(Type.REMOVE_ATTACKER);
  export const addAttacker = createAction(Type.ADD_ATTACKER);
}

export type AttackersActions = Omit<typeof AttackersActions, 'Type'>;
export const useAttackersActions = (dispatch: Dispatch) => {
  const { Type, ...actions } = AttackersActions;
  return useMemo(() => bindActionCreators(actions as any, dispatch), [dispatch]) as AttackersActions;
};
