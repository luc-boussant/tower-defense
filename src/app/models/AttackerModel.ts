/** Attacker model definitions **/
import { UUID } from '../../../types/global';

export interface AttackerModel {
  id: UUID;
  name: string;
  lifePoints: number;
  damage: number;
  speed: number;
  currentPositionKey: string;
}
