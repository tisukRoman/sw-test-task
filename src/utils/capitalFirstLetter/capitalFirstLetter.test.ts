import { capitalFirstLetter } from './capitalFirstLetter';

describe('capitalFirstLetter', () => {
  it('works properly with string values', () => {
    expect(capitalFirstLetter('hello')).toBe('Hello');
    expect(capitalFirstLetter('Hello')).toBe('Hello');
    expect(capitalFirstLetter('world')).not.toBe('world');
  });
  it('renders "Unknown" if no arguments', () => {
    expect(capitalFirstLetter()).toBe('Unknown');
  });
  it('does not change empty string value', () => {
    expect(capitalFirstLetter('')).toBe('');
  });
});
