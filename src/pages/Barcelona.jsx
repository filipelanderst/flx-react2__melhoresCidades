import React from 'react';
import imgBarcelona from '../img/Barcelona.avif';
import ES from '../flags/es.svg';
import { Link } from 'react-router-dom';

function Barcelona() {
  return (
    <div className='pt-8'>
      <div className='mx-auto max-w-6xl'>
        {' '}
        <Link to='/barcelona'>
          {' '}
          <h1>6. Barcelona</h1>
        </Link>
        <p className=' border-l-4 pl-4 '>
          A desafiadora capital catalã era o garoto-propaganda do overtourism
          global – e suas soluções. Ou seja, antes da pandemia.
        </p>
        <div className='mx-10 my-5'>
          {' '}
          <h3>
            País:{' '}
            <img className='w-5 pb-1 inline-block items-center' src={ES} />{' '}
            <span>Espanha</span>{' '}
          </h3>
          <h3>
            População: <span> 4 840 000 hab</span>
          </h3>
          <h3>
            PIB: <span>Não encontrado</span>
          </h3>
          <h3>
            IDH: <span>0.905</span>
          </h3>
        </div>
      </div>
      <img className='my-8' src={imgBarcelona} alt='' />
      <div className='mx-auto max-w-6xl'>
        <p>
          Barcelona é uma cidade europeia quase ideal, com clima quase perfeito
          o ano todo, cinco quilômetros de praias dentro dos limites da cidade,
          parques icônicos, arquitetura impressionante e bairros coloridos que
          seguem seu próprio ritmo - artístico, sofisticado e boêmio. Não é à
          toa que ocupa o 6º lugar em nossa categoria Local, que mede tanto os
          ambientes naturais quanto os construídos de uma cidade. E não é à toa
          que a cidade recebia anualmente 12 milhões de turistas, quase o dobro
          de toda a população regional.
        </p>

        <p>
          Barcelona respondeu com algumas das restrições de aluguel de temporada
          mais rígidas do mundo, com o objetivo de controlar os efeitos do
          turismo descontrolado – como investidores imobiliários que compram
          apartamentos apenas para alugá-los no Airbnb, esgotando uma oferta já
          limitada. A cidade também elegeu a prefeita Ada Colau em uma
          plataforma de Barcelona para os cidadãos. No final das contas, a
          pandemia resolveu “o problema do turismo”, com resultados
          devastadores. Surtos de infecção significaram que fontes turísticas
          como a França proibiram todas as viagens de cidadãos para a região de
          Barcelona durante a maior parte do ano passado e fontes locais estimam
          que quase 40% dos bares e restaurantes fechados podem nunca reabrir.
          Para uma cidade com o terceiro lugar no ranking da vida noturna
          global, isso foi catastrófico.
        </p>

        <p>
          Felizmente, o turismo está voltando - lentamente depois de 2021 viu
          três vezes os visitantes de 2020, mas se os primeiros números de 2022
          são uma indicação, acelerando rapidamente. O que eles encontrarão é
          mais acesso não veicular à cidade. A prefeita Colau cumpriu sua
          promessa de atingir 125 milhas de ciclovias, com outras 20 a serem
          concluídas até 2023. A cidade também avançou com restrições agressivas
          ao tráfego de carros como parte da iniciativa da superquadra do
          prefeito, substituindo estacionamentos e ruas por playgrounds e
          assento público. Veja o futuro por si mesmo no Passeig de Sant Joan,
          recentemente nomeado uma das melhores ruas do mundo pela Time Out.
          Sant Joan é um dos primeiros corredores verdes da Espanha, projetado
          para mobilidade automotora e exploração com suas ciclovias, calçadas
          extensas, vegetação e amplos assentos ao ar livre. Bônus extra:
        </p>

        <p>
          O ranking dos 10 melhores outdoors da cidade deve melhorar após sua
          renovação. E chegar aos pontos turísticos e pontos turísticos
          classificados como nº 10 da cidade de bicicleta ou a pé também ajudará
          os visitantes a descobrir mais de suas ruas. E esses também estão
          reabrindo. A icônica avenida La Rambla da cidade também está em meio a
          reformas ambiciosas para torná-la mais fácil de percorrer com menos
          carros, enquanto eleva a arquitetura e o patrimônio artístico da área,
          culminando com a reabertura do impressionante Teatre Principal do
          século XVII em 2024.
        </p>
      </div>
    </div>
  );
}

export default Barcelona;
