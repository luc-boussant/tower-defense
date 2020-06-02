// import { RootState } from 'app/reducers';
// import { createAttacker, shouldCreateAttacker } from './attacker';
// import { AttackerModel } from 'app/models';
//
// const moveAttacker = (previousState: RootState, attacker: AttackerModel): RootState | null => {
//   let currentState = { ...previousState };
//   const { map } = previousState.map;
//   if (attacker.currentPosition.y in map && attacker.currentPosition.x in map[attacker.currentPosition.y]) {
//     const positionableElementList = map[attacker.currentPosition.y][attacker.currentPosition.x];
//     const searchedElement = positionableElementList.find((value) => value.id === attacker.id);
//     map[attacker.currentPosition.y][attacker.currentPosition.x] = positionableElementList.filter(
//       (value) => value.id !== attacker.id
//     );
//     if (attacker.currentPosition.x === 0) {
//       attacker;
//     }
//   }
//   return previousState;
// };
//
// const moveAllAttackers = (previousState: RootState): RootState | null => {
//   let currentState: RootState = { ...previousState };
//   previousState.attackers.allIds.forEach((value) => {
//     const currentAttacker = previousState.attackers.byId[value];
//     if (Math.floor(Math.random() * currentAttacker.speed) === 1) {
//       currentState = { ...previousState, ...moveAttacker(previousState, currentAttacker) };
//     }
//   });
//   return currentState;
// };
//
// export const playRound = (previousState: RootState): RootState | null => {
//   let currentState: RootState | null;
//   // Move attackers on the map
//   currentState = { ...previousState, ...moveAllAttackers(previousState) };
//
//   // Add an attacker if necessary
//   currentState = shouldCreateAttacker() ? createAttacker(previousState) : currentState;
//   return currentState;
// };
