import { Link } from "react-router-dom";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link to="/" className={`flex items-center space-x-2 ${className}`}>
      <div className="w-7 h-7 bg-primary rounded-sm flex items-center justify-center overflow-hidden">
        <span className="font-display font-bold text-xs text-primary-foreground tracking-tight">
          D<span className="inline-block rotate-180">D</span>
        </span>
      </div>
      <span className="font-display font-bold text-xl text-foreground">DA Services</span>
    </Link>
  );
}
