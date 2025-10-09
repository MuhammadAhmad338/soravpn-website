// components/section.tsx
import React from 'react'

interface SectionProps {
  children: React.ReactNode;
  isHeroSection?: boolean;
  className?: string;
  id?: string;
  background?: 'light' | 'dark' | 'gradient';
  padding?: 'small' | 'medium' | 'large';
}

const Section = ({ 
  children, 
  className = '', 
  id,
  isHeroSection = false,
  background = 'light',
  padding = 'medium'
}: SectionProps) => {
  
  const backgroundStyles = {
    light: 'bg-white',
    dark: 'bg-gray-900 text-white',
    gradient: 'bg-gradient-to-br from-blue-500 to-purple-600 text-white'
  };

  const paddingStyles = {
    small: 'py-8',
    medium: 'py-12',
    large: 'py-16'
  };

  return (
    <section 
      id={id}
      className={`${backgroundStyles[background]} ${paddingStyles[padding]} ${isHeroSection ? 'min-h-[calc(100vh-5rem)]' : ''} ${className}`}
    >
      <div className="container mx-auto px-4">
        {children}
      </div>
    </section>
  );
}

export default Section;