import { icFacebook, icLogoPutih, icWaPutih, icYoutube } from "../assets";

const Footer = () => {
  return (
    <footer className="bg-[#0b0c2a] text-white px-4 lg:px-32 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
        {/* Logo dan Alamat */}
        <div>
          <img src={icLogoPutih} className="h-20" />
          <p className="italic text-sm text-white/80">
            Jl. Lebak Bulus I Kav. 29 Cilandak
            <br />
            Jakarta Selatan, DKI Jakarta, Indonesia 12340
          </p>
          {/* Social Media */}
          <div className="flex gap-4 mt-4">
            <button className="border border-white/50 rounded-full p-2 hover:bg-white/10">
              <img src={icYoutube} className="h-5" />
            </button>
            <button className="border border-white/50 rounded-full p-2 hover:bg-white/10">
              <img src={icFacebook} className="h-5" />
            </button>
            <button className="border border-white/50 rounded-full p-2 hover:bg-white/10">
              <img src={icWaPutih} className="h-5" />
            </button>
          </div>
        </div>

        {/* Company Info */}
        <div>
          <h3 className="font-semibold text-white mb-4">Company Info</h3>
          <ul className="text-sm space-y-2 text-white/80">
            <li>Tentang Kami</li>
            <li>Karir</li>
            <li>Blog</li>
            <li>Info Layanan</li>
          </ul>
        </div>

        {/* Cabang */}
        <div>
          <h3 className="font-semibold text-white mb-4">Cabang</h3>
          <ul className="text-sm space-y-2 text-white/80">
            <li>Tangerang</li>
            <li>Jakarta</li>
            <li>Surabaya</li>
            <li>Bekasi</li>
          </ul>
        </div>

        {/* Kontak Kami */}
        <div>
          <h3 className="font-semibold text-white mb-4">Kontak Kami</h3>
          <ul className="text-sm space-y-2 text-white/80">
            <li>+6265646465455</li>
            <li>info@klinik24.com</li>
            <li>Telp: +5646544654</li>
          </ul>
        </div>
      </div>

      <hr className="border-white/20" />
      <p className="text-center text-sm text-white/60 mt-6">
        Copyright © Klinik24 {new Date().getFullYear()}
      </p>
    </footer>
  );
};

export default Footer;
