import Image from "next/image";
import Link from "next/link";

export function HeroSection() {
  return (
    <section id="home" className="min-h-screen pt-20 flex items-center">
      <div className="grid md:grid-cols-2 gap-12 items-center w-full">
        {/* Text Content */}
        <div className="flex flex-col items-start gap-6 animate-in slide-in-from-bottom-8 duration-700">
          <div className="space-y-4">
            <h2 className="text-xl md:text-2xl font-medium text-blue-500">Hello, I&apos;m</h2>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground">
              Prayoga
              <br />
              <span className="text-foreground/80">Majasta Mahendra</span>
            </h1>
            <p className="text-lg md:text-xl font-medium text-foreground/60 max-w-lg leading-relaxed">
              Junior Software Engineer &bull; Backend Developer
              <br className="max-md:hidden" />
              Mobile Developer &bull; Web Developer
            </p>
          </div>
          
          <p className="text-foreground/70 text-base md:text-lg max-w-lg leading-relaxed">
            Saya adalah seorang junior software engineer yang memiliki pengalaman dalam pengembangan aplikasi mobile dan web. Saya juga memiliki pengalaman dalam pengembangan backend dan web scraping.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Link 
              href="/MyCv.pdf" 
              target="_blank"
              className="px-6 py-3 rounded-full bg-foreground text-background font-medium hover:scale-105 transition-transform shadow-lg"
            >
              See CV
            </Link>
            <Link 
              href="#contact"
              className="px-6 py-3 rounded-full border border-foreground/20 text-foreground font-medium hover:bg-foreground/5 transition-colors"
            >
              Contact Me
            </Link>
          </div>
        </div>

        {/* Image Content */}
        <div className="relative aspect-square md:aspect-[4/5] w-full max-w-md mx-auto md:ml-auto rounded-3xl overflow-hidden shadow-2xl bg-foreground/5 border border-foreground/10 group animate-in slide-in-from-right-8 duration-1000">
          <Image 
            src="/MyPicture.jpg" 
            alt="Prayoga Majasta Mahendra"
            fill
            className="object-cover object-top hover:scale-105 transition-transform duration-700 ease-in-out"
            priority
          />
          {/* Subtle glow effect */}
          <div className="absolute inset-0 bg-gradient-to-t from-background/30 to-transparent pointer-events-none" />
        </div>
      </div>
    </section>
  );
}