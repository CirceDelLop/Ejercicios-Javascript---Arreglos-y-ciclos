let arr = ["This", "is", "a", "sentence."];
function printOutString(array)
{
    const listItems = array.map((palabra)=>`${palabra}`);
    const refResultado=document.getElementById("resultado1");
    const stringListItems=listItems.join(" ");
    refResultado.innerHTML=stringListItems;
}

printOutString(arr);