"use client";

import Link from "next/link";
import Image from "next/image";

const MenuItem = [
    {title: "Home", href: "#home"},
    {title: "Skills", href: "#skills"},
    {title: "Projects", href: "#projects"},
    {title: "Contact", href: "#contact"},
    {title: "CV", href: "/MyCv.pdf", target: "_blank"},
]

export function NavBar() {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-background/70 backdrop-blur-md border-b border-white/10 dark:border-white/5 shadow-sm">
            <div className="max-w-7xl mx-auto px-6 sm:px-12 md:px-24 h-16 flex items-center justify-between">
                <Link href="#home" className="flex items-center gap-3 group">
                    <div className="w-9 h-9 rounded-full overflow-hidden border border-white/20 group-hover:border-blue-400 transition-colors">
                        <Image src="/RealProfile.jpg" alt="Profile" width={36} height={36} className="object-cover" />
                    </div>
                    <span className="font-semibold text-lg tracking-tight hover:text-blue-500 transition-colors">Jasta</span>
                </Link>
                
                <div className="hidden md:flex items-center space-x-1">
                    {MenuItem.map((item) => (
                        <Link 
                            key={item.title} 
                            href={item.href} 
                            target={item.target}
                            className="px-4 py-2 text-sm font-medium text-foreground/80 hover:text-blue-500 hover:bg-white/5 rounded-full transition-all"
                        >
                            {item.title}
                        </Link>
                    ))}
                </div>
                
                <div className="md:hidden">
                    {/* Simplified mobile menu - just a CV link for now */}
                    <Link 
                        href="/MyCv.pdf" 
                        target="_blank"
                        className="px-4 py-2 text-sm font-medium bg-foreground text-background rounded-full hover:opacity-90 transition-opacity"
                    >
                        See CV
                    </Link>
                </div>
            </div>
        </nav>
    )
}