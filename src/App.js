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
  // const images = [logo1, logo2, logo3, logo4, logo5, logo6];

  const images = [
    {pic: logo1, site: "Toronto", desc: "The Skyline"},
    {pic: logo2, site: "Old City Hall", desc: "The Clock Tower"},
    {pic: logo3, site: "The CN Tower", desc: "One of the Worlds Tallest Towers"},
    {pic: logo4, site: "Royal Ontario Museum", desc: "Most Visited Museum in Canada"},
    {pic: logo5, site: "The Rogeres Center", desc: "Toronto's Iconic Skydome"},
    {pic: logo6, site: "Toronto City Hall", desc: "A Brutalist Architecture Masterpiece"},  
  ];


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
          images.map(image => 

            <div className="galleryItem-container">

                <div className="img-container">
                     <img src={image.pic} alt="logo" onClick={()=>setSelectedImage(image)}/>
                </div>
                <div className="siteTxt-container">{image.site}</div>
                <div className="siteDescTxt-container">{image.desc}</div>
            </div>

          )
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
