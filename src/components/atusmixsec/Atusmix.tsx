const Atusmix = () => {
  return (
    <>
      <div className="sm:resize">
        <p className="mt-14 ml-4 -mb-10 md:mt-20 md:ml-[100px] md:font-normal md:text-lg lg:mt-24 lg:ml-[130px] lg:font-medium lg:text-lg  lg:visible">
          What we do
        </p>
        <section className="flex flex-col items-center justify-center min-h-screen p-4 bg-white sm:mt-[50px] md: sm:flex sm:flex-col lg:mt[0px]">
          {/* Circular text */}
          <div className="relative flex items-center justify-center">
            <div className="absolute mt-10 w-[300px] h-[330px] md:w-[491px] md:h-[519px]  border rounded-full border-brown z-0 flex items-center justify-center">
              <span className="relative -ml-[8px] mb-[250px] md:-ml-[35px] md:mb-[465px] text-center  -rotate-35 text-[42px] text-brown">
                T
              </span>
              <span className="relative text-center mb-[290px] -ml-[4px]  md:mb-[490px] -rotate-26 md:-rotate-28 text-[42px] text-brown">
                h
              </span>
              <span className="relative text-center mb-[320px] md:mb-[510px] -rotate-17 md:-rotate-20 text-[42px] text-brown">
                e
              </span>
              <span className="relative text-center -rotate-6 ml-6 mb-[360px]  md:mb-[550px] text-[42px] text-brown">
                A
              </span>
              <span className="relative text-center -rotate-1 ml-1 mb-[370px] md:mb-[560px] text-[42px] text-brown">
                t
              </span>
              <span className="relative text-center -rotate-3 ml-1 mb-[370px] md:mb-[560px] text-[42px] text-brown">
                u
              </span>
              <span className="relative text-center -rotate-10 ml-1 mb-[365px] md:mb-[560px] text-[42px] text-brown">
                s
              </span>
              <span className="relative text-center rotate-20 ml-6 mb-[330px] md:mb-[534px]  text-[42px] text-brown">
                M
              </span>
              <span className="relative text-center rotate-31.02  mb-[300px] md:mb-[514px] text-[42px] text-brown">
                i
              </span>
              <span className="relative text-center rotate-36  mb-[270px] md:mb-[495px] text-[42px] text-brown">
                x
              </span>
            </div>
          </div>
          {/* Main Focus Text with Looping Animation */}
          <div className="-mt-[5%] overflow-hidden bg-white z-10 min-h-32 w-full">
            <p className=" mt-2 md:mt-5 text-center z-10 font-normal text-[14px] md:text-[26px] bg-white">
              Visionary approach, savoir-faire craftsmanship & globally
              connected creatives
            </p>
            <div className="animate-scroll flex mt-2 md:mt-10 mb-10 whitespace-nowrap text-center text-[20px]  md:text-4xl lg:text-[100px] font-bold tracking-wide">
              <span className="text-brown">DESIGN</span>
              <span className="mx-2 text-red-500">*</span>
              <span className="text-brown underline">CONSULT</span>
              <span className="mx-2 text-red-500">*</span>
              <span className="text-brown">MANUFACTURE</span>
              <span className="mx-2 text-red-500">*</span>
              {/* <span className="text-brown">DESIGN</span>
            <span className="mx-2 text-red-500">*</span>
            <span className="text-brown underline">CONSULT</span>
            <span className="mx-2 text-red-500">*</span>
            <span className="text-brown">MANUFACTURE</span>
            <span className="mx-2 text-red-500">*</span> */}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Atusmix;
