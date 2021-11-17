const express = require('express');
const app = express();
const path = require('path');
const mysql=require('mysql2');

const Connection= mysql.createConnection({
    host:'localhost',
    user:'root',
    database:'cuidarc'
});

app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs');
app.use(express.static(path.join(__dirname,'public')));

app.use(express.json());


//peticion  GET - POST - PATCH - DELETE
//res es de response y req es de request(pedido/peticion)
//GET pedir informacion
app.get('/',(req,res)=>{
        Connection.query('SELECT * FROM productos ',(err,result)=>{
            if(err){
                console.log(err)
            }
            res.render('./index', {
            titulo:"cuidarse",
            productos:result //estoy mandando todo a index
             })
    });
});    

app.get('/contacto',(req,res)=>{
    res.render('./pages/contacto',{
    titulo:"cuidarse - contacto"
    })
})


app.listen(3000,()=>{
    console.log("Escuchando el puerto 3000")
})