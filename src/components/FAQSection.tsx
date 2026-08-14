import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Apakah saya perlu pengalaman coding sebelumnya?",
    a: "Tidak perlu! Kamu hanya perlu terbiasa membuka terminal/command line. Kami mulai dari nol dan menjelaskan setiap perintah secara bertahap.",
  },
  {
    q: "Sistem operasi apa yang didukung?",
    a: "Materi mencakup instalasi dan penggunaan Docker di Linux (Ubuntu/Debian), Windows (via WSL2), dan macOS. Kamu bisa belajar di OS apapun.",
  },
  {
    q: "Apakah ada sertifikat setelah selesai?",
    a: "Ya! Peserta paket Pro dan Mentoring mendapatkan sertifikat digital yang bisa ditambahkan ke profil LinkedIn kamu.",
  },
  {
    q: "Berapa lama akses materi berlaku?",
    a: "Sekali beli, akses selamanya. Kamu juga mendapat akses ke semua update materi di masa mendatang tanpa biaya tambahan.",
  },
  {
    q: "Apakah ada sesi live atau hanya rekaman?",
    a: "Paket Starter dan Pro berbasis video rekaman yang bisa ditonton kapanpun. Paket Mentoring menambahkan 4 sesi live 1-on-1 dengan instruktur.",
  },
  {
    q: "Apakah ini cukup untuk persiapan Docker Certified Associate (DCA)?",
    a: "Kursus ini adalah fondasi yang sangat baik untuk DCA. Materi dasar hingga intermediate kami sudah mencakup sebagian besar topik ujian DCA.",
  },
];

const FAQSection = () => (
  <section id="faq" className="section-padding gradient-bg">
    <div className="container mx-auto max-w-3xl">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
        Pertanyaan yang <span className="glow-text">Sering Ditanya</span>
      </h2>
      <p className="text-center text-muted-foreground mb-12">
        Tidak ketemu jawaban yang kamu cari? Hubungi kami di Discord.
      </p>
      <Accordion type="single" collapsible className="space-y-3">
        {faqs.map((f, i) => (
          <AccordionItem key={i} value={`faq-${i}`} className="glass-card border px-6 rounded-xl">
            <AccordionTrigger className="text-left font-semibold hover:no-underline">
              {f.q}
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground leading-relaxed">
              {f.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </section>
);

export default FAQSection;
