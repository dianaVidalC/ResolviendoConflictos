function calculandoImc(){
  var peso = document.getElementById("peso");
  var talla =document.getElementById("talla");

  var imc=peso/Math.pow(talla,2);

  document.getElementById("calculo").innerHTML=imc.value;
}
