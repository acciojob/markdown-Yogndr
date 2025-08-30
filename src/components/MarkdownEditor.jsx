// import React, { useEffect } from 'react'
// import { useState } from 'react'
// import ReactMarkdown from 'react-markdown';

// const MarkdownEditor = () => {
//      const [markdown, setMarkdown] = useState("");

//      useEffect(()=>{
//   console.log(markdown)
//      },[markdown])

//   return (
//     <div className="app">
//          <textarea className='textarea' value={markdown} onChange={(e)=>{ setMarkdown(e.target.value) }}/> 
//             <div className="preview">
//                 <ReactMarkdown>{markdown}</ReactMarkdown>
//             </div>
//     </div>
//   )
// }

// export default MarkdownEditor
import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import "./styles.css";

const MarkdownEditor = () => {
  const [markdown, setMarkdown] = useState("");
  useEffect(()=>
    { console.log(markdown) },
  [markdown])

  return (
    <div className="app">
      {/* Input Area */}
      <textarea
        className="textarea"
        value={markdown}
        onChange={(e) => setMarkdown(e.target.value)}
        
      />

      {/* Preview Area */}
      <div className="preview">
        <ReactMarkdown>{markdown}</ReactMarkdown>
      </div>
    </div>
  );
};

export default MarkdownEditor;
