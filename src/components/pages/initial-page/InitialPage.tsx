import React from "react";
import { GameMode } from "../../../entities/GameMode";
import { GAME_MODES } from "../../../data";

interface InitialPageProps {
  onStartGame: (gameMode: GameMode) => void;
}

export const InitialPage: React.FC<InitialPageProps> = ({onStartGame}) => {
    const handleClick = (gameMode: GameMode) => {
      onStartGame(gameMode);
    };

    const buttons = GAME_MODES.map((gameMode) => {
      return (
        <button 
          key={gameMode.type}
          onClick={() => handleClick(gameMode)} 
          className={`ico-button ico-button-${gameMode.type}`} 
          type="button">
          {gameMode.description}
        </button>
    )});

    return (
      <section className="rules container">
        <h2>Добро пожаловать!</h2>
        <p>Memory — игра для тренировки визуальной памяти</p>
        <div className="rules-panel">
          <h3>Правила игры</h3>
          <ul className="rules-list">
            <li>В наборе есть множество карточек – по две штуки с одним и тем же рисунком.</li>
            <li>Нужно разложить карточки «рубашкой» вверх на столе, а затем переворачивать по две.</li>
            <li>Если они совпадают – игрок забирает их и получает ещё один ход.</li>
          </ul>
        </div>
        {buttons}
      </section>
    );
  }