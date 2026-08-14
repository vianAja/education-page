import { Container, FileCode2, Layers, Network, Server, Workflow } from "lucide-react";

const skills = [
  { icon: Container, title: "Docker Fundamentals", desc: "Image, Container, Registry & Docker Hub" },
  { icon: FileCode2, title: "Dockerfile", desc: "Membuat image custom dari scratch" },
  { icon: Layers, title: "Docker Compose", desc: "Orkestrasi multi-container dengan YAML" },
  { icon: Network, title: "Docker Networking", desc: "Bridge, host, overlay network" },
  { icon: Server, title: "Volume & Storage", desc: "Persistent data dengan bind mount & volume" },
  { icon: Workflow, title: "CI/CD Integration", desc: "Docker dalam pipeline GitHub Actions" },
];

const SkillsSection = () => (
  <section className="section-padding">
    <div className="container mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
        Topik yang <span className="glow-text">Dipelajari</span>
      </h2>
      <p className="text-center text-muted-foreground mb-12 max-w-xl mx-auto">
        Kurikulum yang dirancang untuk membawa kamu dari nol hingga benar-benar paham Docker.
      </p>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {skills.map(({ icon: Icon, title, desc }) => (
          <div key={title} className="glass-card-hover p-6">
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
              style={{ background: "hsl(var(--primary) / 0.12)" }}
            >
              <Icon className="text-primary" size={24} />
            </div>
            <h3 className="text-lg font-semibold mb-2">{title}</h3>
            <p className="text-sm text-muted-foreground">{desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default SkillsSection;
