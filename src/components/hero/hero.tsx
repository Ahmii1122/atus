import video1 from "../../assets/2024_02_02_12_18_IMG_0809.mp4";
const HeroSection = () => {
  return (
    <section className="relative h-screen">
      {/* Video Background */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src={video1}
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Overlay for text */}
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <h1 className="text-white  text-4xl font-light md:text-4xl">
          Experience Luxury
        </h1>
      </div>
    </section>
  );
};

export default HeroSection;
