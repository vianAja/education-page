import heroBg from "@/assets/hero-bg.jpg";

interface HeroSectionProps {
  onOpenModal?: () => void;
}

const HeroSection = ({ onOpenModal }: HeroSectionProps) => (
  <section className="relative min-h-screen flex items-center justify-center overflow-hidden section-padding pt-32">
    {/* Background */}
    <div className="absolute inset-0">
      <img src={heroBg} alt="" className="w-full h-full object-cover opacity-20" />
      <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/85 to-background" />
    </div>

    {/* Glow orbs */}
    <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full blur-[150px] animate-pulse-glow"
      style={{ background: "hsl(158 34% 57% / 0.08)" }} />
    <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full blur-[120px] animate-pulse-glow"
      style={{ background: "hsl(214 28% 28% / 0.15)", animationDelay: "1.5s" }} />

    <div className="relative z-10 text-center max-w-4xl mx-auto">
      {/* Badge */}
      <span className="badge-sage mb-6 inline-block">
        🐳 Modul 7 — Docker &amp; Containerization
      </span>

      <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
        Kuasai{" "}
        <span className="glow-text">Docker</span>
        {" "}dari Nol<br />
        <span className="text-3xl md:text-4xl font-bold" style={{ color: "hsl(var(--taupe))" }}>
          Hingga Siap Production 🚀
        </span>
      </h1>

      <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
        Pelajari containerization, Docker fundamentals, Dockerfile, dan docker-compose dari dasar.
        Cocok untuk developer dan DevOps pemula.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
        <a href="/materi" className="glow-button text-lg px-8 py-4">
          Mulai Belajar Docker
        </a>
        <button
          onClick={onOpenModal}
          className="px-8 py-4 rounded-lg border font-semibold transition-all duration-300 hover:bg-primary/10"
          style={{ borderColor: "hsl(var(--primary) / 0.4)", color: "hsl(var(--foreground))" }}
        >
          Dapatkan Starter Kit Gratis 🎁
        </button>
      </div>

      <div className="flex flex-wrap justify-center gap-8 text-sm text-muted-foreground">
        <span>📦 5,000+ Siswa</span>
        <span>⭐ 4.9 Rating</span>
        <span>🏆 Instructor Bersertifikat</span>
        <span>🕐 Estimasi 12 Jam</span>
      </div>
    </div>
  </section>
);

export default HeroSection;
