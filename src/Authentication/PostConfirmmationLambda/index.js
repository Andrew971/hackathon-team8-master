const AWS = require('aws-sdk')
const getParams = require('./lib/getParams')
const sns = new AWS.SNS({ apiVersion: '2010-03-31' });

async function recordProcessor(event) {
  console.log('Stream event: ', event);
  console.log("\n\nLoading Event Record\n\n", event.triggerSource);
  try {
    const {
      triggerSource,
      request,
    } = event

    const {
      userAttributes,
    } = request

    console.log({ userAttributes })

    const message = {
      MessageAttributes: {
        TriggerType: {
          DataType: 'String', /* required */
          StringValue: `${triggerSource.toUpperCase()}`
        },

      },
      MessageStructure: 'json',
      Message: JSON.stringify({
        default: `New trigger "${triggerSource.toUpperCase()}" posted by cognito for ${userAttributes.sub}`,
        email: `New trigger "${triggerSource.toUpperCase()}" posted by cognito for place ${userAttributes.sub}`,
        sqs: JSON.stringify(event)
      }),
      Subject: "New DynamoDB Stream Record",
      // Message: `New trigger "${triggerSource.toUpperCase()}" posted by cognito for place ${userAttributes.sub}`,
      TopicArn: process.env.SNS_TOPIC_ARN
    }
    console.log('message', message)
    const publishedMessage = await sns.publish(message).promise()

    console.log('messageId', publishedMessage.MessageId)

    return Promise.resolve(`Successfully processed cognito event ${triggerSource.toUpperCase()} for ${userAttributes.sub}. Message ${publishedMessage.MessageId} successfully sent`)

  } catch (error) {
    // throw error
    return Promise.reject(error)
  }

}
exports.handler = async (event, context, callback) => {
  try {
    console.log(event, 'event')
    const processedRecords = await recordProcessor(event)
    console.log('processedRecords', processedRecords)

    callback(null, event);
  } catch (error) {
    console.log({
      message: 'A problem ocurred',
      event: JSON.stringify(event),
      context: JSON.stringify(context)
    })
    throw error

  }
}





















