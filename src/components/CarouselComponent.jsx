import React, { useRef, useState } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import next from '../assets/next.png';
import back from '../assets/back.png';

const responsiveOne = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 1100 },
    items: 4,
  },
  desktop: {
    breakpoint: { max: 1100, min: 800 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 800, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const responsiveTwo = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 1023 },
    items: 2,
  },
  desktop: {
    breakpoint: { max: 1023, min: 800 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 800, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const CustomRightArrow = ({ styleRightArrow, onClick, onFocus, onBlur }) => {
  return (
    <button
      onClick={onClick}
      onFocus={onFocus}
      onBlur={onBlur}
      className={styleRightArrow}
    >
      <img src={next} alt="Right arrow graphic" />
    </button>
  );
};

const CustomLeftArrow = ({ styleLeftArrow, onClick, onFocus, onBlur }) => {
  return (
    <button
      onClick={onClick}
      onFocus={onFocus}
      onBlur={onBlur}
      className={styleLeftArrow}
    >
      <img src={back} alt="Left arrow graphic" />
    </button>
  );
};

const CarouselItem = ({ item }) => {
  return (
    <div className="flex flex-col text-center mb-10">
      <div className="self-center">
        <img src={item.image} alt={item.altText} />
      </div>
      <h3 className="mt-12 text-xl">{item.name}</h3>
      <p className="text-[#81B197]">{item.title}</p>
    </div>
  );
};

const CarouselItemTwo = ({ item }) => {
  return (
    <div className="mt-10 px-0 lg:px-[20px] w-full sm:w-[85%] lg:w-full mx-auto h-full">
      <div className="clientCard self-center flex flex-col justify-between">
        <div className="w-24 h-24 flex items-center">
          <img className="" src={item.logo} alt={item.altText} />
        </div>
        <h3 className="text-2xl sm:text-4xl">{item.title}</h3>
        <p>
          {item.name}, {item.position}
        </p>
        <div className="contents-[''] w-full h-[1px] bg-black mx-auto"></div>
        <div className="flex justify-center phone:justify-between flex-wrap gap-y-2 gap-x-4">
          <h4 className="text-xl">{item.ratingText}</h4>
          <img
            className="h-fit self-center"
            src={item.ratingImage}
            alt={item.ratingAltText}
          />
        </div>
      </div>
    </div>
  );
};

const CarouselComponent = ({
  items,
  itemType,
  responsive,
  divContainerStyling,
  styleRightArrow,
  styleLeftArrow,
  titleAndArrowsContainer,
  title,
  titleImgAlt,
  titleImg,
  arrowContainerStyles,
}) => {
  const carouselRef = useRef(null);
  const [autoPlay, setAutoPlay] = useState(true);

  console.log('autoPlay:', autoPlay); // add console log statement

  const handleNextClick = () => {
    carouselRef.current.next();
  };

  const handlePrevClick = () => {
    carouselRef.current.previous();
  };

  const handleButtonFocus = () => {
    console.log('handleButtonFocus called'); // add console log statement
    setAutoPlay(false); // disable auto-play when user focuses on button
  };

  const handleButtonBlur = () => {
    console.log('handleButtonBlur called'); // add console log statement
    setAutoPlay(true); // re-enable auto-play when user moves focus away from button
  };

  return (
    <>
      <div className={`${titleAndArrowsContainer} flex`}>
        <div className="relative">
          <h2 className="w-fit xl:w-[38rem] relative">{title}</h2>
          <img
            src={titleImg}
            alt={titleImgAlt}
            className="absolute -right-24 xl:-right-10 -top-14 xl:-top-12 hidden md:block"
          />
        </div>
        <div className={`flex gap-x-4 items-center ${arrowContainerStyles}`}>
          <CustomLeftArrow
            styleLeftArrow={styleLeftArrow}
            onClick={handlePrevClick}
            onFocus={handleButtonFocus}
            onBlur={handleButtonBlur}
          />
          <CustomRightArrow
            styleRightArrow={styleRightArrow}
            onClick={handleNextClick}
            onFocus={handleButtonFocus}
            onBlur={handleButtonBlur}
          />
        </div>
      </div>
      <Carousel
        responsive={
          responsive === 'responsiveOne' ? responsiveOne : responsiveTwo
        }
        className={divContainerStyling}
        infinite={true}
        swipeable={true}
        keyBoardControl={true}
        arrows={false}
        autoPlay={autoPlay}
        autoPlaySpeed={4000}
        ref={carouselRef}
      >
        {items.map((item, index) => {
          // render CarouselItem or CarouselItemTwo based on itemType prop
          return itemType === 'one' ? (
            <CarouselItem key={index} item={item} />
          ) : (
            <CarouselItemTwo key={index} item={item} />
          );
        })}
      </Carousel>
    </>
  );
};

export default CarouselComponent;
