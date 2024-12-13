import React, { useEffect, useRef, useState } from "react";
import { ArrowDownDoubleIcon } from "hugeicons-react";
import gsap from "gsap";
import { CSSPlugin } from "gsap/all";

gsap.registerPlugin(CSSPlugin);

const peoplesViewsInfo = [
  {
    video: "/videos/review-1.mp4",
    title: "Tech Meets Agriculture",
    personName: "Alex V",
    view: "Indoor Harvest combines technology and farming in a way that’s truly inspiring. Their produce is proof of innovation at work.",
  },
  {
    video: "/videos/review-2.mp4",
    title: "Perfect for Urban Living",
    personName: "Ramesh Jai P",
    view: "As someone living in a city, having farm-fresh produce delivered is a game-changer. Indoor Harvest has nailed it!",
  },
  {
    video: "/videos/review-3.mp4",
    title: "A Healthier Choice",
    personName: "Maria K",
    view: "Since switching to Indoor Harvest, I feel healthier and more confident about what my family is eating.",
  },
  {
    video: "/videos/review-4.mp4",
    title: "Sustainable Excellence",
    personName: "Rahul M",
    view: "I’m amazed by how eco-friendly their process is. Knowing my veggies are grown sustainably makes them taste even better.",
  },
  {
    video: "/videos/review-5.mp4",
    title: "Flavor-Packed Produce",
    personName: "Marcus L",
    view: "You wouldn’t believe the flavor in their tomatoes and lettuce! Hydroponics might just be the future of farming.",
  },
];

const Peoplesview = () => {
  return (
    <div className="w-full justify-center pb-24 gap-16 flex flex-col">
      <h2 className="text-[#343B2B] text-center text-6xl font-averia">
        Let’s hear what people say
      </h2>
      <div className="flex justify-center gap-10 overflow-hidden">
        {peoplesViewsInfo.map((peopleView, index) => (
          <ViewsCard peopleView={peopleView} />
        ))}
        {peoplesViewsInfo.map((peopleView, index) => (
          <ViewsCard peopleView={peopleView} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Peoplesview;

const ViewsCard = ({ peopleView }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [containerHeight, setContainerHeight] = useState(0);
  const [isShown, setIsShown] = useState(false);

  const containerRef = useRef(null);
  const videoRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      setContainerHeight(containerRef.current.offsetHeight);
    }
  }, []);

  useEffect(() => {
    gsap.to(videoRef.current, {
      height: isHovered ? "300px" : "390px",
      padding: isHovered ? "12px" : "0px",
      ease: isHovered ? "elastic.out(1, 0.5)" : "power2.inOut", // Elastic on hover, normal ease when returning
      duration: 1, // Slower animation duration
    });
  }, [isHovered]);

  return (
    <div
      className="bg-white aspect-[4/7] h-[390px] rounded-3xl overflow-hidden shrink-0"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setIsShown(false);
      }}
    >
      <div
        className="flex flex-col"
        style={{
          transform: isShown
            ? `translateY(-${containerHeight + 14}px)`
            : "none",
        }}
      >
        <video
          src={peopleView.video}
          loop
          autoPlay
          muted
          className={`self-center w-full object-cover rounded-3xl h-[390px]`}
          ref={videoRef}
        >
          Your browser does not support the video tag.
        </video>

        <div className="px-3.5 flex flex-col gap-2">
          <div className="flex">
            <span className="text-[#343B2B] text-lg leading-[1.3] font-averia font-medium mr-3">
              {peopleView.title}
            </span>
            <div
              className="my-1 w-7 rounded-2xl items-center  flex justify-center bg-[#F2F3EE] shrink-0"
              onClick={() => setIsShown(!isShown)}
            >
              <ArrowDownDoubleIcon
                className={`transition-transform duration-300 ${
                  isShown ? "rotate-180" : ""
                }`}
              />
            </div>
          </div>

          <span className="text-[#343B2B] self-end font-medium">
            - {peopleView.personName}
          </span>
        </div>
        <div
          ref={containerRef}
          className="mt-3 px-3.5 text-black text-lg font-medium"
        >
          {peopleView.view}
        </div>
      </div>
    </div>
  );
};
