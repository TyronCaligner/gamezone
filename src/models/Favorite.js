
export default class Favorite {
  constructor(game) {
    this.game = game;
    this.isFavorite = false;
  }

  toggleFavorite() {
    this.isFavorite = !this.isFavorite;
    return this.isFavorite;
  }

  removeFavorite() {
    this.isFavorite = false;
  }

  getGameName() {
    return this.game.name;
  }
}
