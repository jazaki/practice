import { LoginMockPage } from './app.po';

describe('login-mock App', () => {
  let page: LoginMockPage;

  beforeEach(() => {
    page = new LoginMockPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
