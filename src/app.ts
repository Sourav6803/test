
import express, { NextFunction, Request, Response } from 'express';
export const app = express();


app.use(express.json({limit: '50mb'}));

const PORT = 4000

app.listen(PORT, ()=>{
    console.log(`Server running on PORT ${PORT}`)
    
})


app.get("/test", (req:Request, res: Response, next:NextFunction)=> {
    res.status(200).json({success: true, message: "Welocome to LMS"})
})

app.all('*', (req:Request, res:Response, next:NextFunction)=>{
    const err = new Error(`Route ${req.originalUrl} not found`) as any
    err.statusCode = 404
    next(err)
})

