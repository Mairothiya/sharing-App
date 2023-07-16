import {useRef, useState, useEffect} from 'react';
import { uploadFile } from './services/api';
import logo from './logo.svg';
import './App.css';

function App() {
  const [file, setFile] = useState('');
  const [result,setResult] =useState('');

  const fileInputRef =useRef();

  useEffect(() => {
    const getImage = async () =>{
      if(file) {
        const data =new FormData();
        data.append("name",file.name);
        data.append("file",file);
        
        const response = await uploadFile(data);
        console.log(response.path);
        setResult(response.path);

      }
    }
    getImage();
  },[file])
  
  const onUploadClick = () =>{
    fileInputRef.current.click();
  }



  return (
    <div className="container">
      <img src={logo}  alt="logo" />
      <div className ="wrapper">
        <h1>File Sharing!</h1>
        <p>Upload and Share the download link</p>

        <button onClick={ () => onUploadClick() }>Upload</button>
        <input 
          type="file"
          ref ={fileInputRef}
          style = {{display: 'none'}}
          onChange = {(e) => setFile(e.target.files[0]) }
        />
        <a href = {result} target = "_blank"> {result}</a>
      </div>
    </div>
  );
}

export default App;
