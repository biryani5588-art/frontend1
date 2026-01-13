const HeroSection = () => {
  return (
    <section className="w-full bg-[#fbf1e7]">
      <div className="max-w-[1500px] mx-auto grid grid-cols-1 md:grid-cols-2 min-h-[600px]">

        <div className="flex flex-col justify-center px-6 md:px-16 py-16">

          <span className="inline-block mb-6 text-[11px] tracking-widest text-[#7a5a47] bg-[#f3e3d7] px-3 py-1 w-fit">
            LUXURY & PREMIUM
          </span>

          <h1 className="font-serif text-[42px] md:text-[54px] leading-tight text-[#2d1b12]">
            Revel The Beauty
            <br />
            <span className="text-[#7a5a47]">Inside You</span>
          </h1>

          <p className="mt-6 max-w-md text-[14px] leading-6 text-[#6f6f6f]">
            Timeless Fragrances, Crafted With Passion, Embody
            Individuality, Elegance, And Sophistication, Leaving A
            Lasting Impression Always.
          </p>

          <div className="mt-10 flex gap-4">
            <a href="collections" className="bg-[#6b3f2c] text-white text-[13px] px-6 py-3 rounded">
              OUR COLLECTIONS
            </a>

            <a href="shop" className="border border-[#6b3f2c] text-[#6b3f2c] text-[13px] px-6 py-3 rounded">
              OUR COMBO
            </a>
          </div>
        </div>

        <div style={{marginTop: "100px"}} className=" bg-[#f4efe9] flex items-center justify-center">
          <img
            src="https://images.pexels.com/photos/2814832/pexels-photo-2814832.jpeg"
            alt="Perfume Bottle"
            className="max-w-[1020px] w-full object-contain"
          />
        </div>

      </div>
    </section>
  );
};

export default HeroSection;
