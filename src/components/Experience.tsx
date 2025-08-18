import { Trophy, Award, Calendar, Users } from 'lucide-react';

const Experience = () => {
  const achievements = [
    {
      category: "Competitions",
      icon: <Trophy className="h-6 w-6 text-accent" />,
      items: [
        {
          title: "1st Prize - Web Development Competition",
          organization: "PMEC College",
          year: "2024",
          description: "Won first place in the annual web development competition showcasing innovative solutions"
        },
        // {
        //   title: "TCS CodeVita Participant",
        //   organization: "TCS",
        //   year: "2023-2024",
        //   description: "Participated in one of India's largest coding competitions, solving complex algorithmic problems"
        // },
        {
          title: "GFG Challenges",
          organization: "GeekForGeek",
          year: "Ongoing",
          description: "Active participant in coding challenges with strong performance in data structures and algorithms"
        }
      ]
    },
    {
      category: "Scholarships",
      icon: <Award className="h-6 w-6 text-primary" />,
      items: [
        {
          title: "NMMS Scholarship",
          organization: "Government of India",
          year: "2018",
          description: "National Means-cum-Merit Scholarship for academic excellence"
        },
        {
          title: "NRTS Scholarship",
          organization: "State Government",
          year: "2017",
          description: "Merit-based scholarship for outstanding academic performance"
        },
        {
          title: "Post-Matric Scholarship",
          organization: "State Government",
          year: "2022-Present",
          description: "Continuing education scholarship for higher studies"
        }
      ]
    },
    {
      category: "Leadership & Collaboration",
      icon: <Users className="h-6 w-6 text-accent" />,
      items: [
        {
          title: "Team Lead - AgroLink Project",
          organization: "PMEC",
          year: "2024",
          description: "Led a team of 4 developers in building a comprehensive agriculture supply chain platform"
        },
        {
          title: "Frontend Developer - Learning Management System",
          organization: "GitHub Community",
          year: "2023-Present",
          description: "Active contributor to various open-source projects and community initiatives"
        },
        // {
        //   title: "Peer Mentor",
        //   organization: "College Programming Club",
        //   year: "2023-Present",
        //   description: "Mentoring junior students in programming concepts and project development"
        // }
      ]
    }
  ];

  return (
    <section id="experience" className="py-20">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Experience & <span className="gradient-text">Achievements</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Recognition for technical excellence, academic achievements, and leadership in various initiatives
          </p>
        </div>

        <div className="space-y-12">
          {achievements.map((category, categoryIndex) => (
            <div key={categoryIndex} className="space-y-6">
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 rounded-lg bg-card border border-border">
                  {category.icon}
                </div>
                <h3 className="text-2xl font-semibold">{category.category}</h3>
              </div>

              {/* Category Items */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.items.map((item, itemIndex) => (
                  <div 
                    key={itemIndex}
                    className="glow-card bg-card border border-border rounded-xl p-6 space-y-4"
                    style={{
                      animationDelay: `${(categoryIndex * 3 + itemIndex) * 0.1}s`,
                      animation: 'slide-in 0.6s ease-out forwards'
                    }}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h4 className="font-semibold text-lg leading-tight mb-2">
                          {item.title}
                        </h4>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                          <span>{item.organization}</span>
                          <span>•</span>
                          <span className="flex items-center gap-1">
                            <Calendar className="h-3 w-3" />
                            {item.year}
                          </span>
                        </div>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Skills Highlight */}
        <div className="mt-16">
          <div className="bg-card border border-border rounded-2xl p-8 glow-card text-center">
            <h3 className="text-2xl font-semibold mb-4">Key Strengths</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="space-y-2">
                <div className="text-3xl font-bold text-primary">200+</div>
                <div className="text-sm text-muted-foreground">Problems Solved</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-accent">10+</div>
                <div className="text-sm text-muted-foreground">Projects Completed</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-primary">3</div>
                <div className="text-sm text-muted-foreground">Major Scholarships</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-accent">2+</div>
                <div className="text-sm text-muted-foreground">Internship Experience</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;