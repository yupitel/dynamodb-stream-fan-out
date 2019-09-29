const AWS = require('aws-sdk');

const kinesis = new AWS.Kinesis();

/**
 * receive event message from dynamodb stream and pass data to kinesis
 * 
 */
exports.lambdaHandler = async (event, context) => {
  console.log(event);
  
  // pass data to kinesis
  return event;
};
