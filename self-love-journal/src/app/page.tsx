import Image from "next/image";

export default function Home() {
  const subtitleOptions = [
    "30 Days of Daily Affirmations, Gratitude, and Confidence Boosting Exercises",
    "Guided Journal for Self-Care, Mindset Shifts, and Inner Strength",
    "Daily Prompts to Build Confidence, Self-Worth, and Positive Habits",
  ];

  const audience = [
    "Women aged 18–45 focused on intentional personal growth.",
    "Multi-passionate professionals, caregivers, and students seeking a quick daily reset.",
    "Journal lovers who want guided structure, compassion, and practical mindset coaching.",
  ];

  const differentiators = [
    "30 curated days blending gratitude, self-compassion, and confidence actions.",
    "Warm coaching voice, modern feminine visuals, and a consistent daily rhythm.",
    "Weekly reflections, habit tracking, and celebration pages to reinforce progress.",
    "Bonus affirmation cards, self-care menu, and completion certificate for reader delight.",
  ];

  const specs = [
    "Trim size 6\" x 9\" (15.24 x 22.86 cm) for portability and generous writing space.",
    "120 pages on cream paper, black ink, no bleed, 0.5\" top/bottom and 0.375\" inner/outer margins.",
    "Cover wrap size 12.52\" x 9.25\" including spine for 120 pages (cream stock).",
    "Glossy finish recommended; spine text: “Self-Love Journal for Women”.",
  ];

  const interiorFlow = [
    "Welcome letter, how-to-use guide, and mindset calibration exercises.",
    "Self-care menu, habit-stacking roadmap, and intention setting spreads.",
    "30 daily spreads (morning + evening) featuring affirmation, gratitude trio, confidence action, mood check, and reflection.",
    "Weekly deep-dive reflections, mood mosaic, and habit tracker pages.",
    "Celebration collage, resource list, and 30-day completion certificate.",
  ];

  const prompts = [
    "Day 1 • Define what self-love means for your present season.",
    "Day 5 • Compose a letter to your future, fully self-confident self.",
    "Day 8 • Write about a healthy boundary that protects your energy.",
    "Day 12 • Celebrate a support system and plan an appreciation gesture.",
    "Day 17 • Build a soundtrack or mantra stack that elevates your mood.",
    "Day 21 • Weekly reflection: Which affirmations moved you the most?",
    "Day 26 • Craft a compassionate mantra for tougher moments.",
    "Day 30 • Sign your confidence pledge and plan a celebration ritual.",
  ];

  const marketingPlan = [
    "Host a 7-day teaser on Instagram/TikTok featuring daily prompt snippets.",
    "Grow an email waitlist with a free printable affirmation card deck.",
    "Partner with three wellness creators for launch-week reviews and reels.",
    "Run targeted Amazon ads on “self-love journal”, “confidence workbook”, and “daily affirmations for women”.",
    "Launch a guided 30-day challenge via email or a private community to boost engagement and reviews.",
  ];

  const checklist = [
    "Finalize prompts, layout template, and typography pairings (Playfair Display + Poppins).",
    "Design interior in Canva, Affinity Publisher, or InDesign; export as high-res PDF with embedded fonts.",
    "Create full-wrap cover using provided color palette: blush, rose, plum, cream, ink.",
    "Upload interior and cover to KDP, set list price at $12.99, select relevant categories and keywords.",
    "Order proof copy, gather testimonials from beta readers, and schedule marketing content.",
  ];

  return (
    <div className="min-h-screen bg-rose-50 text-slate-800">
      <header className="relative overflow-hidden bg-gradient-to-br from-rose-100 via-rose-200 to-rose-300">
        <div className="absolute inset-0 opacity-40 mix-blend-multiply">
          <div className="absolute -top-20 left-10 h-64 w-64 rounded-full bg-rose-300 blur-3xl" />
          <div className="absolute bottom-10 right-10 h-72 w-72 rounded-full bg-pink-200 blur-3xl" />
        </div>
        <div className="relative mx-auto flex max-w-6xl flex-col gap-10 px-6 py-24 lg:flex-row lg:items-center lg:py-32">
          <div className="flex-1 space-y-6">
            <span className="inline-flex items-center rounded-full bg-white/70 px-6 py-2 text-sm font-semibold uppercase tracking-[0.3em] text-rose-500">
              KDP Blueprint
            </span>
            <h1 className="text-4xl font-bold text-rose-900 sm:text-5xl lg:text-6xl">
              Self-Love Journal for Women
            </h1>
            <p className="max-w-2xl text-lg leading-relaxed text-rose-900/70">
              Launch-ready strategy, prompts, design guidance, and marketing plan crafted to
              help women cultivate confidence, self-worth, and daily joy.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href="/self-love-journal-blueprint.pdf"
                className="inline-flex items-center justify-center rounded-full bg-rose-600 px-8 py-3 text-base font-semibold text-white shadow-lg shadow-rose-600/30 transition hover:bg-rose-700"
              >
                Download Printable Blueprint
              </a>
              <a
                href="#blueprint"
                className="inline-flex items-center justify-center rounded-full border border-rose-500 px-8 py-3 text-base font-semibold text-rose-600 transition hover:bg-white"
              >
                Explore Online Version
              </a>
            </div>
            <div className="rounded-2xl bg-white/70 p-6 shadow-lg backdrop-blur">
              <h2 className="text-sm font-semibold uppercase tracking-[0.25em] text-rose-500">
                Subtitle Ideas
              </h2>
              <ul className="mt-4 grid gap-3 text-sm text-rose-900/80 sm:grid-cols-3 sm:text-base">
                {subtitleOptions.map((option) => (
                  <li key={option} className="rounded-xl bg-rose-100/70 p-3">
                    {option}
                  </li>
                ))}
              </ul>
              <p className="mt-5 text-sm font-medium text-rose-900/60">
                Example Amazon Title:{" "}
                <span className="font-semibold text-rose-800">
                  Self-Love Journal for Women: 30 Days of Daily Affirmations, Guided Prompts,
                  and Self-Care Exercises to Build Confidence and Inner Strength
                </span>
              </p>
            </div>
          </div>
          <div className="flex-1">
            <div className="relative mx-auto max-w-md overflow-hidden rounded-3xl border-4 border-white shadow-2xl">
              <Image
                src="/cover.svg"
                alt="Self-Love Journal for Women Cover"
                width={800}
                height={1035}
                className="h-full w-full object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </header>

      <main id="blueprint" className="mx-auto max-w-5xl space-y-16 px-6 py-20">
        <section className="rounded-3xl bg-white p-10 shadow-xl">
          <h2 className="text-2xl font-semibold text-rose-900">Target Audience Snapshot</h2>
          <p className="mt-3 text-rose-800/70">
            Speak directly to women seeking practical self-love rituals that fit into busy
            lives and honor emotional wellbeing.
          </p>
          <ul className="mt-6 grid gap-4 sm:grid-cols-3">
            {audience.map((item) => (
              <li key={item} className="rounded-2xl border border-rose-100 bg-rose-50 p-4 text-sm text-rose-900/80">
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section className="grid gap-10 lg:grid-cols-2">
          <div className="rounded-3xl bg-white p-10 shadow-xl">
            <h3 className="text-xl font-semibold text-rose-900">Why This Journal Works</h3>
            <p className="mt-3 text-rose-800/70">
              Anchor the description and marketing around these differentiators to position
              the journal in a crowded marketplace.
            </p>
            <ul className="mt-6 space-y-4 text-sm text-rose-900/80">
              {differentiators.map((item) => (
                <li key={item} className="rounded-xl bg-rose-50 p-4">
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl bg-white p-10 shadow-xl">
            <h3 className="text-xl font-semibold text-rose-900">KDP Production Specs</h3>
            <p className="mt-3 text-rose-800/70">
              Dial in these settings in KDP’s paperback setup to ensure a seamless approval
              process and polished reader experience.
            </p>
            <ul className="mt-6 space-y-4 text-sm text-rose-900/80">
              {specs.map((item) => (
                <li key={item} className="flex items-start gap-3 rounded-xl bg-rose-50 p-4">
                  <span className="mt-1 h-2 w-2 rounded-full bg-rose-400" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="rounded-3xl bg-white p-10 shadow-xl">
          <h3 className="text-xl font-semibold text-rose-900">Interior Blueprint</h3>
          <div className="mt-6 grid gap-8 lg:grid-cols-[1.2fr_1fr]">
            <div>
              <p className="text-rose-800/70">
                Build or outsource the interior following this proven flow. Maintain a
                cohesive visual language throughout: Playfair Display for headings, Poppins
                for body text, and blush-to-rose accents.
              </p>
              <ul className="mt-6 space-y-4 text-sm text-rose-900/80">
                {interiorFlow.map((item) => (
                  <li key={item} className="rounded-xl bg-rose-50 p-4">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-3xl border border-dashed border-rose-200 bg-rose-50/70 p-8 text-sm text-rose-900/80">
              <h4 className="text-lg font-semibold text-rose-900">Daily Spread Snapshot</h4>
              <ul className="mt-4 space-y-2">
                <li>• Morning mantra + rewrite space</li>
                <li>• Gratitude trio prompts</li>
                <li>• Confidence action challenge</li>
                <li>• Mood + energy tracker</li>
                <li>• Evening reflection + self-compassion note</li>
                <li>• Free space for doodles or brain-dumps</li>
              </ul>
              <p className="mt-6 text-rose-800/70">
                Reinforce consistency: identical layout per day with subtle pattern shifts to
                signal progress without overwhelming the reader.
              </p>
            </div>
          </div>
        </section>

        <section className="grid gap-10 lg:grid-cols-2">
          <div className="rounded-3xl bg-white p-10 shadow-xl">
            <h3 className="text-xl font-semibold text-rose-900">Prompt Highlights</h3>
            <p className="mt-3 text-rose-800/70">
              Use these as teaser content on social media and inside the “Look Inside” preview.
            </p>
            <ul className="mt-6 grid gap-4 text-sm text-rose-900/80">
              {prompts.map((item) => (
                <li key={item} className="rounded-xl border border-rose-100 bg-rose-50 p-4">
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-5 text-xs uppercase tracking-[0.35em] text-rose-400">
              Full 30-day roadmap inside the downloadable PDF.
            </p>
          </div>
          <div className="rounded-3xl bg-white p-10 shadow-xl">
            <h3 className="text-xl font-semibold text-rose-900">Bonus Content</h3>
            <ul className="mt-6 space-y-3 text-sm text-rose-900/80">
              <li className="rounded-xl bg-rose-50 p-4">
                Self-care menu with 5-minute, 15-minute, and 60-minute reset ideas.
              </li>
              <li className="rounded-xl bg-rose-50 p-4">
                Habit tracker grid, mood mosaic coloring page, and resource hub.
              </li>
              <li className="rounded-xl bg-rose-50 p-4">
                Completion certificate and “Next Steps” coaching spread to maintain momentum.
              </li>
              <li className="rounded-xl bg-rose-50 p-4">
                Downloadable affirmation cards and QR code linking to audio affirmations.
              </li>
            </ul>
          </div>
        </section>

        <section className="rounded-3xl bg-white p-10 shadow-xl">
          <h3 className="text-xl font-semibold text-rose-900">Marketing & Launch Plan</h3>
          <p className="mt-3 text-rose-800/70">
            Activate your existing audience and reach new readers with this multi-channel launch.
          </p>
          <ul className="mt-6 space-y-4 text-sm text-rose-900/80">
            {marketingPlan.map((item) => (
              <li key={item} className="flex items-start gap-3 rounded-xl bg-rose-50 p-4">
                <span className="mt-1 h-2 w-2 rounded-full bg-rose-400" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="rounded-3xl bg-white p-10 shadow-xl">
          <h3 className="text-xl font-semibold text-rose-900">Metadata & Positioning</h3>
          <div className="mt-6 grid gap-8 lg:grid-cols-2">
            <div className="rounded-2xl bg-rose-50 p-6 text-sm text-rose-900/80">
              <h4 className="text-lg font-semibold text-rose-900">Categories</h4>
              <p className="mt-3">
                SELF-HELP / Personal Growth / Self-Esteem<br />
                BODY, MIND &amp; SPIRIT / Inspiration &amp; Personal Growth
              </p>
            </div>
            <div className="rounded-2xl bg-rose-50 p-6 text-sm text-rose-900/80">
              <h4 className="text-lg font-semibold text-rose-900">Keywords</h4>
              <p className="mt-3">
                self-love journal for women, guided self-care journal, daily affirmations book,
                confidence workbook for women, 30-day journaling challenge, mindset reset journal,
                women&apos;s gratitude journal
              </p>
            </div>
          </div>
        </section>

        <section className="rounded-3xl bg-rose-600 p-10 text-rose-50 shadow-xl">
          <h3 className="text-xl font-semibold">Production Checklist</h3>
          <p className="mt-3 text-rose-50/80">
            Move from concept to published journal in four straightforward stages.
          </p>
          <ul className="mt-6 space-y-4 text-sm">
            {checklist.map((item) => (
              <li key={item} className="flex items-start gap-3 rounded-xl bg-rose-500/30 p-4">
                <span className="mt-1 h-2 w-2 rounded-full bg-rose-200" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="rounded-3xl border border-rose-200 bg-white p-10 shadow-xl">
          <h3 className="text-xl font-semibold text-rose-900">Voice & Back Cover Draft</h3>
          <div className="mt-6 grid gap-8 lg:grid-cols-2">
            <div className="rounded-2xl bg-rose-50 p-6 text-sm text-rose-900/80">
              <h4 className="text-lg font-semibold text-rose-900">Brand Voice</h4>
              <p className="mt-3 leading-relaxed">
                Warm, encouraging, and sister-like. Blend practical mindset coaching with
                poetic prompts. Keep language inclusive and celebratory, focusing on steady
                progress over perfection.
              </p>
            </div>
            <div className="rounded-2xl bg-rose-50 p-6 text-sm text-rose-900/80">
              <h4 className="text-lg font-semibold text-rose-900">Back Cover Copy</h4>
              <p className="mt-3 leading-relaxed">
                &ldquo;You deserve a daily ritual that reminds you of your brilliance.&rdquo; The
                Self-Love Journal for Women is your guided companion for 30 transformative days.
                Inside you&apos;ll uncover heartfelt affirmations, gratitude prompts, confidence
                challenges, and reflective exercises designed to strengthen your self-worth. Brew
                some tea, light a candle, and let your capacity for joy expand&mdash;one intentional
                page at a time.
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-rose-900/90 py-8 text-center text-sm text-rose-100">
        Crafted for women honoring their self-love journey • agentic-0540a60c
      </footer>
    </div>
  );
}
