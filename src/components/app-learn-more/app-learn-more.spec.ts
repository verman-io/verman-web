import { AppLearnMore } from './app-learn-more';
import { newSpecPage } from '@stencil/core/testing';

describe('app-learn-more', () => {
  describe('normalization', () => {
    it('returns a blank string if the name is undefined', async () => {
      const { rootInstance } = await newSpecPage({
        components: [AppLearnMore],
        html: '<app-learn-more></app-learn-more>',
      });
      expect(rootInstance.normalize(undefined)).toEqual('');
    });

    it('returns a blank string if the name is null', async () => {
      const { rootInstance } = await newSpecPage({
        components: [AppLearnMore],
        html: '<app-learn-more></app-learn-more>',
      });
      expect(rootInstance.normalize(null)).toEqual('');
    });

    it('capitalizes the first letter', async () => {
      const { rootInstance } = await newSpecPage({
        components: [AppLearnMore],
        html: '<app-learn-more></app-learn-more>',
      });
      expect(rootInstance.normalize('quincy')).toEqual('Quincy');
    });

    it('lower-cases the following letters', async () => {
      const { rootInstance } = await newSpecPage({
        components: [AppLearnMore],
        html: '<app-learn-more></app-learn-more>',
      });
      expect(rootInstance.normalize('JOSEPH')).toEqual('Joseph');
    });

    it('handles single letter names', async () => {
      const { rootInstance } = await newSpecPage({
        components: [AppLearnMore],
        html: '<app-learn-more></app-learn-more>',
      });
      expect(rootInstance.normalize('q')).toEqual('Q');
    });
  });
});
