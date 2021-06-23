import request from './api';

// Callbacks that are run
var receivePersonCallbacks = [];

// Simulate an event fired
setTimeout(function(){

  receivePersonCallbacks.forEach(function(callback){
    // Run the function callback
    // Pass in the new person data
    callback(
      {
      "id": 6,
      "name": {
        "first": "Kate",
        "middle": "Elizabeth",
        "last": "Grantham"
      }
    });
  });

}, 5000);

// Return all of the people
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

// Register a new callback to run when a person is added
function registerNewPersonHandler(callback) {
  // Add the callback to the local array
  receivePersonCallbacks.push(callback);
}

const PeopleService = {
  getAll, //, update, delete, etc. ...
  registerNewPersonHandler,
}

export default PeopleService;


