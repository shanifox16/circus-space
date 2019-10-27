import React, { useState } from 'react'
import Dropzone from 'react-dropzone'

const DropZone = props => {
  const [uploadedFile, setUploadedFile] = useState([])

  const onDrop = (file) => {
    if(file.length == 1) {
      setUploadedFile(file)
    } else {
      console.log("Only 1 file please!")
    }
  }

  const handleSubmit = event => {
    event.preventDefault()

    let body = new FormData()
    body.append("video", uploadedFile[0])

    fetch('/api/v1/class_summaries', {
      credentials: "same-origin",
      method: 'POST',
      body: body
    })
    .then(response => {
      if (response.ok) {
        return response;
      } else {
        let errorMessage = `${response.status} (${response.statusText})`,
         error = new Error(errorMessage);
        throw(error);
      }
    })
    .then(response => response.json())
    .then(body => {
      // Set state of newly posted data here
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  return(
    <form onSubmit={handleSubmit}>
      <section>
        <div>
          <Dropzone
            className="video-uploads"
            multiple={false}
            onDrop={file => onDrop(file)}
          >
            {({getRootProps, getInputProps}) => (
                <div {...getRootProps()}>
                  <input {...getInputProps()} />
                  <p>Drop a video or click to select a video file to upload</p>
                </div>
            )}
          </Dropzone>
        </div>
        <aside>
          <h2>Dropped files</h2>
          <ul>
            {
              uploadedFile.map(file => <li key={file.name}>{file.name} - {file.size} bytes</li>)
            }
          </ul>
        </aside>
      </section>
      <input type='submit' value='Submit' />
    </form>
  )
}

export default Dropzone
