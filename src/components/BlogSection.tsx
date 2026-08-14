import { ArrowRight } from "lucide-react";

const articles = [
  {
    tag: "Pemula",
    tagClass: "badge-sage",
    title: "Kenapa Developer Wajib Kenal Docker di 2025",
    desc: "Container sudah jadi standar industri. Pelajari mengapa Docker menjadi skill wajib untuk developer modern.",
  },
  {
    tag: "Tutorial",
    tagClass: "badge-cream",
    title: "Membuat Dockerfile untuk Aplikasi Node.js",
    desc: "Panduan langkah demi langkah membuat Dockerfile yang optimal untuk aplikasi Express.js kamu.",
  },
  {
    tag: "DevOps",
    tagClass: "badge-taupe",
    title: "Docker Compose vs Kubernetes: Pilih Mana?",
    desc: "Perbandingan jujur antara docker-compose dan Kubernetes untuk tim kecil hingga enterprise.",
  },
];

const BlogSection = () => (
  <section id="blog" className="section-padding">
    <div className="container mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
        Artikel <span className="glow-text">Terbaru</span>
      </h2>
      <p className="text-center text-muted-foreground mb-12 max-w-xl mx-auto">
        Insight, tutorial, dan tips seputar Docker & DevOps dari instruktur.
      </p>
      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {articles.map((a) => (
          <div key={a.title} className="glass-card-hover p-6 flex flex-col">
            <span className={`${a.tagClass} mb-4`}>{a.tag}</span>
            <h3 className="text-lg font-bold mb-2 leading-snug">{a.title}</h3>
            <p className="text-sm text-muted-foreground mb-4 flex-1">{a.desc}</p>
            <a href="#" className="text-primary text-sm font-semibold flex items-center gap-1 hover:gap-2 transition-all">
              Baca Selengkapnya <ArrowRight size={14} />
            </a>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default BlogSection;
