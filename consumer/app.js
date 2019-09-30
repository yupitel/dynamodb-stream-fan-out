const AWS = require('aws-sdk');

/**
 * receive event message from dynamodb stream and pass data to kinesis
 * 
 */
exports.lambdaHandler = async (event, context) => {
  const recs = event.Records;
  for (let i = 0; i < recs.length; i++) {
      const rec = recs[i];
      // convert kinesis data buffer to string
      const serialized = Buffer.from(rec.kinesis.data, 'base64').toString('ascii');
      const parsed = JSON.parse(serialized);

      // get dynamodb data
      const data = parsed.dynamodb.NewImage;
      console.log(data);
  }

  return event;
};
