import { Angular2SpotiAppPage } from './app.po';

describe('angular2-spoti-app App', () => {
  let page: Angular2SpotiAppPage;

  beforeEach(() => {
    page = new Angular2SpotiAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
