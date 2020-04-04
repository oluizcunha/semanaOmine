import React, { useState } from 'react';

import Header from './Header';

function App() {
  const [counter, setCounter] = useState(0);

  //use State retorna um array com dois valores[valor real, Funcao de atualização]

  function increment() {
    setCounter(counter + 1);
  }

  return (
    <div>
      <Header title="teste2">Filho ou children</Header>
      <Header>Contador: {counter}</Header>
      <button onClick={increment}>Incrementar</button>
    </div>
  );
}

export default App;
