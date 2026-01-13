import React from "react";

const features = [
  {
    title: "Premium Quality",
    desc: "Only the finest ingredients are chosen to craft our fragrances.",
    img: "https://images.pexels.com/photos/965989/pexels-photo-965989.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    title: "Sustainable Sourcing",
    desc: "Our ingredients are ethically and sustainably sourced.",
    img: "https://images.pexels.com/photos/3735192/pexels-photo-3735192.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    title: "Unique Blends",
    desc: "Each fragrance is crafted to evoke emotions and memories.",
    img: "https://images.pexels.com/photos/3059609/pexels-photo-3059609.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
];


const testimonials = [
  {
    name: "Sophia L.",
    quote: "The fragrances are divine! Every bottle tells a story.",
    img: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg",
  },
  {
    name: "Ethan M.",
    quote: "Luxurious and long-lasting scents. Highly recommend!",
    img: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg",
  },
];

const HomePage = () => {
  return (
    <section className="w-full bg-[#fbf3ee] text-[#2d1b12]">

      <div className="max-w-[1400px] mx-auto px-6 md:px-20 pt-32 pb-24 text-center">
        <span className="text-[12px] tracking-widest text-[#6b3f2c]">
          SERENIQUE
        </span>
        <h1 className="font-serif text-[44px] md:text-[58px] mt-6">
          Discover Your Signature Scent
        </h1>
        <p className="mt-6 text-[15px] text-[#6f6f6f] max-w-xl mx-auto">
          Explore our curated collection of fragrances crafted to evoke elegance, identity, and timeless sophistication.
        </p>
        <a href="shop" className="mt-8 px-6 py-3 border border-[#6b3f2c] text-[14px] hover:bg-[#6b3f2c] hover:text-white transition">
          SHOP NOW
        </a>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-20 py-32 grid md:grid-cols-3 gap-12">
        {features.map((feature, index) => (
          <div key={index} className="text-center space-y-4">
            <div className="h-64 overflow-hidden rounded-lg">
              <img src={feature.img} alt="" className="w-full h-full object-cover group-hover:scale-105 transition" />
            </div>
            <h3 className="font-serif text-[20px]">{feature.title}</h3>
            <p className="text-[14px] text-[#6f6f6f]">{feature.desc}</p>
          </div>
        ))}
      </div>

      <div className="bg-[#f6ebe4] py-32 text-center">
        <h2 className="font-serif text-[36px] mb-12">What Our Customers Say</h2>
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
          {testimonials.map((testi, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-md">
              <p className="text-[14px] text-[#6f6f6f] mb-4">"{testi.quote}"</p>
              <div className="flex items-center space-x-4">
                <img src={testi.img} alt="" className="w-12 h-12 rounded-full object-cover" />
                <span className="font-serif text-[16px]">{testi.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="py-32 text-center">
        <h2 className="font-serif text-[36px] mb-6">Elevate Your Scent Experience</h2>
        <p className="text-[14px] text-[#6f6f6f] max-w-xl mx-auto mb-8">
          Find the fragrance that resonates with your style and personality.
        </p>
        <a href="collections" className="px-6 py-3 border border-[#6b3f2c] text-[14px] hover:bg-[#6b3f2c] hover:text-white transition">
          EXPLORE COLLECTION
        </a>
      </div>

    </section>
  );
};

export default HomePage;
