    submeterProdutos.addEventListener("click",function(){
        let nomeProduto = document.getElementById("nomeProduto").value;
        let codigoProduto = document.getElementById("codigoProduto").value;
        let quantidadeProduto = document.getElementById("quantidadeProduto").value;
      
    
        localStorage.setItem('nomeProduto',JSON.stringify(nomeProduto));
        localStorage.setItem('codigoProduto',JSON.stringify(codigoProduto));
        localStorage.setItem('quantidadeProduto',JSON.stringify(quantidadeProduto));
      })