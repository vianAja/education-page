# DockerLearn — Platform Belajar Docker untuk Developer Indonesia

Platform edukasi Docker & containerization berbasis React + Vite, dengan color palette **nature-tech** yang premium.

## 🎨 Color Palette

| Warna | Hex | HSL | Penggunaan |
|-------|-----|-----|------------|
| Sage Mint | `#C2DED1` | `158 34% 81%` | Badge, glow accent |
| Warm Cream | `#ECE5C7` | `47 43% 86%` | Text, secondary badge |
| Warm Taupe | `#CDC2AE` | `36 22% 74%` | Muted text, tertiary badge |
| Deep Navy | `#354259` | `214 28% 28%` | Background base |

## 🚀 Deploy ke Vercel

### 1. Push ke GitHub
```bash
git init
git add .
git commit -m "feat: initial docker education page"
git remote add origin https://github.com/USERNAME/education-page.git
git push -u origin main
```

### 2. Deploy ke Vercel

**Cara A — Via Vercel Dashboard:**
1. Login ke [vercel.com](https://vercel.com)
2. Klik **Add New → Project**
3. Import repo dari GitHub
4. Framework akan terdeteksi otomatis sebagai **Vite**
5. Klik **Deploy** — selesai!

**Cara B — Via Vercel CLI:**
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy dari direktori project
vercel

# Atau langsung ke production
vercel --prod
```

File `vercel.json` sudah dikonfigurasi dengan:
- ✅ SPA routing (semua path redirect ke `index.html`)
- ✅ Asset caching 1 tahun untuk file statis
- ✅ Framework Vite auto-detect

## 🛠️ Development

```bash
# Install dependencies
npm install

# Jalankan dev server
npm run dev

# Build production
npm run build

# Preview build
npm run preview
```

## 📁 Struktur Proyek

```
education-page/
├── src/
│   ├── components/       # Semua komponen React
│   │   ├── Navbar.tsx
│   │   ├── HeroSection.tsx
│   │   ├── AboutSection.tsx
│   │   ├── SkillsSection.tsx
│   │   ├── ProgramsSection.tsx
│   │   ├── CurriculumSection.tsx
│   │   ├── PricingSection.tsx
│   │   ├── DashboardPreview.tsx
│   │   ├── TestimonialsSection.tsx
│   │   ├── BlogSection.tsx
│   │   ├── FAQSection.tsx
│   │   ├── CTASection.tsx
│   │   └── FooterSection.tsx
│   ├── pages/
│   │   ├── Index.tsx     # Landing page
│   │   └── Materi.tsx    # Materi Docker lengkap
│   └── index.css         # Design tokens & global styles
├── vercel.json           # Konfigurasi Vercel
├── .gitignore
└── package.json
```

## 📚 Materi Docker yang Tersedia

- ✅ Apa itu Docker & container
- ✅ Container vs Virtual Machine
- ✅ Arsitektur Docker Engine
- ✅ Instalasi Docker (Linux, Windows, macOS)
- ✅ Perintah dasar Docker (12 perintah)
- ✅ Quiz interaktif
- ✅ Referensi lanjutan
