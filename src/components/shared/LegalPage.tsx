interface LegalPageProps {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}

export default function LegalPage({
  title,
  subtitle,
  children,
}: LegalPageProps) {
  return (
    <div className="bg-black min-h-screen">
      <div className="xl:px-7 px-[18px] max-w-[1580px] mx-auto w-full py-8">
        <h1 className="text-accent font-semibold text-[26px] md:text-[32px] leading-[38px] mb-2">
          {title}
        </h1>
        {subtitle && (
          <div className="mb-6">
            <p className="text-white/60 text-sm">{subtitle}</p>
          </div>
        )}
        <div className="max-w-[980px] text-white/80 text-sm leading-relaxed legal-content">
          {children}
        </div>
      </div>
    </div>
  );
}
