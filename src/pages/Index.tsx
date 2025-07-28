// Update this page (the content is just a fallback if you fail to update the page)

import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-muted to-background">
      <div className="text-center px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-gradient-primary mb-4">
          Welcome to Disha Class
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground mb-6">
          A modern learning platform for Math & Science – built for students of Class 10, 11 & 12.
        </p>
        <Link to="/home">
          <Button className="text-lg px-6 py-3 rounded-xl shadow-md">
            🚀 Visit Website
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Index;
