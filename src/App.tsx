import Fasilitas from "./components/fasilitas";
import Footer from "./components/footer";
import Layanan from "./components/layanan";
import Revarasi from "./components/revarasi";
import Testimoni from "./components/testimoni";
import Partner from "./components/partner";
import DaftarLayanan from "./components/listLayanan";
import Heros from "./components/heros";

const App = () => {
  return (
    <div className="flex flex-col">
      <Heros />
      <Partner />
      <DaftarLayanan />
      <Layanan />
      <Fasilitas />
      <Revarasi />
      <Testimoni />
      <Footer />
    </div>
  );
};

export default App;
