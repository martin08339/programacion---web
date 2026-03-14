let formulario = document.getElementById ("form1");


    formulario.addEventListener('submit', function(event) {
        
        event.preventDefault();

        let foData = new FormData (formulario);
        let d1 = foData.get("dato1");
        let d2 = foData.get("dato2");
        let d3 = foData.get("dato3");

    console.log("dato1: " + d1);
    console.log("dato2: " + d2);
    console.log("dato3: " + d3);
    
    let suma = +d1 + + d2;
    let sum="";

    if(suma>20){
        sum= " la suma es mayor que 20"
    }
    else if (suma<20){
        sum=" la suma es menor que 20"
    }
    

    console.log("LA SUMA DE DATO1 + DATO2 ES: "+suma +"" +sum);
    


    })

   




    

    


    


