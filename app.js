//constantes globales

const express=require("express");
const app= express();
const ejs = require("ejs");
const port=3000;
const bodyParser = require('body-parser');

//variables globales
var globalVariable="Esta es una variable global";

// crear view engine

app.set("view engine","ejs");
app.use(bodyParser.urlencoded({ extended:false }));
app.use(bodyParser.json());

//function

function myfunction(){
    //var local
    var localVariable = "Esta es una variable local";

    console.log(localVariable);
    console.log(globalVariable);

    return globalVariable;

}

function sumar(){

    var x=99;
    var y=2345;

    var z=x*y/25;

    return z;
}

function random(){

    var ran = Math.floor(Math.random()*4);
    console.log(ran);
    var result3;
    switch(ran){
        case 0:
            result3 = "Fresa";
            break;
        case 1:
            result3 = "Papaya";
            break;
        case 2:
            result3 = "Banano";
            break;
        case 3:
            result3 = "Pera";
            break;
        default:
            console.log("Wrong answer");
            break;

    
    }
    // termina switch

    return result3;
}

 app.post('/operaciones',(req, res) => {
   
   const num1= parseInt(req.body.num1);
   const num2= parseInt(req.body.num2);
   console.log(num1)
   console.log(num2)
     const sumar=(num1,num2)=>{
        return num1 + num2;
        
    }
    const restar=(num1,num2)=>{
        return num1-num2;
    }
   const multiplicar=(num1,num2)=>{
        return num1*num2;
    }
    const divisor=(num1,num2)=>{
        return num1/num2;
    }

    const texto= parseInt(req.body.texto);
    console.log(texto)

    const textoAleatorio=(texto)=>{
        let textoRandom='';
        let caracteres='aeiouycdnuhadfuihdfxzyt!@#$%^&*()_+~`*/';
        for (let i=0; i<texto;i++){
            textoRandom+=caracteres.charAt(Math.floor(Math.random()*caracteres.length))

        }
        console.log(textoRandom)
        return textoRandom
    }
    
    res.render("operaciones",{sumar:sumar(num1,num2),restar:restar(num1,num2),multiplicar:multiplicar(num1,num2),divisor:divisor(num1,num2),textoAleatorio:textoAleatorio(texto)})
    console.log(sumar(num1,num2))

   })    


//erutamiento donde se ejecuta el codigo

app.get('/',(req,res)=>{
    
   

    const result = myfunction(); //return
    const result2= sumar();
    const result3 = random();

    res.render("index",{result,result2,result3});
});

app.listen(port,()=>{
    console.log("Servidor escuchando en el puerto http://localhost:"+port);
});