import { Check } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "Gratis",
    note: "Selamanya",
    features: [
      "Akses Modul 1 & 2",
      "Video pembelajaran dasar",
      "Komunitas Discord",
      "Materi PDF ringkasan",
    ],
    popular: false,
  },
  {
    name: "Pro",
    price: "Rp 299.000",
    note: "Bayar sekali, akses selamanya",
    features: [
      "Semua 7 modul penuh",
      "Lab praktik interaktif",
      "Sertifikat penyelesaian",
      "Video HD tanpa batas",
      "Akses materi baru",
      "Priority Q&A support",
    ],
    popular: true,
  },
  {
    name: "Mentoring",
    price: "Rp 799.000",
    note: "4 sesi live 1-on-1",
    features: [
      "Semua fitur Pro",
      "4× sesi mentoring 60 menit",
      "Code review Dockerfile kamu",
      "Panduan karir DevOps",
      "Resume review",
    ],
    popular: false,
  },
];

const PricingSection = () => (
  <section id="pricing" className="section-padding gradient-bg">
    <div className="container mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
        Pilih <span className="glow-text">Paket Belajar</span>
      </h2>
      <p className="text-center text-muted-foreground mb-12 max-w-xl mx-auto">
        Investasi terbaik untuk karir DevOps kamu. Mulai gratis, upgrade kapanpun.
      </p>
      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {plans.map((p) => (
          <div
            key={p.name}
            className={`glass-card-hover p-8 flex flex-col relative ${
              p.popular ? "border-primary/60 ring-1 ring-primary/30" : ""
            }`}
          >
            {p.popular && (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-bold px-4 py-1 rounded-full">
                Paling Populer
              </span>
            )}
            <h3 className="text-xl font-bold mb-1">{p.name}</h3>
            <p className="text-3xl font-extrabold glow-text mb-1">{p.price}</p>
            <p className="text-xs text-muted-foreground mb-6">{p.note}</p>
            <ul className="space-y-3 mb-8 flex-1">
              {p.features.map((f) => (
                <li key={f} className="flex items-start gap-2 text-muted-foreground text-sm">
                  <Check className="text-primary shrink-0 mt-0.5" size={16} />
                  {f}
                </li>
              ))}
            </ul>
            <a
              href="#"
              className={`text-center rounded-lg py-3 font-semibold transition-all duration-300 ${
                p.popular
                  ? "glow-button"
                  : "border font-medium hover:bg-primary/10"
              }`}
              style={!p.popular ? { borderColor: "hsl(var(--primary) / 0.35)" } : {}}
            >
              {p.price === "Gratis" ? "Mulai Gratis" : "Daftar Sekarang"}
            </a>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default PricingSection;
