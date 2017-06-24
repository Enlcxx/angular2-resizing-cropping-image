import { ResizingCroppingImagePage } from './app.po';

describe('resizing-cropping-image App', () => {
  let page: ResizingCroppingImagePage;

  beforeEach(() => {
    page = new ResizingCroppingImagePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
