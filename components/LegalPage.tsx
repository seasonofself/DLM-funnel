import Link from "next/link";

export default function LegalPage({
  title,
  lastUpdated,
  children,
}: {
  title: string;
  lastUpdated: string;
  children: React.ReactNode;
}) {
  return (
    <main className="bg-cream min-h-screen">
      {/* header */}
      <div className="bg-ink py-16 sm:py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <Link
            href="/"
            className="inline-block font-sans text-sm text-cream/40 hover:text-cream/70 transition-colors mb-6"
          >
            &larr; Back to Season of Self
          </Link>
          <h1 className="font-display text-3xl sm:text-4xl text-cream">
            {title}
          </h1>
          <p className="font-sans text-sm text-cream/30 mt-3">
            Last updated: {lastUpdated}
          </p>
        </div>
      </div>

      {/* content */}
      <div className="max-w-3xl mx-auto px-6 py-16 sm:py-20">
        <div className="prose-legal font-sans text-ink/70 text-[15px] leading-relaxed space-y-6">
          {children}
        </div>
      </div>

      {/* mini footer */}
      <footer className="bg-ink py-10 px-6">
        <div className="max-w-3xl mx-auto flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <Link
            href="/"
            className="font-sans text-sm text-cream/40 hover:text-cream/70 transition-colors"
          >
            &larr; Back to Season of Self
          </Link>
          <p className="font-sans text-xs text-cream/20">
            &copy; {new Date().getFullYear()} Season of Self LLC. All rights
            reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}
