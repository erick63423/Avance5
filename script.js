console.log("Hola, mundo desde un archivo externo!");

let nombre="Jaime";
let edad="37";
let objeto = { nombre: nombre, edad: edad };
let numeros = [1, 2, 3, 4, 5];

 let fecha = new Date();
 console.table(objeto);
 console.table(numeros);
 console.table(30, 7);
 console.table(fecha);
 function sumar(a, b) {
    return a + b;
    }
let a= 5;
let b= 3;

let resultado=((a+b-2)*3)/2;
console.log(resultado);
resultado += 1;

console.log(a>b);
console.log(a===b);
console.log(resultado %3 == 0 ? "👍" : "👎");

let cadena ="Hola, " + "mundo";

console.log(cadena); 

let Edad = 18;

if(Edad >=18) {
   console.info("Eres mayor de edad");
} else {
    console.warn("Eres menor de edad");
}

let anio = prompt("En que año naciste?");
let anio_actual = new Date().getFullYear();
let EDAD = anio_actual - anio;

if (EDAD >= 18) {
console.info("Eres mayor de edad");
} else if (EDAD >= 12 && EDAD < 18) {
if (EDAD == 12) {
console.log("Eres un preadolescente");
} else {
console.log("Eres un adolescente");
}
}
 else {
console.warn("Eres un niño");
}
let dia = parseInt(prompt("Ingresa un número del 1 al"));
    
     switch (dia) {
     case 1:
     console.log("Lunes");
     break;
     case 2:
     console.log("Martes");
     break;
     case 3:
     console.log("Miércoles");
     break;
     default:
     console.error("Día no válido");
//resta
      let resta = function (a, b) {
    return a - b;
    };
    
     console.log(resta(5, 3));
//multiplicacion
     let multiplicacion = (a, b) => a * b;

    console.log(multiplicacion(5, 3)); // 15

//objetos
let objeto = {
 nombre: "Erick",
saludar: function () {
setTimeout(() => {
console.log(`Hola, soy ${this.nombre}`);
}, 1000);
},
 };

 objeto.saludar();

 //Arreglos
 let frutas = ["🍎" ,"🍐","🍇","🍓"];
    frutas.push("🥭");
    frutas.unshift("🍌");
    frutas.pop();
    console.log(frutas); // 🍌, 🍎, 🍐, 🍇
    
    let frutas2 = frutas.slice(1, 3);
    console.log(frutas2.join(" - ")); // 🍎 - 🍐
    console.log(frutas.length); // 5
    console.log(frutas.indexOf("🍇")); // 3
    
     let frutas3 = frutas.map((fruta) => fruta + "🍉");
     console.table(frutas3);
     }