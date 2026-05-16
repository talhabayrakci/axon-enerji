"use client";

import { useState } from "react";

export default function Home() {
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <main className="overflow-hidden bg-gradient-to-b from-[#0a0a0a] via-[#111111] to-[#1b1b1b] text-white">

      {/* Navbar */}
      <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-black/50 backdrop-blur-xl">

        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

          {/* Logo */}
          <a href="#" className="flex items-center gap-4">

            <img
              src="/logo.png"
              alt="Axon Enerji"
              className="h-36 w-auto drop-shadow-2xl md:h-20"
            />

          </a>

          {/* Desktop Menu */}
          <nav className="hidden items-center gap-8 text-sm font-medium md:flex">

            <a href="#" className="transition hover:text-yellow-400">
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
              href="#about"
              className="transition hover:text-yellow-400"
            >
              Hakkımızda
            </a>

            <a
              href="#contact"
              className="transition hover:text-yellow-400"
            >
              İletişim
            </a>

          </nav>

          {/* Mobile Button */}
          <button
            onClick={() => setMobileMenu(!mobileMenu)}
            className="text-3xl md:hidden"
          >
            ☰
          </button>

        </div>

        {/* Mobile Menu */}
        {mobileMenu && (
          <div className="border-t border-white/10 bg-black/95 px-6 py-6 md:hidden">

            <div className="flex flex-col gap-6 text-lg">

              <a href="#" onClick={() => setMobileMenu(false)}>
                Ana Sayfa
              </a>

              <a
                href="#services"
                onClick={() => setMobileMenu(false)}
              >
                Hizmetler
              </a>

              <a
                href="#projects"
                onClick={() => setMobileMenu(false)}
              >
                Projeler
              </a>

              <a
                href="#about"
                onClick={() => setMobileMenu(false)}
              >
                Hakkımızda
              </a>

              <a
                href="#contact"
                onClick={() => setMobileMenu(false)}
              >
                İletişim
              </a>

            </div>

          </div>
        )}

      </header>

      {/* Hero */}
      <section className="relative flex min-h-screen items-center overflow-hidden px-6 pt-32">

        {/* Background Glow */}
        <div className="absolute left-[-200px] top-[100px] h-[500px] w-[500px] rounded-full bg-yellow-400/20 blur-3xl"></div>

        <div className="absolute right-[-200px] bottom-[-100px] h-[400px] w-[400px] rounded-full bg-green-500/20 blur-3xl"></div>

        <div className="mx-auto grid max-w-7xl items-center gap-16 md:grid-cols-2">

          {/* Left */}
          <div className="relative z-10">

            <p className="mb-4 text-sm uppercase tracking-[0.4em] text-yellow-400">
              ENERJİ OTOMASYONU & SCADA
            </p>

            <h1 className="text-5xl font-black leading-tight md:text-7xl">

              Güçlü
              <span className="text-yellow-400"> Enerji </span>
              Teknolojileri

            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-gray-300">

              SCADA sistemleri, enerji otomasyonu, RTU çözümleri,
              IEC 60870-5-101/104 haberleşme sistemleri ve
              endüstriyel yazılım çözümleri sunuyoruz.

            </p>

            <div className="mt-10 flex flex-col gap-4 md:flex-row">

              <a
                href="#projects"
                className="rounded-2xl bg-yellow-400 px-8 py-4 font-semibold text-black transition hover:scale-105"
              >
                Projelerimiz
              </a>

              <a
                href="#contact"
                className="rounded-2xl border border-white/20 px-8 py-4 transition hover:border-yellow-400 hover:text-yellow-400"
              >
                İletişime Geç
              </a>

            </div>

          </div>

          {/* Right */}
          <div className="relative z-10">

            <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 shadow-2xl backdrop-blur-xl">

              <img
                src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1600&auto=format&fit=crop"
                alt="SCADA"
                className="h-[500px] w-full object-cover"
              />

            </div>

          </div>

        </div>

      </section>

      {/* Services */}
      <section
        id="services"
        className="px-6 py-28"
      >

        <div className="mx-auto max-w-7xl">

          <div className="mb-20 text-center">

            <p className="mb-4 text-sm uppercase tracking-[0.4em] text-yellow-400">
              HİZMETLERİMİZ
            </p>

            <h2 className="text-4xl font-bold md:text-6xl">
              Mühendislik ve Yazılım Çözümleri
            </h2>

          </div>

          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">

            <div className="rounded-[2rem] border border-yellow-400/20 bg-gradient-to-b from-yellow-400/10 to-transparent p-8 backdrop-blur-xl transition hover:-translate-y-2 hover:border-yellow-400">

              <div className="mb-6 text-5xl">
                ⚡
              </div>

              <h3 className="mb-4 text-2xl font-bold">
                Enerji Otomasyonu
              </h3>

              <p className="leading-8 text-gray-300">
                Trafo merkezleri ve enerji otomasyon sistemleri.
              </p>

            </div>

            <div className="rounded-[2rem] border border-green-400/20 bg-gradient-to-b from-green-400/10 to-transparent p-8 backdrop-blur-xl transition hover:-translate-y-2 hover:border-green-400">

              <div className="mb-6 text-5xl">
                🖥
              </div>

              <h3 className="mb-4 text-2xl font-bold">
                SCADA Sistemleri
              </h3>

              <p className="leading-8 text-gray-300">
                Gerçek zamanlı kontrol ve izleme altyapıları.
              </p>

            </div>

            <div className="rounded-[2rem] border border-yellow-400/20 bg-gradient-to-b from-yellow-400/10 to-transparent p-8 backdrop-blur-xl transition hover:-translate-y-2 hover:border-yellow-400">

              <div className="mb-6 text-5xl">
                🔌
              </div>

              <h3 className="mb-4 text-2xl font-bold">
                RTU & Haberleşme
              </h3>

              <p className="leading-8 text-gray-300">
                IEC104 ve Modbus haberleşme entegrasyonları.
              </p>

            </div>

            <div className="rounded-[2rem] border border-green-400/20 bg-gradient-to-b from-green-400/10 to-transparent p-8 backdrop-blur-xl transition hover:-translate-y-2 hover:border-green-400">

              <div className="mb-6 text-5xl">
                💻
              </div>

              <h3 className="mb-4 text-2xl font-bold">
                Yazılım Geliştirme
              </h3>

              <p className="leading-8 text-gray-300">
                Dashboard ve özel yazılım geliştirme hizmetleri.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* Projects */}
      <section
        id="projects"
        className="bg-gradient-to-b from-[#0f0f0f] to-[#1b1b1b] px-6 py-28"
      >

        <div className="mx-auto max-w-7xl">

          <div className="mb-20 text-center">

            <p className="mb-4 text-sm uppercase tracking-[0.4em] text-yellow-400">
              PROJELER
            </p>

            <h2 className="text-4xl font-bold md:text-6xl">
              Tamamlanan Projeler
            </h2>

          </div>

          <div className="grid gap-10 md:grid-cols-2 xl:grid-cols-3">

            <div className="group overflow-hidden rounded-[2rem] border border-white/10 bg-black/40 backdrop-blur-xl">

              <div className="overflow-hidden">

                <img
                  src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?q=80&w=1600&auto=format&fit=crop"
                  alt="Project"
                  className="h-80 w-full object-cover transition duration-700 group-hover:scale-110"
                />

              </div>

              <div className="p-8">

                <h3 className="mb-4 text-2xl font-bold">
                  SCADA Kontrol Merkezi
                </h3>

                <p className="leading-8 text-gray-300">
                  Gerçek zamanlı enerji izleme ve uzaktan kontrol altyapıları.
                </p>

              </div>

            </div>

            <div className="group overflow-hidden rounded-[2rem] border border-white/10 bg-black/40 backdrop-blur-xl">

              <div className="overflow-hidden">

                <img
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1600&auto=format&fit=crop"
                  alt="Project"
                  className="h-80 w-full object-cover transition duration-700 group-hover:scale-110"
                />

              </div>

              <div className="p-8">

                <h3 className="mb-4 text-2xl font-bold">
                  RTU Haberleşme
                </h3>

                <p className="leading-8 text-gray-300">
                  IEC 60870-5-104 haberleşme ve entegrasyon çözümleri.
                </p>

              </div>

            </div>

            <div className="group overflow-hidden rounded-[2rem] border border-white/10 bg-black/40 backdrop-blur-xl">

              <div className="overflow-hidden">

                <img
                  src="https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=1600&auto=format&fit=crop"
                  alt="Project"
                  className="h-80 w-full object-cover transition duration-700 group-hover:scale-110"
                />

              </div>

              <div className="p-8">

                <h3 className="mb-4 text-2xl font-bold">
                  Enerji İzleme Yazılımı
                </h3>

                <p className="leading-8 text-gray-300">
                  Dashboard ve enerji analiz sistemleri geliştirme çözümleri.
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* Contact */}
      <section
        id="contact"
        className="relative px-6 py-28"
      >

        <div className="absolute left-0 top-0 h-full w-full bg-gradient-to-r from-yellow-400/10 to-green-500/10"></div>

        <div className="relative mx-auto max-w-5xl rounded-[2rem] border border-white/10 bg-white/5 p-12 text-center backdrop-blur-2xl">

          <p className="mb-4 text-sm uppercase tracking-[0.4em] text-yellow-400">
            İLETİŞİM
          </p>

          <h2 className="text-4xl font-bold md:text-6xl">
            Bizimle İletişime Geçin
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-gray-300">

            Enerji otomasyonu, SCADA sistemleri ve yazılım çözümleri için bizimle iletişime geçin.

          </p>

          <div className="mt-12 flex flex-col items-center justify-center gap-6 md:flex-row">

            <a
              href="mailto:talha@axonenerji.com"
              className="rounded-2xl bg-yellow-400 px-8 py-4 font-semibold text-black transition hover:scale-105"
            >
              talha@axonenerji.com
            </a>

            <a
              href="https://wa.me/905301518922"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl border border-green-400/30 bg-green-500/10 px-8 py-4 transition hover:scale-105 hover:border-green-400"
            >
              WhatsApp
            </a>

          </div>

        </div>

      </section>

      {/* WhatsApp Floating */}
      <a
        href="https://wa.me/905301518922"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-green-500 text-3xl shadow-2xl transition hover:scale-110"
      >
        💬
      </a>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-black/60 px-6 py-10 backdrop-blur-xl">

        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 md:flex-row">

          <div>

            <img
              src="/logo.png"
              alt="Axon"
              className="h-16 w-auto"
            />

          </div>

          <p className="text-center text-gray-400">
            © 2026 AXON | Enerji Otomasyonu & SCADA
          </p>

          <div className="flex gap-6 text-gray-400">

            <a href="#" className="transition hover:text-yellow-400">
              LinkedIn
            </a>

            <a href="#" className="transition hover:text-yellow-400">
              Instagram
            </a>

          </div>

        </div>

      </footer>

    </main>
  );
}