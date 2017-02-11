import { WriteideasPage } from './app.po';

describe('writeideas App', function() {
  let page: WriteideasPage;

  beforeEach(() => {
    page = new WriteideasPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
