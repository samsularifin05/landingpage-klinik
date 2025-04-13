import { icMedicalCheck, icObat, icSuntik, icWa } from "../assets";

const DaftarLayanan = () => {
  return (
    <section className="w-full px-4 lg:px-40 py-20 bg-primary3">
      {/* Header */}
      <div className="flex flex-col lg:flex-row justify-between gap-6">
        <h1 className="text-[24px] lg:text-[28px] font-semibold w-full">
          Daftar Layanan
        </h1>
        <div className="lg:w-1/2">
          <p className="text-text-secondary">
            Rumah sakit adalah bagian integral dari suatu organisasi sosial dan
            kesehatan dengan fungsi menyediakan pelayanan paripurna
            (komprehensif).
          </p>
        </div>
      </div>

      {/* Card List */}
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Card 1 */}
        <div className="bg-white rounded-[20px] shadow p-6 flex flex-col justify-between h-full">
          <img src={icObat} className="h-20 w-20" alt="Icon Obat" />
          <div className="flex flex-col gap-2 mt-4">
            <h2 className="text-[22px] font-bold">Apotek 24 Jam</h2>
            <p className="text-text-secondary text-sm">
              Toko tempat meramu dan menjual obat berdasarkan resep dokter serta
              memperdagangkan barang medis.
            </p>
          </div>
          <button className="button-blue-purple-gradient-full h-12 flex items-center justify-center gap-4 mt-6">
            <img src={icWa} className="h-6" alt="WA" /> Register Pasien
          </button>
        </div>

        {/* Card 2 */}
        <div className="bg-white rounded-[20px] shadow p-6 flex flex-col justify-between h-full">
          <img
            src={icMedicalCheck}
            className="h-20 w-20"
            alt="Icon Medical Check"
          />
          <div className="flex flex-col gap-2 mt-4">
            <h2 className="text-[22px] font-bold">Medical Check Up</h2>
            <p className="text-text-secondary text-sm">
              Toko tempat meramu dan menjual obat berdasarkan resep dokter serta
              memperdagangkan barang medis.
            </p>
          </div>
          <button className="button-blue-purple-gradient-full h-12 flex items-center justify-center gap-4 mt-6">
            <img src={icWa} className="h-6" alt="WA" /> Reservasi
          </button>
        </div>

        {/* Card 3 */}
        <div className="bg-white rounded-[20px] shadow p-6 flex flex-col justify-between h-full">
          <img src={icSuntik} className="h-20 w-20" alt="Icon Suntik" />
          <div className="flex flex-col gap-2 mt-4">
            <h2 className="text-[22px] font-bold">Professional Doctor</h2>
            <p className="text-text-secondary text-sm">
              Toko tempat meramu dan menjual obat berdasarkan resep dokter serta
              memperdagangkan barang medis.
            </p>
          </div>
          <button className="button-blue-purple-gradient-full h-12 flex items-center justify-center gap-4 mt-6">
            <img src={icWa} className="h-6" alt="WA" /> Reservasi
          </button>
        </div>
      </div>
    </section>
  );
};

export default DaftarLayanan;
