import React from 'react';
import googleLogo from '../../assets/googleLogo.png';
import shipBobLogo from '../../assets/shipBobLogo.png';
import dribbleLogo from '../../assets/dribbleLogo.png';
import slackLogo from '../../assets/slackLogo.png';
import vineLogo from '../../assets/vineLogo.png';
import airBnbLogo from '../../assets/airBnbLogo.png';
import fourStarRating from '../../assets/fourStarRating.png';
import fiveStarRating from '../../assets/fiveStarRating.png';
import shipBobLogoDark from '../../assets/shipBobLogoDark.png';
import genkicoder from '../../assets/genkicoder.png';
import moogle from '../../assets/moogle.png';
import mondayLogoDark from '../../assets/mondayLogoDark.png';
import Carousel from '../../components/CarouselComponent';

const items = [
  {
    logo: mondayLogoDark,
    altText: 'company logo for monday.com',
    title:
      'Seattle opera simplifies Performance planning with deski eSignature.',
    name: 'Rashed kabir',
    position: 'Lead Designer',
    ratingText: '4.5 Excellent',
    ratingImage: fourStarRating,
    ratingAltText: 'Four out of Five stars rating icon graphic',
  },
  {
    logo: shipBobLogoDark,
    altText: 'company logo for shipBob',
    title: 'How DocuSign CLM helps Celonis scale its global business.',
    name: 'Mark Joge',
    position: 'Marketing Chief',
    ratingText: '4.8 Awesome',
    ratingImage: fiveStarRating,
    ratingAltText: 'Five out of Five stars rating icon graphic',
  },
  {
    logo: genkicoder,
    altText: 'company logo for genkicoder',
    title:
      '“Jobi connected us with the perfect candidates for our open software engineer positions.”',
    name: 'Sean Genki',
    position: 'Senior Software Engineer',
    ratingText: '5.0 Amazing',
    ratingImage: fiveStarRating,
    ratingAltText: 'Five out of Five stars rating icon graphic',
  },
  {
    logo: moogle,
    altText: 'company logo for genkicoder',
    title:
      '“We are thrilled with our newest Mooglers that we found on the Jobi platform.”',
    name: 'Alex Moo',
    position: 'Lead-Hr',
    ratingText: '5.0 Amazing',
    ratingImage: fiveStarRating,
    ratingAltText: 'Five out of Five stars rating icon graphic',
  },
];

const iconItems = [
  { logo: shipBobLogo, altText: 'company logo' },
  { logo: googleLogo, altText: 'company logo' },
  { logo: dribbleLogo, altText: 'company logo' },
  { logo: slackLogo, altText: 'company logo' },
  { logo: vineLogo, altText: 'company logo' },
  { logo: airBnbLogo, altText: 'company logo' },
];

function ClientFeedbackSection() {
  return (
    <section className="bg-white pb-[180px]">
      <div className="wrapper border-b-2">
        {/* Feedback Cards Carousel */}
        <Carousel
          items={items}
          itemType="two"
          responsive="responsiveTwo"
          parentContainerStyling=""
          arrowContainerStyles="pt-10 w-full lg:w-fit justify-around"
          divContainerStyling="absolute"
          styleRightArrow="hover:cursor-pointer hover:bg-[#D2F34C] px-8 py-10 rounded-full bg-transparent h-fit"
          styleLeftArrow="hover:cursor-pointer hover:bg-[#D2F34C] p-10 rounded-full bg-transparent h-fit"
          title="Trusted by leading startups"
          titleAndArrowsContainer="justify-between lg:flex-row flex-col items-center text-center lg:text-left px-0 lg:px-[20px]"
          autoPlaySpeed={6000}
          swipeable={true}
          infinite={true}
          arrows={false}
          draggable={true}
          pauseOnHover={false}
        />
        {/* Logo Carousel */}
        <Carousel
          items={iconItems}
          responsive="responsiveOne"
          styleLeftArrow="hidden"
          styleRightArrow="hidden"
          itemType="three"
          divContainerStyling="absolute"
          autoPlaySpeed={2000}
          swipeable={true}
          infinite={true}
          arrows={false}
          draggable={false}
          pauseOnHover={false}
        />
      </div>
    </section>
  );
}

export default ClientFeedbackSection;
