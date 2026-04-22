import Link from "next/link";

interface ProjectCardProps {
  title: string;
  url: string;
  description: string;
}

export function ProjectCard({ title, url, description }: ProjectCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-3xl border border-foreground/10 bg-background p-8 hover:bg-foreground/[0.02] transition-colors shadow-sm hover:shadow-md">
      <div className="flex flex-col h-full gap-4 relative z-10">
        <h3 className="text-2xl font-bold text-foreground group-hover:text-blue-500 transition-colors">
          {title}
        </h3>
        <p className="text-foreground/60 text-sm flex-1">
          {description}
        </p>
        
        <Link 
          href={url} 
          target="_blank"
          className="inline-flex items-center gap-2 text-sm font-semibold text-blue-500 hover:text-blue-600 mt-4 self-start"
        >
          View on GitHub
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </Link>
      </div>
      
      {/* Decorative gradient blob */}
      <div className="absolute -bottom-24 -right-24 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl group-hover:bg-blue-500/20 transition-colors" />
    </div>
  );
}