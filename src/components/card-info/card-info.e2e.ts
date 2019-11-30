import { newE2EPage } from '@stencil/core/testing';

describe('w-card-info', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<w-card-info></w-card-info>');

    const element = await page.find('w-card-info');
    expect(element).toHaveClass('hydrated');
  });
});
