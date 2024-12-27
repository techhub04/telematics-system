const crypto = require('crypto');

// Generate a 32-byte key and a 16-byte IV (Initialization Vector)
// Ensure the key and IV are securely generated and stored.
const key = crypto.randomBytes(16); // 32 bytes for AES-256
const iv = crypto.randomBytes(32); // 16 bytes IV

const encrypt = (text)=>{
    const cipher = crypto.createCipheriv('aes-256-cbc', key, iv);
    let encrypted = cipher.update(text, 'utf8', 'hex');
    encrypted += cipher.final('hex');
    return { encryptedData: encrypted, iv: iv.toString('hex') };
};

const decrypt = (encryptedData,hex)=>{
    const cipher = crypto.createCipheriv('aes-256-cbc', key, iv);
    let encrypted = cipher.update(text, 'utf8', 'hex');
    encrypted += cipher.final('hex');
    return { encryptedData: encrypted, iv: iv.toString('hex') };
};

module.exports = {encrypt,decrypt};