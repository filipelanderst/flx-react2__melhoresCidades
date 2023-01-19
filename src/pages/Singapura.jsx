import React from 'react';
import imgSingapura from '../img/Singapura.avif';
import SG from '../flags/sg.svg';
import { Link } from 'react-router-dom';

function Singapura() {
  return (
    <div className='pt-12'>
      <div className='mx-auto max-w-6xl'>
        {' '}
        <Link to='/singapura'>
          {' '}
          <h1>9. Singapura</h1>
        </Link>
        <p className=' border-l-4 pl-4 '>
          A potência financeira da Ásia transforma suas ambições em
          infraestrutura elevada e inovação local.
        </p>
        <div className='mx-10 my-5'>
          {' '}
          <h3>
            País:{' '}
            <img className='w-5 pb-1 inline-block items-center' src={SG} />{' '}
            <span>Singapura</span>{' '}
          </h3>
          <h3>
            População: <span>5 638 700 hab</span>
          </h3>
          <h3>
            PIB: <span>374.394 bilhões</span>
          </h3>
          <h3>
            IDH: <span>0.939</span>
          </h3>
        </div>
      </div>

      <img className='my-8' src={imgSingapura} alt='' />

      <div className='mx-auto max-w-6xl'>
        <p>
          A ascensão de Cingapura em 50 anos de uma ex-colônia politicamente
          instável, pobre em recursos e não qualificada a um centro de navegação
          sedento de talentos e capital (o mais movimentado do mundo) e,
          subsequentemente, a capital de gerenciamento de riqueza da Ásia, é a
          engenharia de marca mais ambiciosa. Não é de admirar, então, que a
          cidade nunca tenha saído do Top 10 em sete anos desse ranking.
        </p>

        <p>
          O reinvestimento de Cingapura em pesquisa, talentos e recrutamento de
          sedes corporativas garante que ela será o lar de cidadãos ricos de
          forma sustentável nas próximas décadas. É por isso que a cidade-estado
          continua sua ascensão entre as cidades mais prósperas do planeta, com
          um grupo crescente de empresas do Global 500 (colocando-a em 24º lugar
          globalmente). O governo já comprometeu US$ 16 bilhões para estabelecer
          Cingapura como um centro global de pesquisa e desenvolvimento. Seu
          Plano de Pesquisa, Inovação e Empresa para 2020 visa duplicar a
          inovação e P&D nórdica e israelense, muitos dos quais fortalecerão as
          universidades locais. Esse foco em pesquisa, medicina e tecnologia é
          projetado para abrir outra frente para Cingapura – uma que complementa
          seu domínio financeiro. Baseia-se no capital humano dos cidadãos, já
          entre os cinco primeiros em nossa subcategoria de PIB per capita.
        </p>

        <p>
          Hoje, as manifestações dessa riqueza e arrogância confiante estão por
          toda parte. De guindastes de construção às fachadas douradas da
          Orchard Road - a versão de Cingapura da Quinta Avenida para moda
          sofisticada, agora mais cobiçada com a abertura iminente do luxuoso
          Pan Pacific Orchard, de 350 quartos, obcecado por sustentabilidade,
          bem como o novo (e enorme) Hilton Singapore Orchard – a cidade conhece
          seu rico público global: andarilhos endinheirados que buscam
          eficiência, segurança e exotismo.
        </p>

        <p>
          Cingapura oferece tudo pós-pandemia, classificando-se em 4º lugar em
          segurança e entre os 25 primeiros em atividades ao ar livre, prestes a
          subir com as adições do 10º aniversário aos Jardins da Baía da cidade,
          começando com o Active Garden, um novo propósito de 2,5 acres -espaço
          verde construído para pessoas de todas as gerações se conectarem umas
          com as outras por meio de atividades físicas, sociais e de
          aprendizado. Esse cuidado demonstrável com sua população envelhecida,
          para não falar de 80 por cento dos cidadãos que vivem em habitações
          públicas, diferencia ainda mais esta cidade fascinante de qualquer
          outro centro urbano do mundo.
        </p>

        <p>
          O Singapore Green Plan 2030 visa mais de 800 milhas de ciclovias e o
          recém-reaberto Corredor Ferroviário de nove milhas faz uma rápida
          pausa automotora da cidade e uma viagem no tempo.
        </p>

        <p>
          É claro que o Jewel Changi Airport, projetado por Safdie Architects,
          de US $ 1,7 bilhão, inaugurado em 2019 alguns meses antes dos
          bloqueios, também merece algumas horas de exploração. Já ajudou a
          cidade a entrar no nosso ranking das 50 melhores conectividades em
          aeroportos.
        </p>
      </div>
    </div>
  );
}

export default Singapura;
