import { Link } from "react-router-dom";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const modules = [
  {
    title: "Modul 1 – Pengantar Containerization",
    lessons: 6,
    duration: "2 jam",
    topics: ["Apa itu container?", "Docker vs Virtual Machine", "Arsitektur Docker Engine"],
  },
  {
    title: "Modul 2 – Instalasi & Setup Docker",
    lessons: 5,
    duration: "1.5 jam",
    topics: ["Install di Linux (Ubuntu)", "Install di Windows (WSL2)", "Install di macOS", "Docker Desktop overview"],
  },
  {
    title: "Modul 3 – Image & Container Dasar",
    lessons: 8,
    duration: "3 jam",
    topics: ["docker pull & push", "docker run, stop, rm", "docker ps & inspect", "Port mapping & environment variable"],
  },
  {
    title: "Modul 4 – Dockerfile",
    lessons: 7,
    duration: "2.5 jam",
    topics: ["Instruksi FROM, RUN, COPY, CMD", "Build context & .dockerignore", "Multi-stage build", "Best practice Dockerfile"],
    link: "/materi",
  },
  {
    title: "Modul 5 – Docker Networking",
    lessons: 6,
    duration: "2 jam",
    topics: ["Bridge, host, none network", "Container-to-container communication", "Custom network", "DNS resolution"],
  },
  {
    title: "Modul 6 – Volume & Persistent Storage",
    lessons: 5,
    duration: "1.5 jam",
    topics: ["Named volume vs bind mount", "docker volume create", "Data sharing antar container"],
  },
  {
    title: "Modul 7 – Docker Compose",
    lessons: 9,
    duration: "3 jam",
    topics: ["Struktur docker-compose.yml", "Services, networks, volumes", "docker-compose up/down", "Override file"],
    link: "/materi",
  },
];

const CurriculumSection = () => (
  <section id="curriculum" className="section-padding">
    <div className="container mx-auto max-w-3xl">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
        Kurikulum <span className="glow-text">Lengkap</span>
      </h2>
      <p className="text-center text-muted-foreground mb-12 max-w-xl mx-auto">
        46 pelajaran · ~15 jam total · Dari dasar hingga siap kerja
      </p>
      <Accordion type="single" collapsible className="space-y-3">
        {modules.map((m, i) => (
          <AccordionItem key={i} value={`m-${i}`} className="glass-card border px-6 rounded-xl">
            <AccordionTrigger className="text-left font-semibold hover:no-underline">
              <div className="flex flex-col gap-0.5 text-left">
                <span>{m.title}</span>
                <span className="text-xs font-normal text-muted-foreground">
                  {m.lessons} Pelajaran · {m.duration}
                </span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground pb-4">
              <ul className="space-y-1.5 mb-3">
                {m.topics.map((t) => (
                  <li key={t} className="flex items-center gap-2 text-sm">
                    <span className="w-1 h-1 rounded-full bg-primary shrink-0" />
                    {t}
                  </li>
                ))}
              </ul>
              {m.link && (
                <Link to={m.link} className="text-primary text-sm font-semibold hover:underline">
                  → Buka Materi Lengkap
                </Link>
              )}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </section>
);

export default CurriculumSection;
