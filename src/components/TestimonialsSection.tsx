import { Star, User } from "lucide-react";

const testimonials = [
  {
    text: "Setelah ikut kursus ini, saya berhasil setup Docker di production dalam 2 hari. Penjelasannya sangat jelas dan to the point.",
    name: "Andi Prasetyo",
    role: "Backend Developer",
  },
  {
    text: "Akhirnya paham bedanya image dan container! Materi Dockerfile-nya sangat berguna untuk project freelance saya.",
    name: "Siti Rahayu",
    role: "Full Stack Developer",
  },
  {
    text: "Docker Compose yang diajarkan di sini langsung saya terapkan ke workflow CI/CD kantor. Sangat praktis!",
    name: "Doni Firmansyah",
    role: "DevOps Engineer",
  },
];

const TestimonialsSection = () => (
  <section className="section-padding gradient-bg">
    <div className="container mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        Kata <span className="glow-text">Mereka</span>
      </h2>
      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {testimonials.map((t) => (
          <div key={t.name} className="glass-card-hover p-6 flex flex-col">
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="text-primary fill-primary" size={16} />
              ))}
            </div>
            <p className="text-muted-foreground mb-6 italic flex-1">"{t.text}"</p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/15 flex items-center justify-center">
                <User className="text-primary" size={18} />
              </div>
              <div>
                <p className="font-semibold text-sm">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
