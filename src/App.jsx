import { useState } from 'react';

import ReactLogo from '@awac/assets/svg/react.svg';
import Flowers from '@awac/assets/images/flowers.jpeg';
import Todo from '@awac/components/Todo';

const App = () => {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <h1 className="text-primary text-4xl font-bold">Hello Worlds</h1>
      <ReactLogo height={200} width={200} />
      <h2>Count: {counter}</h2>
      <div>
        <img src={Flowers} alt="random" width={300} />
      </div>
      <Todo />
      <button onClick={() => setCounter((prev) => prev + 1)}>Increment</button>
    </div>
  );
};

export default App;
