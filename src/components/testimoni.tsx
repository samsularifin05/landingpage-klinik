const Testimoni = () => {
  return (
    <section className="px-4 lg:px-32 py-20 bg-primary3">
      <div className="text-center mb-12">
        <h2 className="text-2xl lg:text-3xl font-bold text-gray-800">
          Testimonial by Pasien
        </h2>
        <p className="text-gray-500 mt-2 max-w-2xl mx-auto text-sm lg:text-base">
          Rumah sakit adalah bagian integral dari suatu organisasi sosial dan
          kesehatan dengan fungsi menyediakan pelayanan paripurna
          (komprehensif).
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {[...Array(4)].map((_, index) => (
          <div
            key={index}
            className="bg-white rounded-[20px] shadow-md p-6 flex flex-col justify-between"
          >
            <p className="text-gray-700 italic">
              Click edit button to change this text. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Ut elit tellus, luctus nec
              ullamcorper mattis, pulvinar dapibus leo.
            </p>
            <div className="flex items-center gap-4 mt-6">
              <img
                src="https://i.pravatar.cc/60?img=1"
                className="rounded-full h-12 w-12 object-cover"
                alt="User"
              />
              <div>
                <p className="text-blue-600 font-semibold">Rifki Abdurachman</p>
                <p className="text-gray-400 text-sm">Product Designer</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimoni;
