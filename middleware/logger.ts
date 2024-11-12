export function loggerMiddle(req,res,next){
    console.log('Request URL:', req.originalUrl) 
    next()
}