require('dotenv').config();
decode64 = function(key){
    let buff = new Buffer.from(key, 'base64');
    return buff.toString('ascii');
}
module.exports = {
    adminURI: decode64(process.env.DB_URI_ADMIN),
    moderatorURI: decode64(process.env.DB_URI_MODERATOR),
    userURI: decode64(process.env.DB_URI_USER)
}