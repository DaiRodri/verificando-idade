function verificar() {
  var data = new Date();
  var ano = data.getFullYear();
  var fano = document.getElementById("txtano");
  var res = document.getElementById("res");
  
  if (fano.value.length == 0 || fano.value > ano) {
      alert("Verifique os dados e tente novamente");
  } else {
      var fsex = document.getElementsByName("radsex");  // Corrigido aqui
      var idade = ano - fano.value;
      var genero = "";
      var img = document.getElementById("imagem"); // Supondo que você tenha um elemento <img id="imagem">

      if (fsex[0].checked) {
          genero = "menino";
          if(idade >=0 && idade <10){
            res.innerHTML = `Detectamos ${genero} com ${idade} anos`;
            img.src= "menino.jpg"

          }else if (idade > 10 && idade < 21){
            genero = "jovem"
            res.innerHTML = `Detectamos ${genero} com ${idade} anos`;
            img.src= "jovemmenino.jpg"

          }else if (idade > 21 && idade < 65){
            genero = "adulto"
            res.innerHTML = `Detectamos ${genero} com ${idade} anos`;
            img.src= "homemadulto.jpg"

          }else{
            genero = "idoso"
            res.innerHTML = `Detectamos ${genero} com ${idade} anos`;
            img.src= "homemidoso.jpg"

          }
      } else if (fsex[1].checked) {
          genero = "menina"
          res.innerHTML = `Detectamos ${genero} com ${idade} anos`;
          if(idade >=0 && idade <10){
            
            img.src = "menina.jpg"

          }else if (idade > 10 && idade < 21){
            genero = "jovem"
            res.innerHTML = `Detectamos ${genero} com ${idade} anos`;
            img.src = "jovemmenina.jpg"

          }else if (idade > 21 && idade < 65){
            genero = "adulto"
            res.innerHTML = `Detectamos ${genero} com ${idade} anos`;
            img.src="mulheradulta.jpg"

          }else{
            genero = "idosa"
            res.innerHTML = `Detectamos ${genero} com ${idade} anos`;
            img.src="mulheridosa.jpg"
            
          }
      }

      res.style.textAlign = "center"
      
    

    }}