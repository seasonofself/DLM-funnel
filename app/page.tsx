import Link from "next/link";

export default function Home() {
  const variants = [
    {
      id: "a",
      name: "Vibrant",
      desc: "Lazy Millionaire inspired — bold colors, marker highlights, floating shapes, playful energy, Gen Z vibes",
      color: "bg-terracotta",
    },
    {
      id: "b",
      name: "Serene",
      desc: "Open Meditation inspired — elegant whitespace, large photography, minimal decoration, premium calm",
      color: "bg-sage",
    },
    {
      id: "c",
      name: "Bold Convert",
      desc: "High-conversion focused — dark hero, gradient CTAs, trust badges, urgency elements, strong contrast",
      color: "bg-ink",
    },
    {
      id: "d",
      name: "Fresh Magazine",
      desc: "Photo-editorial hybrid — dynamic cards, rich visual hierarchy, colorful sections, modern and fun",
      color: "bg-dusty-blue",
    },
  ];

  return (
    <main className="min-h-screen bg-cream py-16 px-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="font-display text-4xl sm:text-5xl font-bold text-ink mb-3">
          Dream Life Mapping
        </h1>
        <p className="font-sans text-lg text-ink/50 mb-12">
          Choose a variant to preview. Each is a complete, mobile-first landing page.
        </p>

        <div className="space-y-4">
          {variants.map((v) => (
            <Link
              key={v.id}
              href={`/variant-${v.id}`}
              className="group block p-6 bg-white rounded-2xl shadow-soft hover:shadow-lifted transition-all duration-300 border border-ink/5"
            >
              <div className="flex items-start gap-4">
                <div className={`w-3 h-3 rounded-full ${v.color} mt-2 flex-shrink-0`} />
                <div>
                  <h2 className="font-display text-xl font-semibold text-ink group-hover:text-terracotta transition-colors">
                    Variant {v.id.toUpperCase()} — {v.name}
                  </h2>
                  <p className="font-sans text-sm text-ink/45 mt-1">{v.desc}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
