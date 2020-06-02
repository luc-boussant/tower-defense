/** Game model definitions **/
import { UUID } from '../../../types/global';

export interface GameModel {
  id: UUID;
  lifePoints: number;
  attackersLeft: number;
  completed: boolean;
}
