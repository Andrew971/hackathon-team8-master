module.exports = {
  pushNotify: function(msg,loc,header,deviceId,msgType,imgPath,callback) {
      var Pushwoosh = require('pushwoosh-client');
      var client= new Pushwoosh(process.env.PUSHWOOSH_CODE, process.env.PUSHWOOSH_KEY);
      if(deviceId.length  === 0)
          return callback("Device Id not defined");
      if(msg == "")
          return callback("Message not specified");
      var options = {
          data: {
              location: loc,
              type:msgType,
              img: imgPath
          },
          android_vibration: 0,
          android_badges: +1,
          ios_sound: "",
          platforms: [1,2,3,5,7,8,9,10,11,12],
          ios_silent: 1,
          ios_badges: +1,
          android_header: header,
          android_root_params: {"key": "value1"},
          devices:deviceId
      };
      client.sendMessage(msg,options,function(error, response) {
          console.log(error);
          if (error) {
              return callback(error);
          }
          return callback(null,response);
      });
  }
};
