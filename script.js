function carregarJSON() {
    fetch('script.json')
      .then(resposta => {
        if (!resposta.ok) {
          throw new Error('Erro ao carregar o JSON');
        }
        return resposta.json();
      })
      .then(dados => {
        document.body.classList.add('ativarEstilos');

        document.getElementById('tituloCabecalho').innerText = dados.tituloCabecalho;
        document.getElementById('slogan').innerText = dados.slogan;
        document.getElementById('botaoCadastro').innerText = dados.botaoCadastro;

        document.getElementById('tituloDescricao').innerText = dados.tituloDescricao;
        document.getElementById('subtitulo1').innerText = dados.subtitulo1;
        document.getElementById('texto1').innerText = dados.texto1;
        document.getElementById('texto2').innerText = dados.texto2;
        const listaElement = document.getElementById('lista');
        listaElement.innerHTML = ''; 
        dados.lista.forEach(item => {
          const li = document.createElement('li');
          li.innerText = item;
          listaElement.appendChild(li);
        });
        document.getElementById('subtitulo2').innerText = dados.subtitulo2;
        document.getElementById('topico1').innerText = dados.topico1;
        document.getElementById('textoTopico1').innerText = dados.textoTopico1;
        document.getElementById('topico2').innerText = dados.topico2;
        document.getElementById('textoTopico2').innerText = dados.textoTopico2;
        document.getElementById('topico3').innerText = dados.topico3;
        document.getElementById('textoTopico3').innerText = dados.textoTopico3;
        document.getElementById('topico4').innerText = dados.topico4;
        document.getElementById('textoTopico4').innerText = dados.textoTopico4;

        document.getElementById('tituloAvaliacao').innerText = dados.tituloAvaliacao;
        document.getElementById('avaliacao1').innerText = dados.avaliacao1;
        //document.getElementById('estrelasAvaliacao1').innerText = dados.estrelasAvaliacao1;
        //document.getElementById('usuarioAvaliacao1').innerText = dados.usuarioAvaliacao1;
        document.getElementById('avaliacao2').innerText = dados.avaliacao2;
        //document.getElementById('estrelasAvaliacao2').innerText = dados.estrelasAvaliacao2;
        //document.getElementById('usuarioAvaliacao2').innerText = dados.usuarioAvaliacao2;
        document.getElementById('avaliacao3').innerText = dados.avaliacao3;
        //document.getElementById('estrelasAvaliacao3').innerText = dados.estrelasAvaliacao3;
        //document.getElementById('usuarioAvaliacao3').innerText = dados.usuarioAvaliacao3;
  
        document.getElementById('botaoCarregar').style.display = 'none';
      })
      .catch(erro => {
        console.error('Erro:', erro);
      });
  }
  
  document.getElementById('botaoCarregar').addEventListener('click', carregarJSON);
