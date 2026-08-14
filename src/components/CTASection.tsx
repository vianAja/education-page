const CTASection = () => (
  <section className="section-padding">
    <div className="container mx-auto max-w-3xl text-center">
      <div
        className="p-12 rounded-2xl text-white shadow-2xl relative overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, hsl(221 67% 45%), hsl(193 74% 42%))",
        }}
      >
        <div className="text-5xl mb-4">🐳</div>
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
          Siap Mulai Perjalanan <span className="text-peach font-extrabold underline decoration-peach/50">Docker</span>-mu?
        </h2>
        <p className="text-white/90 mb-8 text-lg max-w-xl mx-auto">
          Bergabung dengan 5.000+ developer yang sudah berhasil menguasai container.
          Mulai gratis sekarang, tidak perlu kartu kredit.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="/#pricing" className="bg-white text-primary hover:bg-white/90 font-semibold rounded-lg px-8 py-4 shadow-lg transition-all duration-300 hover:-translate-y-0.5">
            Mulai Belajar Gratis
          </a>
          <a
            href="/materi"
            className="px-8 py-4 rounded-lg border border-white/40 font-semibold text-white transition-all duration-300 hover:bg-white/10"
          >
            Lihat Materi Dulu
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default CTASection;
