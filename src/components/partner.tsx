import { sponsor1, sponsor2, sponsor3, sponsor4, sponsor5 } from "../assets";

const Partner = () => {
  return (
    <section className="bg-secondary w-full min-h-56 py-8 px-4 flex flex-col gap-6 justify-center items-center text-center">
      <h1 className="text-[32px] sm:text-[40px] lg:text-[48px] font-semibold">
        Partner & Friend
      </h1>

      <div className="flex flex-wrap justify-center items-center gap-6">
        {[sponsor1, sponsor2, sponsor3, sponsor4, sponsor5].map((img, i) => (
          <div
            key={i}
            className="hover:scale-105 transition-transform duration-300"
          >
            <img
              src={img}
              className="h-14 sm:h-16 lg:h-20 w-auto"
              alt={`Sponsor ${i + 1}`}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Partner;
