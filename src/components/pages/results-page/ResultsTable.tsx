import React from "react";
import { GameResult } from "../../../entities/GameResult";

interface ResultsTableProps {
  current: number;
  results: GameResult[];
}

export const ResultsTable: React.FC<ResultsTableProps> = ({ current, results }) => {
  const sortedResults = [...results, { playerName: 'Ваш результат', stepsCount: current }]
    .sort((a, b) => a.stepsCount - b.stepsCount);
  const tableRows = sortedResults.map(({ playerName, stepsCount }, i) => (
    <tr key={playerName} className={`result-table-row ${stepsCount === current ? 'active' : ''}`}>
      <td>{i + 1}</td>
      <td>{playerName}</td>
      <td>{stepsCount}</td>
    </tr>
  ));

  return (
    <table className="result-table">
      <thead>
        <tr className="result-table-row">
          <th>Место</th>
          <th>Имя</th>
          <th>Шаги</th>
        </tr>
      </thead>
      <tbody>
        {tableRows}
      </tbody>
    </table>
  );
}