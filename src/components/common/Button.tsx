import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  onClick,
  disabled = false,
  className = '',
  type = 'button',
}) => {
  const baseClasses = 'font-sans font-semibold uppercase tracking-wider transition-all duration-300 cursor-pointer';
  
  const variantClasses = {
    primary: 'btn-primary hover:transform hover:-translate-y-1',
    secondary: 'btn-secondary hover:bg-black hover:text-white',
    outline: 'bg-transparent border-2 border-accent-gold text-accent-gold hover:bg-accent-gold hover:text-white',
  };
  
  const sizeClasses = {
    sm: 'px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm',
    md: 'px-6 sm:px-8 py-2 sm:py-3 text-sm sm:text-base',
    lg: 'px-8 sm:px-12 py-3 sm:py-4 text-base sm:text-lg',
  };
  
  const disabledClasses = disabled ? 'opacity-50 cursor-not-allowed' : '';
  
  // Check if button is full width - if not, add min-width
  const isFullWidth = className.includes('w-full');
  const minWidthClasses = !isFullWidth ? {
    sm: 'min-w-[120px] sm:min-w-[140px]',
    md: 'min-w-[140px] sm:min-w-[160px]',
    lg: 'min-w-[160px] sm:min-w-[200px]',
  }[size] : '';
  
  // For full width buttons, allow text wrapping on mobile; otherwise no-wrap
  const whitespaceClass = isFullWidth ? 'whitespace-normal sm:whitespace-nowrap' : 'whitespace-nowrap';
  
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${minWidthClasses} ${disabledClasses} ${whitespaceClass} ${className} flex-shrink-0`}
    >
      {children}
    </button>
  );
};

export default Button;