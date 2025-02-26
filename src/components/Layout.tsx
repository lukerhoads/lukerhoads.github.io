import { Github, Twitter, Linkedin } from "lucide-react";

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen blueprint-grid flex flex-col">
      <nav className="container max-w-4xl mx-auto py-6 flex items-center justify-between">
        <h1 className="text-2xl font-semibold">
          <a href="/" className="hover:text-black/70 transition-colors">
            Luke Rhoads
          </a>
        </h1>
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-6">
            <a href="/blog" className="hover:text-black/70 transition-colors">Blog</a>
          </div>
          <div className="flex items-center gap-4">
            <a href="https://github.com/lukerhoads" target="_blank" rel="noopener noreferrer" className="hover:text-black/70 transition-colors">
              <Github className="w-5 h-5" />
            </a>
            <a href="https://www.linkedin.com/in/luke-rhoads-283198190/" target="_blank" rel="noopener noreferrer" className="hover:text-black/70 transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
      </nav>

      <main className="container max-w-4xl mx-auto">
        {children}
      </main>

      <footer className="container max-w-4xl mx-auto py-8 border-t border-black/10">
        <div className="flex justify-between items-center">
          <p className="text-sm text-black/70">
            © {new Date().getFullYear()} Luke Rhoads. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a href="/blog" className="text-sm text-black/70 hover:text-black transition-colors">Blog</a>
            <a href="/privacy" className="text-sm text-black/70 hover:text-black transition-colors">Privacy Policy</a>
          </div>
        </div>
      </footer>
    </div>
  );
}; 