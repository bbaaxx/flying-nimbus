import { FlyingNimbusPage } from './app.po';

describe('flying-nimbus App', function() {
  let page: FlyingNimbusPage;

  beforeEach(() => {
    page = new FlyingNimbusPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
