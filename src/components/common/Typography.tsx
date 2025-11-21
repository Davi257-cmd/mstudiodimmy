import React from 'react';

interface TypographyProps {
  children: React.ReactNode;
  variant?: 'hero' | 'h1' | 'h2' | 'h3' | 'h4' | 'body' | 'small' | 'caption';
  className?: string;
  align?: 'left' | 'center' | 'right';
  color?: 'black' | 'white' | 'gray' | 'gold';
  weight?: 'light' | 'normal' | 'medium' | 'semibold' | 'bold';
}

export const Typography: React.FC<TypographyProps> = ({
  children,
  variant = 'body',
  className = '',
  align = 'left',
  color = 'black',
  weight = 'normal',
}) => {
  const variantClasses = {
    hero: 'font-elegant text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold leading-tight',
    h1: 'font-elegant text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold',
    h2: 'font-elegant text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold',
    h3: 'font-elegant text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold',
    h4: 'font-elegant text-base sm:text-lg md:text-xl lg:text-2xl font-medium',
    body: 'font-sans text-sm sm:text-base md:text-lg',
    small: 'font-sans text-xs sm:text-sm md:text-base',
    caption: 'font-sans text-[10px] sm:text-xs md:text-sm',
  };
  
  const alignClasses = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  };
  
  const colorClasses = {
    black: 'text-primary-black',
    white: 'text-primary-white',
    gray: 'text-neutral-200',
    gold: 'text-gradient-gold',
  };
  
  const weightClasses = {
    light: 'font-light',
    normal: 'font-normal',
    medium: 'font-medium',
    semibold: 'font-semibold',
    bold: 'font-bold',
  };
  
  return (
    <div 
      className={`
        ${variantClasses[variant]}
        ${alignClasses[align]}
        ${colorClasses[color]}
        ${weightClasses[weight]}
        ${className}
      `}
    >
      {children}
    </div>
  );
};

export default Typography;