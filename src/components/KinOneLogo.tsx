import { Link } from "react-router-dom";

const KinOneLogo = ({ className = "" }: { className?: string }) => {
  return (
    <Link to="/" className={`flex items-center gap-2 ${className}`}>
      <div className="relative">
        {/* Overlapping circles motif */}
        <div className="flex -space-x-2">
          <div className="w-8 h-8 rounded-full bg-coral shadow-soft" />
          <div className="w-8 h-8 rounded-full bg-marigold shadow-soft" />
          <div className="w-8 h-8 rounded-full bg-lavender shadow-soft" />
        </div>
      </div>
      <span className="text-2xl font-bold text-foreground">
        Da<span className="text-coral">mosco</span>
      </span>
    </Link>
  );
};

export default KinOneLogo;
