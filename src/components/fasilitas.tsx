import { icWa, imgDoctorList } from "../assets";

const Fasilitas = () => {
  return (
    <section className="w-full px-4 lg:px-32 py-16 bg-primary3">
      <div className="flex flex-col-reverse lg:flex-row justify-between items-center gap-12">
        {/* Konten Teks */}
        <div className="flex flex-col gap-4 w-full lg:w-1/2 text-center lg:text-left">
          <h1 className="text-[28px] sm:text-[32px] lg:text-[40px] text-gradient-purple font-semibold leading-snug">
            Fasilitas Mewah yang
            <br /> memanusiakan manusia
          </h1>
          <p className="text-text-secondary text-base leading-relaxed">
            Rumah sakit adalah bagian integral dari suatu organisasi sosial dan
            kesehatan dengan fungsi menyediakan pelayanan paripurna
            (komprehensif).
          </p>
          <button className="button-blue-purple-gradient mt-6 flex items-center justify-center gap-2 self-center lg:self-start">
            <img src={icWa} className="h-6" alt="WA" />
            Reservasi
          </button>
        </div>

        {/* Gambar */}

        <div className="hover:scale-105 transition-transform duration-300 w-full lg:w-1/2 flex items-center justify-center">
          <img
            src={imgDoctorList}
            className="w-full max-w-md lg:max-w-full h-auto object-contain"
            alt="Doctor"
          />
        </div>
      </div>
    </section>
  );
};

export default Fasilitas;
