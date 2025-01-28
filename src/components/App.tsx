import React from "react";
import { InitialPage } from "./pages/initial-page/InitialPage.tsx";
import { GamePage } from "./pages/game-page/GamePage.tsx";
import { ResultsPage } from "./pages/results-page/ResultsPage.tsx";
import { AppRoute } from "../settings.ts";
import { GameMode } from "../entities/GameMode.ts";
import { GameResult } from "../entities/GameResult.ts";

interface AppProps {
  results: GameResult[];
}

export const App: React.FC<AppProps> = ({ results }) => {
  const [page, setPage] = React.useState(AppRoute.Initial);
  const [result, setResult] = React.useState(0);
  const [gameMode, setGameMode] = React.useState<GameMode>();

  const showResults = (stepsCount: number) => {
    setResult(stepsCount);
    setPage(AppRoute.Results);
  };

  const startGame = (gameMode: GameMode) => {
    setGameMode(gameMode);
    setPage(AppRoute.Game);
  };

  const handleReset = () => {
    setPage(AppRoute.Initial);
  };

  const getPage = (route: AppRoute) => {
    switch (route) {
      case AppRoute.Initial:
        return <InitialPage onStartGame={startGame} />;
      case AppRoute.Game:
        return (
          <GamePage 
            images={gameMode?.getImages()!} 
            onShowResults={showResults} 
            theme={gameMode?.type!} />
        );
      case AppRoute.Results:
        return (
          <ResultsPage
            stepsCount={result}     
            results={results}
            onResetGame={handleReset}
          />
        );
      default:
        return null;
    }
  };

  return getPage(page);
}