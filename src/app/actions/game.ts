import { useMemo } from 'react';
import { Dispatch, bindActionCreators } from 'redux';
import { createAction } from 'redux-actions';

export namespace GameActions {
  export enum Type {
    EDIT_GAME = 'EDIT_GAME',
    RESTART_GAME = 'RESTART_GAME',
    PLAY_ROUND = 'PLAY_ROUND',
    DAMAGE_PLAYER = 'DAMAGE_PLAYER',
    REDUCE_ATTACKERS_LEFT = 'REDUCE_ATTACKERS_LEFT'
  }

  export const editGame = createAction(Type.EDIT_GAME);
  export const restartGame = createAction(Type.RESTART_GAME);
  export const playRound = createAction(Type.PLAY_ROUND);
  export const damagePlayer = createAction(Type.DAMAGE_PLAYER);
  export const reduceAttackersLeft = createAction(Type.REDUCE_ATTACKERS_LEFT);
}

export type GameActions = Omit<typeof GameActions, 'Type'>;
export const useGameActions = (dispatch: Dispatch) => {
  const { Type, ...actions } = GameActions;
  return useMemo(() => bindActionCreators(actions as any, dispatch), [dispatch]) as GameActions;
};
