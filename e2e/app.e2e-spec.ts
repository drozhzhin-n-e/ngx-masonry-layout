import { CuiMasonryAppPage } from './app.po';

describe('cui-masonry-app App', () => {
  let page: CuiMasonryAppPage;

  beforeEach(() => {
    page = new CuiMasonryAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
