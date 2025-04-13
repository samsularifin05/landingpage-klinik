import { useState } from "react";
import { icLogo, icMenu, icStetoskop, imgDoctor } from "../assets";

const Heros = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <section className="bg-primary text-white w-full h-full px-4 lg:px-32 py-8 relative">
      {/* Header */}
      <div className="flex justify-between items-center w-full h-16">
        <img src={icLogo} className="h-10 lg:h-20" alt="Logo" />

        {/* Menu Desktop */}
        <ul className="hidden lg:flex gap-10 items-center">
          <li className="textMenu activeTextMenu">Beranda</li>
          <li className="textMenu">Tentang Kami</li>
          <li className="textMenu">Layanan</li>
          <li className="textMenu">Kontak Kami</li>
        </ul>

        {/* Button Desktop */}
        <button className="button-blue-purple-gradient hidden lg:flex items-center justify-center gap-2 px-5 py-2 rounded-full transition-all duration-300 hover:scale-105">
          <img src={icStetoskop} className="h-5" alt="Stetoskop" />
          Register Layanan
        </button>

        {/* Menu Mobile Toggle */}
        <img
          src={icMenu}
          className="h-6 lg:hidden cursor-pointer"
          alt="Menu"
          onClick={() => setMobileMenuOpen(true)}
        />
      </div>

      {/* Mobile Fullscreen Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-primary z-50 flex flex-col items-center justify-center gap-8 text-center transition-all duration-300">
          <button
            className="absolute top-6 right-6 text-3xl text-black"
            onClick={() => setMobileMenuOpen(false)}
          >
            ✕
          </button>
          <ul className="flex flex-col gap-6 text-lg">
            <li className="textMenu activeTextMenu">Beranda</li>
            <li className="textMenu">Tentang Kami</li>
            <li className="textMenu">Layanan</li>
            <li className="textMenu">Kontak Kami</li>
          </ul>
          <button className="button-blue-purple-gradient flex items-center justify-center gap-2 px-5 py-2 rounded-full">
            <img src={icStetoskop} className="h-5" alt="Stetoskop" />
            Register Layanan
          </button>
        </div>
      )}

      {/* Hero Content */}
      <div className="flex flex-col-reverse lg:flex-row justify-between items-center w-full mt-12 gap-10">
        {/* Text */}
        <div className="w-full lg:w-1/2 flex flex-col gap-4 text-center lg:text-left">
          <h1 className="text-[28px] sm:text-[32px] lg:text-[40px] text-gradient-purple font-semibold leading-snug">
            Klinik 24 siap melayani keluhan <br />
            masyarakat selama 24/7.
          </h1>
          <p className="text-text-secondary text-base leading-relaxed">
            Rumah sakit adalah bagian integral dari suatu organisasi sosial dan
            kesehatan dengan fungsi menyediakan pelayanan paripurna
            (komprehensif).
          </p>
          <button className="button-blue-purple-gradient mt-4 flex items-center justify-center gap-2 self-center lg:self-start px-5 py-2 rounded-full transition-all duration-300 hover:scale-105">
            <img src={icStetoskop} className="h-5" alt="Stetoskop" />
            Lihat Layanan
          </button>
        </div>

        {/* Image */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <img
            src={imgDoctor}
            className="w-full max-w-md lg:max-w-full h-auto object-contain transition-transform duration-300 hover:scale-105"
            alt="Doctor"
          />
        </div>
      </div>
    </section>
  );
};

export default Heros;
