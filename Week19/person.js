const http=require("http")


let students=[]

const server=http.createServer((request,response)){

    console.log("i have got a "+ request.method +" request on"+ request.url)
    if (request.url=="/api/students" && request.method=="GET"){



} 