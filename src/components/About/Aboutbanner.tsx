import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

const Aboutbanner = () => {
  return (
    <>
      <div className="bg-about_bg aspect-video bg-center bg-cover">
        <div className="sec-padding gap-20">
          
          <div className="w-full flex items-center gap-x-[45px] justify-between max-lg:flex-col">
            <div className="w-2/4 max-md:w-full text-center max-lg:w-full">
              <h1 className="uppercase text-4xl font-bold mb-5 max-lg:text-3xl">
                AMRITSAR SMARTCITY PROJECT
              </h1>
              <p className="text-text_color my-5 text-justify max-md:px-2">
                Embarking on a transformative journey with the Amritsar
                Government, we introduce a pioneering project for the city's
                advancement: the Amritsar Smart City initiative. At the heart of
                this endeavor lies our innovative Shuttle Stacker Parking
                system, designed to accommodate 350 cars efficiently within
                limited space. By partnering with the government, we aim to
                alleviate parking woes, reduce congestion, and enhance urban
                mobility. This cutting-edge solution not only optimizes land
                usage with trafic free environment which also promotes
                sustainability, aligning with the government's vision for a
                greener, smarter Amritsar. Together, let's build a future where
                convenience, efficiency, and environmental consciousness
                converge for the prosperity of all.
              </p>
            </div>
            <div className="w-2/4 max-md:w-full rounded-lg max-lg:w-full">
              <div className="w-full h-[505px] max-lg:w-full max-lg:h-[350px] overflow-hidden rounded-lg">
                <LazyLoadImage
                  src="/about-banner.jpg"
                  alt="about"
                  className="w-full h-full aspect-video rounded-lg hover:scale-110 hover:bg-indigo-500 duration-300"
                />
              </div>
            </div>
          </div>

          <div className="w-full flex items-center gap-x-[45px] justify-between max-lg:flex-col max-lg:my-[50px]">
            <div className="w-2/4 max-md:w-full rounded-lg max-lg:w-full max-lg:order-2">
              <div className="w-full h-[505px] max-lg:w-full max-lg:h-[350px] overflow-hidden rounded-lg">
                <LazyLoadImage
                  src="/about-banner.jpg"
                  alt="about"
                  className="w-full h-full aspect-video rounded-lg hover:scale-110 hover:bg-indigo-500 duration-300"
                />
              </div>
            </div>

            <div className="w-2/4 max-md:w-full text-center max-lg:w-full">
              <h1 className="uppercase text-4xl font-bold mb-5 max-lg:text-3xl">
                VGN NOTTING HILL PROJECT
              </h1>
              <p className="text-text_color my-5 text-justify max-md:px-2">
                Setting sail on an innovative voyage hand in hand with VGN
                Notting Hill, we are excited to introduce a pioneering endeavor
                poised to revolutionize urban living: The VGN Notting Hill Smart
                City project. Anchored at its essence is our trailblazing
                Shuttle Stacker Parking system, intricately designed to
                effortlessly house 280 cars within limited confines. In
                collaboration with VGN Notting Hill, our aim is to revolutionize
                parking infrastructure, mitigating congestion, and facilitating
                smoother urban mobility. This innovative solution not only
                optimizes land utilization but also fosters a traffic-free
                environment, fostering sustainability and echoing the ethos of a
                greener, smarter community envisioned by VGN Notting Hill. Let's
                unite in shaping a future where convenience, efficiency, and
                environmental stewardship harmonize, paving the way for the
                collective prosperity of all stakeholders involved in the VGN
                Notting Hill journey.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Aboutbanner;
