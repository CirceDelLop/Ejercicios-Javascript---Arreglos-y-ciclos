console.log("EJERCICIO 6");
//Escribe una función que realice el algoritmo de burbuja. Entrada [3, 6, 12, 5, 100, 1], Salida [1, 3, 5, 6, 12, 100]

arreglo=[3, 6, 12, 5, 100, 1];
let desordenado=true;
let dato;

imprimirArreglo(arreglo,"salida6.1");

while(desordenado)
{
    desordenado=false;
    for(let i=0;i<arreglo.length;i++)
    {
        if(arreglo[i]<arreglo[i-1])
        {
            dato=arreglo[i];
            arreglo[i]=arreglo[i-1];
            arreglo[i-1]=dato;
            desordenado=true;
        }
    }
}

imprimirArreglo(arreglo,"salida6.2");