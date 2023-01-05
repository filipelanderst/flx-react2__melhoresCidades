import React from 'react';
import imgToquio from '../img/Toquio.png';
import JP from '../flags/jp.svg';

function Toquio() {
  return (
    <div>
      <div className='mx-auto max-w-6xl'>
        <a href='#toquio'>
          {' '}
          <h1>4. Tóquio</h1>
        </a>

        <p className=' border-l-4 pl-4 '>
          A metrópole futurista está explorando suas antigas raízes feudais,
          investindo na qualidade de vida nas ruas e no bem-estar dos residentes
          - na esteira das Olimpíadas.
        </p>

        <div className='mx-10 my-5'>
          {' '}
          <h3>
            País:{' '}
            <img className='w-5 pb-1 inline-block items-center' src={JP} />{' '}
            <span>Japão</span>{' '}
          </h3>
          <h3>
            População: <span>13 503 810 hab</span>
          </h3>
          <h3>
            PIB: <span>2.055.698 bilhões</span>
          </h3>
          <h3>
            IDH: <span>0.925</span>
          </h3>
        </div>
      </div>

      <img className='my-8' src={imgToquio} alt='' />

      <div className='mx-auto max-w-6xl'>
        <p>
          Apesar dos terremotos, tsunamis e tufões, Tóquio há muito se mantém no
          topo como uma das metrópoles mais seguras do planeta. Depois de cair
          em meio à corrida do ano passado para sediar os Jogos Olímpicos de
          Verão de 2021, a cidade continua incrivelmente segura, classificada em
          4º lugar em nossa subcategoria de segurança.
        </p>

        <p>
          Crianças pequenas brincando e caminhando para a escola sem supervisão
          – uma confusão pré-pandêmica para os visitantes da maior cidade do
          mundo – é uma visão comum mais uma vez após quase três anos de
          bloqueios e fechamento intermitente de escolas.
        </p>

        <p>
          Essas Olimpíadas atrasadas continuaram, é claro, apesar da proibição
          do turismo e das multidões locais não terem permissão para assistir
          aos eventos ao vivo. Dezenas de bilhões gastos em infraestrutura para
          receber o mundo ficaram quase vazios e os 2.000 hotéis, pousadas e
          pensões abertos pela cidade ficarão financeiramente submersos por
          anos, sem falar nos complexos comerciais e outras infraestruturas
          turísticas.
        </p>

        <p>
          Apesar da pandemia e subsequente descarrilamento dos planos do Japão -
          ou talvez por causa deles - o governo japonês permanece firme,
          mantendo sua meta de 60 milhões de visitantes e US$ 136 bilhões em
          receitas de turismo até 2030. Não é tão ilusório quanto parece: o país
          teve um recorde turismo por sete anos consecutivos e agora pode
          acomodar ainda mais visitantes a Tóquio, com a expansão do terminal
          internacional de Haneda, o principal aeroporto da cidade (65º lugar
          globalmente).
        </p>

        <p>
          A reverência global pela cidade voltou com as viagens internacionais.
        </p>

        <p>
          Ele conquistou o primeiro lugar no Shopping por suas experiências de
          classe mundial, como as luxuosas lojas de departamentos de Ginza,
          recentemente aprimoradas com o shopping center Ginza Six, enfeitado
          com arte e projetado com precisão.
        </p>

        <p>
          O recém-renovado Miyashita Park possui 90 boutiques e restaurantes,
          além de um novo hotel com vista para o famoso distrito de Shibuya,
          completo com quadras de vôlei e um parque de skate que se estende por
          2,5 acres. No ano passado, a cidade inaugurou a primeira loja Netflix
          do planeta. No início deste ano, duas lojas pop-up dedicadas ao
          programa da Netflix, Stranger Things, aumentaram a diversão.
        </p>

        <p>
          Novas inaugurações garantirão o domínio do varejo no futuro próximo,
          como Kameido Clock perto da estação Kameido, lar de 139 locatários
          comerciais, incluindo Tsutaya Books e Uniqlo, bem como espaços verdes
          para famílias. O Mikan Shimokita, no bairro de Shimokitazawa, é um
          complexo comercial e de restaurantes recém-inaugurado, onde as compras
          são ofuscadas pela culinária chinesa, vietnamita, coreana, italiana e
          de fusão.
        </p>

        <p>
          Apropriadamente, Tóquio possui o segundo maior número de restaurantes
          de qualquer cidade - superando nossa categoria de restaurante - e está
          indo muito além de suas tradições gastronômicas amadas
          internacionalmente. A metrópole abriga aproximadamente 100.000
          restaurantes, portanto, visitantes e residentes nunca poderiam esperar
          experimentar uma fração deles. Mas se você quiser, há muitos lugares
          para ficar.
        </p>
      </div>
    </div>
  );
}

export default Toquio;
