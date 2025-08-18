import { GraduationCap, Award, Users, Code } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <GraduationCap className="h-8 w-8 text-primary" />,
      title: "Education",
      description: "B.Tech CSE student at PMEC with a passion for technology and innovation"
    },
    {
      icon: <Code className="h-8 w-8 text-accent" />,
      title: "Development",
      description: "Building real-world projects with modern web technologies and best practices"
    },
    {
      icon: <Award className="h-8 w-8 text-primary" />,
      title: "Achievements",
      description: "Multiple scholarships including NMMS, NRTS, and Post-Matric scholarships"
    },
    {
      icon: <Users className="h-8 w-8 text-accent" />,
      title: "Collaboration",
      description: "Strong communication and teamwork skills with experience in competitive programming"
    }
  ];

  return (
    <section id="about" className="py-20 bg-section-bg">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-8"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <p className="text-lg text-foreground/90 leading-relaxed">
              I'm a passionate <span className="text-primary font-semibold">Full Stack Developer</span> and 
              <span className="text-accent font-semibold"> Web Designer</span> currently pursuing my B.Tech in 
              Computer Science at PMEC. My journey in technology is driven by a deep curiosity to solve 
              real-world problems through innovative digital solutions.
            </p>
            
            <p className="text-lg text-foreground/90 leading-relaxed">
              With expertise in both development and design, I bridge the gap between technical functionality 
              and user experience. I'm constantly exploring new technologies and methodologies to stay at 
              the forefront of web development.
            </p>

            <p className="text-lg text-foreground/90 leading-relaxed">
              My academic achievements include multiple scholarships and recognition in competitive programming. 
              I believe in continuous learning and enjoy tackling challenging problems in Data Structures, 
              Algorithms, and System Design.
            </p>

            <div className="pt-6">
              <a 
                href="/resume(6-7-25).pdf" 
                download
                className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-lg transition-colors duration-200"
              >
                Download Resume
              </a>
            </div>
          </div>

          {/* Highlights Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <div 
                key={index}
                className="glow-card bg-card border border-border rounded-xl p-6 text-center"
              >
                <div className="flex justify-center mb-4">
                  {item.icon}
                </div>
                <h3 className="font-semibold text-lg mb-3 text-foreground">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
