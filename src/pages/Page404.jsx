import React from 'react';
import Error404 from '../assets/vecteezy404Error.jpg';
import next from '../assets/next.png';

const Page404 = () => {
  return (
    <section className="bg-white py-[120px]">
      <div className="wrapper flex xl:flex-row flex-col items-center justify-between">
        <img
          className="xl:w-7/12 w-3/12"
          src={Error404}
          alt="Graphic design of 404 with a magnifying lense making up the 0 in between the other numbers. Credit for this image goes to: gstudioimagen @ https://www.vecteezy.com/members/gstudioimagen"
        />
        <div className="w-fit xl:w-[39%] flex flex-col space-y-12 text-center xl:text-left">
          <h1 className="flex flex-col capitalize text-[100px] leading-tight text-[#31795A]">
            404 <span className="text-black text-[82px] "> page not found</span>
          </h1>
          <p className="text-2xl">
            Publishing industries for previewing layouts & visual mockups used.
          </p>
          <button className="uppercase flex items-center justify-between">
            go back
            <img src={next} alt="Arrow graphic pointing towards the right" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Page404;
