
let Arreglo = [];

let formulario = document.getElementById("formArreglos");

formulario.addEventListener('submit', function(event) {
    event.preventDefault(); 
    
    let foData = new FormData(formulario);
    let d1 = foData.get("dato1");
    

    Arreglo.push(d1);
    console.log("Arreglo actual:", Arreglo);
});


function buscar() {
    let palabra = document.getElementById("bus").value;
    

    let existe = Arreglo.includes(palabra);
    
    if(existe) {
        console.log("Sí está en el arreglo: " + palabra);
    } else {
        console.log("No se encuentra en el arreglo");
    }

for (let i = 0; i < Arreglo.length; i++) {
       
        if (Arreglo[i] === palabra) {
            console.log("La posición del dato es: " + i);
        }
    }
}
   


