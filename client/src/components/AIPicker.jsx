import React from 'react'

import CustomButton from './CustomButton.jsx';


function AIPicker({ prompt, setPrompt, generatingImg, handleSubmit }) {
  return (
    <div className="aipicker-container">
      <textarea
        className="aipicker-textarea"
        placeholder="Ask AI..."
        rows={5}
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
      />

    </div>
  )
}

export default AIPicker
