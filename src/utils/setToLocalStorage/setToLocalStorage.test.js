import { setToLocalStorage } from './setToLocalStorage';

describe('setToLocalStorage', () => {
  it('should set object to local storage', () => {
    setToLocalStorage('array', [1, 2, 3, 4, 5, null]);
    const array = JSON.parse(localStorage.getItem('array'));
    expect(array).toEqual([1, 2, 3, 4, 5, null]);
    localStorage.removeItem('array');
  });
});
