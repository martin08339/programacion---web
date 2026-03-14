function total()  {
   
    let cantidad = parseInt(document.getElementById("matri").value) || 0;
    let nombre = document.getElementById("nom").value;
    
   
    let radioSeleccionado = document.querySelector('input[name="tm"]:checked');
    let precioBase = radioSeleccionado ? Number(radioSeleccionado.dataset.precio) : 0;

   
    let totalExtras = 0; 
    const extrasMarcados = document.querySelectorAll(".extra:checked");
    
    extrasMarcados.forEach(extra => {
        totalExtras += Number(extra.dataset.precio);
    });
    
    let subtotalCafe = cantidad * precioBase;
    let totalcomple= cantidad * totalExtras;
    let totalPagar = subtotalCafe + totalcomple;

    alert(
        "ORDEN CONFIRMADA\n" +
        "--------------------------\n" +
        "Cliente: " + (nombre || "Cliente") + "\n" +
        "Cantidad: " + cantidad + "\n" +
        "Total Café: $" + subtotalCafe + "\n" +
        "Total Extras: $" + totalcomple + "\n" + 
        "--------------------------\n" +
        "TOTAL A PAGAR: $" + totalPagar
    );
   
}
 let Botondos = document.getElementById("botonDos");
    Botondos.addEventListener('click',function(event){
        event.preventDefault();
        alert("oprimiste el boton dos.....")

    })
   
        function calcular() {
           
            let n1 = parseFloat(document.getElementById("number1").value) || 0;
            let n2 = parseFloat(document.getElementById("number2").value) || 0; 
            
           
            let operacion = document.querySelector('input[name="tm"]:checked').value;
            
            let resultado = 0;
            let simbolo = "";

            
            if (operacion === "suma") {
                resultado = n1 + n2;
                simbolo = "+";
            } else if (operacion === "resta") {
                resultado = n1 - n2;
                simbolo = "-";
            } else if (operacion === "multi") {
                resultado = n1 * n2;
                simbolo = "*";
            }

            
            alert("El resultado de " + n1 + " " + simbolo + " " + n2 + " es: " + resultado);
        }
    