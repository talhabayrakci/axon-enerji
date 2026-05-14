export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">

      {/* Navbar */}
      <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-black/70 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

          {/* Logo */}
          <img
            src="/logo.png"
            alt="Axon Enerji"
            className="h-12 w-auto"
          />

          {/* Menu */}
          <nav className="hidden gap-8 md:flex">
            <a href="#" className="transition hover:text-yellow-400">
              Ana Sayfa
            </a>

            <a href="#services" className="transition hover:text-yellow-400">
              Hizmetler
            </a>

            <a href="#projects" className="transition hover:text-yellow-400">
              Projeler
            </a>

            <a href="#about" className="transition hover:text-yellow-400">
              Hakkımızda
            </a>

            <a href="#contact" className="transition hover:text-yellow-400">
              İletişim
            </a>
          </nav>

        </div>
      </header>

      {/* Hero */}
      <section className="grid-background relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 text-center">

        {/* Glow */}
        <div className="absolute h-[500px] w-[500px] rounded-full bg-yellow-400/20 blur-3xl"></div>

        <div className="relative z-10">

          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-yellow-400">
            ENERJİ OTOMASYONU & SCADA
          </p>

          <h1 className="text-5xl font-bold leading-tight md:text-7xl">
            Geleceğin
            <span className="text-yellow-400"> Enerji </span>
            Teknolojileri
          </h1>

          <p className="mx-auto mt-8 max-w-2xl text-lg text-gray-300 md:text-xl">
            SCADA sistemleri, enerji otomasyonu, RTU çözümleri ve endüstriyel yazılım geliştirme hizmetleri sunuyoruz.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 md:flex-row">

            <a
              href="#projects"
              className="rounded-xl bg-yellow-400 px-8 py-4 font-semibold text-black transition hover:scale-105"
            >
              Projelerimiz
            </a>

            <a
              href="#contact"
              className="rounded-xl border border-white/20 px-8 py-4 transition hover:border-yellow-400 hover:text-yellow-400"
            >
              İletişime Geç
            </a>

          </div>

        </div>

      </section>

      {/* Services */}
      <section
        id="services"
        className="border-t border-white/10 bg-[#050505] px-6 py-24"
      >

        <div className="mx-auto max-w-7xl">

          <div className="mb-16 text-center">

            <p className="mb-4 text-sm uppercase tracking-[0.3em] text-yellow-400">
              Hizmetlerimiz
            </p>

            <h2 className="text-4xl font-bold md:text-5xl">
              Mühendislik ve Yazılım Çözümleri
            </h2>

          </div>

          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:border-yellow-400 hover:bg-white/10">

              <div className="mb-6 text-5xl text-yellow-400">
                ⚡
              </div>

              <h3 className="mb-4 text-2xl font-semibold">
                Enerji Otomasyonu
              </h3>

              <p className="text-gray-400">
                Trafo merkezleri, enerji izleme ve otomasyon sistemleri çözümleri.
              </p>

            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:border-yellow-400 hover:bg-white/10">

              <div className="mb-6 text-5xl text-green-400">
                🖥
              </div>

              <h3 className="mb-4 text-2xl font-semibold">
                SCADA Sistemleri
              </h3>

              <p className="text-gray-400">
                Gerçek zamanlı izleme, kontrol ve veri yönetim sistemleri.
              </p>

            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:border-yellow-400 hover:bg-white/10">

              <div className="mb-6 text-5xl text-yellow-400">
                🔌
              </div>

              <h3 className="mb-4 text-2xl font-semibold">
                RTU & Haberleşme
              </h3>

              <p className="text-gray-400">
                IEC 60870-5-101/104 ve Modbus çözümleri.
              </p>

            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:border-yellow-400 hover:bg-white/10">

              <div className="mb-6 text-5xl text-green-400">
                💻
              </div>

              <h3 className="mb-4 text-2xl font-semibold">
                Yazılım Geliştirme
              </h3>

              <p className="text-gray-400">
                Dashboard sistemleri ve özel yazılım çözümleri.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* Stats */}
      <section className="border-t border-white/10 bg-black px-6 py-20">

        <div className="mx-auto grid max-w-7xl gap-8 text-center md:grid-cols-4">

          <div>
            <h3 className="text-5xl font-bold text-yellow-400">
              50+
            </h3>

            <p className="mt-3 text-gray-400">
              Tamamlanan Proje
            </p>
          </div>

          <div>
            <h3 className="text-5xl font-bold text-green-400">
              10+
            </h3>

            <p className="mt-3 text-gray-400">
              Yıllık Deneyim
            </p>
          </div>

          <div>
            <h3 className="text-5xl font-bold text-yellow-400">
              7/24
            </h3>

            <p className="mt-3 text-gray-400">
              Teknik Destek
            </p>
          </div>

          <div>
            <h3 className="text-5xl font-bold text-green-400">
              %100
            </h3>

            <p className="mt-3 text-gray-400">
              Müşteri Memnuniyeti
            </p>
          </div>

        </div>

      </section>

      {/* Projects */}
      <section
        id="projects"
        className="border-t border-white/10 bg-[#050505] px-6 py-24"
      >

        <div className="mx-auto max-w-7xl">

          <div className="mb-16 text-center">

            <p className="mb-4 text-sm uppercase tracking-[0.3em] text-yellow-400">
              Projelerimiz
            </p>

            <h2 className="text-4xl font-bold md:text-5xl">
              Tamamlanan Mühendislik Projeleri
            </h2>

          </div>

          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

            <div className="group overflow-hidden rounded-3xl border border-white/10 bg-black">

              <div className="h-64 overflow-hidden">

                <img
                  src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop"
                  alt="SCADA"
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                />

              </div>

              <div className="p-8">

                <h3 className="mb-3 text-2xl font-semibold">
                  SCADA Kontrol Merkezi
                </h3>

                <p className="text-gray-400">
                  Enerji izleme ve uzaktan kontrol altyapısı geliştirme projesi.
                </p>

              </div>

            </div>

            <div className="group overflow-hidden rounded-3xl border border-white/10 bg-black">

              <div className="h-64 overflow-hidden">

                <img
                  src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?q=80&w=1200&auto=format&fit=crop"
                  alt="RTU"
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                />

              </div>

              <div className="p-8">

                <h3 className="mb-3 text-2xl font-semibold">
                  RTU Haberleşme Sistemi
                </h3>

                <p className="text-gray-400">
                  IEC 60870-5-104 haberleşme altyapısı ve entegrasyon çözümleri.
                </p>

              </div>

            </div>

            <div className="group overflow-hidden rounded-3xl border border-white/10 bg-black">

              <div className="h-64 overflow-hidden">

                <img
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop"
                  alt="Software"
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                />

              </div>

              <div className="p-8">

                <h3 className="mb-3 text-2xl font-semibold">
                  Endüstriyel Yazılım
                </h3>

                <p className="text-gray-400">
                  Özel dashboard ve enerji analiz yazılımları geliştirme hizmeti.
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* About */}
      <section
        id="about"
        className="border-t border-white/10 bg-black px-6 py-24"
      >

        <div className="mx-auto grid max-w-7xl gap-16 md:grid-cols-2 md:items-center">

          <div>

            <p className="mb-4 text-sm uppercase tracking-[0.3em] text-yellow-400">
              Hakkımızda
            </p>

            <h2 className="text-4xl font-bold md:text-5xl">
              Güvenilir Enerji Teknolojileri
            </h2>

            <p className="mt-8 text-lg leading-8 text-gray-400">
              Axon Enerji Mühendislik olarak enerji otomasyonu, SCADA sistemleri,
              RTU çözümleri ve endüstriyel yazılım alanlarında modern mühendislik
              hizmetleri sunuyoruz.
            </p>

            <p className="mt-6 text-lg leading-8 text-gray-400">
              Güvenilir, sürdürülebilir ve yüksek performanslı sistemler geliştirerek
              müşterilerimizin operasyonel verimliliğini artırıyoruz.
            </p>

          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-10">

            <div className="space-y-8">

              <div>
                <h3 className="mb-2 text-2xl font-semibold text-yellow-400">
                  IEC 60870-5-101/104
                </h3>

                <p className="text-gray-400">
                  Endüstriyel haberleşme protokol entegrasyonları.
                </p>
              </div>

              <div>
                <h3 className="mb-2 text-2xl font-semibold text-green-400">
                  SCADA & RTU
                </h3>

                <p className="text-gray-400">
                  Gerçek zamanlı enerji izleme ve kontrol sistemleri.
                </p>
              </div>

              <div>
                <h3 className="mb-2 text-2xl font-semibold text-yellow-400">
                  Yazılım Çözümleri
                </h3>

                <p className="text-gray-400">
                  Özel dashboard, veri analizi ve otomasyon uygulamaları.
                </p>
              </div>

            </div>

          </div>

        </div>

      </section>

      {/* Contact */}
      <section
        id="contact"
        className="border-t border-white/10 bg-[#050505] px-6 py-24"
      >

        <div className="mx-auto max-w-4xl text-center">

          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-yellow-400">
            İletişim
          </p>

          <h2 className="text-4xl font-bold md:text-5xl">
            Bizimle İletişime Geçin
          </h2>

          <p className="mx-auto mt-8 max-w-2xl text-lg text-gray-400">
            Enerji otomasyonu ve SCADA çözümleri için bize ulaşın.
          </p>

          <div className="mt-12 flex flex-col items-center justify-center gap-6 md:flex-row">

            <a
              href="mailto:info@axonenerji.com"
              className="rounded-2xl bg-yellow-400 px-8 py-4 font-semibold text-black transition hover:scale-105"
            >
              info@axonenerji.com
            </a>

            <a
              href="https://wa.me/905301518922"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl border border-white/20 px-8 py-4 transition hover:border-green-400 hover:text-green-400"
            >
              WhatsApp
            </a>

          </div>

        </div>

      </section>

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/905301518922"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-green-500 text-3xl text-white shadow-2xl transition hover:scale-110"
      >
        💬
      </a>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-black px-6 py-10">

        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 text-center md:flex-row">

          <p className="text-gray-500">
            © 2026 Axon Enerji Mühendislik
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