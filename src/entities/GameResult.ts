export class GameResult {
  playerName: string;
  stepsCount: number;

  constructor(playerName: string, stepsCount: number) {
    this.playerName = playerName;
    this.stepsCount = stepsCount;
  }
}
