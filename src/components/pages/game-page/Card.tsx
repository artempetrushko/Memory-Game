import React from "react";
import { ImageData } from "../../../entities/ImageData.ts";

interface CardProps {
  image: ImageData;
  isVisible: boolean;
  isFinished: boolean;
  onCardClick: (id: string) => void;
}

export const Card: React.FC<CardProps> = ({image, isVisible, isFinished, onCardClick}) => {
    const {id, url, description} = image;
    const className = `${
      isVisible ? 'card-show' : ''
    } ${
      isFinished ? 'card-finished' : ''
    }`;

    const handleClick = () => {
      onCardClick(id);
    };

    return (
      <li onClick={handleClick} className={`card ${className}`}>
        <img
          width="204" height="144"
          src={url}
          alt={description}
        />
      </li>
    );
  }