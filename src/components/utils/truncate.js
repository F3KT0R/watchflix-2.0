export const truncate = (text, limit) => {
  let truncatedText = text.substring(0, limit);
  let array = truncatedText.split(' ');
  array.pop();
  array.push('...');
  let output = array.join(' ');

  return output;
};
