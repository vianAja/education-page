import { Cloud, Cpu, ShieldCheck, Terminal, Award } from "lucide-react";
import fotoProfile from "@/assets/foto-profile.webp";

const skillNotes = [
  {
    icon: Cloud,
    title: "Cloud Computing",
    desc: "Merancang dan mengelola infrastruktur berbasis cloud secara scalable dan handal.",
  },
  {
    icon: Terminal,
    title: "DevOps",
    desc: "Otomatisasi workflow, CI/CD pipeline, containerization (Docker & Kubernetes).",
  },
  {
    icon: ShieldCheck,
    title: "Cybersecurity Enthusiast",
    desc: "Keamanan infrastruktur, hardening sistem, dan praktik terbaik cyber defence.",
  },
  {
    icon: Cpu,
    title: "AI, Machine Learning, Deep Learning",
    desc: "Penerapan model AI, machine learning, dan arsitektur deep learning untuk solusi modern.",
  },
];

const AboutSection = () => (
  <section id="about" className="section-padding gradient-bg">
    <div className="container mx-auto">
      <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
        {/* Card instructor */}
        <div className="glass-card p-8 rounded-2xl text-center">
          <div className="relative w-36 h-36 mx-auto mb-6">
            <img
              src={fotoProfile}
              alt="Foto Instruktur"
              className="w-full h-full rounded-full object-cover border-4 border-primary/40 shadow-xl"
            />
            <div className="absolute bottom-1 right-1 bg-primary text-primary-foreground p-1.5 rounded-full shadow-md">
              <Award size={18} />
            </div>
          </div>

          <h3 className="font-bold text-2xl mb-1">Instruktur Utama</h3>
          <p className="text-sm font-medium mb-4 text-muted-foreground">
            Cloud, DevOps &amp; AI Specialist
          </p>

          <div className="mt-4 flex justify-center gap-2 flex-wrap">
            <span className="badge-peach flex items-center gap-1.5 px-3 py-1 font-semibold">
              <Award size={14} /> AWS CCP
            </span>
          </div>
        </div>

        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Tentang <span className="glow-text">Instruktur</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Seorang praktisi dan mentor dengan keahlian lintas disiplin di bidang teknologi modern. Siap membimbing kamu menguasai Docker dari konsep dasar hingga implementasi di dunia industri.
          </p>

          <div className="space-y-4">
            <h4 className="font-semibold text-sm uppercase tracking-wider text-muted-foreground">
              Skills &amp; Keahlian
            </h4>
            <ul className="space-y-3">
              {skillNotes.map(({ icon: Icon, title, desc }) => (
                <li key={title} className="flex items-start gap-3 glass-card p-3.5 rounded-xl border border-primary/10 hover:border-primary/30 transition-all">
                  <div className="p-2 rounded-lg bg-primary/15 text-primary shrink-0 mt-0.5">
                    <Icon size={18} />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-sm">{title}</p>
                    <p className="text-xs text-muted-foreground mt-0.5">{desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection;
