import React from 'react';
import imgRoma from '../img/Roma.avif';
import IT from '../flags/it.svg';
import Skyline from '../components/Skyline';
import Line from '../components/Line';

function Roma() {
  return (
    <div id='roma'>
      <div className='mx-auto max-w-6xl'>
        {' '}
        <a href='#roma'>
          {' '}
          <h1 className='pt-20'>7. Roma</h1>
        </a>
        <p className=' border-l-4 pl-4 '>
          A Cidade Eterna sempre foi cobiçada. Hoje em dia, a recompensa é um
          retrocesso imersivo no tempo.
        </p>
        <div className='mx-10 my-5'>
          {' '}
          <h3>
            País:{' '}
            <img className='w-5 pb-1 inline-block items-center' src={IT} />{' '}
            <span>Itália</span>{' '}
          </h3>
          <h3>
            População: <span> 2 860 009 hab</span>
          </h3>
          <h3>
            PIB: <span> 144 bilhões</span>
          </h3>
          <h3>
            IDH: <span>0.895</span>
          </h3>
        </div>
      </div>

      <img className='my-8' src={imgRoma} alt='' />

      <div className='mx-auto max-w-6xl'>
        <p>
          Poucas cidades oferecem a capacidade de caminhar pela história
          ocidental como Roma. Caramba, o Monte Palatino sozinho o convida para
          o valor de dois milênios se você tiver uma hora. Misture uma cidade
          moderna segura (# 23), acessível e seus milhares de portais de volta
          no tempo (Sights & Landmarks estão entre os cinco primeiros globais) e
          é fácil ver como Roma quebrou o Top 10 das Melhores Cidades novamente
          este ano (depois de apenas faltando em 2021).
        </p>

        <p>
          As declarações de amor pela cidade se multiplicaram com os canais de
          mídia social, é claro, e enquanto os check-ins no Facebook (nº 23) e
          as hashtags do Instagram (nº 33) caíram devido aos números mais baixos
          do turismo, Roma ainda ocupa o 10º lugar no Google Trends e no
          TripAdvisor avaliações. Como não pode quando tantos cantam seus
          louvores? Veja o imortal Anthony Bourdain: “Se eu estiver em Roma por
          apenas 48 horas, consideraria um pecado contra Deus não comer cacio e
          pepe, a mais exclusivamente romana das massas, em algum pequeno
          restaurante miserável onde os romanos comem”.
        </p>

        <p>
          Então, vamos nos aprofundar em alguns dos destaques das dezenas de
          fênix em ascensão da cena culinária da cidade depois que tantos
          restaurantes fecharam nos últimos dois anos.
        </p>

        <p>
          Pulejo, em homenagem ao filho nativo Chef Davide Puleio, foi uma das
          inaugurações mais esperadas da cidade nesta primavera. A experiência
          internacional de Puleio, do Noma em Copenhague ao L'Alchimia de Milão,
          fará desta sala Prati um destino rápido.
        </p>

        <p>
          Um lance de moeda da Fonte de Trevi é Don Pasquale, alojado na antiga
          residência do compositor italiano Gaetano Donizetti, tornando este
          restaurante e bar de coquetéis um destino não apenas para os amantes
          da culinária italiana, mas também para os aficionados por design de
          interiores. Chef Domenico Boschi riffs em clássicos do império
          culinário romano (pense em alcachofra e bacalhau).
        </p>

        <p>
          E acredite no burburinho sobre o Romanè, inaugurado recentemente pelo
          famoso chef e restaurateur Stefano Callegari e devotadamente dedicado
          à acessibilidade da culinária italiana.
        </p>

        <p>
          Apropriadamente, Roma também acaba de abrir o museu Garum (em
          homenagem ao molho de peixe do qual os antigos romanos obtinham o
          umami). Sua documentação da culinária italiana - receitas, utensílios
          e métodos antigos e muito mais - está alojada em um palazzo do século
          XVI que merece uma visita por conta própria.
        </p>

        <p>
          Uma dúzia de outros museus e marcos culturais também acabaram de
          reabrir ou foram revelados pela primeira vez, mesmo em uma cidade onde
          você não pode andar um quarteirão sem se deparar com algo milenar. O
          7º lugar no ranking de museus de Roma aumentará como resultado. Não
          perca o reaberto Mausoléu de Augusto, bem como a Casa Romana, uma
          residência do século IV sob o Museo di Scultura Antica Giovanni
          Barracco. Os recém-chegados incluem o Museo Ninfeo, que narra as
          ruínas de uma… vamos chamá-la de “propriedade de férias”… para os
          imperadores romanos.
        </p>
        <Skyline />
        <Line />
      </div>
    </div>
  );
}

export default Roma;
