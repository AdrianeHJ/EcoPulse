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
        const listaDesc = document.getElementById('lista');
        listaDesc.innerHTML = ''; 
        dados.lista.forEach(item => {
          const li = document.createElement('li');
          li.innerText = item;
          listaDesc.appendChild(li);
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
        document.getElementById('avaliacao2').innerText = dados.avaliacao2;
        document.getElementById('avaliacao3').innerText = dados.avaliacao3;

        document.getElementById('tituloPlanos').innerText = dados.tituloPlanos;
        document.getElementById('plano1').innerText = dados.plano1;
        const listaPlano1 = document.getElementById('itensPlano1');
        listaPlano1.innerHTML = ''; 
        dados.itensPlano1.forEach(item => {
          const li = document.createElement('li');
          li.innerText = item;
          listaPlano1.appendChild(li);
        });
        document.getElementById('textoPlano1').innerText = dados.textoPlano1;
        document.querySelectorAll('#botaoPlanos').forEach(botao => {
          botao.innerText = dados.botaoPlanos;
        });
        document.getElementById('plano2').innerText = dados.plano2;
        const listaPlano2 = document.getElementById('itensPlano2');
        listaPlano2.innerHTML = ''; 
        dados.itensPlano2.forEach(item => {
          const li = document.createElement('li');
          li.innerText = item;
          listaPlano2.appendChild(li);
        });
        document.getElementById('textoPlano2').innerText = dados.textoPlano2;
        document.getElementById('plano3').innerText = dados.plano3;
        const listaPlano3 = document.getElementById('itensPlano3');
        listaPlano3.innerHTML = ''; 
        dados.itensPlano3.forEach(item => {
          const li = document.createElement('li');
          li.innerText = item;
          listaPlano3.appendChild(li);
        });
        document.getElementById('textoPlano3').innerText = dados.textoPlano3;

        document.getElementById('tituloPerguntas').innerText = dados.tituloPerguntas;
        document.getElementById('topicoPerguntas1').innerText = dados.topicoPerguntas1;
        document.getElementById('textoPergunta1').innerText = dados.textoPergunta1;
        document.getElementById('topicoPerguntas2').innerText = dados.topicoPerguntas2;
        document.getElementById('textoPergunta2').innerText = dados.textoPergunta2;
        document.getElementById('topicoPerguntas3').innerText = dados.topicoPerguntas3;
        document.getElementById('textoPergunta3').innerText = dados.textoPergunta3;

        document.getElementById('nomeCompleto').innerText = dados.nomeCompleto;
        document.getElementById('localizacaoJSON').innerText = dados.localizacaoJSON;
  
        document.getElementById('botaoCarregar').style.display = 'none';
      })
      .catch(erro => {
        console.error('Erro:', erro);
      });
  }
  
  document.getElementById('botaoCarregar').addEventListener('click', carregarJSON);
