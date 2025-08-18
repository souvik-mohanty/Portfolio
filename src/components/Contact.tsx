import { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon!",
    });
    
    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6" />,
      label: "Email",
      value: "souvik.mohanty.tech@gmail.com",
      href: "mailto:souvik.mohanty.tech@gmail.com"
    },
    {
      icon: <Phone className="h-6 w-6" />,
      label: "Phone",
      value: "+91 77518 97547",
      href: "tel:+91 77518 97547"
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      label: "Location",
      value: "Bhubaneswar, Odisha, India",
      href: "#"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-section-bg">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind or just want to chat? I'd love to hear from you. 
            Let's create something amazing together!
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-4">Contact Information</h3>
              <p className="text-muted-foreground mb-6">
                Feel free to reach out through any of these channels. I'm always open to 
                discussing new opportunities and collaborations.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-4">
              {contactInfo.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="flex items-center gap-4 p-4 bg-card border border-border rounded-lg 
                           hover:border-primary/50 transition-all duration-200 hover:bg-card/80"
                >
                  <div className="p-2 bg-primary/10 text-primary rounded-lg">
                    {item.icon}
                  </div>
                  <div>
                    <div className="font-medium text-foreground">{item.label}</div>
                    <div className="text-muted-foreground">{item.value}</div>
                  </div>
                </a>
              ))}
            </div>

            {/* Social Links */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Connect With Me</h4>
              <div className="flex gap-4">
                <a
                  href="https://github.com/souvik-mohanty"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-card border border-border rounded-lg 
                           hover:border-primary/50 transition-all duration-200 hover:bg-card/80"
                >
                  <Github className="h-5 w-5" />
                  <span>GitHub</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/souvik-mohanty-415552242"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-card border border-border rounded-lg 
                           hover:border-primary/50 transition-all duration-200 hover:bg-card/80"
                >
                  <Linkedin className="h-5 w-5" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>

            {/* Resume Download */}
            {/* <div className="p-6 bg-card border border-border rounded-xl glow-card">
              <h4 className="text-lg font-semibold mb-3">Resume</h4>
              <p className="text-muted-foreground text-sm mb-4">
                Download my resume to learn more about my experience and qualifications.
              </p>
              <Button variant="outline" className="w-full">
                <Download className="w-4 h-4 mr-2" />
                Download Resume
              </Button>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;