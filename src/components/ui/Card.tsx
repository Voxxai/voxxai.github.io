import React from 'react';
import { cn } from '@/lib/utils';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'hoverGlow';
  children: React.ReactNode;
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ variant = 'default', className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'bg-white/5 border border-white/10 rounded-xl p-8 backdrop-blur-xl',
          'transition-all duration-300',
          variant === 'hoverGlow' && [
            'hover:border-neonRed/60',
            'hover:shadow-[0_0_30px_rgba(255,8,68,0.3)]',
          ],
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = 'Card';
