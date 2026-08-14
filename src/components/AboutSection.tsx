import { CheckCircle, Award, BookOpen, Users } from "lucide-react";

const bullets = [
  { icon: Award, text: "6+ tahun pengalaman di bidang DevOps & Cloud" },
  { icon: BookOpen, text: "Telah melatih 5.000+ developer dengan Docker" },
  { icon: CheckCircle, text: "Docker Certified Associate (DCA)" },
  { icon: CheckCircle, text: "Berpengalaman di Kubernetes & Container Orchestration" },
  { icon: Users, text: "Mentor aktif di komunitas DevOps Indonesia" },
];

const AboutSection = () => (
  <section id="about" className="section-padding gradient-bg">
    <div className="container mx-auto">
      <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
        {/* Card instructor placeholder */}
        <div className="glass-card p-8 rounded-2xl text-center">
          <div
            className="w-32 h-32 rounded-full mx-auto mb-6 flex items-center justify-center text-5xl font-extrabold"
            style={{ background: "hsl(var(--primary) / 0.15)", color: "hsl(var(--primary))" }}
          >
            🐳
          </div>
          <p className="font-bold text-xl mb-1">Budi Santoso</p>
          <p className="text-sm" style={{ color: "hsl(var(--taupe))" }}>
            Docker Certified Associate · DevOps Engineer
          </p>
          <div className="mt-4 flex justify-center gap-3 flex-wrap">
            <span className="badge-sage">DCA</span>
            <span className="badge-cream">CKA</span>
            <span className="badge-taupe">AWS</span>
          </div>
        </div>

        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Tentang <span className="glow-text">Instruktur</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Seorang engineer dengan pengalaman luas di containerization, CI/CD pipeline,
            dan cloud infrastructure. Bergabunglah dan pelajari Docker dari orang
            yang sudah menerapkannya di production setiap hari.
          </p>
          <ul className="space-y-4">
            {bullets.map(({ icon: Icon, text }) => (
              <li key={text} className="flex items-center gap-3 text-muted-foreground">
                <Icon className="text-primary shrink-0" size={20} />
                {text}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection;
