import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';


import amazon from '../data/paulvalenzuela/amazon.JPG';
import suki from '../data/paulvalenzuela/suki.JPG';
import school from '../data/paulvalenzuela/circuit.jpg';

const items = [
  {
    src: school,
    class: "rotateimg90",
    altText: 'Hello! Welcome To my website, I am an engineering student and here are some of my accomplishments',
    caption: 'Hello! Welcome To my website!'
  },
  {
    src: amazon,
    altText: 'Hello! Welcome To my website, I am an engineering student and here are some of my accomplishments',
    caption: 'Hello! Welcome To my website!'
  },
  {
    src: suki,
    altText: 'Hello! Welcome To my website, I am an engineering student and here are some of my accomplishments',
    caption: 'Hello! Welcome To my website!'
  }
];

const imgStyle = {
    maxHeight: 600,
    align: 'center',
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
    // minWidth: 400
  }

const Welcome = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img src={item.src} style={imgStyle} alt={item.altText} align="center" class={item.class}/>
        <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
      </CarouselItem>
    );
  });

  return (
    <Carousel style ={{backgroundColor:'white'}}
      activeIndex={activeIndex}
      next={next}
      previous={previous}
    >
      <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
      {slides}
      <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
      <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
    </Carousel>
  );
}

export default Welcome;