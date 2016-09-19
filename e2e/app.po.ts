export class Ng2PokedexPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('ng2-pokedex-app h1')).getText();
  }
}
