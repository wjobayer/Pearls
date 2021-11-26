import React from 'react';
import { Carousel } from 'react-bootstrap';
import bgone from '../../../images/bg1.jpg'
import bgtwo from '../../../images/bg2.jpg'
import './Banner.css'


const Banner = () => {
    return (
        <div>
            <Carousel fade className="my-0">
  <Carousel.Item>
    <img
      className="d-block cw w-100"
      src={bgtwo}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3 className="text-secondary display-3 fw-bold">The World Of Diamonds</h3>
      <p className="text-secondary">Choose from unique settings & hand selected Diamonds Rings</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block cw w-100"
      src={bgone}
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3 className="text-secondary display-3 fw-bold">Our Jwellery Collection</h3>
      <p className="text-secondary">Herer are diamonds that sparkle and scintillate. Diamonds to wear</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        </div>
    );
};

export default Banner;