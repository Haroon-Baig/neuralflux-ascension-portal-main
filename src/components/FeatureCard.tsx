
import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  className?: string;
  delay?: number;
}

const FeatureCard = ({
  icon,
  title,
  description,
  className,
  delay = 0
}: FeatureCardProps) => {
  const delayClass = delay ? `animate-delay-${delay}` : '';

  return (
    <div 
      className={cn(
        'glass rounded-xl p-6 transition-all duration-500 hover:shadow-[0_0_30px_rgba(14,165,233,0.2)] border-neuro-blue/20 opacity-0 animate-fade-in-up',
        delayClass,
        className
      )}
      style={{ animationDelay: `${delay}ms`, animationFillMode: 'forwards' }}
    >
      <div className="mb-4 p-3 rounded-lg bg-neuro-blue/10 inline-block text-neuro-blue">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
      <p className="text-white/70 leading-relaxed">{description}</p>
    </div>
  );
};

export default FeatureCard;
