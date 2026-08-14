import { useState } from "react";
import { X } from "lucide-react";

interface LeadCaptureModalProps {
  open: boolean;
  onClose: () => void;
}

const LeadCaptureModal = ({ open, onClose }: LeadCaptureModalProps) => {
  const [email, setEmail] = useState("");
  const [whatsapp, setWhatsapp] = useState("");

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" onClick={onClose} />
      <div className="glass-card relative z-10 p-8 rounded-2xl w-full max-w-md border-primary/30">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
        >
          <X size={20} />
        </button>
        <div className="text-4xl mb-3">🐳</div>
        <h3 className="text-2xl font-bold mb-2">
          Dapatkan <span className="glow-text">Docker Starter Kit</span> Gratis
        </h3>
        <p className="text-sm text-muted-foreground mb-6">
          Cheatsheet perintah Docker, contoh Dockerfile siap pakai, dan panduan setup awal — gratis untuk kamu.
        </p>
        <div className="space-y-4">
          <input
            type="email"
            placeholder="Alamat email kamu"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
          />
          <input
            type="text"
            placeholder="Nomor WhatsApp (opsional)"
            value={whatsapp}
            onChange={(e) => setWhatsapp(e.target.value)}
            className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
          />
          <button className="glow-button w-full py-4 text-lg">
            Download Gratis Sekarang
          </button>
        </div>
      </div>
    </div>
  );
};

export default LeadCaptureModal;
