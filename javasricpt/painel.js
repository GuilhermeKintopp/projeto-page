/*quando clicar na seta pra avançar temos que esconder todas as imagem e mostrar proxima imagem

  a imagem atual começa em 0 pq e a primeira imagem assim que for clicado eu preciso adicionar mais 1 pra contador imagem pra poder saber vou mostrar agora 2 imagens

esconder todas as imagens 
        pegar todas as imagens usando DOM e remover class mostrar

mostrar a proxima imagem
        pegar todas as imagens,descobrir qual proxima, e colocar a classe mostrar nela    
*/

const imagensPainel = document.querySelectorAll('.imagem-painel');
const setaAvancar = document.getElementById('bnt-avancar');
const setaVoltar = document.getElementById('bnt-voltar');
let imagemAtual = 0;

function esconderImagens () {
  imagensPainel.forEach(imagem => {
    imagem.classList.remove('mostrar')
  })
}

function mostrarImagem () {
  imagensPainel[imagemAtual].classList.add('mostrar')
}

setaAvancar.addEventListener('click',function() {

  const TotalDeImagens = imagensPainel.length - 1

  if(imagemAtual === imagensPainel.length - 1)
    { return }
  
    imagemAtual++;
   
    esconderImagens()
    
    mostrarImagem()
})
   
setaVoltar.addEventListener('click', function(){
  if(imagemAtual === 0){
  return
  }

  imagemAtual--

  esconderImagens()
  
  mostrarImagem()

})
