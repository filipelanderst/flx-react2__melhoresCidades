import React from 'react';
import imgDubai from '../img/Dubai.png';
import EA from '../flags/EA.svg';

function Dubai() {
  return (
    <div>
      <div className='mx-auto max-w-6xl'>
        <a href='#londres'>
          {' '}
          <h1>5. Dubai</h1>
        </a>

        <p className=' border-l-4 pl-4 '>
          Uma mistura atraente de experiências exageradas, herança árabe e
          compras de luxo, Dubai superou a pandemia.
        </p>

        <div className='mx-10 my-5'>
          {' '}
          <h3>
            País:{' '}
            <img className='w-5 pb-1 inline-block items-center' src={EA} />{' '}
            <span>Emirados Árabes Unidos</span>{' '}
          </h3>
          <h3>
            População: <span>3 137 463 hab</span>
          </h3>
          <h3>
            PIB: <span>117.300 bilhões</span>
          </h3>
          <h3>
            IDH: <span>0.911</span>
          </h3>
        </div>
      </div>

      <img className='my-8' src={imgDubai} alt='' />

      <div className='mx-auto max-w-6xl'>
        <p>
          Dubai é uma cidade de superlativos: você pode pegar o elevador até o
          topo do prédio mais alto do mundo para ter uma visão panorâmica e
          apostar nos pôneis na corrida de cavalos mais rica do mundo. E, já há
          alguns meses, mergulhe na piscina mais profunda do mundo (para
          mergulho), certificada pelo Guinness World Records (que, se ainda não
          o fez, deveria apenas mudar-se definitivamente para este local
          dedicado exclusivamente a reescrevê-lo ). Tudo isso acontece em uma
          das cidades mais seguras do planeta.
        </p>

        <p>
          A mangueira de fogo de experiências só aqui de Dubai não é por acaso:
          a cidade se reinventou mais uma vez ao longo da década de 2010,
          crescendo de um playground estéril para um punhado de emirados
          ultra-ricos para um destino internacional de turismo e negócios. Isso
          ajudou a atrair talentos globais que hoje ocupam o 27º lugar em
          Desempenho educacional em todo o mundo, enquanto desfrutam dos 10
          primeiros em Igualdade de Renda.
        </p>

        <p>
          O próximo desafio de Dubai será não estragar sua reabertura pandêmica
          fazendo muito rápido demais. A cidade espera trazer de volta os
          turistas (16,7 milhões em 2019) que se tornaram críticos para sua
          economia e passaram seu tempo de inatividade construindo e
          recalibrando a uma velocidade sem precedentes, mesmo para este
          Coelhinho Energizador de uma metrópole.
        </p>

        <p>
          O shopping mais visitado do planeta já está aqui e ajuda Dubai a subir
          para o 28º lugar em nossa subcategoria de Compras. Seria um erro focar
          na parte “shopping” do nome; como a própria cidade, o Dubai Mall é
          mais uma tentativa de capturar todas as experiências humanas e
          reembalá-las para consumo. Possui a torre mais alta do mundo, o Burj
          Khalifa, e um dos maiores aquários do mundo. A reinvenção da cidade
          continua por meio do Cityland Mall, o primeiro shopping center
          “inspirado na natureza” do mundo, que deve estar totalmente aberto
          quando você ler isto.
        </p>

        <p>
          Da mesma forma, o tempo do Burj Khalifa ao sol pode estar chegando ao
          fim: a Torre de Santiago Calatrava em Dubai Creek ofuscará o
          arranha-céu como o edifício mais alto do mundo quando concluído nos
          próximos anos.
        </p>

        <p>
          Falando do futuro, a sobrecarga sensorial da cidade de um Museu do
          Futuro acaba de se abrir para o status de marco instantâneo. É difícil
          argumentar contra a declaração da National Geographic de que este
          enorme e singular toro revestido de aço e vidro é um dos mais belos
          museus do mundo.
        </p>

        <p>
          Há, é claro, uma dúzia de outras inaugurações massivas que superariam
          os anúncios da maioria das cidades em 2022, desde a nova Biblioteca
          Mohammed Bin Rashid em Dubai Creek até a engenharia geográfica sem
          precedentes em The Palm, Ain Dubai e as Ilhas de Dubai e o novo,
          poleiros elevados de onde se pode ver tudo. Nossa escolha? A AURA
          Skypool, que é (é claro) a primeira e mais alta piscina infinita de
          360 ​​graus do mundo.
        </p>

        <p>
          Um novo padrão de luxo chegou em outubro de 2022 com o Atlantis Royal
          de 795 quartos, com restaurantes dos chefs famosos Ariana Bundy e José
          Andrés.
        </p>
      </div>
    </div>
  );
}

export default Dubai;
