import { Link } from "react-router-dom";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link to="/" className={`flex items-center space-x-2 ${className}`}>
      <div className="w-8 h-8 bg-primary rounded-sm flex items-center justify-center overflow-hidden p-0.5">
        <span className="font-display font-bold text-base text-primary-foreground leading-none flex items-center -tracking-[0.15em]">
          D<span className="inline-block rotate-180 -ml-[0.1em]">D</span>
        </span>
      </div>
      <span className="font-display font-bold text-xl text-foreground">DA Services</span>
    </Link>
  );
}
