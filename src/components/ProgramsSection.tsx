const programs = [
  {
    emoji: "🐣",
    title: "Docker Starter",
    badge: "Pemula",
    badgeClass: "badge-sage",
    items: [
      "Apa itu container & kenapa Docker",
      "Install Docker di Linux, Windows, Mac",
      "Perintah dasar docker run, ps, stop, rm",
      "Menarik image dari Docker Hub",
    ],
  },
  {
    emoji: "🛠️",
    title: "Docker Builder",
    badge: "Menengah",
    badgeClass: "badge-cream",
    items: [
      "Menulis Dockerfile dari nol",
      "Multi-stage build untuk optimasi",
      "Build & push image ke registry",
      "Environment variable & ARG",
    ],
  },
  {
    emoji: "🚀",
    title: "Docker Composer",
    badge: "Lanjutan",
    badgeClass: "badge-taupe",
    items: [
      "docker-compose.yml dari dasar",
      "Networking antar container",
      "Volume & persistent storage",
      "Integrasi dengan CI/CD pipeline",
    ],
  },
];

const ProgramsSection = () => (
  <section id="courses" className="section-padding gradient-bg">
    <div className="container mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
        Program <span className="glow-text">Belajar</span>
      </h2>
      <p className="text-center text-muted-foreground mb-12 max-w-xl mx-auto">
        Tiga jalur belajar terstruktur, mulai dari yang belum pernah pakai Docker sama sekali.
      </p>
      <div className="grid md:grid-cols-3 gap-6">
        {programs.map((p) => (
          <div key={p.title} className="glass-card-hover p-8 flex flex-col">
            <div className="text-4xl mb-4">{p.emoji}</div>
            <div className="flex items-center gap-3 mb-4">
              <h3 className="text-xl font-bold">{p.title}</h3>
              <span className={p.badgeClass}>{p.badge}</span>
            </div>
            <ul className="space-y-2.5 text-muted-foreground flex-1">
              {p.items.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-1.5" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ProgramsSection;
