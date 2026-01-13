const AboutPage = () => {
  return (
    <section className="w-full bg-[#fbf3ee] overflow-hidden">

      <div className="max-w-[1400px] mx-auto px-6 md:px-20 pt-28 pb-40">
        <div className="grid md:grid-cols-2 gap-16 items-center">

          <div>
            <h2 className="font-serif text-[34px] mb-8 text-[#2d1b12]">
              About Serenique
            </h2>

            <p className="text-[15px] leading-8 text-[#6f6f6f] max-w-md">
              Serenique Is A Celebration Of Luxury, Elegance, And
              Emotional Storytelling. Designed With A Minimal Yet
              Expressive Aesthetic, Every Detail Reflects Timeless
              Beauty And Sophistication.
            </p>
          </div>

          <div className="relative">
            <img
              src="https://images.pexels.com/photos/3762879/pexels-photo-3762879.jpeg"
              className="w-[85%] ml-auto object-cover"
              alt=""
            />
            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-[#f0e1d5]" />
          </div>
        </div>
      </div>

      <div className="bg-[#f6ebe4] py-28 text-center">
        <h3 className="font-serif text-[30px] text-[#2d1b12] max-w-2xl mx-auto leading-snug">
          Crafted For Those Who Believe Fragrance Is An Extension Of Identity
        </h3>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-20 py-32">
        <div className="grid md:grid-cols-2 gap-20 items-center">

          <div className="relative">
            <img
              src="https://images.pexels.com/photos/2814832/pexels-photo-2814832.jpeg"
              className="w-[70%]"
              alt=""
            />
            <div className="absolute top-1/2 -right-16 w-40 h-40 bg-[#efe0d4]" />
          </div>

          <div>
            <h4 className="font-serif text-[26px] mb-6 text-[#2d1b12]">
              Designed With Purpose
            </h4>
            <p className="text-[15px] leading-8 text-[#6f6f6f] max-w-md">
              Every Serenique Fragrance Is Meticulously Composed To
              Evoke Emotion, Confidence, And Grace. From The First Note
              To The Lasting Impression, Each Scent Tells A Story.
            </p>
          </div>

        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-20 pb-40">
        <div className="grid md:grid-cols-3 gap-10 items-end">

          <img
            src="https://images.pexels.com/photos/965731/pexels-photo-965731.jpeg"
            className="w-full"
            alt=""
          />

          <div className="text-center px-6">
            <h4 className="font-serif text-[22px] mb-4 text-[#2d1b12]">
              Awaken Your Inner Beauty
            </h4>
            <p className="text-[14px] leading-7 text-[#6f6f6f]">
              Timeless Fragrances Crafted With Passion And Precision,
              Leaving A Lasting Impression Always.
            </p>
          </div>

          <img
            src="https://images.pexels.com/photos/1961795/pexels-photo-1961795.jpeg"
            className="w-full"
            alt=""
          />
        </div>
      </div>

      <div className="relative">
        <img
          src="https://images.pexels.com/photos/3059609/pexels-photo-3059609.jpeg"
          className="w-full h-[70vh] object-cover"
          alt=""
        />
        <div className="absolute inset-0 bg-black/10" />
      </div>

      <div className="py-32 text-center bg-[#fbf3ee]">
        <h3 className="font-serif text-[28px] text-[#2d1b12] mb-6">
          Experience The Essence Of Serenique
        </h3>

        <p className="text-[15px] leading-8 text-[#6f6f6f] max-w-xl mx-auto">
          More Than A Perfume — Serenique Is A Feeling, A Memory, And A
          Reflection Of Who You Are.
        </p>

        <div className="mt-12 font-serif tracking-[0.3em] text-[#6b3f2c]">
          SERENIQUE
        </div>
      </div>

    </section>
  );
};

export default AboutPage;
