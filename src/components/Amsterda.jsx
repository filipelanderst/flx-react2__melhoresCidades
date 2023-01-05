import React from 'react';
import imgAmsterda from '../img/Amsterda.png';
import ND from '../flags/nd.svg';

function Amsterda() {
  return (
    <div>
      <div className='mx-auto max-w-6xl'>
        {' '}
        <a href='#amsterda'>
          {' '}
          <h1>10. Amsterdã</h1>
        </a>
        <p className=' border-l-4 pl-4 '>
          Surpreso ao ver uma capital europeia de médio porte com um
          representante partidário decadente classificado tão alto? Você
          obviamente não visita há algum tempo.
        </p>
        <div className='mx-10 my-5'>
          {' '}
          <h3>
            País:{' '}
            <img className='w-5 pb-1 inline-block items-center' src={ND} />{' '}
            <span>Holanda</span>{' '}
          </h3>
          <h3>
            População: <span>1 603 531 hab</span>
          </h3>
          <h3>
            PIB: <span> Não encontrado</span>
          </h3>
          <h3>
            IDH: <span>0.941</span>
          </h3>
        </div>
      </div>

      <img className='my-8' src={imgAmsterda} alt='' />

      <div className='mx-auto max-w-6xl'>
        <p>
          A menor cidade do nosso Top 50 é um dínamo minúsculo, mas poderoso,
          para ficar de olho, liderado pela visionária prefeita Femke Halsema
          (literalmente: ela também é cineasta), a primeira prefeita não
          interina na história da cidade.
        </p>
        <p>
          A administração prática de seu governo de um lugar (e cidadãos) muitas
          vezes abandonado ao euro turístico é co-autor de um futuro de
          responsabilidade por todos que chamam de lar a magnética capital
          holandesa. Veja a abordagem recente para uma crise de acomodação de
          refugiados que levou centenas de migrantes desabrigados, muitos
          fugindo da invasão da Ucrânia pela Rússia, dormindo fora dos
          superlotados centros de recursos da cidade: acomode mais de 1.000 em
          um navio de cruzeiro atracado por seis meses, ganhando tempo vital
          para encontrar outros arranjos. Não é de surpreender que esse cuidado
          com os outros e a disposição dos locais para fazer o trabalho seja
          representado pelos três primeiros lugares no ranking da cidade em
          Igualdade de Renda e os cinco primeiros em Participação na Força de
          Trabalho.
        </p>
        <p>
          A vida noturna às vezes fora de controle (classificada em 10º lugar
          globalmente) e o tráfico humano pelo qual a cidade era conhecida (e,
          muitas vezes, comercializada como) foi outra oportunidade de educar
          cidadãos frustrados, mas impotentes, que receberam cópias de um livro
          gratuito explorando o papel da cidade na organização e gestão do
          comércio global de escravos a partir de uma perspectiva local e o que
          eles poderiam fazer para ajudar na luta. E a cidade está lutando, indo
          tão longe a ponto de mudar o distrito da luz vermelha do famoso bairro
          De Wallen para os arredores da cidade, proibindo não residentes de
          cafés de maconha e abandonando passeios que glorificam o lado mais
          básico da cidade. Entrando em ação estão os passeios com foco na
          habitabilidade invejável da cidade e na história holandesa. E tirar os
          turistas (que somavam 22 milhões em 2019) do centro da cidade, para
          lugares como Amsterdam-Noord,
        </p>
        <p>
          Noord se tornou uma espécie de segundo centro da cidade, com fábricas
          que antes produziam navios de carga e hoje abrigam cozinhas ousadas,
          algumas das galerias mais legais da Europa e start-ups famintas de
          tecnologia ansiosas para atrair talentos com um endereço movimentado.
          A proximidade de uma vida noturna agitada que não infringe o sono das
          famílias também ajuda. Não é como se o bairro não tivesse onde dormir:
          o novo Sir Adam Hotel, ocupando os oito primeiros andares da histórica
          Torre A'dam, tem acesso ao mirante mais alto da cidade para realmente
          acordar os hóspedes grogue.
        </p>
        <p>
          A cidade também está acolhendo refugiados corporativos do Brexit, que
          estão se estabelecendo depois de deixar Londres, atraídos por novas
          conexões ferroviárias noturnas, para as quais Amsterdã é um centro
          crescente, e conectividade aérea (# 7).
        </p>
        <p>
          Tudo isso está criando uma crise imobiliária iminente, e é por isso
          que o prefeito Halsema e outros líderes da cidade pretendem sair à
          frente dela com o bairro residencial de Haven-Stad (Port City), que
          eventualmente verá até 70.000 casas imaginadas como “uma cidade
          metropolitana”. área de uso misto”.
        </p>
        Não é de surpreender que os pilares da indústria que já usam a área não
        compartilhem da mesma visão.
      </div>
    </div>
  );
}

export default Amsterda;
