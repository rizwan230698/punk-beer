export const shortDescription = (description) => {
  const words = description.split(' ');
  let newDescription = '';
  for (let word of words) {
    if (newDescription.length + word.length >= 150) {
      return `${newDescription.trim()}...`;
    } else {
      newDescription += ` ${word}`;
    }
  }
  return newDescription.trim();
};
