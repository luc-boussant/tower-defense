import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AttackerState, GameState, MapState, RootState, TowerState } from 'app/reducers/state';
import { Board, Row, Tile } from 'app/components/GameBoard/style';
import { useGameActions } from 'app/actions';

export const GameBoard = (): JSX.Element => {
  const dispatch = useDispatch();
  const gameActions = useGameActions(dispatch);
  const mapState: MapState = useSelector((state: RootState) => state.map);
  const attackerState: AttackerState = useSelector((state: RootState) => state.attackers);
  const towerState: TowerState = useSelector((state: RootState) => state.towers);
  const gameState: GameState = useSelector((state: RootState) => state.game);

  useEffect(() => {
    const interval = setInterval(() => {
      if (gameState.lifePoints > 0) {
        gameActions.playRound();
      } else {
        alert('You lost !!');
        clearInterval(interval);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [gameState]);

  const createMapTable = () => {
    const tableContent = [];
    for (let x = 0; x < mapState.sizeX; x++) {
      const rowContent = [];
      for (let y = 0; y < mapState.sizeY; y++) {
        if (mapState.map[`${x},${y}`]) {
          rowContent.push(
            <Tile key={y}>
              {mapState.map[`${x},${y}`].attackers.map((attackerId) => (
                <div key={attackerId}>{attackerState.byId[attackerId].name}</div>
              ))}
              {mapState.map[`${x},${y}`].towers.map((towerId) => (
                <div key={towerId}>{towerState.byId[towerId].name}</div>
              ))}
            </Tile>
          );
        } else {
          rowContent.push(<Tile key={`${x},${y}`} />);
        }
      }
      tableContent.push(rowContent);
    }
    return (
      <>
        {tableContent.map((row) => (
          <Row>{row}</Row>
        ))}
      </>
    );
  };
  return <Board>{createMapTable()}</Board>;
};
