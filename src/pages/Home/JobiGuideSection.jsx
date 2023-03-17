import React from 'react';

function JobiGuideSection() {
  return (
    <section className="bg-white">
      <div className="wrapper">
        {/* Top Title and Button Container */}
        <div className="flex justify-between flex-col lg:flex-row space-y-10 lg:space-y-0">
          <h2 className="self-center">Jobi Guides</h2>
          <button className="capitalize h-fit self-center">explore more</button>
        </div>

        {/* Bottom Blog Container */}
        <div className="mt-16 space-x-0 flex lg:space-x-10 lg:flex-row flex-col items-center space-y-20 lg:space-y-0">
          {/* Blog Container One */}
          <div className="lg:w-full phone:w-[400px] w-full">
            <div className="bg-[#D8D8D8] h-[260px]"></div>
            <p className="text-color-gray mt-9">Developer, Code</p>
            <h3 className="text-2xl mt-3">
              Print, publishing qui visual layout mockups.
            </h3>
            <p className="text-color-gray mt-4">
              By
              <span className="text-color-body"> Rashed Kabir</span>
            </p>
          </div>
          {/* Blog Container Two */}
          <div className="lg:w-full phone:w-[400px] w-full">
            <div className="bg-[#D8D8D8] h-[260px]"></div>
            <p className="text-color-gray mt-9">Design, Art</p>
            <h3 className="text-2xl mt-3">
              Designer’s checklist for every UX/UI project.
            </h3>
            <p className="text-color-gray mt-4">
              By
              <span className="text-color-body"> Julie Margot</span>
            </p>
          </div>
          {/* Blog Container Three */}
          <div className="lg:w-full phone:w-[400px] w-full">
            <div className="bg-[#D8D8D8] h-[260px]"></div>
            <p className="text-color-gray mt-9">Solution, Work</p>
            <h3 className="text-2xl mt-3">
              Make more productive work flow in few steps.
            </h3>
            <p className="text-color-gray mt-4">
              By
              <span className="text-color-body"> Jubayer Al Hasan</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default JobiGuideSection;
