const getDataFromApi = () => {
  return fetch("https://randomuser.me/api/?results=50")
    .then((response) => response.json())
    .then((data) => {
      return data;
    });
};
export default getDataFromApi;
