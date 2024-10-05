console.log("EJERCICIO 4");

let student1Courses = ['Math', 'English', 'Programming'];
let student2Courses = ['Geography', 'Spanish', 'Programming'];

//Uso de filter
refResultado=document.getElementById("salida4.1.1");
stringListItems="Usando filter:";
console.log("Usando filter:");

for(let i=0;i<student2Courses.length;i++)
{
    const result = student1Courses.filter((materia)=>materia===student2Courses[i]);
    if(result.length!=0)
    {
        console.log(result);

        refResultado.innerHTML=stringListItems;
        imprimirArreglo(result,"salida4.1");
    }
}

//Uso de includes
console.log("Usando includes");
refResultado=document.getElementById("salida4.2.1");
stringListItems="Usando includes:";
refResultado.innerHTML=stringListItems;

for(let i=0;i<student2Courses.length;i++)
{
    if((student1Courses.includes(student2Courses[i])))
    {
        console.log(student2Courses[i]);

        refResultado=document.getElementById("salida4.2");
        stringListItems=`${student2Courses[i]}`;
        refResultado.innerHTML=stringListItems;
    }
}