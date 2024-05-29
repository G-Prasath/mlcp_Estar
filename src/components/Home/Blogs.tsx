import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

const Blogs = () => {
  return (
    <div className="w-full sec-padding flex items-center flex-col bg-light_white">
      <p className="font-bold text-[30px] text-center mb-8 uppercase">Blog</p>

      <div className="w-full flex max-md:flex-col max-lg:flex-col gap-3">

        <div className="w-1/2 max-lg:w-full rounded-md relative aspect-square overflow-hidden">
          <LazyLoadImage
            src="/img4.jpg"
            alt="Blog"
            className="w-full h-full rounded-md hover:scale-[1.1] transition ease-in-out duration-500"
          />

          <div className="w-full bg-light_white absolute bottom-3 flex flex-col items-center justify-center opacity-[.5] py-1">
            <h5 className="uppercase font-[700] text-[16px] max-lg:text-[14px]">
              Project Installation
            </h5>
            <p className="uppercase text-[12px] font-[700]">Product Info</p>
            <p className="uppercase text-[10px] font-[500]">3rd April, 2024</p>
          </div>
        </div>

        <div className="w-1/2 max-lg:w-full grid grid-cols-2 gap-3">
          <div className="w-full aspect-square rounded-md relative overflow-hidden">
            <LazyLoadImage
              src="/img4.jpg"
              alt="Blog"
              className="w-full h-full rounded-md hover:scale-[1.1] transition ease-in-out duration-500"
            />
            <div className="w-full bg-light_white absolute bottom-3 flex flex-col items-center justify-center opacity-[.5] py-1">
              <h5 className="uppercase font-[700] text-[16px] max-lg:text-[14px] max-sm:text-[12px]">
                Project Installation
              </h5>
              <p className="uppercase text-[12px] font-[700] max-sm:text-[10px]">
                Product Info
              </p>
              <p className="uppercase text-[10px] font-[500]">
                3rd April, 2024
              </p>
            </div>
          </div>
          <div className="w-full aspect-square rounded-md relative overflow-hidden">
            <LazyLoadImage
              src="/img4.jpg"
              alt="Blog"
              className="w-full h-full rounded-md hover:scale-[1.1] transition ease-in-out duration-500"
            />
            <div className="w-full bg-light_white absolute bottom-3 flex flex-col items-center justify-center opacity-[.5] py-1">
              <h5 className="uppercase font-[700] text-[16px] max-lg:text-[14px] max-sm:text-[12px]">
                Project Installation
              </h5>
              <p className="uppercase text-[12px] font-[700] max-sm:text-[10px]">
                Product Info
              </p>
              <p className="uppercase text-[10px] font-[500]">
                3rd April, 2024
              </p>
            </div>
          </div>
          <div className="w-full aspect-square rounded-md relative overflow-hidden">
            <LazyLoadImage
              src="/img4.jpg"
              alt="Blog"
              className="w-full h-full rounded-md hover:scale-[1.1] transition ease-in-out duration-500"
            />
            <div className="w-full bg-light_white absolute bottom-3 flex flex-col items-center justify-center opacity-[.5] py-1">
              <h5 className="uppercase font-[700] text-[16px] max-lg:text-[14px] max-sm:text-[12px]">
                Project Installation
              </h5>
              <p className="uppercase text-[12px] font-[700] max-sm:text-[10px]">
                Product Info
              </p>
              <p className="uppercase text-[10px] font-[500]">
                3rd April, 2024
              </p>
            </div>
          </div>
          <div className="w-full aspect-square rounded-md relative overflow-hidden">
            <LazyLoadImage
              src="/img4.jpg"
              alt="Blog"
              className="w-full h-full rounded-md hover:scale-[1.1] transition ease-in-out duration-500"
            />
            <div className="w-full bg-light_white absolute bottom-3 flex flex-col items-center justify-center opacity-[.5] py-1">
              <h5 className="uppercase font-[700] text-[16px] max-lg:text-[14px] max-sm:text-[12px]">
                Project Installation
              </h5>
              <p className="uppercase text-[12px] font-[700] max-sm:text-[10px]">
                Product Info
              </p>
              <p className="uppercase text-[10px] font-[500]">
                3rd April, 2024
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Blogs;
