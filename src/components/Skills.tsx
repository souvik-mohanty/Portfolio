import { Code, Database, Globe, Settings, GitBranch, Palette } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      icon: <Code className="h-6 w-6" />,
      skills: ["C", "C++", "Java", "Python", "JavaScript", "SQL"],
      color: "text-primary"
    },
    {
      title: "Frontend",
      icon: <Globe className="h-6 w-6" />,
      skills: ["HTML", "CSS", "React", "JavaScript", "Responsive Design", "UI/UX"],
      color: "text-accent"
    },
    {
      title: "Backend",
      icon: <Database className="h-6 w-6" />,
      skills: ["Node.js", "MongoDB", "Express", "RESTful APIs", "Authentication", "Microservices"],
      color: "text-primary"
    },
    {
      title: "Tools & Platforms",
      icon: <Settings className="h-6 w-6" />,
      skills: ["Git", "GitHub", "Postman", "VS Code", "Linux", "Docker"],
      color: "text-accent"
    },
    {
      title: "Core Concepts",
      icon: <GitBranch className="h-6 w-6" />,
      skills: ["Data Structures", "Algorithms", "System Design", "OOP", "DBMS", "OS"],
      color: "text-primary"
    },
    {
      title: "Integrations",
      icon: <Palette className="h-6 w-6" />,
      skills: ["Razorpay API", "Payment Gateways", "Third-party APIs", "Cloud Services", "Version Control", "Testing"],
      color: "text-accent"
    }
  ];

  return (
    <section id="skills" className="py-20">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            My <span className="gradient-text">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit of technologies and concepts I use to build robust, scalable applications
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              className="skill-card group"
              style={{
                animationDelay: `${index * 0.1}s`,
                animation: 'fade-in 0.6s ease-out forwards'
              }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className={`p-2 rounded-lg bg-background ${category.color}`}>
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold">{category.title}</h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-1 bg-background border border-border rounded-full text-sm 
                             transition-all duration-200 hover:border-primary/50 hover:bg-primary/10"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills Summary */}
        <div className="mt-16 text-center">
          <div className="bg-card border border-border rounded-2xl p-8 glow-card max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold mb-4">Always Learning</h3>
            <p className="text-muted-foreground text-lg leading-relaxed">
              I'm constantly expanding my skill set and staying up-to-date with the latest technologies. 
              Currently exploring advanced system design patterns, cloud architectures, and modern frontend frameworks 
              to build even better solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;