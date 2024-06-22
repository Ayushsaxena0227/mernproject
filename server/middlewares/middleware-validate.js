//await schema.parseasync() is the line where u use zod to validate the request body data against defined schema
//here schema is that schema that we defined by zod
const validate = (schema) => async (request, response, next) =>{
    try {
        const parsebody = await schema.parseAsync(request.body);
        request.body = parsebody;
        next();
    } catch (err) {
        const status = 422;
        const message = 'Fill the input Properly ';
        const extradetails =  err.errors[0].message       //coz it is array of object

        const error = {
            status,
            message,
            extradetails,
        }
  
        console.log(error)
        // response.status(400).json({msg : message})
        next(error);
    }
}

module.exports = validate;