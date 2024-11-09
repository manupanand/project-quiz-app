const encryptDecrypt=require('crypto-js')

// encryption algorithm
const  encrypt=(password,key)=>{
    const encryptedText= encryptDecrypt.AES.encrypt(password,key).toString()
    return encryptedText
    }
//decryption algorithm
const decrypt=(encrypted_password,key)=>{
    const decryptedText=encryptDecrypt.AES.decrypt(encrypted_password,key).toString(encryptDecrypt.enc.Utf8)
    return decryptedText
}
module.exports={ encrypt,decrypt}