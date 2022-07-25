const jwt = require('jsonwebtoken');

JWT_SECRET_KEY = "very_secret_key";

module.exports.create_token = ((userID)=>{
let data = {
    uid : userID,
    time: Date()
}
const token = jwt.sign(data,JWT_SECRET_KEY);
return token;
});

module.exports.verify_token = ((token)=>{
    const verified = jwt.verify(token, JWT_SECRET_KEY);
    if(verified)
    return verified;
    else
    return false;
});