const AWS = require('aws-sdk');

AWS.config.update({
  region: "us-east-1",
  //endpoint: "http://localhost:8000"
});

const dynamoDB = new AWS.DynamoDB();

module.exports.testDbConnection = async () => {
  try {
    console.log("About to connect to database");
    await dynamoDB.listTables({}).promise();
    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Server is ok' }),
    };
  } catch (err) {
    console.log("Failed to connect to database");
    console.error(err);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Failed to connect to database', error: err }),
    };
  }
};
