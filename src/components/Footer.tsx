import { Hexagon } from "lucide-react";
import {
  AiFillGithub,
  AiFillFacebook,
  AiFillLinkedin,
  AiOutlineWhatsApp,
} from "react-icons/ai";

export function Footer() {
  return (
    <footer className="border-t border-white/5 py-12 relative overflow-hidden bg-black/50">
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <Hexagon className="w-6 h-6 text-primary" />
          <span className="font-display font-bold tracking-wider text-foreground">
            DEV<span className="text-primary">.</span>SYS
          </span>
        </div>

        <div className="text-muted-foreground text-sm font-mono">
          © {new Date().getFullYear()} // All rights reserved.
        </div>

        <div className="flex items-center gap-4">
          <a
            href="https://github.com/muhannad007"
            className="w-10 h-10 rounded-full glass-panel flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-colors"
          >
            <AiFillGithub className="w-8 h-8" />
          </a>
          <a
            href="https://www.linkedin.com/in/muhannad-afifa-809654152/"
            className="w-10 h-10 rounded-full glass-panel flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-colors"
          >
            <AiFillLinkedin className="w-8 h-8" />
          </a>
          <a
            href="https://www.facebook.com/ookoop.iko"
            className="w-10 h-10 rounded-full glass-panel flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-colors"
          >
            <AiFillFacebook className="w-8 h-8" />
          </a>
          <a
            href="https://wa.me//963935807475"
            className="w-10 h-10 rounded-full glass-panel flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-colors"
          >
            <AiOutlineWhatsApp className="w-8 h-8" />
          </a>
        </div>
      </div>
    </footer>
  );
}
