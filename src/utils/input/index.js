const maxLengthCheck = (e) => {
  const { value, maxLength } = e.target;
  if (value.length > maxLength) {
    e.target.value = value.slice(0, maxLength);
  }
};

const phoneMask = (e) => {
  const regexp = /^([0-9]{2})([0-9]{4,5})([0-9]{4})$/;
  var str = e.target.value.replace(/[^0-9]/g, '').slice(0, 11);
  const result = str.replace(regexp, '($1) $2-$3');
  e.target.value = result;
};

export { maxLengthCheck, phoneMask };