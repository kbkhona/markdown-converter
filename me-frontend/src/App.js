import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { useState, useEffect, useRef } from 'react';

function App() {

  const [html, setHTML] = useState('');
  const refTextArea = useRef()
  useEffect(() => {

  }, [html])



  const SERVER_DOMAIN = process.env.REACT_APP_SERVER_DOMAIN
  const SERVER_PORT = process.env.REACT_APP_SERVER_PORT
  const handleMDconversion = (e) => {
    console.log('in func', `${SERVER_DOMAIN}:${SERVER_PORT}/convert`);
    let markdown = refTextArea.current.value
    console.log('mde', refTextArea.current.value)
    axios.post(`${SERVER_DOMAIN}:${SERVER_PORT}/convert`, { "markdown" : markdown})
      .then((res) => {
        console.log('res here', res);
        setHTML(res.data.html);
      })
      .catch((err)=> {
        console.log('err here',err)
      })
  }

  const renderMarkdown = () => {
    let receivedHTML = html;
    console.log('receivedHTML', receivedHTML)
    return{ __html: receivedHTML}
  }
  
  return (
    <>
      <div style={{border:"5px"}}>
        <div style={{width:"49%", float:"left", height:500, margin:"4px"}}>
          <textarea style={{height:"100%", width:"100%"}} ref={refTextArea}/>
        </div>
        <div 
          style={{width:"49%", float:"left", height:500, margin:"4px"}}
          dangerouslySetInnerHTML={renderMarkdown()}
        />
      </div>
      <button style={{width:300, height:100, margin:"50px 20px"}} onClick={handleMDconversion}>
        Press
      </button>
    </>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
