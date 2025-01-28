import { ImageData } from './ImageData';

export class GameMode {
  type: string;
  description: string;
  private images: ImageData[];

  constructor(type: string, description: string, cards: ImageData[]) {
    this.type = type;
    this.description = description;
    this.images = cards;
  }

  getImages(isRandomized: boolean = false) {
    const imagePairs = this.images.map((item) => ({ ...item, id: `${item.id}-copy` }));
    const mergedImages = [...this.images, ...imagePairs];

    return isRandomized
      ? mergedImages.sort(() => 0.5 - Math.random())
      : mergedImages;
  }
}
