const lambdaLocal = require('lambda-local');
const path = require('path')
const uuidv4 = require('uuid/v4')



const requestPayload = { 
  Records:
  [ 
    { 
      eventID: 'c0fb0d2acf76d1cade8cf7bb62c793e2',
      eventName: 'INSERT',
      eventVersion: '1.1',
      eventSource: 'aws:dynamodb',
      awsRegion: 'us-east-1',
      dynamodb: {
        "ApproximateCreationDateTime": 1479499740,
        "Keys": {
            "Id": {
                "S": "5344dd4721e9aa200971cacd:b6504fa4-e65e-48e7-bdd4-9a40c2d5ce8e:54187c86-7064-4b3b-8d30-b509f8fb1da2"
            }
        },
        "NewImage": {
            "Id": {
                "S": "5344dd4721e9aa200971cacd:b6504fa4-e65e-48e7-bdd4-9a40c2d5ce8e:54187c86-7064-4b3b-8d30-b509f8fb1da2"
            },
            "Type": {
                "S": "request"
            },
            "Visibility": {
                "S": "public"
            },
            "PlaceId": {
                "S": "537d07d8ba35332a42a4a41f"
            },
            "OwnerId": {
                "S": "5344dd4721e9aa200971cacd"
            }
        },
        "SequenceNumber": "13021600000000001596893679",
        "SizeBytes": 112,
        "StreamViewType": "NEW_IMAGE"
      },
      eventSourceARN: 'arn:aws:dynamodb:us-east-1:612389977354:table/MonetizeJobService/stream/2019-11-11T05:18:23.551' 
    } 
  ] 
}

lambdaLocal.execute({
    event: requestPayload,
    lambdaPath: path.join(__dirname, '../index.js'),
    timeoutMs: 30000,
    environment:{
      SNS_TOPIC_ARN:'arn:aws:sns:us-east-1:612389977354:Textras-Backend-Stack-MonetizeService-17I89PA4Y8UEQ-MonetizeDataStore-168ZSIGGUAPH5-Topic-HQ6JMTLGUXIH',
      AWS_ACCESS_KEY_ID:'AKIAY5FKJPUFBJOF4LGL',
      AWS_SECRET_ACCESS_KEY:'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'
    },
    profilePath: '~/.aws/credentials',
    profileName: 'textras-dev',
    // lambdaHandler:"",
    region:'us-east-1',
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
    clientContext: JSON.stringify({clientId: 'xxxx'})
    })
    .then(function(done) {
        // console.log(done);
        return done
    }).catch(function(err) {
        // console.log(err);
        return err
    });