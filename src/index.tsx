import { h, render } from 'preact';
import { useState } from 'preact/hooks';

const target = document.getElementById('root') as HTMLElement;
target.removeChild(target.firstChild as HTMLElement); // remove loading placeholder

const App = () => {
  const [count, setCount] = useState(0);
  console.log(count);
  return (
    <div>
      <p>
        You clicked <b>{count.toString()}</b> times
      </p>
      {/*
      // @ts-ignore */}
      <button onclick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
};

render(<App />, target);
