import { AttackerModel } from 'app/models/AttackerModel';
import { uuid } from 'uuidv4';

export const shouldCreateAttacker = (): boolean => Math.random() > 0.2;
export const shouldMoveAttacker = (speed: number): boolean => Math.floor(Math.random() * speed) === 0;

export const createAttacker = (positionX: number, positionY: number): AttackerModel => {
  const attacker: AttackerModel = {
    id: uuid(),
    name: 'Test ' + Math.floor(Math.random() * 10),
    lifePoints: 5,
    damage: 5,
    speed: 1,
    currentPositionKey: `${positionX},${positionY}`
  };
  return attacker;
};
