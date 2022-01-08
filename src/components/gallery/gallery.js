import React from 'react';
import './gallery.css';
import Hubble from '../../assets/hubble.jpeg';
import Nebula from '../../assets/Nebula.jpeg';
import Falcon9 from '../../assets/Falcon9.jpeg';
import SpaceX from '../../assets/SpaceX.jpeg';
import Mars from '../../assets/Mars.png';
import Space_hub from '../../assets/Space_hub.jpeg';
import storms1 from "../../assets/storms1.jpeg";
import storms2 from "../../assets/storms2.jpeg";
import storms3 from "../../assets/storms3.jpeg";

const imgs = [Hubble, Nebula, Falcon9, SpaceX, Mars, Space_hub, storms1, storms2, storms3];

const Gallery = () => {
    return <div className='gallery-main'>
        <h2>Gallery</h2>
        <div className='gallery-photo'>
            {imgs.map((img, index) => <div className='gallery-img' key={index}><img src={img} alt='' /></div>)}
        </div>
    </div>

}

export default Gallery;