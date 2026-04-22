import { ProjectCard } from "./ProjectCard";

const projects = [
  { 
    title: "Mangaku", 
    url: "https://github.com/Winzarts/MangakuApp",
    description: "Mangaku adalah aplikasi baca komik manga, manhwa, dan manhua yang dibangun dengan Flutter. Aplikasi ini memungkinkan pengguna untuk mencari, membookmark, dan membaca berbagai komik manga, manhwa, dan manhua secara native di perangkat mereka."
  },
  { 
    title: "SiPina", 
    url: "https://github.com/Winzarts/SiPina",
    description: "SiPina (Si Peminjaman Sarana dan Prasarana) adalah antarmuka web modern yang dibangun menggunakan Next.js untuk sistem manajemen inventaris sekolah. Dashboard ini memungkinkan petugas dan admin untuk mengelola data barang, memantau peminjaman, dan melihat statistik secara real-time."
  },
  { 
    title: "Vehicle Booking System", 
    url: "https://github.com/Winzarts/vehicle_booking_system",
    description: "Aplikasi web untuk mengelola dan memantau pemesanan kendaraan operasional di lingkungan perusahaan pertambangan nikel."
  },
  { 
    title: "UKTapp", 
    url: "https://github.com/Winzarts/UKTapp",
    description: "Univ adalah aplikasi solusi digital untuk mahasiswa dalam mengelola dan memantau kewajiban pembayaran Uang Kuliah Tunggal (UKT)."
  },
  { 
    title: "TelkomselApp", 
    url: "https://github.com/Winzarts/TelkomselApp",
    description: "Project UUK saya kali ini adalah sebuah aplikasi prototype berbasis Flutter yang mengimitasi antarmuka dan fungsionalitas utama aplikasi telekomunikasi populer, MyTelkomsel."
  },
  { 
    title: "Jelajah Nusantara", 
    url: "https://github.com/Winzarts/JelajahNusantara",
    description: "Jelajah Nusantara adalah aplikasi berbasis Flutter yang dirancang untuk berbagi dan menemukan artikel menarik seputar destinasi wisata di Indonesia."
  },
  {
    title: "WonderTrail",
    url: "https://github.com/Winzarts/WonderTrail",
    description: "WonderTrail adalah aplikasi eksplorasi perjalanan premium yang dirancang untuk membantu pengguna menemukan destinasi menakjubkan di seluruh dunia. Dengan UI yang ramping dan transisi yang mulus"
  },
  {
    title: "Tampilan Aplikasi Gojek",
    url: "https://github.com/Winzarts/Tampilan-Gojek",
    description: "Project ini adalah sebuah project prototype antarmuka (UI) menggunakan Flutter. Berdasarkan aset yang digunakan, aplikasi ini menampilkan desain yang terinspirasi dari aplikasi super-app seperti Gojek"
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="py-24">
      <div className="flex flex-col gap-12">
        <div className="space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground">
            Featured Projects
          </h2>
          <div className="h-1 w-20 bg-blue-500 rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.title} title={project.title} url={project.url} description={project.description} />
          ))}
        </div>
      </div>
    </section>
  );
}
