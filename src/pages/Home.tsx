import { Link } from 'react-router-dom';
import {
  BookOpen, Users, Trophy, Star, Play, ArrowRight,
  GraduationCap, Target, Clock
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import heroImage from '@/assets/hero-education.jpg';

const Home = () => {
  const classLevels = [
    {
      title: "Class 10th",
      subjects: "Math & Science",
      description: "Clear basics and build confidence for board exams.",
      icon: BookOpen,
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "Class 11th",
      subjects: "Math & Science",
      description: "Strong foundation for 12th and competitive exams.",
      icon: GraduationCap,
      color: "from-purple-500 to-purple-600"
    },
    {
      title: "Class 12th",
      subjects: "Math & Science",
      description: "Score high in boards and prepare for your future.",
      icon: Trophy,
      color: "from-green-500 to-green-600"
    }
  ];

  const features = [
    {
      icon: Users,
      title: "Expert Teachers",
      description: "Learn from experienced and caring faculty."
    },
    {
      icon: Target,
      title: "Focused Learning",
      description: "Smart strategies for board exam success."
    },
    {
      icon: Clock,
      title: "Flexible Batches",
      description: "Choose batch timing that suits your schedule."
    },
    {
      icon: Trophy,
      title: "Top Results",
      description: "Our students consistently perform at the top."
    }
  ];

  const testimonials = [
    {
      name: "Priya Sharma",
      class: "Class 12th",
      score: "95%",
      text: "Disha Class helped me score high with smart and simple learning."
    },
    {
      name: "Rahul Kumar",
      class: "Class 10th",
      score: "92%",
      text: "Great teaching and easy to understand concepts."
    },
    {
      name: "Anita Singh",
      class: "Class 11th",
      score: "90%",
      text: "Best place to learn Math and Science deeply."
    }
  ];

  const handleWhatsApp = () => {
    window.open('https://wa.me/+918540890133?text=Hi! I\'m interested in classes at Disha Class. Can you share more info?', '_blank');
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary-glow to-blue-400"></div>
        <div className="absolute inset-0 bg-black/20"></div>
        <img
          src={heroImage}
          alt="Education Excellence"
          className="absolute inset-0 w-full h-full object-fit mix-blend-overlay opacity-30"
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <div className="animate-fade-in-up">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Learn Smarter with
              <span className="block text-yellow-300">Disha Class</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
              Trusted coaching for Classes 10th, 11th & 12th. Clear concepts, expert teachers, and complete support for boards & beyond.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/admission">
                <Button className="btn-hero text-lg px-8 py-4">
                  Book Free Demo Class
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Button
                variant="outline"
                className="text-lg px-8 py-4 border-white text-blue-500 hover:bg-blue-500 hover:text-white"
                onClick={handleWhatsApp}
              >
                Contact on WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gradient-primary mb-4">
              Why Choose Disha Class?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Every student can shine with the right guidance. At Disha Class, we focus on clear teaching, regular practice, and personal support.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="card-feature text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold">{feature.title}</h3>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Class Levels */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gradient-primary mb-4">
              Our Class Programs
            </h2>
            <p className="text-lg text-muted-foreground">
              Math & Science coaching tailored for every class level.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {classLevels.map((level, index) => (
              <Card key={index} className="card-elegant overflow-hidden">
                <div className={`h-2 bg-gradient-to-r ${level.color}`}></div>
                <CardHeader className="text-center pb-4">
                  <div className={`w-16 h-16 bg-gradient-to-r ${level.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <level.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold">{level.title}</h3>
                  <p className="text-lg font-semibold text-gradient-accent">{level.subjects}</p>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground mb-6">{level.description}</p>
                  <Link to="/classes">
                    <Button variant="outline" className="w-full">
                      Learn More
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* YouTube Previews */}
      <section className="py-20 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gradient-primary mb-4">
              Free Class Previews
            </h2>
            <p className="text-lg text-muted-foreground">
              Experience our teaching style on YouTube
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="card-elegant">
              <CardContent className="p-6">
                <div className="aspect-video rounded-lg overflow-hidden mb-4">
                  <iframe
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/wajPbbu__UY"
                    title="Math Class Preview"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                <h3 className="text-xl font-semibold mb-2">Class 10th – Quadratic Equations</h3>
                <p className="text-muted-foreground mb-4">Learn how we simplify complex topics with easy explanations.</p>
              </CardContent>
            </Card>

            <Card className="card-elegant">
              <CardContent className="p-6">
                <div className="aspect-video rounded-lg overflow-hidden mb-4">
                  <iframe
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/v9JJJV91ZCg"
                    title="Science Class Preview"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                <h3 className="text-xl font-semibold mb-2">Class 12th – Physics Laws</h3>
                <p className="text-muted-foreground mb-4">Understand difficult science topics with real-world examples.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>


      {/* Testimonials */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gradient-primary mb-4">
              Real Results. Real Stories.
            </h2>
            <p className="text-lg text-muted-foreground">
              What our students say about their journey at Disha Class
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="card-elegant">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-xl">{testimonial.score}</span>
                  </div>
                  <div className="flex justify-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 italic">"{testimonial.text}"</p>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.class}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Let’s Start Your Learning Journey!
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join Disha Class today and feel the difference in your studies—better understanding, better marks, and better confidence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/admission">
              <Button className="btn-secondary text-lg px-8 py-4">
                Book Free Demo
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Button
              variant="outline"
              className="bg-transparent text-lg px-8 py-4 border border-white text-white hover:bg-white hover:text-primary transition-colors duration-200"
              onClick={handleWhatsApp}
            >
              Call Now: +91 85408 90133
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
