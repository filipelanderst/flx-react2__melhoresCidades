import React from 'react';
import { Link } from 'react-router-dom';
import Cidade from '../img/cidadePanorama.jpg';

function Home() {
  return (
    <div className='pt-12 bg-white mx-auto max-w-4xl '>
      <h1 className='text-center'>
        <Link to='/'>Melhores Cidades</Link>
      </h1>

      <div className='w-full max-w-2xl mx-auto my-10'>
        <img src={Cidade} alt='' />
      </div>

      <p>
        O projeto melhores cidades foi inspirado no site{' '}
        <a
          href='https://www.worldsbestcities.com/rankings/worlds-best-cities/'
          target='_blank'
        >
          <span className='text-cyan-400 font-bold'>Best Cities</span>
        </a>{' '}
        que faz uma análise sobre as melhores cidades do mundo para se morar
        levando em conta vários indicadores.
      </p>

      <p>
        O presente projeto é meramente ilustrativo. Não concordamos ou
        discordamos de nenhuma análise, simplesmente reproduzimos o texto.
      </p>

      <p>
        O projeto original é em inglês e a tradução presendo nesse nosso site
        foi feito pelo tradutor automático do google.
      </p>
    </div>
  );
}

export default Home;
