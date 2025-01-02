import { BubbleChatIcon, TelephoneIcon } from "hugeicons-react";
import React from "react";

const OrderSection = () => {
  return (
    <div className="wrapper">
      <div className="contain">
        <div className="flex gap-12 items-center">
          <div className="w-full h-[2px] bg-[#343b3580] rounded-full"></div>
          <div className="bg-white rounded-3xl flex h-[120px] min-w-[50%] p-4 items-center justify-between">
            <div className="flex h-full items-center gap-3">
              {" "}
              <div className="bg-[#F2F3EE] rounded-2xl h-full text-[#343B2B] font-averia text-2xl flex items-center justify-center text-center px-2">
                22
                <br /> Sec
              </div>
              <div className="flex flex-col gap-1">
                <h3 className="text-[#343B2B] font-averia text-2xl">
                  Super Green Power
                </h3>
                <span className="text-[#343b3580] text-lg">
                  Neelam Singh just bought it!
                </span>
              </div>
            </div>
            <button className="bg-[#343B2B] rounded-3xl text-white font-averia text-center self-center px-3 py-2">
              Check it.
            </button>
          </div>
          <div className="w-full h-[2px] bg-[#343b3580] rounded-full"></div>
        </div>

        <div>
          <div>
            <div>
              <h3>Cart Details</h3>
              <div>
                <span>Harvest</span>
                <div></div>
                <span>In progress</span>
              </div>
            </div>

            <div>
              <div></div>
              <div>
                <div>
                  <h4>12 Kgs</h4>
                  <span>Weight</span>
                </div>
                <div>
                  <h4>$23.66</h4>
                  <span>Cost</span>
                </div>
                <div>
                  <h4>4</h4>
                  <span>Days</span>
                </div>
              </div>
            </div>

            <div>
              <div>
                <img src="/images/order-section-pfp.png" alt="pfp of person" />
                <div>
                  <span>Srujana Kalpesh</span>
                  <span>Courier</span>
                </div>
              </div>
              <div>
                <button>
                  <TelephoneIcon />
                </button>
                <button>
                  <BubbleChatIcon />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderSection;
