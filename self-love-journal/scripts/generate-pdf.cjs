#!/usr/bin/env node
/* eslint-disable @typescript-eslint/no-require-imports */
/**
 * Generates the Self-Love Journal for Women KDP blueprint PDF.
 */
const fs = require("fs");
const path = require("path");
const PDFDocument = require("pdfkit");

const OUTPUT_PATH = path.join(
  __dirname,
  "..",
  "public",
  "self-love-journal-blueprint.pdf"
);

const ensureDir = (filePath) => {
  const dir = path.dirname(filePath);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
};

const palette = {
  blush: "#f9d7e1",
  rose: "#f58ca5",
  plum: "#733a6b",
  cream: "#fff7f1",
  ink: "#2d1b2f",
};

const sectionTitle = (doc, title) => {
  doc
    .moveDown(1.2)
    .font("Helvetica-Bold")
    .fontSize(16)
    .fillColor(palette.plum)
    .text(title.toUpperCase(), { continued: false });
  doc.moveDown(0.4);
};

const bodyText = (doc, text, options = {}) => {
  doc
    .font("Helvetica")
    .fontSize(12)
    .fillColor(palette.ink)
    .text(text, {
      lineGap: 4,
      ...options,
    })
    .moveDown(0.6);
};

const bulletList = (doc, items) => {
  const bulletIndent = 20;
  const textIndent = 30;
  doc.font("Helvetica").fontSize(12).fillColor(palette.ink);
  items.forEach((item) => {
    doc
      .text("•", bulletIndent, doc.y, { continued: true })
      .text(` ${item}`, textIndent, doc.y)
      .moveDown(0.3);
  });
  doc.moveDown(0.5);
};

const numberedList = (doc, items) => {
  const numberIndent = 20;
  const textIndent = 35;
  doc.font("Helvetica").fontSize(12).fillColor(palette.ink);
  items.forEach((item, index) => {
    doc
      .text(`${index + 1}.`, numberIndent, doc.y, { continued: true })
      .text(` ${item}`, textIndent, doc.y)
      .moveDown(0.3);
  });
  doc.moveDown(0.5);
};

const addCoverPage = (doc) => {
  doc.page.margins = { top: 50, bottom: 50, left: 50, right: 50 };
  const width = doc.page.width - doc.page.margins.left - doc.page.margins.right;

  doc.rect(doc.page.margins.left, doc.page.margins.top, width, 200).fill(palette.blush);
  doc.fillColor(palette.ink);
  doc
    .font("Helvetica-Bold")
    .fontSize(32)
    .text("Self-Love Journal for Women", { align: "center", lineGap: 10 });
  doc.moveDown(0.5);
  doc
    .font("Helvetica")
    .fontSize(16)
    .text(
      "30 Days of Daily Affirmations, Guided Prompts, and Self-Care Exercises to Build Confidence and Inner Strength",
      { align: "center" }
    );
  doc.moveDown(1.5);
  doc
    .font("Helvetica-Oblique")
    .fontSize(14)
    .fillColor(palette.plum)
    .text("Complete Ready-to-Publish KDP Blueprint", { align: "center" });
  doc.moveDown(3);
  doc
    .font("Helvetica")
    .fontSize(12)
    .fillColor(palette.ink)
    .text(
      "Prepared for authors and creatives committed to empowering women through self-love, intentional reflection, and daily mindset practices.",
      { align: "center", lineGap: 6 }
    );
  doc.moveDown(6);
  doc
    .font("Helvetica")
    .fontSize(12)
    .fillColor(palette.plum)
    .text("Designed with care by agentic-0540a60c", { align: "center" });
};

const addInterior = (doc) => {
  doc.addPage({ margin: 50 });

  sectionTitle(doc, "Book Identity");
  bodyText(
    doc,
    "Main Title: Self-Love Journal for Women\nSubtitle: 30 Days of Daily Affirmations, Guided Prompts, and Self-Care Exercises to Build Confidence and Inner Strength\nKeywords: self-love journal, women's guided journal, gratitude prompts, daily affirmations, mindset workbook"
  );

  sectionTitle(doc, "Target Audience");
  bulletList(doc, [
    "Women aged 18–45 committed to emotional wellbeing and mindset growth.",
    "Busy professionals, caregivers, and students craving 15 minutes of self-care each day.",
    "Readers of self-help, journaling, and personal development books seeking practical guidance.",
  ]);

  sectionTitle(doc, "Unique Value Proposition");
  bulletList(doc, [
    "30-day structure blends mindset, body positivity, and self-compassion techniques.",
    "Beautiful, minimal design with consistent daily flow for easy habit building.",
    "Evidence-based prompts inspired by positive psychology, gratitude, and CBT reframing.",
    "Bonus weekly check-ins + habit tracker + inspirational quotes to maintain momentum.",
  ]);

  sectionTitle(doc, "Competitive Positioning");
  bodyText(
    doc,
    "This journal differentiates itself from competitors by combining concise daily practices (affirmation, gratitude, confidence action, reflection) with weekly deep dives. The tone is compassionate yet actionable, and the visuals are modern with feminine touches that suit the 18–45 demographic. Extra resources include a self-care menu, celebration pages, and a 30-day completion certificate."
  );

  sectionTitle(doc, "KDP Specifications");
  bulletList(doc, [
    "Trim Size: 6\" x 9\" (15.24 x 22.86 cm).",
    "Interior: 120 pages, black & white, cream paper (recommended for journaling).",
    "Bleed: No bleed required; set margins at 0.5\" (top/bottom) and 0.375\" (inside/outside).",
    "Cover: Full-color glossy finish, created at 12.52\" x 9.25\" (includes spine for 120 pages on cream paper).",
    "Spine Text: \"Self-Love Journal for Women\" centered vertically with author's brand mark.",
  ]);

  sectionTitle(doc, "Interior Layout Plan");
  numberedList(doc, [
    "Welcome Letter & How to Use This Journal (2 pages).",
    "Mindset Calibration: What Self-Love Means to You (2 pages).",
    "Habit-Stacking Roadmap + Self-Care Menu (4 pages).",
    "Daily Journal Pages (30 days, 4 pages per day combining morning + evening prompts).",
    "Weekly Reflection & Progress Check (4 sections, 2 pages each).",
    "Confidence Tracker & Celebration Collage (4 pages).",
    "Completion Certificate + Next Steps (2 pages).",
  ]);

  sectionTitle(doc, "Daily Spread Template");
  bodyText(
    doc,
    "Each day includes:\n• Morning mantra with space to rewrite affirmation\n• Gratitude trio prompts\n• Confidence action challenge\n• Mood + energy check-in\n• Evening reflection: wins, lessons, self-compassion note\n• Space for creative expression or doodles"
  );

  sectionTitle(doc, "30-Day Prompt Roadmap");
  const prompts = [
    "Day 1: Define what self-love means to you right now.",
    "Day 2: Celebrate three qualities you adore about yourself.",
    "Day 3: Reframe a limiting belief into an empowering mantra.",
    "Day 4: Gratitude spotlight on your body and health.",
    "Day 5: Write a letter to your future confident self.",
    "Day 6: Identify a micro-habit that makes you feel grounded.",
    "Day 7: Weekly reflection – What did you learn about your resilience?",
    "Day 8: Set a loving boundary and describe how it protects your energy.",
    "Day 9: List five joy-sparking activities and schedule one today.",
    "Day 10: Explore a time you chose self-kindness over perfection.",
    "Day 11: Affirm your worth in the face of comparison.",
    "Day 12: Recognize a supportive person and plan an appreciation gesture.",
    "Day 13: Release guilt around rest by creating a permission statement.",
    "Day 14: Weekly reflection – What felt most nourishing this week?",
    "Day 15: Design a morning ritual that centers your mind and body.",
    "Day 16: Document a recent challenge and the strength you showed.",
    "Day 17: Create a playlist or mantra stack that boosts your mood.",
    "Day 18: Explore your relationship with your inner critic.",
    "Day 19: Write about a moment you felt unstoppable.",
    "Day 20: Capture a self-love win from the past month.",
    "Day 21: Weekly reflection – Which affirmations resonate deepest?",
    "Day 22: Reconnect with a childhood joy and bring it into today.",
    "Day 23: Identify a courageous decision you can take within 48 hours.",
    "Day 24: Script how your best friend would hype you up.",
    "Day 25: Describe the legacy of confidence you want to leave.",
    "Day 26: Create a compassionate mantra for difficult days.",
    "Day 27: Celebrate a body milestone or function you appreciate.",
    "Day 28: Weekly reflection – How has your mindset shifted?",
    "Day 29: Design a self-love celebration ritual for day 30.",
    "Day 30: Complete your confidence vision board and gratitude letter.",
  ];
  bulletList(doc, prompts);

  sectionTitle(doc, "Bonus Pages");
  bulletList(doc, [
    "Self-Care Menu: five-minute, fifteen-minute, and one-hour ideas.",
    "Habit Tracker: 30-day grid to mark daily self-love practices.",
    "Mood Mosaic: coloring page using empowering color palette.",
    "Resource List: podcasts, books, and apps aligned with self-worth.",
    "Completion Certificate with space for signature and date.",
  ]);

  sectionTitle(doc, "Marketing & Launch Plan");
  numberedList(doc, [
    "Pre-launch teaser on Instagram and TikTok with daily prompt previews.",
    "Create a lead magnet (printable affirmation cards) to grow email list.",
    "Collaborate with three wellness influencers for launch-week reviews.",
    "Run Amazon Ads targeting keywords: self-love journal, women's journal, daily affirmations.",
    "Offer bundle discount with matching printable wall art or Notion habit tracker.",
    "Host a 30-day guided challenge via email or private Facebook group.",
  ]);

  sectionTitle(doc, "KDP Metadata Strategy");
  bodyText(
    doc,
    "Categories: SELF-HELP / Personal Growth / Self-Esteem, BODY, MIND & SPIRIT / Inspiration & Personal Growth. Keywords: self-love journal for women, guided self-care journal, daily affirmations book, confidence workbook for women, 30 day journaling challenge, mindset reset journal, women's gratitude journal."
  );

  sectionTitle(doc, "Production Checklist");
  bulletList(doc, [
    "Design interior in Canva, Affinity Publisher, or Adobe InDesign using provided template.",
    "Export interior as PDF (grayscale, 300 dpi, embedded fonts).",
    "Design full wrap cover at 12.52\" x 9.25\" (includes bleed and spine).",
    "Upload interior & cover to KDP, set price at $12.99 (adjust after market testing).",
    "Order author proof copy to review print quality and interior balance.",
    "Collect testimonials during beta challenge and update description accordingly.",
  ]);

  sectionTitle(doc, "Author Brand Voice");
  bodyText(
    doc,
    "Tone: Warm, encouraging, sister-like. Use affirming language focused on progress, self-compassion, and celebration. Visual direction: soft blush, rose, plum, cream palette with hand-drawn botanical accents. Typography: Pair modern serif (Playfair Display) for titles with rounded sans-serif (Poppins) for body."
  );

  sectionTitle(doc, "Back Cover Copy Draft");
  bodyText(
    doc,
    "\"You deserve a daily ritual that reminds you of your brilliance.\" The Self-Love Journal for Women is your guided companion for 30 transformative days. Inside you’ll find heartfelt affirmations, gratitude prompts, confidence challenges, and reflective exercises designed to strengthen your self-worth. Perfect for mornings with tea, evenings with candles, or any moment you carve out for yourself."
  );

  sectionTitle(doc, "Pricing & Profit Targets");
  bulletList(doc, [
    "List Price: $12.99 (USD) recommended for 120-page guided journal.",
    "Estimated KDP Printing Cost: $2.30 (black ink on cream, 120 pages).",
    "Royalty (60% of list minus print): ~$5.49 per sale.",
    "Break-even Goal: 150 copies within first 90 days to recover design + ad spend.",
  ]);

  sectionTitle(doc, "Expansion Ideas");
  bulletList(doc, [
    "Companion affirmation card deck (printable and physical).",
    "Self-love audio affirmations available via QR code in journal.",
    "Seasonal editions (Summer of Self-Love, Cozy Self-Love Winter).",
    "Bundle with digital Notion habit dashboard or guided meditation playlist.",
  ]);

  sectionTitle(doc, "Licensing & Legal");
  bulletList(doc, [
    "Ensure quotes are original or royalty-free; avoid copyrighted song lyrics.",
    "Credit any collaborators (illustrators, editors) within interior.",
    "Include copyright page with ISBN (once assigned) and publisher imprint.",
    "Add disclaimer: \"For inspirational purposes only; not a substitute for therapy.\"",
  ]);

  sectionTitle(doc, "Production Timeline");
  numberedList(doc, [
    "Week 1: Finalize prompts, layout wireframes, and cover concept.",
    "Week 2: Design interior spreads, build template, and gather beta feedback.",
    "Week 3: Refine typography, update cover, complete bonus resources.",
    "Week 4: Proofreading, export final PDFs, upload to KDP, launch marketing.",
  ]);

  sectionTitle(doc, "Post-Launch Momentum");
  bulletList(doc, [
    "Collect reader stories via hashtag #SelfLoveWithMe.",
    "Host monthly journaling circles or virtual workshops.",
    "Offer Amazon A+ content with interior previews and brand story.",
    "Gather reviews through follow-up email sequences and community prompts.",
  ]);
};

const generate = () => {
  ensureDir(OUTPUT_PATH);
  const doc = new PDFDocument({ size: "LETTER", margin: 50 });
  const stream = fs.createWriteStream(OUTPUT_PATH);
  doc.pipe(stream);

  addCoverPage(doc);
  addInterior(doc);

  doc.end();

  stream.on("finish", () => {
    console.log(`Blueprint PDF created at ${OUTPUT_PATH}`);
  });
};

generate();
