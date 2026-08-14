const CTASection = () => (
  <section className="section-padding">
    <div className="container mx-auto max-w-3xl text-center">
      <div
        className="glass-card p-12 rounded-2xl"
        style={{
          background:
            "linear-gradient(135deg, hsl(214 28% 18% / 0.9), hsl(158 34% 25% / 0.2))",
        }}
      >
        <div className="text-5xl mb-4">🐳</div>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Siap Mulai Perjalanan <span className="glow-text">Docker</span>-mu?
        </h2>
        <p className="text-muted-foreground mb-8 text-lg max-w-xl mx-auto">
          Bergabung dengan 5.000+ developer yang sudah berhasil menguasai container.
          Mulai gratis sekarang, tidak perlu kartu kredit.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="/#pricing" className="glow-button text-lg px-8 py-4">
            Mulai Belajar Gratis
          </a>
          <a
            href="/materi"
            className="px-8 py-4 rounded-lg border font-semibold transition-all duration-300 hover:bg-primary/10"
            style={{ borderColor: "hsl(var(--primary) / 0.4)" }}
          >
            Lihat Materi Dulu
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default CTASection;
