import { PlugInBabyLivePage } from './app.po';

describe('plug-in-baby-live App', () => {
  let page: PlugInBabyLivePage;

  beforeEach(() => {
    page = new PlugInBabyLivePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
