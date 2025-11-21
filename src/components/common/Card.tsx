import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  padding?: 'sm' | 'md' | 'lg';
  shadow?: 'sm' | 'md' | 'lg';
  rounded?: 'sm' | 'md' | 'lg';
  hover?: boolean;
}

export const Card: React.FC<CardProps> = ({
  children,
  className = '',
  padding = 'md',
  shadow = 'md',
  rounded = 'lg',
  hover = false,
}) => {
  const paddingClasses = {
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
  };
  
  const shadowClasses = {
    sm: 'shadow-sm',
    md: 'shadow-md',
    lg: 'shadow-lg',
  };
  
  const roundedClasses = {
    sm: 'rounded-sm',
    md: 'rounded-md',
    lg: 'rounded-lg',
  };
  
  const hoverClasses = hover 
    ? 'hover:transform hover:-translate-y-2 hover:shadow-lg hover:border-accent-gold transition-all duration-300'
    : '';
  
  return (
    <div 
      className={`
        bg-primary-white border border-neutral-100
        ${paddingClasses[padding]}
        ${shadowClasses[shadow]}
        ${roundedClasses[rounded]}
        ${hoverClasses}
        ${className}
      `}
    >
      {children}
    </div>
  );
};

export default Card;