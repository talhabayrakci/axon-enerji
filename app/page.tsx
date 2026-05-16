"use client";

import { useState } from "react";

export default function Home() {
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <main className="overflow-hidden bg-[#111111] text-white">

      {/* =========================
          NAVBAR
      ========================= */}

      <header className="fixed top-0 z-50 w-full border-b border-yellow-400/10 bg-[#0b0b0b]/80 backdrop-blur-2xl">

        <div className="mx-auto flex max-w-8xl items-center justify-between px-6 py-0">

          {/* LOGO */}

          <a
            href="#"
            className="flex items-center"
          >

            <div className="flex flex-col items-start leading-none">

              <img
                src="/logo.png"
                alt="AXON ENERJİ"
                className="
                  h-30
                  w-auto
                  object-contain
                  transition
                  duration-300
                  hover:scale-105
                  md:h-38
                "
              />

              <p
                className="
                  mt-1
                  pl-[2px]
                  text-[6px]
                  uppercase
                  tracking-[0.32em]
                  text-yellow-400/60
                  md:text-[7px]
                "
              >
                
              </p>

            </div>

          </a>

          {/* DESKTOP MENU */}

          <nav className="hidden items-center gap-10 text-sm md:flex">

            <a
              href="#"
              className="transition hover:text-yellow-400"
            >
              Ana Sayfa
            </a>

            <a
              href="#services"
              className="transition hover:text-yellow-400"
            >
              Hizmetler
            </a>

            <a
              href="#projects"
              className="transition hover:text-yellow-400"
            >
              Projeler
            </a>

            <a
              href="#technology"
              className="transition hover:text-yellow-400"
            >
              Teknolojiler
            </a>

            <a
              href="#contact"
              className="transition hover:text-yellow-400"
            >
              İletişim
            </a>

          </nav>

          {/* MOBILE BUTTON */}

          <button
            onClick={() => setMobileMenu(!mobileMenu)}
            className="text-3xl md:hidden"
          >
            ☰
          </button>

        </div>

        {/* MOBILE MENU */}

        {mobileMenu && (

          <div className="border-t border-white/10 bg-black px-6 py-6 md:hidden">

            <div className="flex flex-col gap-6 text-lg">

              <a href="#">Ana Sayfa</a>

              <a href="#services">
                Hizmetler
              </a>

              <a href="#projects">
                Projeler
              </a>

              <a href="#technology">
                Teknolojiler
              </a>

              <a href="#contact">
                İletişim
              </a>

            </div>

          </div>

        )}

      </header>

      {/* =========================
          HERO SECTION
      ========================= */}

      <section
        className="
          relative
          overflow-hidden
          bg-gradient-to-br
          from-[#111111]
          via-[#171717]
          to-[#1d1d1d]
          pt-40
        "
      >

        {/* COLOR EFFECTS */}

        <div className="absolute left-[-200px] top-[50px] h-[500px] w-[500px] rounded-full bg-yellow-500/20 blur-3xl"></div>

        <div className="absolute right-[-200px] top-[150px] h-[450px] w-[450px] rounded-full bg-amber-400/10 blur-3xl"></div>

        <div className="absolute bottom-[-200px] left-[35%] h-[400px] w-[400px] rounded-full bg-green-500/10 blur-3xl"></div>

        {/* GRID */}

        <div
          className="
            absolute inset-0 opacity-[0.04]
            [background-image:linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)]
            [background-size:60px_60px]
          "
        />

        <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-6 lg:grid-cols-2">

          {/* LEFT */}

          <div className="py-20 lg:py-28">

            <div className="mb-6 h-[3px] w-24 bg-yellow-400"></div>

            <p
              className="
                mb-6
                text-sm
                font-medium
                uppercase
                tracking-[0.4em]
                text-yellow-400
              "
            >
              AXON ENERJİ
            </p>

            <h1
              className="
                text-3xl
                font-semibold
                leading-[1]
                tracking-tight
                text-white
                md:text-4xl
              "
            >

              

              <span className="block text-yellow-400">
                SCADA SİSTEMLERİ
              </span>

               

            </h1>

            <p
              className="
                mt-10
                max-w-2xl
                text-lg
                leading-9
                text-gray-300
              "
            >
              IEC 60870-5-101/104 haberleşme
              altyapıları, RTU çözümleri ve enerji otomasyonu
              alanlarında modern mühendislik hizmetleri sunuyoruz.
            </p>

            {/* BUTTONS */}

            <div className="mt-12 flex flex-wrap gap-5">

              <a
                href="#projects"
                className="
                  bg-yellow-400
                  px-10
                  py-5
                  text-sm
                  font-semibold
                  uppercase
                  tracking-[0.15em]
                  text-black
                  shadow-[0_0_30px_rgba(255,215,0,0.2)]
                  transition
                  hover:bg-yellow-300
                "
              >
                Projeler
              </a>

              <a
                href="#contact"
                className="
                  border
                  border-white/15
                  bg-white/5
                  px-10
                  py-5
                  text-sm
                  uppercase
                  tracking-[0.15em]
                  text-white
                  backdrop-blur-xl
                  transition
                  hover:border-yellow-400
                  hover:text-yellow-400
                "
              >
                İletişim
              </a>

            </div>

            {/* STATS */}

            <div className="mt-20 grid grid-cols-3 gap-10 border-t border-white/10 pt-10">

              <div>

                <h3 className="text-4xl font-bold text-yellow-400">
                  50+
                </h3>

                <p className="mt-2 text-sm text-gray-400">
                  Tamamlanan Proje
                </p>

              </div>

              <div>

                <h3 className="text-4xl font-bold text-yellow-400">
                  7+
                </h3>

                <p className="mt-2 text-sm text-gray-400">
                  Yıllık Deneyim
                </p>

              </div>

              <div>

                <h3 className="text-4xl font-bold text-yellow-400">
                  24/7
                </h3>

                <p className="mt-2 text-sm text-gray-400">
                  Teknik Destek
                </p>

              </div>

            </div>

          </div>

          {/* RIGHT IMAGE */}

          <div className="relative min-h-[700px]">

            <div className="absolute inset-0 rounded-[2rem] bg-yellow-400/10 blur-3xl"></div>

            <div
              className="
                relative
                overflow-hidden
                rounded-[2rem]
                border
                border-yellow-400/10
                bg-white/5
                shadow-2xl
                backdrop-blur-2xl
              "
            >

              <img
                src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1800&auto=format&fit=crop"
                alt="SCADA"
                className="
                  h-[700px]
                  w-full
                  object-cover
                "
              />

              {/* OVERLAY */}

              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>

              {/* FLOAT CARD */}

              <div
                className="
                  absolute
                  bottom-10
                  left-10
                  border
                  border-white/10
                  bg-black/60
                  p-8
                  backdrop-blur-xl
                "
              >

                <p className="text-sm uppercase tracking-[0.3em] text-yellow-400">
                  IEC 60870-5-104
                </p>

                <h3 className="mt-3 text-2xl font-semibold text-white">
                  RTU & SCADA
                  Entegrasyonları
                </h3>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* =========================
          SERVICES
      ========================= */}

      <section
        id="services"
        className="bg-[#171717] px-6 py-24"
      >

        <div className="mx-auto max-w-7xl">

          <div className="mb-16">

            <p className="mb-3 text-sm uppercase tracking-[0.4em] text-yellow-400">
              HİZMETLER
            </p>

            <h2 className="text-5xl font-semibold text-white">
              Mühendislik Çözümleri
            </h2>

          </div>

          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">

            <div className="border border-white/10 bg-[#1f1f1f] p-8 transition hover:border-yellow-400/40">

              <div className="mb-5 text-5xl">
                ⚡
              </div>

              <h3 className="mb-4 text-2xl font-semibold">
                Enerji Otomasyonu
              </h3>

              <p className="leading-8 text-gray-400">
                Trafo merkezleri ve enerji sistemleri için otomasyon çözümleri.
              </p>

            </div>

            <div className="border border-white/10 bg-[#1f1f1f] p-8 transition hover:border-yellow-400/40">

              <div className="mb-5 text-5xl">
                🖥
              </div>

              <h3 className="mb-4 text-2xl font-semibold">
                SCADA Sistemleri
              </h3>

              <p className="leading-8 text-gray-400">
                Gerçek zamanlı izleme ve kontrol sistemleri.
              </p>

            </div>

            <div className="border border-white/10 bg-[#1f1f1f] p-8 transition hover:border-yellow-400/40">

              <div className="mb-5 text-5xl">
                📡
              </div>

              <h3 className="mb-4 text-2xl font-semibold">
                RTU & Haberleşme
              </h3>

              <p className="leading-8 text-gray-400">
                IEC104, IEC101 ve Modbus entegrasyon çözümleri.
              </p>

            </div>

            <div className="border border-white/10 bg-[#1f1f1f] p-8 transition hover:border-yellow-400/40">

              <div className="mb-5 text-5xl">
                💻
              </div>

              <h3 className="mb-4 text-2xl font-semibold">
                Yazılım Geliştirme
              </h3>

              <p className="leading-8 text-gray-400">
                Dashboard ve özel endüstriyel yazılım sistemleri.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* =========================
          FOOTER
      ========================= */}

      <footer className="border-t border-white/10 bg-[#101010] px-6 py-10">

        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 md:flex-row">

          <img
            src="/logo.png"
            alt="AXON"
            className="h-16 w-auto"
          />

          <p className="text-center text-gray-500">
            © 2026 AXON ENERJİ | Enerji Otomasyonu & SCADA
          </p>

          <div className="flex gap-6 text-gray-400">

            <a href="#" className="hover:text-yellow-400">
              LinkedIn
            </a>

            <a href="#" className="hover:text-yellow-400">
              Instagram
            </a>

          </div>

        </div>

      </footer>

    </main>
  );
}