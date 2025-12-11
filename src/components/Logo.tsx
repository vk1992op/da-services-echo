import { Link } from "react-router-dom";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link to="/" className={`flex items-center space-x-2 ${className}`}>
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-7 h-7">
        <rect width="28" height="28" rx="2" className="fill-primary"/>
        <text x="3" y="19" fontFamily="Inter, system-ui, sans-serif" fontSize="13" fontWeight="700" className="fill-primary-foreground">D</text>
        <g transform="rotate(180 18.5 14)">
          <text x="14" y="19" fontFamily="Inter, system-ui, sans-serif" fontSize="13" fontWeight="700" className="fill-primary-foreground">D</text>
        </g>
      </svg>
      <span className="font-display font-bold text-xl text-foreground">DA Services</span>
    </Link>
  );
}
