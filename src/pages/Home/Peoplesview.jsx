import React from "react";
import { ArrowDownDoubleIcon } from "hugeicons-react";

const Peoplesview = () => {
  return (
    <div className="w-full justify-center pb-24 gap-16 flex flex-col">
      <h2 className="text-[#343B2B] text-center text-6xl font-averia">
        Let’s hear what people say
      </h2>
      <div className="flex justify-center">
        <div className="bg-white aspect-[4/7] h-[390px] rounded-3xl overflow-hidden">
          <div className="flex flex-col">
            <video
              src="/videos/review-5.mp4"
              loop
              autoPlay
              muted
              className="self-center p-3 h-[300px] w-full object-cover"
              style={{ borderRadius: "1.7rem" }}
            >
              Your browser does not support the video tag.
            </video>

            <div className="px-3.5 flex flex-col gap-2">
              <div className="flex">
                <span className="text-[#343B2B] text-lg leading-[1.3] font-averia font-medium">
                  Flavor-Packed Produce
                </span>
                <div className="my-1 w-7 rounded-2xl items-center  flex justify-center bg-[#F2F3EE] shrink-0">
                  <ArrowDownDoubleIcon />
                </div>
              </div>

              <span className="text-[#343B2B] self-end font-medium">
                - Marcus L
              </span>
            </div>
            <div className="mt-3 px-3.5 text-black text-lg font-medium">
              You wouldn’t believe the flavor in their tomatoes and lettuce!
              Hydroponics might just be the future of farming.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Peoplesview;
