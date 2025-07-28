import { BookOpen, Clock, Users, CheckCircle, ArrowRight, Calendar, Target } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';

const Classes = () => {
  const classPrograms = [
    {
      title: "Class 10th",
      subtitle: "Foundation Building",
      subjects: ["Mathematics", "Science (Physics, Chemistry, Biology)"],
      description: "Build a strong foundation for board exams with comprehensive coverage of CBSE/State Board curriculum.",
      features: [
        "Complete NCERT syllabus coverage",
        "Board exam pattern practice",
        "Regular chapter-wise tests",
        "Doubt clearing sessions",
        "Previous year question papers",
        "Study material provided"
      ],
      duration: "10 months",
      batchSize: "15-20 students",
      timing: "Morning & Evening batches",
      color: "from-blue-500 to-blue-600",
      icon: BookOpen
    },
    {
      title: "Class 11th", 
      subtitle: "Conceptual Mastery",
      subjects: ["Mathematics", "Physics", "Chemistry"],
      description: "Develop strong conceptual understanding for advanced topics and competitive exam preparation.",
      features: [
        "In-depth concept building",
        "JEE/NEET foundation",
        "Advanced problem solving",
        "Laboratory concepts",
        "Regular assessments",
        "Career guidance sessions"
      ],
      duration: "11 months",
      batchSize: "12-15 students", 
      timing: "Morning & Evening batches",
      color: "from-purple-500 to-purple-600",
      icon: Target
    },
    {
      title: "Class 12th",
      subtitle: "Excellence & Achievement", 
      subjects: ["Mathematics", "Physics", "Chemistry"],
      description: "Master advanced concepts for board exams and competitive examinations with intensive preparation.",
      features: [
        "Complete board syllabus",
        "JEE/NEET preparation", 
        "Mock tests & analysis",
        "Time management skills",
        "Revision strategies",
        "Individual attention"
      ],
      duration: "12 months",
      batchSize: "10-12 students",
      timing: "Morning & Evening batches", 
      color: "from-green-500 to-green-600",
      icon: Users
    }
  ];

  const subjects = {
    mathematics: {
      class10: ["Real Numbers", "Polynomials", "Linear Equations", "Quadratic Equations", "Arithmetic Progressions", "Coordinate Geometry", "Triangles", "Circles", "Areas & Volumes", "Statistics", "Probability"],
      class11: ["Sets", "Relations & Functions", "Trigonometry", "Complex Numbers", "Linear Inequalities", "Permutations & Combinations", "Binomial Theorem", "Sequences & Series", "Straight Lines", "Conic Sections", "Limits & Derivatives"],
      class12: ["Relations & Functions", "Inverse Trigonometry", "Matrices", "Determinants", "Continuity & Differentiability", "Applications of Derivatives", "Integrals", "Applications of Integrals", "Differential Equations", "Vector Algebra", "Three Dimensional Geometry", "Linear Programming", "Probability"]
    },
    science: {
      class10: ["Light", "Human Eye", "Electricity", "Magnetic Effects", "Management of Natural Resources", "Life Processes", "Control & Coordination", "Reproduction", "Heredity & Evolution", "Acids & Bases", "Metals & Non-metals", "Carbon Compounds", "Periodic Classification"],
      physics11: ["Physical World", "Units & Measurements", "Motion in Straight Line", "Motion in Plane", "Laws of Motion", "Work Energy Power", "System of Particles", "Rotational Motion", "Gravitation", "Mechanical Properties", "Thermal Properties", "Thermodynamics", "Kinetic Theory", "Oscillations", "Waves"],
      chemistry11: ["Basic Concepts", "Structure of Atom", "Chemical Bonding", "States of Matter", "Thermodynamics", "Equilibrium", "Redox Reactions", "Hydrogen", "S-Block Elements", "P-Block Elements", "Organic Chemistry", "Hydrocarbons", "Environmental Chemistry"],
      physics12: ["Electric Charges", "Electrostatic Potential", "Current Electricity", "Moving Charges", "Magnetism", "Electromagnetic Induction", "Alternating Current", "Electromagnetic Waves", "Ray Optics", "Wave Optics", "Dual Nature", "Atoms", "Nuclei", "Semiconductor Electronics"],
      chemistry12: ["Solid State", "Solutions", "Electrochemistry", "Chemical Kinetics", "Surface Chemistry", "Isolation of Elements", "P-Block Elements", "D & F Block Elements", "Coordination Compounds", "Haloalkanes", "Alcohols Phenols Ethers", "Aldehydes Ketones", "Carboxylic Acids", "Organic Compounds", "Biomolecules", "Polymers", "Chemistry in Everyday Life"]
    }
  };

  const batchTimings = [
    { time: "6:00 AM - 8:00 AM", type: "Early Morning", suitable: "For disciplined early risers" },
    { time: "4:00 PM - 6:00 PM", type: "Evening", suitable: "For school students" },
    { time: "6:00 PM - 8:00 PM", type: "Late Evening", suitable: "For working students" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-hero text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Our Class Programs
          </h1>
          <p className="text-xl max-w-3xl mx-auto opacity-90">
            Comprehensive Mathematics and Science coaching designed for Classes 10th, 11th & 12th
          </p>
        </div>
      </section>

      {/* Class Programs */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {classPrograms.map((program, index) => (
              <div key={index} className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                <div className="lg:col-span-2">
                  <Card className="card-elegant h-full">
                    <div className={`h-2 bg-gradient-to-r ${program.color}`}></div>
                    <CardHeader>
                      <div className="flex items-center space-x-4 mb-4">
                        <div className={`w-16 h-16 bg-gradient-to-r ${program.color} rounded-full flex items-center justify-center`}>
                          <program.icon className="w-8 h-8 text-white" />
                        </div>
                        <div>
                          <h2 className="text-3xl font-bold">{program.title}</h2>
                          <p className="text-lg text-gradient-accent font-semibold">{program.subtitle}</p>
                        </div>
                      </div>
                      <p className="text-muted-foreground text-lg">{program.description}</p>
                      
                      <div className="flex flex-wrap gap-2 mt-4">
                        {program.subjects.map((subject, idx) => (
                          <Badge key={idx} variant="secondary" className="px-3 py-1">
                            {subject}
                          </Badge>
                        ))}
                      </div>
                    </CardHeader>
                    
                    <CardContent>
                      <h3 className="text-xl font-semibold mb-4">Program Features</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {program.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center space-x-2">
                            <CheckCircle className="w-5 h-5 text-success flex-shrink-0" />
                            <span className="text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
                
                <div className="space-y-4">
                  <Card className="card-feature">
                    <CardContent className="p-6">
                      <h3 className="text-lg font-semibold mb-4">Program Details</h3>
                      <div className="space-y-3">
                        <div className="flex items-center space-x-3">
                          <Calendar className="w-5 h-5 text-primary" />
                          <span className="text-sm">Duration: {program.duration}</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <Users className="w-5 h-5 text-primary" />
                          <span className="text-sm">Batch Size: {program.batchSize}</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <Clock className="w-5 h-5 text-primary" />
                          <span className="text-sm">{program.timing}</span>
                        </div>
                      </div>
                      <Link to="/admission" className="block mt-6">
                        <Button className="w-full btn-hero">
                          Enroll Now
                          <ArrowRight className="ml-2 w-4 h-4" />
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Batch Timings */}
      <section className="py-20 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gradient-primary mb-4">
              Flexible Batch Timings
            </h2>
            <p className="text-lg text-muted-foreground">
              Choose the timing that works best for your schedule
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {batchTimings.map((batch, index) => (
              <Card key={index} className="card-feature text-center">
                <CardContent className="p-6">
                  <Clock className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{batch.type}</h3>
                  <p className="text-2xl font-bold text-gradient-primary mb-2">{batch.time}</p>
                  <p className="text-muted-foreground text-sm">{batch.suitable}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-6">
              Can't find a suitable timing? We offer flexible scheduling for group enrollments.
            </p>
            <Link to="/contact">
              <Button variant="outline" className="px-8 py-3">
                Discuss Custom Timing
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Syllabus Overview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gradient-primary mb-4">
              Curriculum Overview
            </h2>
            <p className="text-lg text-muted-foreground">
              Comprehensive coverage of all important topics
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Mathematics */}
            <Card className="card-elegant">
              <CardHeader>
                <h3 className="text-2xl font-bold text-gradient-primary">Mathematics</h3>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold text-lg mb-3 text-blue-600">Class 10th Topics</h4>
                  <div className="flex flex-wrap gap-2">
                    {subjects.mathematics.class10.slice(0, 6).map((topic, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs">{topic}</Badge>
                    ))}
                    <Badge variant="secondary" className="text-xs">+{subjects.mathematics.class10.length - 6} more</Badge>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-3 text-purple-600">Class 11th Topics</h4>
                  <div className="flex flex-wrap gap-2">
                    {subjects.mathematics.class11.slice(0, 6).map((topic, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs">{topic}</Badge>
                    ))}
                    <Badge variant="secondary" className="text-xs">+{subjects.mathematics.class11.length - 6} more</Badge>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-3 text-green-600">Class 12th Topics</h4>
                  <div className="flex flex-wrap gap-2">
                    {subjects.mathematics.class12.slice(0, 6).map((topic, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs">{topic}</Badge>
                    ))}
                    <Badge variant="secondary" className="text-xs">+{subjects.mathematics.class12.length - 6} more</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Science */}
            <Card className="card-elegant">
              <CardHeader>
                <h3 className="text-2xl font-bold text-gradient-accent">Science</h3>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold text-lg mb-3 text-blue-600">Class 10th Science</h4>
                  <div className="flex flex-wrap gap-2">
                    {subjects.science.class10.slice(0, 6).map((topic, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs">{topic}</Badge>
                    ))}
                    <Badge variant="secondary" className="text-xs">+{subjects.science.class10.length - 6} more</Badge>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-3 text-purple-600">Class 11th Physics</h4>
                  <div className="flex flex-wrap gap-2">
                    {subjects.science.physics11.slice(0, 5).map((topic, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs">{topic}</Badge>
                    ))}
                    <Badge variant="secondary" className="text-xs">+{subjects.science.physics11.length - 5} more</Badge>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-3 text-green-600">Class 12th Physics</h4>
                  <div className="flex flex-wrap gap-2">
                    {subjects.science.physics12.slice(0, 5).map((topic, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs">{topic}</Badge>
                    ))}
                    <Badge variant="secondary" className="text-xs">+{subjects.science.physics12.length - 5} more</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Your Learning Journey?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Choose your class and begin your path to academic excellence
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/admission">
              <Button className="btn-secondary text-lg px-8 py-4">
                Book Free Demo Class
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button 
                variant="outline" 
                className="text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-primary"
              >
                Talk to Our Counselor
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Classes;