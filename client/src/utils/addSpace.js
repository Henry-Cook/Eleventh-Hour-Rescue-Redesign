const addSpace = (e) => {
  let input = e.target.value;
  if (input.length === 4 && e.keyCode !== 8) {
    e.target.value = `${input} `;
  } else if (input.length === 9 && e.keyCode !== 8) {
    e.target.value = `${input} `;
  } else if (input.length === 14 && e.keyCode !== 8) {
    e.target.value = `${input} `;
  }
};

export default addSpace;
