import { newE2EPage } from '@stencil/core/testing';

describe('app-learn-more', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<app-learn-more></app-learn-more>');

    const element = await page.find('app-learn-more');
    expect(element).toHaveClass('hydrated');
  });

  it.skip('displays the specified name', async () => {
    const page = await newE2EPage({ url: '/learn-more/joseph' });

    const learnMoreElement = await page.find('app-root >>> app-learn-more');
    const element = learnMoreElement.shadowRoot.querySelector('div');
    expect(element.textContent).toContain('Hello! My name is Joseph.');
  });
});
