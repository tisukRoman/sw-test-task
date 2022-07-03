import { getFromLocalStorage } from './getFromLocalStorage';

describe('getFromLocalStorage', () => {
  it('should return the same item from storage', () => {
    localStorage.setItem('array', JSON.stringify([1, 2, 3]));
    localStorage.setItem('object', JSON.stringify({name: 'Roman'}));

    expect(getFromLocalStorage('array', [])).toEqual([1, 2, 3]);
    expect(getFromLocalStorage('object', {})).toEqual({name: 'Roman'});
    
    localStorage.removeItem('array');
    localStorage.removeItem('object');
  });
  it('should return second argument if item not found', () => {
    expect(getFromLocalStorage('array', [])).not.toEqual([1, 2, 3]);
    expect(getFromLocalStorage('unfound', [])).toEqual([]);
    expect(getFromLocalStorage('unfound', {})).toEqual({});
    expect(getFromLocalStorage('value', 'DEFAULT')).toBe('DEFAULT');
  });
});
