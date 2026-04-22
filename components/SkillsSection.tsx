export function SkillsSection() {
  const techLogos = [
    { name: "MySQL", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
    { name: "PostgreSQL", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
    { name: "JavaScript", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "TypeScript", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
    { name: "React", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "Python", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    { name: "Dart", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg" },
    { name: "Java", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
    { name: "Flutter", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" },
    { name: "Node.js", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    { name: "Express", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
    { name: "Next.js", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
    { name: "TailwindCSS", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original-wordmark.svg" },
    { name: "CSS3", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
    { name: "SQLite", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg" },
  ];
  
  const techSkills = [
    { title: "Mobile", list: "Flutter (UI, API, State Management)" },
    { title: "Backend", list: "Node.js, Flask, Express" },
    { title: "Web Scraping", list: "Selenium, BeautifulSoup" },
    { title: "Website", list: "Laravel, Next.js" },
    { title: "Writing", list: "Technical Writing, Documentation" }
  ];

  return (
    <section id="skills" className="py-24">
      <div className="flex flex-col gap-12">
        <div className="space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground">
            Skills &amp; Expertise
          </h2>
          <div className="h-1 w-20 bg-blue-500 rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Languages & Technologies (Icons) */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-foreground/80">Languages & Tools</h3>
            <div className="flex flex-wrap gap-4">
              {techLogos.map((tech) => (
                <div 
                  key={tech.name} 
                  className="flex flex-col items-center justify-center p-3 rounded-2xl border border-foreground/10 bg-foreground/5 hover:bg-foreground/10 transition-colors w-20 h-20 gap-2 group"
                  title={tech.name}
                >
                  <img src={tech.src} alt={`${tech.name} logo`} className="w-8 h-8 md:w-10 md:h-10 object-contain group-hover:scale-110 transition-transform" />
                </div>
              ))}
            </div>
          </div>

          {/* Specializations */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-foreground/80">Specializations</h3>
            <div className="grid gap-4">
              {techSkills.map((skill) => (
                <div key={skill.title} className="p-5 rounded-2xl border border-foreground/10 bg-foreground/[0.02] hover:bg-foreground/[0.04] transition-colors">
                  <h4 className="font-semibold text-foreground text-lg mb-1">{skill.title}</h4>
                  <p className="text-foreground/60 text-sm">{skill.list}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
