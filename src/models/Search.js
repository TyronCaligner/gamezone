
export default class Search {
  constructor() {
    this.searchTerm = "";
  }

  setSearchTerm(term) {
    this.searchTerm = term;
  }

  filterGames(games) {
    return games.filter((game) =>
      game.name
        .toLowerCase()
        .includes(this.searchTerm.toLowerCase())
    );
  }

  clearSearch() {
    this.searchTerm = "";
  }
}
