const keys = require('./keys');
decode64 = function(key){
    let buff = new Buffer.from(key, 'base64');
    return buff.toString('ascii');
}
module.exports = {
    adminURI: decode64(keys.admin),
    moderatorURI: decode64(keys.moderator),
    userURI: decode64(keys.user)
}