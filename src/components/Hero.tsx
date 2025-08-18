import { ArrowDown, Download, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/10"></div>
      
      {/* Animated background elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-48 h-48 bg-accent/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      
      <div className="section-container text-center relative z-10">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Hi, I'm <span className="gradient-text">Souvik</span>
          </h1>
          <h2 className="text-2xl md:text-3xl text-muted-foreground mb-8">
            Full Stack Developer & Web Designer
          </h2>
          <p className="text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto mb-12 leading-relaxed">
            Building impactful web solutions with code and creativity. 
            B.Tech CSE student passionate about creating real-world projects 
            that make a difference.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              size="lg" 
              onClick={scrollToProjects}
              className="text-lg px-8 py-6 bg-primary hover:bg-primary/90"
            >
              View My Work
              <ArrowDown className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={scrollToContact}
              className="text-lg px-8 py-6"
            >
              Let's Connect
              <Mail className="ml-2 h-5 w-5" />
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-6">
            <a 
              href="https://github.com/souvik-mohanty" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:scale-110"
            >
              <Github className="h-6 w-6" />
            </a>
            <a 
              href="https://www.linkedin.com/in/souvik-mohanty-415552242" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:scale-110"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a 
              href="mailto:souvik.mohanty.tech@gmail.com"
              className="p-3 rounded-full bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:scale-110"
            >
              <Mail className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-6 w-6 text-muted-foreground" />
      </div>
    </section>
  );
};

export default Hero;