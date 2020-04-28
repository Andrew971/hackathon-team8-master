const lambdaLocal = require('lambda-local');
const path = require('path')
const uuidv4 = require('uuid/v4')



const requestPayload = { "version": "1", "region": "ca-central-1", "userPoolId": "ca-central-1_Y6geesfe7", "userName": "c33ef9e0-f2a8-4c4a-9ebc-a7a98c45c553", "callerContext": { "awsSdkVersion": "aws-sdk-unknown-unknown", "clientId": null }, "triggerSource": "PostConfirmation_ConfirmSignUp", "request": { "userAttributes": { "sub": "c33ef9e0-f2a8-4c4a-9ebc-a7a98c45c553", "cognito:email_alias": "andrew.entreprise@gmail.com", "cognito:user_status": "CONFIRMED", "email_verified": "false", "email": "andrew.entreprise@gmail.com" } }, "response": {} }

lambdaLocal.execute({
  event: requestPayload,
  lambdaPath: path.join(__dirname, '../index.js'),
  timeoutMs: 30000,
  environment: {
    SNS_TOPIC_ARN: 'arn:aws:sns:us-east-1:612389977354:Textras-Backend-Stack-MonetizeService-17I89PA4Y8UEQ-MonetizeDataStore-168ZSIGGUAPH5-Topic-HQ6JMTLGUXIH',
    AWS_ACCESS_KEY_ID: 'AKIAY5FKJPUFBJOF4LGL',
    AWS_SECRET_ACCESS_KEY: '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'
  },
  profilePath: '~/.aws/credentials',
  profileName: 'textras-dev',
  // lambdaHandler:"",
  region: 'us-east-1',
  // callbackWaitsForEmptyEventLoop:true,
  // envfile:"",
  // envdestroy:"",
  // verboseLevel:"",
  // callback: function(err, data) {
  //   if (err) {
  //       console.log(err);
  //   } else {
  //       console.log(data);
  //   }
  // },
  clientContext: JSON.stringify({ clientId: 'xxxx' })
})
  .then(function (done) {
    // console.log(done);
    return done
  }).catch(function (err) {
    // console.log(err);
    return err
  });