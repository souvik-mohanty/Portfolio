import { ExternalLink, Github, Code, Database, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Projects = () => {
  const projects = [
    {
  title: "AgroLink",
  description: "A smart agricultural supply chain platform that directly connects farmers with buyers, offering crop advisory, weather insights, agri-tool marketplace, logistics, and digital payments to empower Indian agriculture.",
  techStack: ["Java Spring Boot", "React", "PostgreSQL", "MongoDB", "Razorpay", "JWT", "Microservices"],
  category: "AgriTech",
  features: [
    "Farmer-buyer direct marketplace",
    "Personalized crop advisory system",
    "Weather and soil insights",
    "Integrated logistics and delivery tracking",
    "Digital payments with Razorpay"
  ],
  github: "https://github.com/souvik-mohanty/AgroLink",
  demo: "#",
  image: "/api/placeholder/600/400"
},

    {
      "title": "Learning Management System (LMS)",
      "description": "A comprehensive platform for creating, delivering, and managing educational content, facilitating student engagement, and tracking progress with interactive lessons and assessment tools.",
      "techStack": ["React", "Node.js", "MongoDB", "Express.js", "Redux", "Material-UI", "WebSockets"],
      "category": "Education",
      "features": [
        "Course creation and management",
        "Interactive lesson delivery",
        "Student progress tracking",
        "Assessment and grading tools",
        "User authentication and authorization",
        "Discussion forums"
      ],
      "github": "https://github.com/souvik-mohanty/Learning-Management-System",
      "demo": "#",
      "image": "/api/placeholder/600/400"
    },
    {
      "title": "Hospital Operations Scheduler",
      "description": "An intelligent scheduling system designed to optimize hospital resource allocation, manage appointments, and streamline staff shifts for improved operational efficiency and patient care.",
      "techStack": ["Firebase", "Node.js", "Socket.io", "TypeScript", "Ant Design"],
      "category": "Healthcare",
      "features": [
        "Doctor and staff shift management",
        "Patient appointment scheduling",
        "Resource allocation optimization (rooms, equipment)",
        "Real-time schedule updates",
        "Conflict detection and resolution",
        "Reporting and analytics"
      ],
      "github": "https://github.com/souvik-mohanty/Hospital-Operation-Scheduler",
      "demo": "https://hospital-operation-scheduler.netlify.app/",
      "image": "/api/placeholder/600/400"
    },
    {
      "title": "Investor-Business Connector Platform",
      "description": "A dynamic platform facilitating connections between investors and businesses seeking funding, featuring secure communication channels, project showcases, and advanced matching algorithms.",
      "techStack": [ "Firebase", "Node.js", "Stripe API", "HTML5", "Material-UI"],
      "category": "Finance/Networking",
      "features": [
        "Investor and business profiles",
        "Project listing and discovery",
        "Secure messaging and communication",
        "Investment matching algorithms",
        "Due diligence tools",
        "Funding tracking and management"
      ],
      "github": "https://github.com/souvik-mohanty/Investor_BusinessPerson_Connection",
      "demo": "https://bridge-connect.netlify.app/",
      "image": "/api/placeholder/600/400"
    },
    {
  "title": "Pathology Management System",
  "description": "A streamlined platform for pathology labs to manage test services, pricing, and patient diagnostics with admin controls and Firebase integration.",
  "techStack": ["HTML", "CSS", "JavaScript", "Vite", "Firebase", "Netlify"],
  "category": "Healthcare Management",
  "features": [
    "Admin login and authentication",
    "Add and manage pathology tests",
    "Realtime database with Firebase",
    "Responsive and intuitive interface",
    "Secure data operations",
    "Hosted on Netlify"
  ],
  "github": "https://github.com/souvik-mohanty/Pathology_Management",  // Replace with your GitHub repo URL
  "demo": "https://lpcarepathology-service.netlify.app/",
  "image": "" 

   ];

  return (
    <section id="projects" className="py-20 bg-section-bg">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent work, demonstrating various technologies and problem-solving approaches
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="glow-card bg-card border border-border rounded-xl overflow-hidden group"
              style={{
                animationDelay: `${index * 0.2}s`,
                animation: 'fade-in 0.6s ease-out forwards'
              }}
            >
              {/* Project Image */}
              <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-6xl opacity-20">
                    {project.category === "AgriTech" && <Database />}
                    {project.category === "Web Development" && <Globe />}
                    {project.category === "Productivity" && <Code />}
                    {project.category === "Frontend" && <Globe />}
                    {project.category === "Education" && <Code />} {/* Added icon for Education */}
                    {project.category === "Healthcare" && <Database />} {/* Added icon for Healthcare */}
                    {project.category === "Finance/Networking" && <Globe />}
                    {project.category === "Healthcare Management" && <Database />} {/* Added icon for Healthcare Management */}
                  </div>
                </div>
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-primary/20 text-primary text-sm rounded-full backdrop-blur-sm">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6 space-y-4">
                <div>
                  <h3 className="text-2xl font-semibold mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Features */}
                <div>
                  <h4 className="font-medium mb-2 text-foreground">Key Features:</h4>
                  <ul className="space-y-1">
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-sm text-muted-foreground flex items-start gap-2">
                        <span className="w-1 h-1 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack */}
                <div>
                  <h4 className="font-medium mb-3 text-foreground">Tech Stack:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-background border border-border rounded text-xs
                                   hover:border-primary/50 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
<div className="flex gap-3 pt-4">
  <a
    href={project.github}
    target="_blank"
    rel="noopener noreferrer"
    className="flex-1"
  >
    <Button variant="outline" size="sm" className="w-full">
      <Github className="w-4 h-4 mr-2" />
      Code
    </Button>
  </a>
  <a
    href={project.demo}
    target="_blank"
    rel="noopener noreferrer"
    className="flex-1"
  >
    <Button size="sm" className="w-full">
      <ExternalLink className="w-4 h-4 mr-2" />
      Live Demo
    </Button>
  </a>
</div>

              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
  <p className="text-lg text-muted-foreground mb-6">
    Want to see more? Check out my GitHub for additional projects and contributions.
  </p>
  {/* Add the <a> tag with your GitHub profile link */}
  <a href="https://github.com/souvik-mohanty" target="_blank" rel="noopener noreferrer">
    <Button variant="outline" size="lg">
      <Github className="w-5 h-5 mr-2" />
      View All Projects
    </Button>
  </a>
</div>
      </div>
    </section>
  );
};

export default Projects;