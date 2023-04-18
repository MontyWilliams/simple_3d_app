import React from 'react'
import CustomButton from './CustomButton'

function FilePicker({ file, setFile, readFile }) {
  return (
    <div classNanme="filepicker-container">
      <div className="flex-1 flex flex-col">
      <input
        id="file-upload"
        type="file"
        accept="image/*"
        onChange={(e) => setFile(e.target.files[0])}
      />  
      </div>  
    </div>
  )
}

export default FilePicker
