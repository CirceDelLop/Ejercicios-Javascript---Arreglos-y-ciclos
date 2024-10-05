console.log("EJERCICIO 5");

let people = ["Maria", "Dani", "Luis", "Juan", "Camila"];

imprimirArreglo(people,"salida5.1");

//Eliminar Dani del array
people.splice(1,1);
imprimirArreglo(people,"salida5.2");

//Eliminar Juan del array
people.splice(2,1);
imprimirArreglo(people,"salida5.3");

//Mover a "Luis" al frente de la matriz
const nombre=people.splice(1,1);
people.unshift(nombre[0]);
imprimirArreglo(people,"salida5.4");

//Agregar su nombre al final de la matriz
people.push("Circe");
imprimirArreglo(people,"salida5.5");

//Usando un bucle, itere a través de esta matriz y después de console.log "Maria", salga del bucle
let nombres=[];

for(let i=0;i<people.length;i++)
{
    //console.log(people[i]);
    
    dato=people[i];
    console.log(dato);
    nombres.push(dato);

    if(people[i]==="Maria")
    {
        break;
    }
}
imprimirArreglo(nombres,"salida5.6");

//Escribir el comando que da el indexOf donde se encuentra "Maria"
const salida7=people.indexOf("Maria");

console.log(salida7);
refResultado=document.getElementById("salida5.7");
stringListItems=salida7;
refResultado.innerHTML=stringListItems;

//Al final del ejercicio, debería haber 4 personas en la formación.
imprimirArreglo(people,"salida5.8");