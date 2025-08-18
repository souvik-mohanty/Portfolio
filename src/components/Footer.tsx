import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: 'Home', href: 'hero' },
    { label: 'About', href: 'about' },
    { label: 'Skills', href: 'skills' },
    { label: 'Projects', href: 'projects' },
    { label: 'Experience', href: 'experience' },
    { label: 'Contact', href: 'contact' },
  ];

  const socialLinks = [
    {
      icon: <Github className="h-5 w-5" />,
      href: "https://github.com/souvik-mohanty",
      label: "GitHub"
    },
    {
      icon: <Linkedin className="h-5 w-5" />,
      href: "https://www.linkedin.com/in/souvik-mohanty-415552242",
      label: "LinkedIn"
    },
    {
      icon: <Mail className="h-5 w-5" />,
      href: "mailto:souvik.mohanty.tech@gmail.com",
      label: "Email"
    }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-card border-t border-border">
      <div className="section-container py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold gradient-text">Souvik Mohanty</h3>
            <p className="text-muted-foreground leading-relaxed">
              Full Stack Developer & Web Designer passionate about creating 
              impactful digital solutions through innovative technology.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="p-2 rounded-lg bg-background border border-border hover:border-primary/50 
                           transition-all duration-200 hover:scale-110"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <nav className="grid grid-cols-2 gap-2">
              {quickLinks.map((link, index) => (
                <button
                  key={index}
                  onClick={() => scrollToSection(link.href)}
                  className="text-left text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  {link.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Get In Touch</h4>
            <div className="space-y-2 text-muted-foreground">
              <p>souvik.mohanty.tech@gmail.com</p>
              <p>+91 77518 97547</p>
              <p>Bhubaneswar, Odisha, India</p>
            </div>
            <button
              onClick={() => scrollToSection('contact')}
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors duration-200"
            >
              Let's work together →
            </button>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground text-sm">
              © {currentYear} Souvik Mohanty. All rights reserved.
            </p>
            {/* <p className="text-muted-foreground text-sm flex items-center gap-1">
              Made with <Heart className="h-4 w-4 text-red-500" /> using React & TypeScript
            </p> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;