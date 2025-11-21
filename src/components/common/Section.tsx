import React from 'react';

interface SectionProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
  padding?: 'sm' | 'md' | 'lg' | 'xl';
  background?: 'white' | 'gray' | 'black';
  fullWidth?: boolean;
}

export const Section: React.FC<SectionProps> = ({
  children,
  id,
  className = '',
  padding = 'lg',
  background = 'white',
  fullWidth = false,
}) => {
  const paddingClasses = {
    sm: 'py-8 sm:py-12',
    md: 'py-10 sm:py-16',
    lg: 'py-12 sm:py-20',
    xl: 'py-16 sm:py-32',
  };
  
  const backgroundClasses = {
    white: 'bg-primary-white',
    gray: 'bg-neutral-50',
    black: 'bg-primary-black text-primary-white',
  };
  
  return (
    <section 
      id={id}
      className={`${paddingClasses[padding]} ${backgroundClasses[background]} ${className}`}
    >
      {fullWidth ? (
        <>{children}</>
      ) : (
        <div className="container mx-auto px-3 sm:px-4">
          {children}
        </div>
      )}
    </section>
  );
};

export default Section;