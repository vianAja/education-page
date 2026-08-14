import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Copy, Check, ExternalLink, PlayCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import dockerArch from "@/assets/docker-architecture.svg";
import containerVsVm from "@/assets/container-vs-vm.svg";

type OsKey = "linux" | "windows" | "mac";

const installSteps: Record<OsKey, { label: string; steps: string[] }> = {
  linux: {
    label: "Linux (Ubuntu/Debian)",
    steps: [
      "Update daftar paket: sudo apt update",
      "Install dependency yang dibutuhkan: sudo apt install ca-certificates curl gnupg",
      "Tambahkan GPG key resmi Docker ke sistem",
      "Tambahkan repository Docker ke sources.list.d",
      "Install Docker Engine: sudo apt install docker-ce docker-ce-cli containerd.io",
      "Cek instalasi berhasil: sudo docker run hello-world",
    ],
  },
  windows: {
    label: "Windows",
    steps: [
      "Pastikan WSL 2 sudah aktif (wsl --install lewat PowerShell sebagai admin)",
      "Download Docker Desktop dari situs resmi docker.com",
      "Jalankan installer, centang opsi 'Use WSL 2 instead of Hyper-V'",
      "Restart komputer setelah instalasi selesai",
      "Buka Docker Desktop, tunggu status engine jadi 'Running'",
      "Tes lewat terminal: docker run hello-world",
    ],
  },
  mac: {
    label: "macOS",
    steps: [
      "Download Docker Desktop untuk Apple Silicon atau Intel sesuai chip Mac kamu",
      "Buka file .dmg lalu drag ikon Docker ke folder Applications",
      "Jalankan Docker dari Launchpad, izinkan permission yang diminta",
      "Tunggu ikon paus di menu bar sampai statusnya siap",
      "Buka Terminal, cek versi: docker --version",
      "Tes container pertama: docker run hello-world",
    ],
  },
};

const commandRef: { cmd: string; desc: string }[] = [
  { cmd: "docker --version", desc: "Menampilkan versi Docker yang terpasang" },
  { cmd: "docker pull <image>", desc: "Mengunduh image dari registry (default: Docker Hub)" },
  { cmd: "docker images", desc: "Menampilkan daftar image yang ada di komputer" },
  { cmd: "docker run <image>", desc: "Membuat dan menjalankan container baru dari sebuah image" },
  { cmd: "docker ps", desc: "Menampilkan container yang sedang berjalan" },
  { cmd: "docker ps -a", desc: "Menampilkan semua container, termasuk yang sudah berhenti" },
  { cmd: "docker stop <id>", desc: "Menghentikan container yang sedang berjalan" },
  { cmd: "docker rm <id>", desc: "Menghapus container (harus dihentikan dulu)" },
  { cmd: "docker rmi <image>", desc: "Menghapus image dari komputer" },
  { cmd: "docker exec -it <id> bash", desc: "Masuk ke dalam shell container yang aktif" },
  { cmd: "docker logs <id>", desc: "Melihat output/log dari sebuah container" },
  { cmd: "docker build -t nama .", desc: "Membangun image baru dari Dockerfile di folder saat ini" },
];

type QuizQuestion = {
  question: string;
  options: string[];
  correct: number;
};

const quizQuestions: QuizQuestion[] = [
  {
    question: "Pada dasarnya, Docker itu alat untuk apa?",
    options: [
      "Mengedit kode program",
      "Membungkus aplikasi beserta dependency-nya ke dalam container",
      "Antivirus untuk server",
      "Mengganti fungsi sistem operasi sepenuhnya",
    ],
    correct: 1,
  },
  {
    question: "Perintah apa yang dipakai untuk melihat container yang sedang berjalan?",
    options: ["docker list", "docker show", "docker ps", "docker running"],
    correct: 2,
  },
  {
    question: "File berisi instruksi langkah demi langkah untuk membangun sebuah image disebut...",
    options: ["Composefile", "Dockerfile", "Buildfile", "Imagefile"],
    correct: 1,
  },
  {
    question: "Apa beda utama antara image dan container?",
    options: [
      "Tidak ada bedanya, istilah itu sama saja",
      "Image lebih besar ukurannya daripada container",
      "Container adalah instance yang sedang berjalan dari sebuah image",
      "Image hanya bisa dipakai satu kali",
    ],
    correct: 2,
  },
  {
    question: "Registry publik resmi milik Docker untuk menyimpan dan berbagi image bernama...",
    options: ["GitHub Registry", "Docker Hub", "Docker Cloud", "Container Store"],
    correct: 1,
  },
];

const Materi = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeOs, setActiveOs] = useState<OsKey>("linux");
  const [copiedCmd, setCopiedCmd] = useState<string | null>(null);

  const [name, setName] = useState("");
  const [level, setLevel] = useState("pemula");
  const [note, setNote] = useState("");
  const [answers, setAnswers] = useState<number[]>(Array(quizQuestions.length).fill(-1));
  const [result, setResult] = useState<{ score: number; total: number } | null>(null);

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const scrolled = h.scrollTop;
      const height = h.scrollHeight - h.clientHeight;
      setScrollProgress(height > 0 ? (scrolled / height) * 100 : 0);
    };
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleCopy = async (cmd: string) => {
    try {
      await navigator.clipboard.writeText(cmd);
      setCopiedCmd(cmd);
      setTimeout(() => setCopiedCmd((c) => (c === cmd ? null : c)), 1500);
    } catch {
      // clipboard permission ditolak browser, cukup diamkan saja
    }
  };

  const selectAnswer = (qIndex: number, optIndex: number) => {
    setAnswers((prev) => {
      const next = [...prev];
      next[qIndex] = optIndex;
      return next;
    });
  };

  const handleQuizSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    let score = 0;
    quizQuestions.forEach((q, i) => {
      if (answers[i] === q.correct) score += 1;
    });
    setResult({ score, total: quizQuestions.length });
  };

  const allAnswered = answers.every((a) => a !== -1);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Progress bar baca artikel */}
      <div
        className="fixed top-0 left-0 h-[3px] bg-primary z-[60]"
        style={{ width: `${scrollProgress}%`, boxShadow: "0 0 10px hsl(var(--glow-cyan) / 0.6)" }}
      />

      <Navbar />

      <article className="pt-28 pb-24 px-4">
        <div className="container mx-auto max-w-3xl">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-6"
          >
            <ArrowLeft size={16} />
          </Link>

          <span className="inline-block text-xs font-semibold tracking-wide uppercase text-primary bg-primary/10 border border-primary/20 rounded-full px-3 py-1 mb-4">
            Materi Tambahan · Modul 7
          </span>

          <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
            Mengenal <span className="glow-text">Docker</span> untuk Pemula
          </h1>

          <p className="text-lg text-muted-foreground mb-2">
            Materi ini disusun sebagai pengantar dasar container dan Docker, ditujukan untuk peserta yang
            baru pertama kali menyentuh topik ini. Tidak ada prasyarat khusus selain terbiasa membuka
            terminal/command line.
          </p>
          <p className="text-sm text-muted-foreground/80 mb-10">
            Estimasi waktu baca: 12–15 menit · Level: Dasar
          </p>

          {/* Daftar isi */}
          <nav aria-label="Daftar isi" className="glass-card p-6 mb-12">
            <h2 className="text-lg font-bold mb-3">Daftar Isi</h2>
            <ol className="space-y-2 text-sm list-decimal list-inside marker:text-primary marker:font-semibold">
              <li><a className="text-muted-foreground hover:text-primary transition-colors" href="#apa-itu-docker">Apa itu Docker, sebenarnya?</a></li>
              <li><a className="text-muted-foreground hover:text-primary transition-colors" href="#container-vs-vm">Container vs Virtual Machine</a></li>
              <li><a className="text-muted-foreground hover:text-primary transition-colors" href="#arsitektur">Bagaimana Docker Bekerja</a></li>
              <li><a className="text-muted-foreground hover:text-primary transition-colors" href="#instalasi">Instalasi Docker</a></li>
              <li><a className="text-muted-foreground hover:text-primary transition-colors" href="#perintah-dasar">Perintah Dasar yang Wajib Dihafal</a></li>
              <li><a className="text-muted-foreground hover:text-primary transition-colors" href="#kuis">Cek Pemahaman</a></li>
              <li><a className="text-muted-foreground hover:text-primary transition-colors" href="#referensi">Referensi Lanjutan</a></li>
            </ol>
          </nav>

          {/* 1. Apa itu docker */}
          <section id="apa-itu-docker" className="mb-14 scroll-mt-24">
            <h2 className="text-2xl font-bold mb-4">1. Apa itu Docker, sebenarnya?</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Coba bayangkan kamu baru selesai bikin aplikasi di laptop sendiri. Semua jalan lancar. Begitu
              di-deploy ke server teman atau ke server produksi, tiba-tiba error — versi Node beda, library
              yang di-install beda, konfigurasi environment juga beda. Situasi ini punya nama yang cukup
              terkenal di kalangan developer: <em>"it works on my machine"</em>.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              <strong>Docker</strong> hadir untuk menghilangkan masalah itu. Docker adalah platform yang
              membungkus aplikasi beserta seluruh hal yang dibutuhkannya — library, dependency, konfigurasi,
              sampai runtime — ke dalam satu paket yang disebut <strong>container</strong>. Karena semuanya
              sudah dibungkus jadi satu, container yang sama bisa dijalankan di laptop kamu, di server
              temanmu, atau di cloud, dan hasilnya akan selalu konsisten.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Dua istilah yang perlu dibedakan sejak awal:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-4 marker:text-primary">
              <li><strong>Image</strong> — cetakan atau blueprint. Sifatnya <em>read-only</em>, berisi aplikasi + semua yang dibutuhkannya.</li>
              <li><strong>Container</strong> — hasil "cetakan" itu yang benar-benar dijalankan. Satu image bisa dijalankan berkali-kali menjadi banyak container.</li>
            </ul>
            <blockquote className="border-l-4 border-primary/50 pl-4 italic text-muted-foreground/90 py-1">
              Analogi sederhananya: image itu seperti resep kue, container itu kue yang sudah jadi.
              Dari satu resep, kamu bisa bikin kue yang sama berkali-kali.
            </blockquote>
          </section>

          {/* 2. container vs vm */}
          <section id="container-vs-vm" className="mb-14 scroll-mt-24">
            <h2 className="text-2xl font-bold mb-4">2. Container vs Virtual Machine</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Sebelum container populer, cara umum mengisolasi aplikasi adalah lewat{" "}
              <strong>virtual machine (VM)</strong>. Bedanya cukup mendasar: VM menjalankan sistem operasi
              lengkap di atas hypervisor, sedangkan container berbagi kernel dari host OS-nya. Efeknya
              terasa langsung di kecepatan boot dan ukuran.
            </p>

            <div className="glass-card p-3 mb-6 overflow-x-auto">
              <img
                src={containerVsVm}
                alt="Diagram perbandingan susunan arsitektur virtual machine dan container Docker"
                className="w-full rounded-lg"
              />
            </div>

            <div className="overflow-x-auto glass-card p-1 mb-4">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="text-left border-b border-border">
                    <th className="p-3 font-semibold">Aspek</th>
                    <th className="p-3 font-semibold">Virtual Machine</th>
                    <th className="p-3 font-semibold text-primary">Container</th>
                  </tr>
                </thead>
                <tbody className="text-muted-foreground">
                  <tr className="border-b border-border/60">
                    <td className="p-3 font-medium text-foreground">Ukuran</td>
                    <td className="p-3">Hitungan GB (bawa OS lengkap)</td>
                    <td className="p-3">Hitungan MB</td>
                  </tr>
                  <tr className="border-b border-border/60">
                    <td className="p-3 font-medium text-foreground">Waktu start</td>
                    <td className="p-3">Menit</td>
                    <td className="p-3">Detik, kadang milidetik</td>
                  </tr>
                  <tr className="border-b border-border/60">
                    <td className="p-3 font-medium text-foreground">Isolasi</td>
                    <td className="p-3">Penuh, tiap VM punya kernel sendiri</td>
                    <td className="p-3">Berbagi kernel host, isolasi di level proses</td>
                  </tr>
                  <tr className="border-b border-border/60">
                    <td className="p-3 font-medium text-foreground">Kepadatan</td>
                    <td className="p-3">Terbatas, resource overhead tinggi</td>
                    <td className="p-3">Bisa jalankan puluhan container di satu mesin</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-medium text-foreground">Cocok untuk</td>
                    <td className="p-3">Isolasi penuh antar OS berbeda</td>
                    <td className="p-3">Microservices, deployment cepat &amp; berulang</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-sm text-muted-foreground/80">
              Catatan: keduanya bukan saling menggantikan sepenuhnya. Di banyak perusahaan, container
              justru dijalankan <em>di dalam</em> VM untuk lapisan isolasi tambahan.
            </p>
          </section>

          {/* 3. arsitektur */}
          <section id="arsitektur" className="mb-14 scroll-mt-24">
            <h2 className="text-2xl font-bold mb-4">3. Bagaimana Docker Bekerja</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Secara garis besar, Docker punya tiga komponen utama yang saling terhubung lewat REST API:
              <strong> Docker Client</strong> (yang kamu ketik di terminal), <strong>Docker Daemon</strong>{" "}
              (proses background yang benar-benar mengurus image dan container), dan <strong>Registry</strong>{" "}
              (tempat image disimpan dan dibagikan, contoh paling umum: Docker Hub).
            </p>
            <div className="glass-card p-3 mb-6 overflow-x-auto">
              <img
                src={dockerArch}
                alt="Diagram alur kerja Docker Client, Docker Daemon, dan Registry"
                className="w-full rounded-lg"
              />
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Waktu kamu mengetik <code className="px-1.5 py-0.5 rounded bg-secondary text-primary text-sm">docker run nginx</code>,
              alurnya kira-kira begini: client mengirim perintah ke daemon, daemon cek apakah image{" "}
              <code className="px-1.5 py-0.5 rounded bg-secondary text-primary text-sm">nginx</code> sudah
              ada di lokal. Kalau belum, daemon akan menarik (pull) image tersebut dari registry, baru
              kemudian membuat dan menjalankan container-nya.
            </p>
          </section>

          {/* 4. instalasi */}
          <section id="instalasi" className="mb-14 scroll-mt-24">
            <h2 className="text-2xl font-bold mb-4">4. Instalasi Docker</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Langkah instalasi sedikit berbeda tergantung sistem operasi yang kamu pakai. Pilih tab sesuai
              OS kamu di bawah ini.
            </p>

            <div className="flex gap-2 mb-6 flex-wrap">
              {(Object.keys(installSteps) as OsKey[]).map((key) => (
                <button
                  key={key}
                  onClick={() => setActiveOs(key)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all border ${
                    activeOs === key
                      ? "bg-primary text-primary-foreground border-primary"
                      : "bg-secondary/50 text-muted-foreground border-border hover:text-foreground"
                  }`}
                >
                  {installSteps[key].label}
                </button>
              ))}
            </div>

            <div className="glass-card p-6">
              <ol className="space-y-3 list-decimal list-inside text-muted-foreground marker:text-primary marker:font-semibold">
                {installSteps[activeOs].steps.map((step, i) => (
                  <li key={i} className="leading-relaxed">{step}</li>
                ))}
              </ol>
            </div>
            <p className="text-sm text-muted-foreground/80 mt-4">
              Kalau instalasi berhasil, perintah <code className="px-1.5 py-0.5 rounded bg-secondary text-primary text-sm">docker run hello-world</code>{" "}
              akan menampilkan pesan sambutan dari Docker. Itu tandanya Docker Engine sudah aktif dan bisa menarik image dari internet.
            </p>
          </section>

          {/* 5. perintah dasar */}
          <section id="perintah-dasar" className="mb-14 scroll-mt-24">
            <h2 className="text-2xl font-bold mb-4">5. Perintah Dasar yang Wajib Dihafal</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Tidak perlu menghafal semua perintah Docker di awal. Dua belas perintah di bawah ini sudah
              cukup untuk kebutuhan sehari-hari. Klik ikon salin untuk menyalin perintahnya langsung ke
              clipboard.
            </p>
            <div className="overflow-x-auto glass-card p-1">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="text-left border-b border-border">
                    <th className="p-3 font-semibold">Perintah</th>
                    <th className="p-3 font-semibold">Fungsi</th>
                    <th className="p-3 font-semibold w-12"></th>
                  </tr>
                </thead>
                <tbody>
                  {commandRef.map((row) => (
                    <tr key={row.cmd} className="border-b border-border/60 last:border-0">
                      <td className="p-3">
                        <code className="text-primary">{row.cmd}</code>
                      </td>
                      <td className="p-3 text-muted-foreground">{row.desc}</td>
                      <td className="p-3">
                        <button
                          onClick={() => handleCopy(row.cmd)}
                          aria-label={`Salin perintah ${row.cmd}`}
                          className="p-1.5 rounded-md text-muted-foreground hover:text-primary hover:bg-secondary transition-colors"
                        >
                          {copiedCmd === row.cmd ? <Check size={15} className="text-primary" /> : <Copy size={15} />}
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>


          {/* 6. kuis */}
          <section id="kuis" className="mb-14 scroll-mt-24">
            <h2 className="text-2xl font-bold mb-4">6. Cek Pemahaman</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Lima pertanyaan singkat, tidak dinilai secara resmi — ini cuma buat ngecek apakah konsep
              dasarnya sudah nyantol atau belum sebelum lanjut ke materi berikutnya.
            </p>

            <form onSubmit={handleQuizSubmit} className="glass-card p-6 space-y-8">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="nama" className="block text-sm font-medium mb-1.5">
                    Nama
                  </label>
                  <input
                    id="nama"
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Nama kamu"
                    className="w-full px-4 py-2.5 rounded-lg bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                  />
                </div>
                <div>
                  <label htmlFor="level" className="block text-sm font-medium mb-1.5">
                    Pengalaman dengan Docker
                  </label>
                  <select
                    id="level"
                    value={level}
                    onChange={(e) => setLevel(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-lg bg-secondary border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                  >
                    <option value="pemula">Belum pernah pakai sama sekali</option>
                    <option value="pernah-coba">Pernah coba-coba sedikit</option>
                    <option value="rutin">Sudah lumayan sering pakai</option>
                  </select>
                </div>
              </div>

              <div className="space-y-6">
                {quizQuestions.map((q, qi) => (
                  <fieldset key={qi} className="border-t border-border/60 pt-5 first:border-0 first:pt-0">
                    <legend className="font-medium mb-3">
                      {qi + 1}. {q.question}
                    </legend>
                    <div className="space-y-2">
                      {q.options.map((opt, oi) => (
                        <label
                          key={oi}
                          className={`flex items-center gap-3 px-4 py-2.5 rounded-lg border cursor-pointer transition-colors text-sm ${
                            answers[qi] === oi
                              ? "border-primary bg-primary/10 text-foreground"
                              : "border-border bg-secondary/40 text-muted-foreground hover:border-primary/40"
                          }`}
                        >
                          <input
                            type="radio"
                            name={`quiz-${qi}`}
                            value={oi}
                            checked={answers[qi] === oi}
                            onChange={() => selectAnswer(qi, oi)}
                            className="accent-primary"
                          />
                          {opt}
                        </label>
                      ))}
                    </div>
                  </fieldset>
                ))}
              </div>

              <div>
                <label htmlFor="catatan" className="block text-sm font-medium mb-1.5">
                  Ada pertanyaan atau bagian yang masih membingungkan? (opsional)
                </label>
                <textarea
                  id="catatan"
                  rows={3}
                  value={note}
                  onChange={(e) => setNote(e.target.value)}
                  placeholder="Tulis di sini kalau ada..."
                  className="w-full px-4 py-2.5 rounded-lg bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={!allAnswered}
                className="glow-button px-6 py-3 disabled:opacity-40 disabled:cursor-not-allowed disabled:shadow-none"
              >
                Cek Jawaban
              </button>
              {!allAnswered && (
                <p className="text-xs text-muted-foreground/70">Jawab semua pertanyaan dulu ya sebelum submit.</p>
              )}

              {result && (
                <div className="mt-2 glass-card border-primary/30 p-4">
                  <p className="font-semibold">
                    {name ? `${name}, ` : ""}kamu benar {result.score} dari {result.total} soal.
                  </p>
                  <p className="text-sm text-muted-foreground mt-1">
                    {result.score === result.total
                      ? "Mantap, konsep dasarnya sudah kepegang. Lanjut ke materi Dockerfile & docker-compose berikutnya."
                      : result.score >= result.total / 2
                      ? "Lumayan, tinggal diulang sedikit bagian yang masih meleset."
                      : "Nggak apa-apa, coba baca ulang bagian 1 dan 2 di atas, biasanya di situ letak kebingungannya."}
                  </p>
                </div>
              )}
            </form>
          </section>

          {/* 7. referensi */}
          <section id="referensi" className="scroll-mt-24">
            <h2 className="text-2xl font-bold mb-4">7. Referensi Lanjutan</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Materi di atas sengaja dibuat ringkas. Untuk pendalaman, beberapa sumber berikut cukup
              relevan dan gratis diakses:
            </p>
            <ul className="space-y-2.5">
              <li>
                <a
                  href="https://docs.docker.com/get-started/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-primary hover:underline"
                >
                  Dokumentasi resmi Docker — Get Started <ExternalLink size={13} />
                </a>
              </li>
              <li>
                <a
                  href="https://hub.docker.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-primary hover:underline"
                >
                  Docker Hub, tempat mencari image resmi <ExternalLink size={13} />
                </a>
              </li>
              <li>
                <a
                  href="https://docs.docker.com/compose/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-primary hover:underline"
                >
                  Docker Compose — menjalankan banyak container sekaligus <ExternalLink size={13} />
                </a>
              </li>
            </ul>

            <div className="mt-10 pt-6 border-t border-border/60">
              <Link to="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                <ArrowLeft size={16} />
              </Link>
            </div>
          </section>
        </div>
      </article>

      <FooterSection />
    </div>
  );
};

export default Materi;
