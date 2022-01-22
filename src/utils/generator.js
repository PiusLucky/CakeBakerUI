const crypto = require("crypto");
const md5 = require("md5");


const generateApiKey = () => {
    const crypt1 = crypto.randomBytes(12).toString("hex")
    const crypt2 = crypto.randomBytes(17).toString("hex")
    return `BAKER-${crypt1}-${crypt2}`
}


const avatarGenerator = (mail) => {
  const avatar = `http://gravatar.com/avatar/${md5(mail)}?d=identicon`;
  return avatar
}



module.exports = {
    generateApiKey,
    avatarGenerator
}