// import { useState } from 'react';
// import reactLogo from './assets/react.svg';
// import viteLogo from '/vite.svg';
// import './App.css';
// import Master from './master';
// import Cute from './cute';

// function App() {
//   const [count, setCount] = useState(0)

//   return (

//       <div>
//         <h1 style={{color:'black'}}className='most'>hai!</h1>
//         <Master />
//         <Cute/>

//       </div>
     
//   )
// }

// export default App


import React, { useEffect } from 'react'

function App() {
  const [count, setCount] = React.useState(0)

  useEffect(() => {
    console.log(`the counter value is now: ${count}`);

    return () => {
      console.log(`cleaning up, last counter value was: ${count}`);
    };
  }, [count]);

  return (
    <div>
      <h1>Counter {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
}

export default App;
