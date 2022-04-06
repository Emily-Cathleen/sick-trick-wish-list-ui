const getTrickData = () => {
  return fetch("http://localhost:3002/api/v1/tricks")
  .then(response => response.json());
};

export {getTrickData};
