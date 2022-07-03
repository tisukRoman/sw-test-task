export const getFromLocalStorage = (key: string, defaultValue: any) => {
  const items = localStorage.getItem(key);
  return items ? JSON.parse(items) : defaultValue;
};
