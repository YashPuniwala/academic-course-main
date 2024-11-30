import React from "react";

const Hero = () => {
  return (
    <div className="relative bg-blue-50 min-h-screen">
      <section
        className="relative h-screen bg-cover bg-center flex items-center"
        style={{
          backgroundImage:
            "url('https://scintillating-smakager-860376.netlify.app/static/media/bg.baa1024a4ae092566a75.webp')",
          backgroundPosition: "right top",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-40 z-0"></div>

        <div className="container mx-auto px-6 md:px-12 text-center md:text-left relative z-10">
          <div className="p-6 md:p-8 lg:p-12 max-w-lg md:max-w-2xl space-y-6">
            <p className="text-lg md:text-xl font-medium text-white">
              WELCOME TO ACADEMIA
            </p>

            <h2 className="text-3xl md:text-5xl font-bold text-white leading-snug md:leading-tight">
              Best Online Education Expertise
            </h2>

            <p className="text-sm md:text-base text-white mt-2 md:mt-4">
              Far far away, behind the word mountains, far from the countries of
              Vokalia and Consonantia, there live the blind texts.
            </p>

            <div className="mt-6 space-y-4 md:space-y-0 md:space-x-4 flex flex-col md:flex-row items-center md:items-start justify-center md:justify-start">
              <button className="bg-teal-500 text-white px-6 py-3 rounded shadow-md hover:bg-teal-600 transition">
                GET STARTED NOW →
              </button>
              <button className="bg-white text-teal-500 border-2 border-teal-500 px-6 py-3 rounded shadow-md hover:bg-teal-500 hover:text-white transition">
                VIEW COURSE →
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
