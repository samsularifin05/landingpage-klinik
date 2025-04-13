import { icCalender, icWaBlue } from "../assets";

const Revarasi = () => {
  return (
    <section className="px-4 lg:px-32 py-16 bg-primary3">
      <div className="bg-primary2 rounded-[15px] flex flex-col items-center justify-center gap-5 p-6 lg:h-72">
        <h1 className="text-[22px] sm:text-[26px] lg:text-[30px] text-white text-center">
          Reservasi Pelayanan kami sekarang
        </h1>

        <p className="text-white opacity-60 text-center max-w-xl text-sm sm:text-base">
          Rumah sakit adalah bagian integral dari suatu organisasi sosial dan
          kesehatan dengan fungsi menyediakan pelayanan paripurna
          (komprehensif).
        </p>

        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center items-center">
          <button className="outline outline-white flex gap-2 justify-center items-center text-white px-5 h-10 rounded-full w-full sm:w-auto">
            <img src={icCalender} className="h-5" alt="Calender" />
            Cek Jadwal Dokter
          </button>

          <button className="bg-white flex gap-2 justify-center items-center px-5 h-10 rounded-full w-full sm:w-auto">
            <img src={icWaBlue} className="h-5" alt="WhatsApp" />
            <p className="text-primary2">Reservasi</p>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Revarasi;
