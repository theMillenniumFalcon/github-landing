import { ArrowRight, ChevronRight } from 'lucide-react';
import { cn } from '../../utils//cn';
import { useState } from 'react';

const LinkAction: React.FunctionComponent<
  React.LinkHTMLAttributes<HTMLLinkElement>
> = ({ className, ...attr }) => {
  const [mouse, setMouse] = useState(false);
  return (
    <button
      className={cn(
        'py-2 bg-transparent text-xl max-md:text-base font-semibold text-white flex flex-row items-center justify-center gap-2 hover:gap-3 transition-all',
        className,
      )}
      onMouseEnter={() => setMouse(true)}
      onMouseLeave={() => setMouse(false)}>
      <span className="hover-underline-animation">{attr?.children}</span>
      <span className="transition-all">
        {!mouse ? (
          <ChevronRight className="w-4 h-4" />
        ) : (
          <ArrowRight className="w-4 h-4" />
        )}
      </span>
    </button>
  );
};

export default LinkAction;
