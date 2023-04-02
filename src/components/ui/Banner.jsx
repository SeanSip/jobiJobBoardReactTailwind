import React from 'react';
import bgShapeSmall from '../../assets/bgShapeSmall.png';

function Banner({ title, subTitle }) {
  return (
    <section className="relative">
      {/* Bottom Left Graphic */}
      <img
        className="absolute bottom-0 left-0"
        src={bgShapeSmall}
        alt="Striped patterned garphic"
      />
      {/* Banner Content Container */}
      <div className="wrapper pb-[114px] pt-[54px]">
        {/* Title */}
        <h1 className="text-white text-[64px] text-center">{title}</h1>
        {/* Sub-title */}
        <p className="text-white text-center text-[22px] mt-5">{subTitle}</p>
      </div>
    </section>
  );
}

export default Banner;
