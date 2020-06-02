/** Tower model definitions **/
import { UUID } from '../../../types/global';

export enum TowerType {
  LongRange = 'LONG_RANGE',
  Defender = 'DEFENDER',
  ResourceCreator = 'RESOURCE_CREATOR'
}

export interface TowerModel {
  id: UUID;
  name: string;
  lifePoints: number;
  cost: number;
  damage: number;
  type: TowerType;
  attackSpeed: number;
  currentPositionKey: string;
}
