export const capitalFirstLetter = (text: string = 'unknown') => {
  if(text){
    return text[0].toUpperCase() + text.slice(1);
  }
  return text;
};
