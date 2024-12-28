import React, { useEffect, useRef, useState } from "react";
import { ArrowDownDoubleIcon } from "hugeicons-react";
import gsap from "gsap";
import { CSSPlugin } from "gsap/all";

gsap.registerPlugin(CSSPlugin);

const PeoplesViewsInfo = [
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

const PeoplesView = () => {
  return (
    <div className="w-full justify-center pb-24 gap-16 flex flex-col">
      <h2 className="text-[#343B2B] text-center text-6xl font-averia">
        Let’s hear what people say
      </h2>
      <div className="flex justify-center gap-10 overflow-hidden">
        {PeoplesViewsInfo.map((cardInfo, index) => (
          <Card cardInfo={cardInfo} key={index} />
        ))}
        {PeoplesViewsInfo.map((cardInfo, index) => (
          <Card cardInfo={cardInfo} key={index} />
        ))}
      </div>
    </div>
  );
};

export default PeoplesView;

const Card = ({ cardInfo }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isShown, setIsShown] = useState(false);

  const paragraphRef = useRef(null);
  const videoRef = useRef(null);
  const titleRef = useRef(null);
  const containerRef = useRef(null);
  const arrowRef = useRef(null);

  useEffect(() => {
    if (paragraphRef.current) {
      const height = paragraphRef.current.offsetHeight;
      gsap.to(containerRef.current, {
        transform: () =>
          isShown ? `translateY(-${height + 22}px )` : "translateY(0px)",
        ease: "back.out(1.1)",
        duration: 0.8,
      });
    }
    gsap.to(arrowRef.current, {
      rotate: isShown ? "180deg" : "0deg",
      ease: "back.out(1.2)",
      duration: 0.6,
    });
  }, [isShown]);

  useEffect(() => {
    gsap.to(videoRef.current, {
      height: () =>
        isHovered ? `${390 - titleRef.current.offsetHeight}px` : "390px",
      paddingLeft: isHovered ? "12px" : "0px",
      paddingRight: isHovered ? "12px" : "0px",
      paddingTop: isHovered ? "12px" : "0px",
      ease: isHovered ? "back.out(1.1)" : "power2.inOut",
      duration: 0.65,
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
      <div className="flex flex-col" ref={containerRef}>
        <div className="h-[390px]" ref={videoRef}>
          <video
            src={cardInfo.video}
            loop
            autoPlay
            muted
            playsInline
            className={`self-center w-full object-cover h-full rounded-[14px]`}
          >
            Your browser does not support the video tag.
          </video>
        </div>

        <div ref={titleRef} className="px-3.5 py-3 flex flex-col gap-2">
          <div className="flex">
            <span className="text-[#343B2B] text-lg leading-[1.3] font-averia font-medium mr-3">
              {cardInfo.title}
            </span>
            <div
              className="my-1 w-7 rounded-2xl items-center  flex justify-center bg-[#F2F3EE] shrink-0 cursor-pointer"
              onClick={() => setIsShown(!isShown)}
            >
              <ArrowDownDoubleIcon ref={arrowRef} className={``} />
            </div>
          </div>

          <span className="text-[#343B2B] self-end font-medium">
            - {cardInfo.personName}
          </span>
        </div>
        <div
          ref={paragraphRef}
          className="mt-3 px-3.5 text-black text-lg font-medium"
        >
          <p>{cardInfo.view}</p>
        </div>
      </div>
    </div>
  );
};
