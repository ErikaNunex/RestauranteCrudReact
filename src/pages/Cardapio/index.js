import Item from "./components/Item";
import React from 'react';
const API_URL = 'http://192.168.3.26:8000';

export default function Cardapio () {
  const [cardapio, setCardapio] = React.useState([])
  React.useEffect(() => {
    fetch(API_URL + `/item`)
      .then( resposta => resposta.json())
      .then( dados => setCardapio(dados));
  }, []);

  return(
    <div>
    <div>
     olá
    </div>
    {cardapio.map(cadaUm => {
      return (<Item key={cadaUm.id} nome={cadaUm.nome}/>)
    })}
 </div>
  )

}
