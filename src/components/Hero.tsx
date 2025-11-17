
import React, { useEffect, useState } from 'react';

const Hero: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden">
      {/* Image Background */}
      <div className="absolute inset-0 h-full w-full">
        <div className="relative h-full w-full">
          <img 
            src="/lovable-uploads/main-pic-1.png" 
            alt="The View Preston Building" 
            className="object-cover object-center h-full w-full"
          />
          {/* Semi-transparent overlay to make the image darker */}
          <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
