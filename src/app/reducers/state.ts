import { AttackerModel, GameModel, MapModel, TowerModel } from 'app/models';
import { UUID } from '../../../types/global';

export interface RootState {
  map: MapState;
  towers: TowerState;
  attackers: AttackerState;
  game: GameState;
}

export interface MapState {
  sizeX: number;
  sizeY: number;
  map: MapModel;
}
export type GameState = GameModel;

export interface AttackerState {
  byId: { [id: string]: AttackerModel };
  allIds: UUID[];
}

export interface TowerState {
  byId: { [id: string]: TowerModel };
  allIds: UUID[];
}
