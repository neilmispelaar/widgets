import request from './api';

function getAll() {
  return request({
    url: '/data/people.json',
    method: 'GET',
  })
    .then((response) => {

      var people = [];

      // We need to harmonise the categories in the ui with the categories
      // from the api service
      if (Array.isArray(response) && response?.length > 0) {

        response.forEach(element => {
          // Use the response adapter to create a product
          // object and then add it to the array of products
          //products.push(productResponseAdapter(element));
          //var category = categoryResponseAdapter(element);
          people.push(element);
        });

      }

      return people;

    })
    .catch((error) => {
      console.error(error);
      return (error);
    });

}

const PeopleService = {
  getAll, //, update, delete, etc. ...
}

export default PeopleService;


