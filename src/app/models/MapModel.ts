/** Game model definitions **/
import { UUID } from '../../../types/global';

export type MapModel = { [positionKey: string]: { attackers: UUID[]; towers: UUID[] } };
