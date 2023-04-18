import React from 'react'
import CustomButton from './CustomButton'

function FilePicker({ file, setFile, readFile }) {
  return (
    <div className="filepicker-container">
      <div className="flex-1 flex flex-col">
      <input
        id="file-upload"
        type="file"
        accept="image/*"
        onChange={(e) => setFile(e.target.files[0])}
      />
      <label htmlFor="file-upload" className="filepicker-label">
        Uplad File
      </label>
      </div>  
    </div>
  )
}

export default FilePicker
