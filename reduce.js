console.log("EJERCICIO 3");
//Calcular la suma y el producto (multiplicación) de una serie de números. Imprime la suma y el producto. Ejemplo: Dada una matriz [1, 2, 3, 4] La suma es 10. El producto es 24.
confirmacion=confirm("Es necesario ingresar números para el ejercicio 3 ¿Deseas continua?");

cantNum=0;
arreglo=[];

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

    imprimirArreglo(arreglo,"salida3.1")

    let valorInicial=0;
    const suma=arreglo.reduce((acumulador, currentValue) => acumulador + parseFloat(currentValue),valorInicial,);
    let refResultado=document.getElementById("salida3.2");
    refResultado.innerHTML="Resultado de la suma: "+suma;

    valorInicial=1
    const producto=arreglo.reduce((acumulador, currentValue) => acumulador * currentValue,valorInicial,);
    refResultado=document.getElementById("salida3.3");
    refResultado.innerHTML="Resultado de la multiplicación: "+producto;
}
else
{
    refResultado=document.getElementById("salida3.1");
    stringListItems="No hay datos para realizar el ejercicio";
    refResultado.innerHTML=stringListItems;
    refResultado=document.getElementById("salida3.2");
    refResultado.innerHTML=stringListItems;
    refResultado=document.getElementById("salida3.3");
    refResultado.innerHTML=stringListItems;
}