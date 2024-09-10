import React, { useState, useEffect, useRef } from "react";
import CountUp from "react-countup";

const StatsSection: React.FC = () => {
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect(); // Stop observing after the first trigger
        }
      },
      { threshold: 0.5 } // Adjust as needed to trigger when 50% is visible
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className="flex flex-col items-center justify-center min-h-20 pb-28 p-4  bg-white"
    >
      <div className="relative w-[300px] min-h-36 md:w-[700px] lg:w-[990px] ">
        {/* Top Left Corner */}
        <div className="absolute top-0 left-0 w-8 h-8 border-t-4 border-l-4 border-lightbrown"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 text-center">
          <div>
            <h2 className="text-[98px] font-normal text-lightbrown">
              {inView ? <CountUp start={0} end={20} duration={2} /> : "0"}
            </h2>
            <p className="text-xl text-lightbrown pt-5">Clients</p>
          </div>

          <div>
            <h2 className="text-[98px] font-normal text-lightbrown">
              {inView ? <CountUp start={0} end={30} duration={2} /> : "0"}
            </h2>
            <p className="text-xl text-lightbrown pt-5">Projects</p>
          </div>

          <div>
            <h2 className="text-[98px] font-normal text-lightbrown">
              {inView ? <CountUp start={0} end={2} duration={2} /> : "0"}
            </h2>
            <p className="text-xl text-lightbrown pt-5">Countries</p>
          </div>

          <div>
            <h2 className="text-[98px] font-normal text-lightbrown">
              {inView ? <CountUp start={0} end={2} duration={2} /> : "0"}
            </h2>
            <p className="text-xl text-lightbrown pt-5">Years</p>
          </div>
        </div>
        {/* Bottom Right Corner */}
        <div className="absolute bottom-0 right-0 w-8 h-8 border-b-4 border-r-4 border-lightbrown"></div>
      </div>
    </section>
  );
};

export default StatsSection;
