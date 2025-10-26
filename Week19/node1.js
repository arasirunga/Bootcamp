const http = require('http')


const server = http.createServer((req, res) => {
    // send the response
    res.end('Hello World from the server')
})
server.listen(5000, 'localhost', () => {
    console.log('Server is listening at localhost on port 5000')
})

const knex=require ('knex')({
    client:'pg',
    connection:{

        host:'127.0.0.1',
        user:'postgres',
        password:'arasi',
        database:'public',
        port:5432
    }
});

knex.select('name','nic').from('employees').then(data=>{console.log(data)}) 


app.put('/api/students/:id',(req,res)=>{
//update students 
const studentid=req.params.studentid
const new_data=req.body

console.log(student_id,new_data)
//update students set name = 'ritesh smith' where id=1

knex('students').update (name="ritesh smith")
//name ="ritesh ssmith "

}