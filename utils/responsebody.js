const errorResponseBody = {
    err: {},
    data: {},
    message:"Something went wrong, cannot process request",
    success: false
}
const succesResponseBody= {
    err: {},
    data: {},
    message:"Successfully processed",
    success: true 
}
module.exports{
    succesResponseBody,
    errorResponseBody
}