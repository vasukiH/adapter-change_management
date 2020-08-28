
// Update this section with your ServiceNow credentials
const options = {
  url: 'https://dev91069.service-now.com/',
  username: 'admin',
  password: 'Pra@2344',
  serviceNowTable: 'change_request'
};


/**
 * Import the Node.js request package.
 * See https://www.npmjs.com/package/request
 */
const request = require('request');


// We'll use this regular expression to verify REST API's HTTP response status code.
const validResponseRegex = /(2\d\d)/;
// Import built-in Node.js package path.
const path = require('path');

/**
 * Import the ServiceNowConnector class from local Node.js module connector.js.
 *   and assign it to constant ServiceNowConnector.
 * When importing local modules, IAP requires an absolute file reference.
 * Built-in module path's join method constructs the absolute filename.
 */
const ServiceNowConnector = require(path.join(__dirname, './connector.js'));

/**
 * @function mainOnObject
 * @description Instantiates an object from the imported ServiceNowConnector class
 *   and tests the object's get and post methods.
 */
function mainOnObject() {
  // Instantiate an object from class ServiceNowConnector.
  const connector = new ServiceNowConnector(options);
  
  // Test the object's get and post methods.
  // You must write the arguments for get and post.
  connector.get((res, err) => {     
    if (err) {
      console.error(`\nError returned from GET request:\n${JSON.stringify(err)}`);
    }
    console.log(`\nResponse returned from GET request:\n${JSON.stringify(res)}`)
  });
  connector.post((res, err) => {     
    if (err) {
      console.error(`\nError returned from POST request:\n${JSON.stringify(err)}`);
    }
    console.log(`\nResponse returned from POST request:\n${JSON.stringify(res)}`)
  });
}

// Call mainOnObject to run it.
mainOnObject();