//import logo from './logo.svg';
//import logo from '../src/images/old-city-hall.png';
import image1 from '../src/images/city-skyline.jpg';
import image2 from '../src/images/old-city-hall.jpg';
import image3 from '../src/images/cn-tower.jpg';
import image4 from '../src/images/rom.jpg';
import image5 from '../src/images/rogers-center.jpg';
import image6 from '../src/images/new-city-hall.jpg';
import twitter from '../src/images/twitter.svg';
import facebook from '../src/images/facebook.svg';
import linkedin from '../src/images/linkedin.svg';
import instagram from '../src/images/instagram.svg';

import './App.css';
import { useState } from 'react';

function App() {
  // const images = [logo1, logo2, logo3, logo4, logo5, logo6];

  const images = [
    {pic: image1, site: "Toronto", desc: "The Skyline"},
    {pic: image2, site: "Old City Hall", desc: "The Clock Tower"},
    {pic: image3, site: "The CN Tower", desc: "One of the Worlds Tallest Towers"},
    {pic: image4, site: "Royal Ontario Museum", desc: "Most Visited Museum in Canada"},
    {pic: image5, site: "The Rogeres Center", desc: "Toronto's Iconic Skydome"},
    {pic: image6, site: "Toronto City Hall", desc: "A Brutalist Architecture Masterpiece"},  
  ];

  const social = [
    {icon: twitter, link: "https://twitter.com/cityoftoronto?lang=en"},
    {icon: facebook, link: "https://www.facebook.com/cityofto/"},
    {icon: linkedin, link: "https://ca.linkedin.com/company/city-of-toronto"},
    {icon: instagram, link: "https://www.instagram.com/explore/locations/212991559/toronto-ontario/?hl=en"}];


  


  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedSocial, setSelectedSocial] = useState(null);

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

            <div className="galleryItem-container" onClick={() => setSelectedImage(image.pic)}>

                  <img className="img" src={image.pic} alt="image" />
                  <div className="imgTxt-container"> 
                      <div className="siteTxt-container">{image.site}</div>                      
                      <div className="siteDescTxt-container">{image.desc}</div>
                  </div>
            </div>
          )
        }
      </section>


      <footer className="footer"> 
          <div className="social-container">
            {
              social.map(social => 
                  <div className="social-image-container">
                    <a href={social.link}>
                      <img className="img-social" src={social.icon} alt="social-image" onClick={() => setSelectedSocial(social.icon)} />
                    </a>
                  </div>
              )
            }
          </div>
      </footer>
      <div id='overlay' 
          style={{
            visibility: selectedImage ? 'visible': 'hidden',
            background: "linear-gradient(45deg, rgba(29, 236, 197, 0.9), rgba(91, 14, 214, 0.7) 100%)"
            /*background: "linear-gradient(to right bottom, rgba(255, 255, 255, 1) 50%, rgba(0, 0, 0, 0) 100%)"*/
            
          }}>TEXT HERE
        <h1 className="closeDisplay"><a class="close" onClick={ ()=>setSelectedImage(null) }>X</a></h1>
        <img src={selectedImage} />
        
      </div>
    </div>
  );
}

export default App;