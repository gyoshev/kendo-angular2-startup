import { NgCliThemePage } from './app.po';

describe('ng-cli-theme App', function() {
  let page: NgCliThemePage;

  beforeEach(() => {
    page = new NgCliThemePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
