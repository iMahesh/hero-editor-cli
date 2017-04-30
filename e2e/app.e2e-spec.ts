import { HeroEditorCliPage } from './app.po';

describe('hero-editor-cli App', () => {
  let page: HeroEditorCliPage;

  beforeEach(() => {
    page = new HeroEditorCliPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
