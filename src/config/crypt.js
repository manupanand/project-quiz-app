const encryptDecrypt=require('crypto-js')
const logger=require('./logger')
// encryption algorithm
const  encrypt=(password,key)=>{
    try{
        const encryptedText= encryptDecrypt.AES.encrypt(password,key).toString()
        logger.info("Encryption successful")
        return encryptedText
    }catch(error){
        logger.error("Error in encryption ",error)
        return null
    }
     
    }
//decryption algorithm
const decrypt=(encrypted_password,key)=>{
       try{
        const decryptedText=encryptDecrypt.AES.decrypt(encrypted_password,key).toString(encryptDecrypt.enc.Utf8)
        logger.info("Decrypting successful")
        return decryptedText
        }catch(error){
        logger.error("Error in decrypting",error)
        }
}
module.exports={ encrypt,decrypt}