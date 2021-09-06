//import logo from './logo.svg';
//import logo from '../src/images/old-city-hall.png';
import logo1 from '../src/images/city-skyline.jpg';
import logo2 from '../src/images/old-city-hall.jpg';
import logo3 from '../src/images/cn-tower.jpg';
import logo4 from '../src/images/rom.jpg';
import logo5 from '../src/images/rogers-center.jpg';
import logo6 from '../src/images/new-city-hall.jpg';


import './App.css';
import { useState } from 'react';

function App() {
  const images = [logo1, logo2, logo3, logo4, logo5, logo6];
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="App">
      <header className="App-header">
        <p>
          The City of <strong>Toronto</strong>
        </p>
        <p className="p-historical"> Historical Sites & <strong>More</strong></p>
      </header>
      <section class="grid">
        {
          images.map(image => <img src={image} alt="logo" onClick={()=>setSelectedImage(image)} />)
        }
      </section>
      <div id='overlay' style={{visibility: selectedImage ? 'visible': 'hidden'}}>
        <h1><a class="close" onClick={ ()=>setSelectedImage(null) }>X</a></h1>
        <img src={selectedImage} />
      </div>
    </div>
  );
}

export default App;
