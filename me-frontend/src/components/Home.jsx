import { useState, useRef } from 'react';
import Markdown from "./Markdown";
import ConvertedHtml from "./ConvertedHtml";
import axios from 'axios';


export default function Home() {
    const [html, setHTML] = useState('');
    const refTextArea = useRef()
  
    const SERVER_DOMAIN = process.env.REACT_APP_SERVER_DOMAIN
    const SERVER_PORT = process.env.REACT_APP_SERVER_PORT
    
    const handleMDconversion = (value) => {
      console.log('in func', `${SERVER_DOMAIN}:${SERVER_PORT}/convert`);
      let markdown = value
      console.log('mde', value)
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
        <div style={{padding:"5px"}}>
            <Markdown handleMDconversion={handleMDconversion} refTextArea={refTextArea} />
            <ConvertedHtml renderMarkdown={renderMarkdown} />
        </div>
        {/* <button style={{width:300, height:100, margin:"50px 20px"}} onClick={handleMDconversion}>
          Press
        </button> */}
      </>
    )
}