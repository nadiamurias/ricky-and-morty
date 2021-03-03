const set = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

const get = (key) => {
  return JSON.parse(localStorage.getItem(key));
};

export default {
  get: get,
  set: set,
};
