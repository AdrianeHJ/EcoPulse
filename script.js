function carregarJSON() {
    fetch('script.json')
      .then(resposta => {
        if (!resposta.ok) {
          throw new Error('Erro ao carregar o JSON');
        }
        return resposta.json();
      })
      .then(dados => {
        document.getElementById('tituloCabecalho').innerText = dados.tituloCabecalho;
        document.getElementById('slogan').innerText = dados.slogan;
        document.getElementById('botaoCadastro').innerText = dados.botaoCadastro;

        document.getElementById('tituloDescricao').innerText = dados.tituloDescricao;
        document.getElementById('subtitulo1').innerText = dados.subtitulo1;
        document.getElementById('texto1').innerText = dados.texto1;
        document.getElementById('texto2').innerText = dados.texto2;
        document.getElementById('lista').innerText = dados.lista;
        document.getElementById('subtitulo2').innerText = dados.subtitulo2;
        document.getElementById('topico1').innerText = dados.topico1;
        document.getElementById('textoTopico1').innerText = dados.textoTopico1;
        document.getElementById('topico2').innerText = dados.topico2;
        document.getElementById('textoTopico2').innerText = dados.textoTopico2;
        document.getElementById('topico3').innerText = dados.topico3;
        document.getElementById('textoTopico3').innerText = dados.textoTopico3;
        document.getElementById('topico4').innerText = dados.topico4;
        document.getElementById('textoTopico4').innerText = dados.textoTopico4;
  
        document.getElementById('botaoCarregar').style.display = 'none';
      })
      .catch(erro => {
        console.error('Erro:', erro);
      });
  }
  
  document.getElementById('botaoCarregar').addEventListener('click', carregarJSON);
