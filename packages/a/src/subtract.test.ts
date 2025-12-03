import { describe, expect, it } from 'vitest';
import { subtract } from './index.ts';

describe('subtract', () => {
  it('works', () => {
    expect(subtract(1, 2)).toBe(-1);
  });
});
