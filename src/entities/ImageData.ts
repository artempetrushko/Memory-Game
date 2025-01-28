export class ImageData {
  id: string;
  url: string;
  description: string;

  constructor(id: string, url: string, description: string) {
    this.id = id;
    this.url = url;
    this.description = description;
  }
}
