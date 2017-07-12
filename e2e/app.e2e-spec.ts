import { DonnaPage } from './app.po';

describe('donna App', () => {
  let page: DonnaPage;

  beforeEach(() => {
    page = new DonnaPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
