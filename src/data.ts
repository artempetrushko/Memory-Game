import { ImageData } from "./entities/ImageData.ts";
import { GameMode } from "./entities/GameMode.ts";
import { GameResult } from "./entities/GameResult.ts";

const cats = [
  new ImageData('YdAqiUkUoWA', '/img/cats/cats-1.jpg', ''),
  new ImageData('hX_hf2lPpUU', '/img/cats/cats-2.jpg', ''),
  new ImageData('w1JE5duY62M', '/img/cats/cats-3.jpg', ''),
  new ImageData('3tYZjGSBwbk', '/img/cats/cats-4.jpg', ''),
  new ImageData('NoXUQ54pDac', '/img/cats/cats-5.jpg', ''),
  new ImageData('OZhYgZh0bAg', '/img/cats/cats-6.jpg', ''),
];

const cars = [
  new ImageData('YdAqiUkUoWA', '/img/cars/cars-1.jpg', ''),
  new ImageData('hX_hf2lPpUU', '/img/cars/cars-2.jpg', ''),
  new ImageData('w1JE5duY62M', '/img/cars/cars-3.jpg', ''),
  new ImageData('3tYZjGSBwbk', '/img/cars/cars-4.jpg', ''),
  new ImageData('NoXUQ54pDac', '/img/cars/cars-5.jpg', ''),
  new ImageData('OZhYgZh0bAg', '/img/cars/cars-6.jpg', ''),
];

const flowers = [
  new ImageData('YdAqiUkUoWA', '/img/flowers/flowers-1.jpg', ''),
  new ImageData('hX_hf2lPpUU', '/img/flowers/flowers-2.jpg', ''),
  new ImageData('w1JE5duY62M', '/img/flowers/flowers-3.jpg', ''),
  new ImageData('3tYZjGSBwbk', '/img/flowers/flowers-4.jpg', ''),
  new ImageData('NoXUQ54pDac', '/img/flowers/flowers-5.jpg', ''),
  new ImageData('OZhYgZh0bAg', '/img/flowers/flowers-6.jpg', ''),
];

export const GAME_MODES = [
  new GameMode('cats', 'Котики', cats),
  new GameMode('flowers', 'Цветочки', flowers),
  new GameMode('cars', 'Машины', cars),
]

export const results = [
  new GameResult('Аня', 16),
  new GameResult('Вася', 12),
  new GameResult('Петя', 19),
];