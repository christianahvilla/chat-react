export const getRandomColor = () => {
  let color;
  do {
    color = `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, '0')}`;
  } while (parseInt(color.substring(1), 16) > 0xe0e0e0);

  return color;
};
