function calculandoImc(){

  var peso = document.getElementById("peso").value;
  var talla =document.getElementById("talla").value;

  var imc=(peso/Math.pow(talla,2)).toFixed(2);

  if(imc > 40){
    document.getElementById("calculo").innerHTML="Su IMC es de : " +imc + " " + "tiene "+ "<mark>" + "Obesidad mórbida"+"</mark>";
  }else if(imc>27){
    document.getElementById("calculo").innerHTML="Su IMC es de : " +imc + " "+ "tiene "+ "<mark>" + "Obesidad" +"</mark>";
  }else if(imc>25){
    document.getElementById("calculo").innerHTML="Su IMC es de : " +imc + " " + "tiene + "<mark>" + Sobrepeso"+"</mark>";
  }else if(imc>18){
    document.getElementById("calculo").innerHTML="Su IMC es de : " +imc + " " + "<mark>" +"Normal" + "</mark>";
  }else{
    document.getElementById("calculo").innerHTML="Su IMC es de : " +imc + " " + "tiene signos de + "<mark>" +desnutrición" +"</mark>";
  }

}
