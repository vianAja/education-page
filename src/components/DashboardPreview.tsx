import { Play, BookOpen, BarChart3, CheckSquare, Container, Settings, Users, Home } from "lucide-react";

const sidebarItems = [
  { icon: Home, label: "Dashboard" },
  { icon: BookOpen, label: "Modul Saya" },
  { icon: Play, label: "Video Lab" },
  { icon: BarChart3, label: "Progress" },
  { icon: Users, label: "Komunitas" },
  { icon: Settings, label: "Pengaturan" },
];

const completedModules = [
  "Modul 1 – Pengantar Containerization",
  "Modul 2 – Instalasi & Setup Docker",
  "Modul 3 – Image & Container Dasar",
];

const DashboardPreview = () => (
  <section className="section-padding">
    <div className="container mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
        Dashboard <span className="glow-text">Belajar</span>
      </h2>
      <p className="text-center text-muted-foreground mb-12 max-w-xl mx-auto">
        Pantau progress belajar kamu, akses video lab, dan ikuti komunitas — semua di satu tempat.
      </p>
      <div className="glass-card overflow-hidden rounded-2xl max-w-5xl mx-auto">
        <div className="flex min-h-[400px]">
          {/* Sidebar */}
          <div className="hidden md:flex flex-col w-56 border-r p-4 gap-1"
            style={{ borderColor: "hsl(var(--border) / 0.5)" }}>
            <div className="flex items-center gap-2 mb-4 px-3">
              <Container size={16} className="text-primary" />
              <span className="text-sm font-bold glow-text">DockerLearn</span>
            </div>
            {sidebarItems.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-colors ${
                  label === "Video Lab"
                    ? "bg-primary/10 text-primary"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <Icon size={16} />
                {label}
              </div>
            ))}
          </div>

          {/* Main content */}
          <div className="flex-1 p-6">
            <h3 className="font-semibold mb-4">Modul 4 – Dockerfile</h3>
            {/* Video placeholder */}
            <div className="glass-card aspect-video rounded-xl flex items-center justify-center mb-6"
              style={{ background: "hsl(var(--primary) / 0.04)" }}>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-2">
                  <Play className="text-primary ml-1" size={28} />
                </div>
                <p className="text-xs text-muted-foreground">Lab: Menulis Dockerfile Pertama</p>
              </div>
            </div>

            {/* Progress */}
            <div className="mb-6">
              <div className="flex justify-between text-sm mb-2">
                <span className="text-muted-foreground">Progress Keseluruhan</span>
                <span className="font-semibold glow-text">43%</span>
              </div>
              <div className="h-2 rounded-full bg-secondary">
                <div className="h-full rounded-full bg-primary w-[43%] transition-all"
                  style={{ boxShadow: "0 0 8px hsl(var(--primary) / 0.4)" }} />
              </div>
            </div>

            {/* Completed */}
            <div>
              <h4 className="text-sm font-semibold mb-3">Modul Selesai</h4>
              <div className="space-y-2">
                {completedModules.map((m) => (
                  <div key={m} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckSquare className="text-primary shrink-0" size={16} />
                    {m}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default DashboardPreview;
