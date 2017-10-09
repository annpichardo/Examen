var num = 330; 
 
function factoresPrimos(num){ 
     
    var suma = 0; 
    var divisor = 2; 
    var lista = [];
    while (divisor <= num){ 
        if(num % divisor == 0){ 
            suma = divisor + suma; 
                var cociente = num / divisor; 
            num = cociente;
          lista.push(divisor);
            } 
    divisor = divisor + 1; 
    } 
    return lista; 
} 
 

 
var  facts = factoresPrimos(num); 
console.log(facts);