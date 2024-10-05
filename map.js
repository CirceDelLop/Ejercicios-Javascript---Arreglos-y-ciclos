//Escribir una función que acepte una serie de números y duplique el valor de cada elemento de la matriz. Imprime la nueva matriz actualizada. Ejemplo: Dada una matriz [1, 2, 4, 5]. La salida debe ser [2, 4, 8, 10]
let confirmacion=confirm("Es necesario ingresar números para el ejercicio 2 ¿Deseas continua?");
let  cantNum=0;
let arreglo=[];
let listNums;

//Función que imprime en página
const imprimirArreglo=(array,clase)=>
{
    //Imprimir en consola
    //console.log(array);
        
    //Imprimir en página
    const listItems = array.map((numero)=>`${numero}`);
    const refResultado=document.getElementById(clase);
    const stringListItems=listItems.join(", ");
    refResultado.innerHTML=stringListItems;
}

if(confirmacion===true)
{
    while(cantNum<=0)
    {
        cantNum=prompt("¿Cuantos números deseas ingresar? Debe ser mayor a 0");        
    }

    for(let i=0;i<cantNum;i++)
    {
        arreglo.push(prompt("Ingrese el número dentro dentro del índice "+i));
    }

    imprimirArreglo(arreglo,"salida2.1")

    listNums=(arreglo.map(numero=>`${numero}`*2));

    imprimirArreglo(listNums,"salida2.2")
}
else
{
    refResultado=document.getElementById("salida2.1");
    stringListItems="No hay datos para realizar el ejercicio";
    refResultado.innerHTML=stringListItems;
    refResultado=document.getElementById("salida2.2");
    refResultado.innerHTML=stringListItems;
}