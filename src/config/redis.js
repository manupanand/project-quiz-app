const logger=require('./logger')
const { createClient }=require('redis');

let client;

async function connectRedis(){
    try{
        if(client){
            return client;
        }else{
            const client = createClient({
                password: process.env.REDIS_PWD,
                socket: {
                    host: process.env.REDIS_URL,
                    port: process.env.REDIS_PORT
                }
            });
            await client.connect()
            logger.info("Redis client connected successfully")
            return client;
        }
        


    }catch(error){
        logger.error('Error in connecting to redis',error)
    }
    
}
module.exports={connectRedis,getClient:()=>client}


