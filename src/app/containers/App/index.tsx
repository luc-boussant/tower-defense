import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'app/reducers';
import { Header, Footer } from 'app/components';
import { GameState } from 'app/reducers/state';
import { GameBoard } from 'app/components/GameBoard';

export const App = () => {
  const game: GameState = useSelector((state: RootState) => state.game);

  return (
    <div>
      <Header />
      <h1>{game.attackersLeft} attaques restants</h1>
      <GameBoard />
      <h1>{game.lifePoints} points de vie restants</h1>
      <Footer />
    </div>
  );
};
