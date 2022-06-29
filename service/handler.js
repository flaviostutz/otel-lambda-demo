'use strict';
const axios = require('axios').default;

module.exports.hello = async (event) => {

  const users = [];
  if(Math.random() > 0.5) {
    const s = Math.random() * 200
    users = await axios.get(`https://randomuser.me/api/?results=${s}`);
  }

  if(Math.random() > 0.5) {
    const s = Math.random() * 200
    await axios.get(`https://random-data-api.com/api/bank/random_bank?size=${s}`);
  }

  if(Math.random() > 0.7) {
    const s = Math.random() * 200
    await axios.get(`https://random-data-api.com/api/vehicle/random_vehicle?size=${s}`);
  }

  // console.log('response');
  // console.log(resp.data);

  const n = Math.random();
  // 70% of calls
  if(n < 0.7) {
    return {
      statusCode: 200,
      body: JSON.stringify(
        {
          message: 'Go Serverless v1.0! Your function executed successfully!',
          users: users,
        },
        null,
        2
      ),
    };
  }

  // 10% of calls
  if(n > 0.9) {
    return {
      statusCode: 500,
      body: JSON.stringify(
        {
          message: 'Oh! A random error!',
          input: event,
        },
        null,
        2
      ),
    };
  }

  // 20% of calls
  return {
    statusCode: 400,
    body: JSON.stringify(
      {
        message: 'A random 4xx error',
        input: event,
      },
      null,
      2
    ),
  };


};
