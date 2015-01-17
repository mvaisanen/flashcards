var apn = Meteor.npmRequire('apn'),
    path = Meteor.npmRequire('path')
    apnOptions = Meteor.settings.apnOptions || {}

// default apn connection options
apnOptions = _.extend({
  cert: path.join("private", "cert.pem"),
  key: path.join("private", "key.pem"),
}, apnOptions)
apnConnection = new apn.Connection(apnOptions)