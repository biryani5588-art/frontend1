import React from "react";

const ContactPage = () => {
  return (
    <section className="w-full bg-[#fbf3ee] text-[#2d1b12]">

      <div className="max-w-[1400px] mx-auto px-6 md:px-20 pt-32 pb-24">
        <span className="text-[12px] tracking-widest text-[#6b3f2c]">
          SERENIQUE
        </span>

        <h1 className="font-serif text-[44px] md:text-[58px] mt-6">
          Let’s Connect
          <br />
          We’d Love To Hear From You
        </h1>

        <p className="mt-6 text-[15px] text-[#6f6f6f] max-w-xl">
          Whether you have a question, a special request, or simply wish
          to share your experience — our team is here for you.
        </p>
      </div>

      <div className="relative h-[60vh] mb-32">
        <img
          src="https://images.pexels.com/photos/1961795/pexels-photo-1961795.jpeg"
          className="absolute inset-0 w-full h-full object-cover"
          alt=""
        />
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative z-10 h-full flex items-center justify-center text-center">
          <h2 className="font-serif text-white text-[36px] md:text-[48px]">
            Contact Serenique
          </h2>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-20 pb-40">
        <div className="grid md:grid-cols-2 gap-24">

          <div className="space-y-12">

            <div>
              <h3 className="font-serif text-[28px] mb-6">
                Get In Touch
              </h3>
              <p className="text-[15px] text-[#6f6f6f] max-w-md">
                Our fragrance consultants are available to assist you
                with orders, recommendations, and bespoke services.
              </p>
            </div>

            <div className="space-y-8 text-[15px]">
              <div>
                <p className="font-serif">Email</p>
                <p className="text-[#6f6f6f]">support@serenique.com</p>
              </div>

              <div>
                <p className="font-serif">Phone</p>
                <p className="text-[#6f6f6f]">+1 (800) 456-7890</p>
              </div>

              <div>
                <p className="font-serif">Studio</p>
                <p className="text-[#6f6f6f]">
                  22 Rue de Parfum, <br />
                  Paris, France
                </p>
              </div>
            </div>

          </div>

          <div className="bg-white p-12 md:p-16">

            <h3 className="font-serif text-[26px] mb-10">
              Send Us A Message
            </h3>

            <form className="space-y-8">

              <div>
                <label className="text-[12px] tracking-widest text-[#6b3f2c]">
                  FULL NAME
                </label>
                <input
                  type="text"
                  className="w-full border-b border-[#d8cfc9] bg-transparent py-3 focus:outline-none"
                />
              </div>

              <div>
                <label className="text-[12px] tracking-widest text-[#6b3f2c]">
                  EMAIL ADDRESS
                </label>
                <input
                  type="email"
                  className="w-full border-b border-[#d8cfc9] bg-transparent py-3 focus:outline-none"
                />
              </div>

              <div>
                <label className="text-[12px] tracking-widest text-[#6b3f2c]">
                  SUBJECT
                </label>
                <input
                  type="text"
                  className="w-full border-b border-[#d8cfc9] bg-transparent py-3 focus:outline-none"
                />
              </div>

              <div>
                <label className="text-[12px] tracking-widest text-[#6b3f2c]">
                  MESSAGE
                </label>
                <textarea
                  rows="4"
                  className="w-full border-b border-[#d8cfc9] bg-transparent py-3 focus:outline-none resize-none"
                />
              </div>

              <button
                type="submit"
                className="mt-10 border border-[#6b3f2c] px-10 py-4 text-[12px] tracking-widest hover:bg-[#6b3f2c] hover:text-white transition"
              >
                SEND MESSAGE
              </button>

            </form>

          </div>

        </div>
      </div>

      <div className="bg-[#f6ebe4] py-32 text-center">
        <h3 className="font-serif text-[30px] max-w-3xl mx-auto">
          Every Conversation Is The Beginning Of A Story
        </h3>
        <p className="mt-6 text-[14px] text-[#6f6f6f] max-w-xl mx-auto">
          From your first inquiry to your final selection — we ensure
          an experience as refined as our fragrances.
        </p>
      </div>

      <div className="py-28 text-center">
        <span className="font-serif tracking-[0.3em] text-[#6b3f2c]">
          SERENIQUE
        </span>
      </div>

    </section>
  );
};

export default ContactPage;
