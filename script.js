let nombresYgastos = [];
let nombres = [];
let gastos = [];
let valorIndividual = [];
let total = 0;

document.getElementById("limpiar").onclick = function () {
    location.reload();
  }


document.getElementById("confirmar").onclick = function () {
  let name = document.getElementById("nombre").value;
  let spent = document.getElementById("gasto").value;
  gastos.push(spent);
  nombres.push(name);

  nombresYgastos.push(name + ": $" + spent);
  console.log(nombresYgastos);

  input1 = document.getElementById("nombreYgasto");
  input1.innerHTML ="";
  
  for (let nombreYgasto of nombresYgastos){
    input1.innerHTML += '<div class="container"> <div class="row"> <div class="col-auto">' + nombreYgasto + '</div> </div> </div>';
  }
};



document.getElementById("calcular").onclick = function () {
    
    output1 = document.getElementById("total");
    output1.innerHTML ="";

    for (let i = 0; i <gastos.length; i += 1){
     total += parseFloat(gastos[i]);
    }

    output1.innerHTML += '<div class="container"> <div class="row"> <div class="col-auto">' + "Total: $" + total.toFixed(2) + '</div> </div> </div>';

    output2 = document.getElementById("p/persona");
    output2.innerHTML ="";

    let valorPorPersona = total/gastos.length
    output2.innerHTML += '<div class="container"> <div class="row"> <div class="col-auto">' + "Cada uno debe aportar: $" + valorPorPersona.toFixed(2) + '</div> </div> </div>';
    output2.innerHTML += '<div class="container"> <div class="row"> <div class="col-auto"> Entonces para que todos paguen lo mismo : </div> </div> </div>';

    output3 = document.getElementById("p/persona2");
    output3.innerHTML ="";

    for (let i = 0; i <gastos.length; i += 1){
        if (gastos[i]<=valorPorPersona) {
            valorIndividual[i] = valorPorPersona-gastos[i];
            output3.innerHTML += '<div class="container"> <div class="row"> <div class="col-auto"><b>' + nombres[i] +" debe pagar: $" + valorIndividual[i].toFixed(2) + '</b></div> </div> </div>';
        }else{
            valorIndividual[i] = gastos[i] - valorPorPersona;
            output3.innerHTML += '<div class="container"> <div class="row"> <div class="col-auto"><b>' + nombres[i] +" debe recibir: $" + valorIndividual[i].toFixed(2) + '</b></div> </div> </div>';
        }
    }
}



