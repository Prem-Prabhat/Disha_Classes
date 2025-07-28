import { CheckCircle, Award, Users, BookOpen, Target, Heart } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import teacherImage from '@/assets/teacher-portrait.jpg';
import classroomImage from '@/assets/classroom-environment.jpg';

const About = () => {
  const achievements = [
    { icon: Users, number: "500+", label: "Students Taught" },
    { icon: Award, number: "95%", label: "Success Rate" },
    { icon: BookOpen, number: "8+", label: "Years Experience" },
    { icon: Target, number: "100%", label: "Dedication" }
  ];

  const values = [
    {
      icon: Heart,
      title: "Student-Centric Approach",
      description: "Every student is unique. We adapt our teaching methods to suit individual learning styles and pace."
    },
    {
      icon: Target,
      title: "Result-Oriented",
      description: "Our focus is on achieving concrete results - better grades, deeper understanding, and academic confidence."
    },
    {
      icon: CheckCircle,
      title: "Quality Education",
      description: "We maintain the highest standards of education with updated curriculum and modern teaching techniques."
    }
  ];

  const journey = [
    { year: "2016", event: "Started with a vision to provide quality education" },
    { year: "2018", event: "Achieved 90%+ success rate in first batch" },
    { year: "2020", event: "Expanded to serve 200+ students annually" },
    { year: "2022", event: "Launched online classes during pandemic" },
    { year: "2024", event: "500+ successful students and counting" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gradient-primary mb-6">
              About Disha Class
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Dedicated to nurturing academic excellence in mathematics and science 
              for students in classes 10th through 12th.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <Card key={index} className="card-feature text-center">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-4">
                    <achievement.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-gradient-primary mb-2">
                    {achievement.number}
                  </div>
                  <div className="text-muted-foreground">{achievement.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Sir Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gradient-primary mb-6">
                Meet Our Educator
              </h2>
              <div className="space-y-4 text-lg text-muted-foreground">
                <p>
                  With over 8 years of dedicated teaching experience, our founder and lead educator 
                  has transformed the academic journey of hundreds of students across classes 10th, 11th, and 12th.
                </p>
                <p>
                  Specializing in Mathematics and Science, we believe in making complex concepts 
                  simple and accessible to every student. Our teaching methodology combines 
                  traditional wisdom with modern pedagogical approaches.
                </p>
                <p>
                  Having witnessed countless students achieve their academic dreams, we understand 
                  that every student learns differently. That's why we've developed a personalized 
                  approach that adapts to each student's unique learning style.
                </p>
              </div>
              
              <div className="mt-8 space-y-3">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-success" />
                  <span>M.Sc. in Mathematics & B.Ed. qualified</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-success" />
                  <span>8+ years of teaching experience</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-success" />
                  <span>Expert in CBSE & State Board curricula</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-success" />
                  <span>Proven track record of student success</span>
                </div>
              </div>
            </div>
            
            <div className="order-first lg:order-last">
              <div className="relative">
                <img 
                  src={teacherImage}
                  alt="Disha Class Educator"
                  className="rounded-2xl shadow-strong w-full"
                />
                <div className="absolute -bottom-6 -right-6 bg-gradient-hero text-white p-6 rounded-xl shadow-medium">
                  <div className="text-2xl font-bold">95%</div>
                  <div className="text-sm">Success Rate</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gradient-primary mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-muted-foreground">
              The principles that drive our educational mission
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="card-feature text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold">{value.title}</h3>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Journey Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src={classroomImage}
                alt="Disha Class Environment"
                className="rounded-2xl shadow-strong w-full"
              />
            </div>
            
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gradient-primary mb-6">
                Our Journey
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                From humble beginnings to becoming a trusted name in education, 
                here's how Disha Class has evolved over the years.
              </p>
              
              <div className="space-y-6">
                {journey.map((milestone, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="bg-gradient-hero text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-sm">
                      {milestone.year}
                    </div>
                    <div className="pt-2">
                      <p className="font-semibold text-lg">{milestone.year}</p>
                      <p className="text-muted-foreground">{milestone.event}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Our Vision for the Future
          </h2>
          <p className="text-xl mb-8 opacity-90">
            We're constantly evolving to serve our students better. Here's what's coming next:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <BookOpen className="w-8 h-8 mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Mobile App</h3>
              <p className="text-sm opacity-90">Interactive learning app with practice tests and video lessons</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <Users className="w-8 h-8 mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Online Classes</h3>
              <p className="text-sm opacity-90">Live online sessions for students who can't attend in person</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <Target className="w-8 h-8 mx-auto mb-3" />
              <h3 className="font-semibold mb-2">AI-Powered Learning</h3>
              <p className="text-sm opacity-90">Personalized learning paths based on individual student performance</p>
            </div>
          </div>
          
          <Button 
            variant="outline" 
            className="text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-primary"
          >
            Join Our Journey
          </Button>
        </div>
      </section>
    </div>
  );
};

export default About;