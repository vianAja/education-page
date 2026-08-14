import { useState } from "react";
import { Link } from "react-router-dom";
import { Container } from "lucide-react";

const Footer = () => {
  const [email, setEmail] = useState("");

  return (
    <footer className="border-t py-12 px-4" style={{ borderColor: "hsl(var(--border) / 0.5)" }}>
      <div className="container mx-auto grid md:grid-cols-4 gap-8">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <Container size={20} className="text-primary" />
            <span className="text-lg font-bold glow-text">DockerLearn</span>
          </div>
          <p className="text-sm text-muted-foreground mt-2">
            Platform belajar Docker &amp; containerization untuk developer Indonesia.
          </p>
        </div>

        <div>
          <h4 className="font-semibold mb-3 text-sm">Navigasi</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><a href="/#about" className="hover:text-primary transition-colors">Tentang</a></li>
            <li><a href="/#courses" className="hover:text-primary transition-colors">Program</a></li>
            <li><a href="/#pricing" className="hover:text-primary transition-colors">Harga</a></li>
            <li><a href="/#curriculum" className="hover:text-primary transition-colors">Kurikulum</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-3 text-sm">Sumber Belajar</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/materi" className="hover:text-primary transition-colors">Materi Docker</Link></li>
            <li><a href="/#blog" className="hover:text-primary transition-colors">Blog</a></li>
            <li><a href="/#faq" className="hover:text-primary transition-colors">FAQ</a></li>
            <li>
              <a href="https://docs.docker.com" target="_blank" rel="noopener noreferrer"
                className="hover:text-primary transition-colors">
                Docs Resmi Docker ↗
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-3 text-sm">Newsletter</h4>
          <p className="text-xs text-muted-foreground mb-3">
            Tips Docker &amp; DevOps langsung ke inbox kamu, gratis.
          </p>
          <div className="flex gap-2">
            <input
              type="email"
              placeholder="email@kamu.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-3 py-2 rounded-lg bg-secondary border border-border text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
            />
            <button className="glow-button px-4 py-2 text-sm">
              Daftar
            </button>
          </div>
        </div>
      </div>

      <div className="container mx-auto mt-8 pt-8 border-t text-center text-sm text-muted-foreground"
        style={{ borderColor: "hsl(var(--border) / 0.5)" }}>
        © 2025 DockerLearn. Dibuat dengan ❤️ untuk developer Indonesia.
      </div>
    </footer>
  );
};

export default Footer;
