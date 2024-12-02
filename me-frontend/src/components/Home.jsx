import { useState } from 'react';
import Markdown from "./Markdown";
import ConvertedHtml from "./ConvertedHtml";
import axios from 'axios';
import DOMPurify from "dompurify";


export default function Home() {
    const [html, setHTML] = useState('');
    const [htmlLoading, setHTMLLoading] = useState(false);
  
    const SERVER_DOMAIN = process.env.REACT_APP_SERVER_DOMAIN
    const SERVER_PORT = process.env.REACT_APP_SERVER_PORT
    
    const handleMDconversion = (value) => {
      setHTMLLoading(true)
      console.log('in func', `${SERVER_DOMAIN}:${SERVER_PORT}/convert`);
      let markdown = value
      console.log('mde', value)
      axios.post(`${SERVER_DOMAIN}:${SERVER_PORT}/convert`, { "markdown" : markdown})
        .then((res) => {
          console.log('res here', res);
          setHTMLLoading(false);
          setHTML(res.data.html);
        })
        .catch((err)=> {
          console.log('err here',err)
          setHTMLLoading(false);
          setHTML('')
        })
    }
  
    const renderMarkdown = () => {
      let receivedHTML = DOMPurify.sanitize(html);
      console.log('receivedHTML', receivedHTML)
      return{ __html: receivedHTML}
    }
    
    return (
      <>
        <div style={{padding:"5px"}}>
            <Markdown handleMDconversion={handleMDconversion} />
            <ConvertedHtml renderMarkdown={renderMarkdown} htmlLoading={htmlLoading} />
        </div>
      </>
    )
}