import React from 'react';


type Props = {
  pokemon: Array<{pokemon:{
    name:string
  }}>
}

export const PokemonNames: React.FC<Props> = ({pokemon}) => {
  console.log(
    'pokemon', pokemon
  )

  const names = pokemon.map((pokeman, i) => <li key={i}>{pokeman.pokemon.name}</li>)


  return (
    <section>
      <ul>
        {names}
      </ul>
    </section>
  );
}


