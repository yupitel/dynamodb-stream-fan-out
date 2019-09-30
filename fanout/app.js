const AWS = require('aws-sdk');

const kinesis = new AWS.Kinesis();

const KINESIS_STREAM = process.env.KINESIS_STREAM;

/**
 * receive event message from dynamodb stream and pass data to kinesis
 * 
 */
exports.lambdaHandler = async (event, context) => {
  // get dynamodb stream
  const recs = event.Records;

  // parse dynamodb data and convert to kinesis object
  const entries = recs.map((rec) => {
    const cnv = AWS.DynamoDB.Converter.unmarshall(rec.dynamodb.NewImage);
    rec.dynamodb.NewImage = cnv;
    return { PartitionKey: rec.eventID, Data: JSON.stringify(rec) };
  });
  
  // pass data to kinesis
  const res = await kinesis.putRecords({ StreamName: KINESIS_STREAM, Records: entries }).promise();
  return res;
};
