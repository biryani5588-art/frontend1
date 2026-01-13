import React from "react";

const BlogPage = () => {
  return (
    <section className="w-full bg-[#fbf3ee] text-[#2d1b12]">

      <div className="max-w-[1400px] mx-auto px-6 md:px-20 pt-32 pb-24">
        <div className="max-w-3xl">
          <span className="text-[12px] tracking-widest text-[#6b3f2c]">
            SERENIQUE JOURNAL
          </span>

          <h1 className="font-serif text-[42px] md:text-[56px] mt-6 leading-tight">
            Stories, Fragrance &  
            <br />  
            Timeless Elegance
          </h1>

          <p className="mt-6 text-[15px] leading-7 text-[#6f6f6f] max-w-xl">
            Discover the world behind our fragrances — inspiration,
            craftsmanship, rituals, and stories that define luxury.
          </p>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-20 pb-40">
        <div className="grid md:grid-cols-2 gap-20 items-center">

          <img
            src="https://images.pexels.com/photos/3059609/pexels-photo-3059609.jpeg"
            className="w-full h-[520px] object-cover"
            alt=""
          />

          <div>
            <span className="text-[12px] tracking-widest text-[#6b3f2c]">
              FEATURED
            </span>

            <h2 className="font-serif text-[34px] mt-6 mb-6">
              The Art Of Creating A Signature Scent
            </h2>

            <p className="text-[15px] leading-7 text-[#6f6f6f] max-w-md">
              Behind every Serenique fragrance lies a philosophy of
              emotion, memory, and individuality. Discover how scents
              are crafted to reflect personality and presence.
            </p>

            <button className="mt-8 border border-[#6b3f2c] px-6 py-3 text-[13px]">
              READ ARTICLE
            </button>
          </div>

        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-20 pb-40">
        <div className="grid md:grid-cols-3 gap-16">

          <div className="md:col-span-2 space-y-24">

            {[
              {
                title: "How Fragrance Influences Emotion",
                img: "https://images.pexels.com/photos/2814832/pexels-photo-2814832.jpeg",
              },
              {
                title: "Minimalism In Modern Luxury",
                img: "https://images.pexels.com/photos/3762879/pexels-photo-3762879.jpeg",
              },
              {
                title: "Choosing A Perfume For Every Season",
                img: "https://images.pexels.com/photos/965731/pexels-photo-965731.jpeg",
              },
              {
                title: "Why Artisan Fragrances Matter",
                img: "https://images.pexels.com/photos/1961795/pexels-photo-1961795.jpeg",
              },
            ].map((post, i) => (
              <div key={i} className="grid md:grid-cols-2 gap-10 items-center">

                <img
                  src={post.img}
                  className="w-full h-[360px] object-cover"
                  alt=""
                />

                <div>
                  <span className="text-[11px] tracking-widest text-[#6b3f2c]">
                    INSIGHT
                  </span>

                  <h3 className="font-serif text-[26px] mt-4 mb-4">
                    {post.title}
                  </h3>

                  <p className="text-[14px] leading-7 text-[#6f6f6f]">
                    Fragrance is more than aroma — it is memory,
                    emotion, and identity combined into a sensory
                    experience that lasts beyond the moment.
                  </p>

                  <button className="mt-6 text-[13px] border-b border-[#6b3f2c]">
                    CONTINUE READING
                  </button>
                </div>

              </div>
            ))}
          </div>

          <aside className="space-y-20">

            <div>
              <h4 className="font-serif text-[22px] mb-6">
                About Serenique
              </h4>
              <p className="text-[14px] leading-7 text-[#6f6f6f]">
                Serenique explores the connection between fragrance,
                emotion, and elegance. Our journal reflects the art
                behind modern luxury.
              </p>
            </div>

            <div>
              <h4 className="font-serif text-[22px] mb-6">
                Categories
              </h4>
              <ul className="space-y-3 text-[14px] text-[#6f6f6f]">
                <li>Fragrance Design</li>
                <li>Luxury Lifestyle</li>
                <li>Editorial</li>
                <li>Wellness</li>
                <li>Behind The Brand</li>
              </ul>
            </div>

            <div className="bg-[#f6ebe4] p-8">
              <h4 className="font-serif text-[20px] mb-4">
                Join The Journal
              </h4>
              <p className="text-[13px] leading-6 text-[#6f6f6f] mb-6">
                Receive exclusive stories, fragrance rituals, and
                curated inspiration.
              </p>

              <input
                type="email"
                placeholder="Your email"
                className="w-full border px-4 py-3 text-sm mb-4"
              />

              <button className="w-full bg-[#6b3f2c] text-white py-3 text-sm">
                SUBSCRIBE
              </button>
            </div>

          </aside>

        </div>
      </div>

      <div className="bg-[#f6ebe4] py-32 text-center">
        <h3 className="font-serif text-[30px] max-w-3xl mx-auto leading-snug">
          “A fragrance should speak before you do.”
        </h3>

        <div className="mt-10 font-serif tracking-[0.3em] text-[#6b3f2c]">
          SERENIQUE
        </div>
      </div>

    </section>
  );
};

export default BlogPage;
