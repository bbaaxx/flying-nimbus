import { BasedefuegoPage } from './app.po';

describe('basedefuego App', function() {
  let page: BasedefuegoPage;

  beforeEach(() => {
    page = new BasedefuegoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
