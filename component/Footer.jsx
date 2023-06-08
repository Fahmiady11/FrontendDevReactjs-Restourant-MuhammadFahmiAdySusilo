import Link from "next/link";

export default function Footer() {
  return (
    <div className="shadow-md bg-gray-200">
      <div className="max-w-7xl m-auto p-8">
        <div className="flex justify-between gap-8">
          <div className="flex-shrink">
            <Link href="/" className="flex items-center gap-4 mb-8">
              <p className="font-jua text-red-500 text-2xl font-semibold">Foodie Haven</p>
            </Link>
            <p className="text-neutral-500 mb-8">
              Di website Kumpulan Restoran, Anda akan menemukan katalog restoran
              yang luas, mulai dari kafe mewah hingga warung makan lokal yang
              terkenal. Kami menghadirkan ulasan mendalam tentang setiap tempat
              makan, mencakup faktor-faktor seperti suasana, menu, kualitas
              makanan, dan pelayanan.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="#/"
                target="_blank"
                className="h-12 w-12 rounded-full bg-red-100 flex items-center justify-center"
              >
                <img
                  src="/assets/image/twitter.png"
                  alt="twit"
                  className="w-[24px]"
                />
              </a>
              <a
                href="#/"
                target="_blank"
                className="h-12 w-12 rounded-full bg-red-100 flex items-center justify-center"
              >
                <img
                  src="/assets/image/instagram.png"
                  alt="ins"
                  className="w-[24px]"
                />
              </a>
              <a
                href="#/"
                target="_blank"
                className="h-12 w-12 rounded-full bg-red-100 flex items-center justify-center"
              >
                <img
                  src="/assets/image/youtube.png"
                  alt="you"
                  className="w-[24px]"
                />
              </a>
            </div>
          </div>
          <div className="flex-grow flex-shrink-0 lg:flex justify-end gap-16 hidden">
            <div>
              <p className="block text-neutral-700 text-xl font-semibold mb-4">
                Tentang
              </p>
              <div className="text-neutral-600 flex items-start flex-col gap-4">
                <Link href="/tentang/hubungi-kami" className="block">
                  Hubungi Kami
                </Link>
                <Link href="/tentang/pusat-bantuan" className="block">
                  Pusat Bantuan
                </Link>
                <Link href="/tentang/tentang-kami" className="block">
                  Tentang Kami
                </Link>
              </div>
            </div>
            <div>
              <p className="block text-neutral-700 text-xl font-semibold mb-4">
                Penggunaan
              </p>
              <div className="text-neutral-600 flex items-start flex-col gap-4">
                <Link href="/pembayaran/about" className="block">
                  About
                </Link>
                <Link href="/pembayaran/terms" className="block">
                  Terms
                </Link>
                <Link href="/pembayaran/privacy-policy" className="block">
                  Privacy Policy
                </Link>
                <Link href="/pembayaran/careers" className="block">
                  Careers
                </Link>
              </div>
            </div>
            <div>
              <a
                href="/#"
                className="block text-neutral-700 text-xl font-semibold mb-4"
              >
                Download App
              </a>
              <div className="text-neutral-600 flex items-start flex-col gap-4">
                <a href="/#" target="_blank" className="block">
                  Documentation
                </a>
                <a href="/#" target="_blank" className="block">
                  License
                </a>
                <a href="/#" target="_blank" className="block">
                  Changelog
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-400 text-center p-4 md:p-6">
        Copyright © 2023 Muhammad Fahmi Ady Susilo
      </div>
    </div>
  );
}
