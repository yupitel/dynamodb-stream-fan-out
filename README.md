# dynamodb-stream-fan-out

This is sample project to test dynamodb-stream with fanout method.

## system image

[dynamodb] -> [stream event] -> [fanout lambda] -> [kinesis] -> [each lambda service]

## cloudformation usage

### validate

aws cloudformation validate-template --template-body file://./template.yaml

### package

aws cloudformation package --s3-bucket bucket-name-for-cf --template template.yaml --output-template-file output.yaml

### deploy

aws cloudformation deploy --template-file output.yaml --stack-name test-dynamo-stream --capabilities CAPABILITY_NAMED_IAM

