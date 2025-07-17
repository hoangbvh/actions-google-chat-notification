const parse = (status) => {
  const s = status.toLowerCase();
  switch (s) {
    case 'success':
    case 'passed':
    case 'failure':
    case 'in-progress':
    case 'cancelled':
      return s;
    default:
      throw Error(`Invalid parameter. status=${status}.`);
  }
};

module.exports = { parse };
