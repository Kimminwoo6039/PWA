import React, {useEffect} from 'react';
import logo from './logo.svg';
import './App.css';


async function getDisplayMedia() {
  //const constraints = {video: videoOptions, audio: audioOptions};

  return await navigator.mediaDevices.getDisplayMedia().then(stream => {

  }).catch(text => {
    console.log(text)
  });
}

function App() {

  useEffect(() => {
    getDisplayMedia();
  }, []);


  return (
      <div>
        <h1>PWA with Background Sync</h1>
        <button>백그라운드 동기화 요청</button>
      </div>
  );
}

export default App;
