import { describe, it, expect } from 'vitest';
import { greeting } from './utils.js';

describe('greeting', () => {
  it('returns greeting with name', () => {
    expect(greeting('CI/CD')).toBe('Hello, CI/CD!');
  });

  it('returns fallback for empty name', () => {
    expect(greeting('')).toBe('Hello, stranger!');
  });
});
