const joi=require("@hapi/joi")
//const { object } = require("@hapi/joi")

const reviews=require('./reviews')(joi)
const users=require('./users')(joi)
const schemas={
    reviews,
    users,
}

const schemaValidator=(object,type)=>{
    if(!object) return (new Error("Object to validate not provided"))
    if(!type) return (new Error("Schema Type to validate not provided"))
    const schema=schemas[type]
    return schema.validateAsync(object)  
}

module.exports={validate:schemaValidator,schemas}