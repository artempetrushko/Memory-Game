import React from "react";
import { ImageData } from "../../../entities/ImageData.js";
import { Grid } from "./Grid.tsx";
import { Progress } from "./Progress.tsx";
import { Modal } from "../../modal/Modal.tsx";

interface GamePageProps {
  theme: string;
  images: ImageData[];
  onShowResults: (stepsCount: number) => void;
}

export const GamePage: React.FC<GamePageProps> = ({theme, images = [], onShowResults}) => {
  const [finishedItems, setFinishedItems] = React.useState<string[]>([]);
  const [stepsCount, setStepsCount] = React.useState(0);

  const isWin = finishedItems.length > 0 && finishedItems.length === images.length;

  const checkCards = (firstCardId: string, secondCardId: string) => {
    const firstImage = images.find(({id}) => id === firstCardId)!;
    const secondImage = images.find(({id}) => id === secondCardId)!;
    if (firstImage.url === secondImage.url) {
      setFinishedItems((items) => [...items, firstCardId, secondCardId]);
    }
    setStepsCount((i) => i + 1);
  };

  const handleResultsClick = () => {
    onShowResults(stepsCount);
  };

  return (
    <section className="game container">
      <Progress value={finishedItems.length / 2} max={images.length / 2} />
      <div className="steps">Шаг {stepsCount}</div>
      <Grid
        cardsTheme={theme}
        images={images}
        finishedItems={finishedItems}
        checkItems={checkCards}
      />
      {isWin && (
        <Modal>
          <h3 className="modal-caption">Победа!</h3>
          <p className="modal-description">Теперь давайте узнаем результаты этой партии</p>
          <button className="button modal-button" type="button" onClick={handleResultsClick}>Показать результаты</button>
        </Modal>
      )}
    </section>
  );
}