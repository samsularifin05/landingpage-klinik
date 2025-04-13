import { icWa, imgReview1 } from "../assets";

const Layanan = () => {
  return (
    <section className="w-full px-4 lg:px-32 py-16 bg-primary3">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Gambar */}
        <div className="hover:scale-105 transition-transform duration-300 w-full lg:w-1/2">
          <img
            src={imgReview1}
            className="w-full h-auto object-cover"
            alt="Review"
          />
        </div>

        {/* Konten Text */}
        <div className="flex flex-col gap-4 w-full lg:w-1/2 text-center lg:text-left">
          <h1 className="text-[28px] sm:text-[32px] lg:text-[40px] font-semibold">
            Pelayanan terbaik dari para Ahli Medis
          </h1>
          <p className="text-text-secondary text-base leading-relaxed">
            Rumah sakit adalah bagian integral dari suatu organisasi sosial dan
            kesehatan dengan fungsi menyediakan pelayanan paripurna
            (komprehensif).
          </p>
          <button className="button-blue-purple-gradient h-12 flex items-center justify-center gap-4 mt-4 self-center lg:self-start">
            <img src={icWa} className="h-6" alt="WA" /> Reservasi
          </button>
        </div>
      </div>
    </section>
  );
};

export default Layanan;
