import React from "react";
import { ResultsTable } from "./ResultsTable.tsx";
import { GameResult } from "../../../entities/GameResult.ts";

interface ResultPageProps {
  stepsCount: number;
  results: GameResult[];
  onResetGame: () => void;
}

export const ResultsPage: React.FC<ResultPageProps> = ({ stepsCount, results, onResetGame }) => {
    return (
      <section className="result container">
        <h2>Лучшие результаты:</h2>
        <p>Вы завершили игру, так держать!</p>
        <p>Количество шагов: <b>{stepsCount}</b></p>
        <ResultsTable current={stepsCount} results={results} />
        <p>Хотите попробовать ещё раз?</p>
        <button onClick={onResetGame} className="button result-button" type="button">Новая игра</button>
      </section>
    );
  }