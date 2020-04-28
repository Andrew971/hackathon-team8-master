
async function ById (db, queryParam, callback) {
  
  try {
    const {
      hashValue = null,
    } = queryParam
    const query = {
      TableName: process.env.DYNAMODB_TABLE,
      KeyConditionExpression: "#Id = :id", 
      ExpressionAttributeValues: {
      ":id": hashValue
      }, 
      ExpressionAttributeNames: {
        '#Id': 'Id',
        '#OwnerId': 'OwnerId',
        '#Locality': 'Locality',
        '#Type': 'Type',
        '#JobId': 'JobId',
        '#PlaceId': 'PlaceId',
        '#Coordinates': 'Coordinates',
        '#Expire_At': 'Expire_At',
        '#Created_At': 'Created_At',
        '#Updated_At': 'Updated_At',
        '#Archived_At': 'Archived_At',
        '#Detail': 'Detail',
        '#WinnerId': 'WinnerId'
      },
      ProjectionExpression: "#Id, #OwnerId, #Locality, #Type, #JobId, #PlaceId, #Coordinates, #Expire_At, #Created_At, #Updated_At, #Archived_At, #Detail,#WinnerId, #Visibility", 
    }
  
    const queryResult = await db.query(query).promise()
    // console.log('queryResult', queryResult)
    callback(null, {
      headers: {
        "Access-Control-Allow-Origin": "*", // Required for CORS support to work
        "Access-Control-Allow-Credentials": true // Required for cookies, authorization headers with HTTPS 
      },
      statusCode: 200,
      body: JSON.stringify(queryResult)
    })
  } catch (error) {
    callback(null, {
      headers: {
        "Access-Control-Allow-Origin": "*", // Required for CORS support to work
        "Access-Control-Allow-Credentials": true // Required for cookies, authorization headers with HTTPS 
      },
      statusCode: 404,
      body: JSON.stringify({
        message: "Something went wrong",
        error: error

      })
    })
  }
}

async function ByOwner (indexName, db, queryParam, callback) {

  try {
    const {
      hashValue = null,
    } = queryParam
    const query = {
      TableName: process.env.DYNAMODB_TABLE,
      IndexName: indexName + 'And' + 'Type',
      KeyConditionExpression: "#OwnerId = :ownerId", 
      ExpressionAttributeValues: {
      ":ownerId": hashValue,
      }, 
      ExpressionAttributeNames: {
        '#Id': 'Id',
        '#OwnerId': 'OwnerId',
        '#Locality': 'Locality',
        '#Type': 'Type',
        '#JobId': 'JobId',
        '#PlaceId': 'PlaceId',
        '#Coordinates': 'Coordinates',
        '#Expire_At': 'Expire_At',
        '#Created_At': 'Created_At',
        '#Updated_At': 'Updated_At',
        '#Archived_At': 'Archived_At',
        '#Detail': 'Detail',
        '#WinnerId': 'WinnerId'
      },
      ProjectionExpression: "#Id, #OwnerId, #Locality, #Type, #JobId, #PlaceId, #Coordinates, #Expire_At, #Created_At, #Updated_At, #Archived_At, #Detail,#WinnerId, #Visibility", 
    }
  
    const queryResult = await db.query(query).promise()
    console.log('queryResult', queryResult)
    callback(null, {
      headers: {
        "Access-Control-Allow-Origin": "*", // Required for CORS support to work
        "Access-Control-Allow-Credentials": true // Required for cookies, authorization headers with HTTPS 
      },
      statusCode: 200,
      body: JSON.stringify(queryResult)
    })
  } catch (error) {
    callback(null, {
      headers: {
        "Access-Control-Allow-Origin": "*", // Required for CORS support to work
        "Access-Control-Allow-Credentials": true // Required for cookies, authorization headers with HTTPS 
      },
      statusCode: 404,
      body: JSON.stringify({
        message: "Something went wrong",
        error: error

      })
    })
  }
}
async function ByLocality (indexName, db, queryParam, callback) {

  try {
    const {
      hashValue = null,
    } = queryParam
    const query = {
      TableName: process.env.DYNAMODB_TABLE,
      IndexName: indexName + 'And' + 'Type',
      KeyConditionExpression: "#Locality = :locality", 
      ExpressionAttributeValues: {
      ":locality": hashValue,
      }, 
      ExpressionAttributeNames: {
        '#Id': 'Id',
        '#Locality': 'OwnerId',
        '#Locality': 'Locality',
        '#Type': 'Type',
        '#JobId': 'JobId',
        '#PlaceId': 'PlaceId',
        '#Coordinates': 'Coordinates',
        '#Expire_At': 'Expire_At',
        '#Created_At': 'Created_At',
        '#Updated_At': 'Updated_At',
        '#Archived_At': 'Archived_At',
        '#Detail': 'Detail',
        '#WinnerId': 'WinnerId'
      },
      ProjectionExpression: "#Id, #OwnerId, #Locality, #Type, #JobId, #PlaceId, #Coordinates, #Expire_At, #Created_At, #Updated_At, #Archived_At, #Detail,#WinnerId, #Visibility", 
    }
  
    const queryResult = await db.query(query).promise()
    console.log('queryResult', queryResult)
    callback(null, {
      headers: {
        "Access-Control-Allow-Origin": "*", // Required for CORS support to work
        "Access-Control-Allow-Credentials": true // Required for cookies, authorization headers with HTTPS 
      },
      statusCode: 200,
      body: JSON.stringify(queryResult)
    })
  } catch (error) {
    callback(null, {
      headers: {
        "Access-Control-Allow-Origin": "*", // Required for CORS support to work
        "Access-Control-Allow-Credentials": true // Required for cookies, authorization headers with HTTPS 
      },
      statusCode: 404,
      body: JSON.stringify({
        message: "Something went wrong",
        error: error

      })
    })
  }
}
async function ByJob (indexName, db, queryParam, callback) {

  try {
    const {
      hashValue = null,
    } = queryParam
    const query = {
      TableName: process.env.DYNAMODB_TABLE,
      IndexName: indexName + 'And' + 'Type',
      KeyConditionExpression: "#JobId = :jobId", 
      ExpressionAttributeValues: {
      ":ownerId": hashValue,
      }, 
      ExpressionAttributeNames: {
        '#Id': 'Id',
        '#OwnerId': 'OwnerId',
        '#Locality': 'Locality',
        '#Type': 'Type',
        '#JobId': 'JobId',
        '#PlaceId': 'PlaceId',
        '#Coordinates': 'Coordinates',
        '#Expire_At': 'Expire_At',
        '#Created_At': 'Created_At',
        '#Updated_At': 'Updated_At',
        '#Archived_At': 'Archived_At',
        '#Detail': 'Detail',
        '#WinnerId': 'WinnerId'
      },
      ProjectionExpression: "#Id, #OwnerId, #Locality, #Type, #JobId, #PlaceId, #Coordinates, #Expire_At, #Created_At, #Updated_At, #Archived_At, #Detail,#WinnerId, #Visibility", 
    }
  
    const queryResult = await db.query(query).promise()
    console.log('queryResult', queryResult)
    callback(null, {
      headers: {
        "Access-Control-Allow-Origin": "*", // Required for CORS support to work
        "Access-Control-Allow-Credentials": true // Required for cookies, authorization headers with HTTPS 
      },
      statusCode: 200,
      body: JSON.stringify(queryResult)
    })
  } catch (error) {
    callback(null, {
      headers: {
        "Access-Control-Allow-Origin": "*", // Required for CORS support to work
        "Access-Control-Allow-Credentials": true // Required for cookies, authorization headers with HTTPS 
      },
      statusCode: 404,
      body: JSON.stringify({
        message: "Something went wrong",
        error: error

      })
    })
  }
}
async function ByPlace (indexName, db, queryParam, callback) {

  try {
    const {
      hashValue = null,
    } = queryParam
    const query = {
      TableName: process.env.DYNAMODB_TABLE,
      IndexName: indexName + 'And' + 'Type',
      KeyConditionExpression: "#PlaceId = :placeId", 
      ExpressionAttributeValues: {
      ":placeId": hashValue,
      }, 
      ExpressionAttributeNames: {
        '#Id': 'Id',
        '#OwnerId': 'OwnerId',
        '#Locality': 'Locality',
        '#Type': 'Type',
        '#JobId': 'JobId',
        '#PlaceId': 'PlaceId',
        '#Coordinates': 'Coordinates',
        '#Expire_At': 'Expire_At',
        '#Created_At': 'Created_At',
        '#Updated_At': 'Updated_At',
        '#Archived_At': 'Archived_At',
        '#Detail': 'Detail',
        '#WinnerId': 'WinnerId'
      },
      ProjectionExpression: "#Id, #OwnerId, #Locality, #Type, #JobId, #PlaceId, #Coordinates, #Expire_At, #Created_At, #Updated_At, #Archived_At, #Detail,#WinnerId, #Visibility", 
    }
  
    const queryResult = await db.query(query).promise()
    console.log('queryResult', queryResult)
    callback(null, {
      headers: {
        "Access-Control-Allow-Origin": "*", // Required for CORS support to work
        "Access-Control-Allow-Credentials": true // Required for cookies, authorization headers with HTTPS 
      },
      statusCode: 200,
      body: JSON.stringify(queryResult)
    })
  } catch (error) {
    callback(null, {
      headers: {
        "Access-Control-Allow-Origin": "*", // Required for CORS support to work
        "Access-Control-Allow-Credentials": true // Required for cookies, authorization headers with HTTPS 
      },
      statusCode: 404,
      body: JSON.stringify({
        message: "Something went wrong",
        error: error

      })
    })
  }
}

async function ByOwnerAndLocality (indexName, db, queryParam, callback) {

  try {
    const {
      hashValue = null,
      sortValue = null,
    } = queryParam
    const query = {
      TableName: process.env.DYNAMODB_TABLE,
      IndexName: indexName,
      KeyConditionExpression: "#OwnerId = :ownerId and begins_with(#Locality,:sortValue) ", 
      ExpressionAttributeValues: {
      ":ownerId": hashValue,
      ":sortValue": sortValue
      }, 
      ExpressionAttributeNames: {
        '#Id': 'Id',
        '#OwnerId': 'OwnerId',
        '#Locality': 'Locality',
        '#Type': 'Type',
        '#JobId': 'JobId',
        '#PlaceId': 'PlaceId',
        '#Coordinates': 'Coordinates',
        '#Expire_At': 'Expire_At',
        '#Created_At': 'Created_At',
        '#Updated_At': 'Updated_At',
        '#Archived_At': 'Archived_At',
        '#Detail': 'Detail',
        '#WinnerId': 'WinnerId'
      },
      ProjectionExpression: "#Id, #OwnerId, #Locality, #Type, #JobId, #PlaceId, #Coordinates, #Expire_At, #Created_At, #Updated_At, #Archived_At, #Detail,#WinnerId, #Visibility", 
    }
  
    const queryResult = await db.query(query).promise()
    console.log('queryResult', queryResult)
    callback(null, {
      headers: {
        "Access-Control-Allow-Origin": "*", // Required for CORS support to work
        "Access-Control-Allow-Credentials": true // Required for cookies, authorization headers with HTTPS 
      },
      statusCode: 200,
      body: JSON.stringify(queryResult)
    })
  } catch (error) {
    callback(null, {
      headers: {
        "Access-Control-Allow-Origin": "*", // Required for CORS support to work
        "Access-Control-Allow-Credentials": true // Required for cookies, authorization headers with HTTPS 
      },
      statusCode: 404,
      body: JSON.stringify({
        message: "Something went wrong",
        error: error

      })
    })
  }
}

async function ByOwnerAndType (indexName, db, queryParam, callback) {

  try {
    const {
      hashValue = null,
      sortValue = null,
    } = queryParam
    const query = {
      TableName: process.env.DYNAMODB_TABLE,
      IndexName: indexName,
      KeyConditionExpression: "#OwnerId = :ownerId and #Type = :sortValue", 
      ExpressionAttributeValues: {
      ":ownerId": hashValue,
      ":sortValue": sortValue
      }, 
      ExpressionAttributeNames: {
        '#Id': 'Id',
        '#OwnerId': 'OwnerId',
        '#Locality': 'Locality',
        '#Type': 'Type',
        '#JobId': 'JobId',
        '#PlaceId': 'PlaceId',
        '#Coordinates': 'Coordinates',
        '#Expire_At': 'Expire_At',
        '#Created_At': 'Created_At',
        '#Updated_At': 'Updated_At',
        '#Archived_At': 'Archived_At',
        '#Detail': 'Detail',
        '#WinnerId': 'WinnerId'
      },
      ProjectionExpression: "#Id, #OwnerId, #Locality, #Type, #JobId, #PlaceId, #Coordinates, #Expire_At, #Created_At, #Updated_At, #Archived_At, #Detail,#WinnerId, #Visibility", 
    }
  
    const queryResult = await db.query(query).promise()
    console.log('queryResult', queryResult)
    callback(null, {
      headers: {
        "Access-Control-Allow-Origin": "*", // Required for CORS support to work
        "Access-Control-Allow-Credentials": true // Required for cookies, authorization headers with HTTPS 
      },
      statusCode: 200,
      body: JSON.stringify(queryResult)
    })
  } catch (error) {
    callback(null, {
      headers: {
        "Access-Control-Allow-Origin": "*", // Required for CORS support to work
        "Access-Control-Allow-Credentials": true // Required for cookies, authorization headers with HTTPS 
      },
      statusCode: 404,
      body: JSON.stringify({
        message: "Something went wrong",
        error: error

      })
    })
  }
}
async function ByLocalityAndType (indexName, db, queryParam, callback) {

  try {
    const {
      hashValue = null,
      sortValue = null,
    } = queryParam
    const query = {
      TableName: process.env.DYNAMODB_TABLE,
      IndexName: indexName,
      KeyConditionExpression: "#Locality = :localityId and #Type = :sortValue", 
      ExpressionAttributeValues: {
      ":localityId": hashValue,
      ":sortValue": sortValue
      }, 
      ExpressionAttributeNames: {
        '#Id': 'Id',
        '#OwnerId': 'OwnerId',
        '#Locality': 'Locality',
        '#Type': 'Type',
        '#JobId': 'JobId',
        '#PlaceId': 'PlaceId',
        '#Coordinates': 'Coordinates',
        '#Expire_At': 'Expire_At',
        '#Created_At': 'Created_At',
        '#Updated_At': 'Updated_At',
        '#Archived_At': 'Archived_At',
        '#Detail': 'Detail',
        '#WinnerId': 'WinnerId'
      },
      ProjectionExpression: "#Id, #OwnerId, #Locality, #Type, #JobId, #PlaceId, #Coordinates, #Expire_At, #Created_At, #Updated_At, #Archived_At, #Detail,#WinnerId, #Visibility", 
    }
  
    const queryResult = await db.query(query).promise()
    console.log('queryResult', queryResult)
    callback(null, {
      headers: {
        "Access-Control-Allow-Origin": "*", // Required for CORS support to work
        "Access-Control-Allow-Credentials": true // Required for cookies, authorization headers with HTTPS 
      },
      statusCode: 200,
      body: JSON.stringify(queryResult)
    })
  } catch (error) {
    callback(null, {
      headers: {
        "Access-Control-Allow-Origin": "*", // Required for CORS support to work
        "Access-Control-Allow-Credentials": true // Required for cookies, authorization headers with HTTPS 
      },
      statusCode: 404,
      body: JSON.stringify({
        message: "Something went wrong",
        error: error

      })
    })
  }
}
async function ByJobAndType (indexName, db, queryParam, callback) {

  try {
    const {
      hashValue = null,
      sortValue = null,
    } = queryParam
    const query = {
      TableName: process.env.DYNAMODB_TABLE,
      IndexName: indexName,
      KeyConditionExpression: "#JobId = :jobId and #Type = :sortValue", 
      ExpressionAttributeValues: {
      ":jobId": hashValue,
      ":sortValue": sortValue
      }, 
      ExpressionAttributeNames: {
        '#Id': 'Id',
        '#OwnerId': 'OwnerId',
        '#Locality': 'Locality',
        '#Type': 'Type',
        '#JobId': 'JobId',
        '#PlaceId': 'PlaceId',
        '#Coordinates': 'Coordinates',
        '#Expire_At': 'Expire_At',
        '#Created_At': 'Created_At',
        '#Updated_At': 'Updated_At',
        '#Archived_At': 'Archived_At',
        '#Detail': 'Detail',
        '#WinnerId': 'WinnerId'
      },
      ProjectionExpression: "#Id, #OwnerId, #Locality, #Type, #JobId, #PlaceId, #Coordinates, #Expire_At, #Created_At, #Updated_At, #Archived_At, #Detail,#WinnerId, #Visibility", 
    }
  
    const queryResult = await db.query(query).promise()
    console.log('queryResult', queryResult)
    callback(null, {
      headers: {
        "Access-Control-Allow-Origin": "*", // Required for CORS support to work
        "Access-Control-Allow-Credentials": true // Required for cookies, authorization headers with HTTPS 
      },
      statusCode: 200,
      body: JSON.stringify(queryResult)
    })
  } catch (error) {
    callback(null, {
      headers: {
        "Access-Control-Allow-Origin": "*", // Required for CORS support to work
        "Access-Control-Allow-Credentials": true // Required for cookies, authorization headers with HTTPS 
      },
      statusCode: 404,
      body: JSON.stringify({
        message: "Something went wrong",
        error: error

      })
    })
  }
}
async function ByPlaceAndType (indexName, db, queryParam, callback) {

  try {
    const {
      hashValue = null,
      sortValue = null,
    } = queryParam
    const query = {
      TableName: process.env.DYNAMODB_TABLE,
      IndexName: indexName,
      KeyConditionExpression: "#PlaceId = :placeId and #Type = :sortValue", 
      ExpressionAttributeValues: {
      ":placeId": hashValue,
      ":sortValue": sortValue
      }, 
      ExpressionAttributeNames: {
        '#Id': 'Id',
        '#OwnerId': 'OwnerId',
        '#Locality': 'Locality',
        '#Type': 'Type',
        '#JobId': 'JobId',
        '#PlaceId': 'PlaceId',
        '#Coordinates': 'Coordinates',
        '#Expire_At': 'Expire_At',
        '#Created_At': 'Created_At',
        '#Updated_At': 'Updated_At',
        '#Archived_At': 'Archived_At',
        '#Detail': 'Detail',
        '#WinnerId': 'WinnerId'
      },
      ProjectionExpression: "#Id, #OwnerId, #Locality, #Type, #JobId, #PlaceId, #Coordinates, #Expire_At, #Created_At, #Updated_At, #Archived_At, #Detail,#WinnerId, #Visibility", 
    }
  
    const queryResult = await db.query(query).promise()
    console.log('queryResult', queryResult)
    callback(null, {
      headers: {
        "Access-Control-Allow-Origin": "*", // Required for CORS support to work
        "Access-Control-Allow-Credentials": true // Required for cookies, authorization headers with HTTPS 
      },
      statusCode: 200,
      body: JSON.stringify(queryResult)
    })
  } catch (error) {
    callback(null, {
      headers: {
        "Access-Control-Allow-Origin": "*", // Required for CORS support to work
        "Access-Control-Allow-Credentials": true // Required for cookies, authorization headers with HTTPS 
      },
      statusCode: 404,
      body: JSON.stringify({
        message: "Something went wrong",
        error: error

      })
    })
  }
}

module.exports = {
  ById,
  ByOwner,
  ByOwnerAndLocality,
  ByOwnerAndType,
  ByLocality,

  ByLocalityAndType,
  ByJob,
  ByJobAndType,
  ByPlace,
  ByPlaceAndType,
};