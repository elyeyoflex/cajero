class Billete{
  constructor(v, c){
    this.valor= v;
    this.cant= c;
  }
}

var dinero, papeles, dineroRequerido;

var caja = [];
caja.push(new Billete(1000, 10));
caja.push(new Billete(500, 10));
caja.push(new Billete(200, 10));
caja.push(new Billete(100, 10));
caja.push(new Billete(50, 10));
caja.push(new Billete(20, 10));


var res = document.getElementById("res");
var boton = document.getElementById("button");
boton.addEventListener("click", extraer);

function  extraer(){
  var plata=0;
  var entregado = [];
  var monto = document.getElementById("dinero");
  dinero= parseInt(monto.value);
  dineroRequerido= dinero;

  for (var b of caja){
    if(dinero>0){
      if(Math.floor(dinero/b.valor)>b.cant){
        papeles=b.cant;
      }else{
        papeles=Math.floor(dinero/b.valor);
      }
      entregado.push(new Billete(b.valor, papeles));
      dinero= dinero - (b.valor * papeles);
      b.cant= b.cant-papeles;
      plata+= (b.valor * papeles);
    }
  }

  res.innerHTML="";
  for (var i of entregado){//imprime los billetes y cant que retiro
    if(i.cant > 0){
      res.innerHTML += "<img src="+ i.valor +".png> : " + i.cant + "<br/>";
    }
  }

  res.innerHTML+= "retiraste: $"+ plata + "<br/>";

  if (plata==dineroRequerido){
    res.innerHTML+= "retiro exitoso <hr/>";
  }else{
    res.innerHTML+= "hubo un problema al retirar dinero <br/>";
    res.innerHTML+= "faltaron retirar $" + (dineroRequerido-plata) + " <hr/>";
  }

  res.innerHTML+= "Dinero Restante: <br/>";
  for (var b of caja){//imprime la cant de billetes que quedan en el cajero
    res.innerHTML += "<img src="+ b.valor +".png> : " + b.cant + "<br/>";
  }

}
