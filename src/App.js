import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import axios from "axios";
import './App.css';

function App() {
  const [count] = useState(0);
  const [data, setData] = useState(null)

   useEffect(() => {
     async function fetchData() {
       console.log(data);
       console.log(axios)
       let result = await axios.get('https://urlreq.appspot.com/req?method=GET&url=https://github.com/users/Younkyu/contributions');
       console.log(result.data)
       console.log(typeof result.data)
       const html = result.data
       (new DOMParser).parseFromString(html, "text/html")
       setData(5)
       console.log(data)
     }

     fetchData()
  });


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {data}
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
