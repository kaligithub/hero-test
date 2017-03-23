import { HeroTestPage } from './app.po';

describe('hero-test App', () => {
  let page: HeroTestPage;

  beforeEach(() => {
    page = new HeroTestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
