import Link from "next/link";

interface SectionHeaderProps {
  icon?: string;
  title: string;
  seeAllHref?: string;
  seeAllText?: string;
}

export default function SectionHeader({
  icon,
  title,
  seeAllHref,
  seeAllText = "Ver todo",
}: SectionHeaderProps) {
  return (
    <div className="flex items-center justify-between mb-4">
      <div className="flex items-center gap-2">
        {icon && <span className="text-xl">{icon}</span>}
        <h2 className="text-white font-semibold text-lg md:text-xl">
          {title}
        </h2>
      </div>

      {seeAllHref && (
        <div className="flex items-center gap-2">
          <button className="w-8 h-8 rounded-full border border-gray-border flex items-center justify-center text-white/50 hover:text-white hover:border-white/50 transition-colors">
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>
          <button className="w-8 h-8 rounded-full border border-gray-border flex items-center justify-center text-white/50 hover:text-white hover:border-white/50 transition-colors">
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
          <Link
            href={seeAllHref}
            className="text-white/60 hover:text-white text-sm transition-colors ml-1"
          >
            {seeAllText}
          </Link>
        </div>
      )}
    </div>
  );
}
