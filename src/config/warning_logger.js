const logger=require('./logger')

// process wide warning logger

function warningLogger(){
    process.on('warning',(warning)=>{
        logger.warn(JSON.stringify({
            name:warning.name,
            message:warning.message,
            stack:warning.stack
        }))
    })
}

module.exports=warningLogger;