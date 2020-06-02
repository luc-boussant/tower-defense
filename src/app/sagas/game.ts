import { takeEvery, select, put, putResolve } from 'redux-saga/effects';
import { AttackersActions, GameActions, MapActions } from 'app/actions';
import { createAttacker, shouldCreateAttacker, shouldMoveAttacker } from '../../services/attacker';
import { AttackerState, MapState } from 'app/reducers/state';
import { AttackerModel } from 'app/models';

function* moveAttacker(action: { type: 'MOVE_ATTACKER'; payload: AttackerModel }) {
  const attackerToBeMoved: AttackerModel = action.payload;
  const [positionX, positionY] = attackerToBeMoved.currentPositionKey.split(',').map(Number);
  if (shouldMoveAttacker(attackerToBeMoved.speed)) {
    yield put(MapActions.removeAttackerFromMap(attackerToBeMoved));
    if (positionY === 0) {
      yield put(GameActions.damagePlayer(attackerToBeMoved.damage));
      yield put(AttackersActions.removeAttacker(attackerToBeMoved));
    } else {
      const movedAttacker = { ...attackerToBeMoved, currentPositionKey: `${positionX},${positionY - 1}` };
      yield put(MapActions.addAttackerToMap(movedAttacker));
      yield put(AttackersActions.editAttacker(movedAttacker));
    }
  }
}

function* addAttackerToGame() {
  if (shouldCreateAttacker()) {
    const mapState: MapState = yield select((state) => state.map);
    const attacker = createAttacker(Math.floor(Math.random() * mapState.sizeX), mapState.sizeY - 1);
    yield put(AttackersActions.addAttacker(attacker));
    yield put(MapActions.addAttackerToMap(attacker));
    yield put(GameActions.reduceAttackersLeft(1));
  }
}

function* playRound() {
  // Move attackers
  const attackerState: AttackerState = yield select((state) => state.attackers);
  const attackerAllIds = [...attackerState.allIds];
  for (const attackerId of attackerAllIds) {
    yield putResolve({ type: 'MOVE_ATTACKER', payload: attackerState.byId[attackerId] });
  }

  // Add attacker if necessary to finish the round
  yield put({ type: 'ADD_ATTACKER_TO_GAME' });
}

export default function* gameSaga() {
  yield takeEvery('MOVE_ATTACKER', moveAttacker);
  yield takeEvery('ADD_ATTACKER_TO_GAME', addAttackerToGame);
  yield takeEvery(GameActions.Type.PLAY_ROUND, playRound);
}
