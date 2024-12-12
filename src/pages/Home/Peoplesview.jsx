import React from "react";
import { ArrowDownDoubleIcon } from "hugeicons-react";

const Peoplesview = () => {
  return (
    <div className="w-full justify-center pb-24 gap-16 flex flex-col">
      <h2 className="text-[#343B2B] text-center text-6xl font-averia">
        Let’s hear what people say
      </h2>
      <div className="flex justify-center">
        <div className="bg-white aspect-[4/7] h-[380px] flex flex-col rounded-3xl">
          <video
            src="/videos/review-5.mp4"
            loop
            autoPlay
            muted
            className="self-center p-3"
            style={{ borderRadius: "1.5rem" }}
          >
            Your browser does not support the video tag.
          </video>

          <div>
            <div>
              <span>Flavor-Packed Produce</span>
              <div>
                <ArrowDownDoubleIcon />
              </div>
            </div>

            <span>- Marus L</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Peoplesview;
