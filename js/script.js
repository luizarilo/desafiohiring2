submitButton.addEventListener("click",function(){
  let nomeUsuario = document.getElementById("nome").value;
  let emailUsuario = document.getElementById("email").value;
  let enderecoUsuario = document.getElementById("endereco").value;
  let numeroUsuario = document.getElementById("numero").value;
  let bairroUsuario = document.getElementById("bairro").value;
  let cidadeUsuario = document.getElementById("cidade").value;
  let estadoUsuario = document.getElementById("estado").value;
  let cepUsuario = document.getElementById("cep").value;

console.log("Teste");
  
  localStorage.setItem('nomeUsuario',JSON.stringify(nomeUsuario));
  localStorage.setItem('emailUsuario',JSON.stringify(emailUsuario));
  localStorage.setItem('enderecoUsuario',JSON.stringify(enderecoUsuario));
  localStorage.setItem('numeroUsuario',JSON.stringify(numeroUsuario));
  localStorage.setItem('bairroUsuario',JSON.stringify(bairroUsuario));
  localStorage.setItem('cidadeUsuario',JSON.stringify(cidadeUsuario));
  localStorage.setItem('estadoUsuario',JSON.stringify(estadoUsuario));
  localStorage.setItem('cepUsuario',JSON.stringify(cepUsuario));  
})