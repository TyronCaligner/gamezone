
export default class Game {
  constructor(name, image, description, genre) {
    this.name = name;
    this.image = image;
    this.description = description;
    this.genre = genre;
  }

  getDetails() {
    return {
      name: this.name,
      image: this.image,
      description: this.description,
      genre: this.genre,
    };
  }
}
