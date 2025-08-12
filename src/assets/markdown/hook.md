### Como criar Hooks personalizados em React

Hooks em react são extremamente importantes, e muito fácil de implementar. Seu objetivo é separar a lógica dos componentes e diminuir a quantidade de código em um arquivo de texto, criando uma abstração que simplifica a leitura de um componente.

Um Hook personalizado possui essa estrutura:

```javascript

export default function useHook (){
    return {}
}

```

todos os Hooks, por padrão usam "use" na frente da nomenclatura da função.

Um exemplo um pouco mais complexo, um componente Counter:


```jsx
import React, { useState } from "react";

export function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => setCount((c) => c + 1);
  const decrement = () => setCount((c) => c - 1);

  return (
    <div>
      <h2>Contador: {count}</h2>
      <button onClick={decrement}>-</button>
      <button onClick={increment}>+</button>
    </div>
  );
}
```

Agora criamos um hook para separar a lógica do componente:

```javascript
import { useState } from "react";

export function useCounter(initialValue = 0) {
  const [count, setCount] = useState(initialValue);

  const increment = () => setCount((c) => c + 1);
  const decrement = () => setCount((c) => c - 1);

  return { count, increment, decrement };
}
```

E por fim, usamos o hook no componente, abstraindo toda a lógica, facilitando a leitura e compreensão:

```jsx
import React from "react";
import { useCounter } from "./useCounter";

export function CounterWithHook() {
  const { count, increment, decrement } = useCounter(0);

  return (
    <div>
      <h2>Contador: {count}</h2>
      <button onClick={decrement}>-</button>
      <button onClick={increment}>+</button>
    </div>
  );
}
```