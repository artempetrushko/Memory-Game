import React from "react";
import { TIMEOUT } from "../../../settings.ts";
import { ImageData } from "../../../entities/ImageData.ts";
import { Card } from "./Card.tsx";

interface GridProps {
  cardsTheme: string;
  images: ImageData[];
  finishedItems: string[];
  checkItems: (firstCardId: string, secondCardId: string) => void;
}

export const Grid: React.FC<GridProps> = ({cardsTheme, images = [], finishedItems, checkItems}) => {
    const [visibleItems, setVisibleItems] = React.useState<string[]>([]);

    const handleCardClick = (id: string) => {
      if (finishedItems.includes(id) || visibleItems.includes(id)) {
        return;
      }

      switch (visibleItems.length) {
        case 0:
          setVisibleItems([id]);
          break;

        case 1:
          setVisibleItems((items) => [...items, id]);
          checkItems(visibleItems[0], id);
          setTimeout(() => {
            setVisibleItems([]);
          }, TIMEOUT);
          break;

        default:
          setVisibleItems([]);
      }
    }

    return (
        <ul className={`cards cards-theme-${cardsTheme}`}>
          {images.map((item) => (
            <Card
              key={item.id}
              image={item}
              isVisible={visibleItems.includes(item.id)}
              isFinished={finishedItems.includes(item.id)}
              onCardClick={handleCardClick}
            />
          ))}
        </ul>
      );
}