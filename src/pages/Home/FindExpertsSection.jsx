import React from 'react';
import next from '../../assets/next.png';
import back from '../../assets/back.png';
import categoryTitleShape from '../../assets/categoryTitleShape.png';
import talentOne from '../../assets/talentOne.webp';
import talentTwo from '../../assets/talentTwo.webp';
import talentThree from '../../assets/talentThree.webp';
import talentFour from '../../assets/talentFour.webp';

import Carousel from '../../components/CarouselComponent';

const items = [
  {
    image: talentOne,
    altText: 'Portrait image of Jobi applicant',
    name: 'Julie Ake',
    title: 'Product Designer',
  },
  {
    image: talentTwo,
    altText: 'Portrait image of Jobi applicant',
    name: 'Juan Marko',
    title: 'Javascript Developer',
  },
  {
    image: talentThree,
    altText: 'Portrait image of Jobi applicant',
    name: 'Elizabeth Foster',
    title: 'UI/UX Designer',
  },
  {
    image: talentFour,
    altText: 'Portrait image of Jobi applicant',
    name: 'Rashed Ka',
    title: 'Marketing Expert',
  },
];

function FindExpertsSection() {
  return (
    <section className="bg-white">
      <div className="wrapper pt-[223px] pb-[180px]">
        <Carousel
          items={items}
          itemType="one"
          responsive="responsiveOne"
          parentContainerStyling=""
          arrowContainerStyles="pt-10 w-full lg:w-fit justify-around"
          divContainerStyling="absolute"
          styleRightArrow="hover:cursor-pointer hover:bg-[#D2F34C] px-8 py-10 rounded-full bg-transparent h-fit"
          styleLeftArrow="hover:cursor-pointer hover:bg-[#D2F34C] p-10 rounded-full bg-transparent h-fit"
          title="Find the best talent on jobi"
          titleImg={categoryTitleShape}
          titleImgAlt="Gaphic of three black lines bursting outwards from the top-right corner of this sections heading text"
          titleAndArrowsContainer="justify-between lg:flex-row flex-col items-center pb-10 text-center lg:text-left px-0 lg:px-[20px]"
        />
      </div>
    </section>
  );
}

export default FindExpertsSection;
