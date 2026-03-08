export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  author: { name: string; role: string };
  featured?: boolean;
  trending?: boolean;
  tags: string[];
  content: string[];
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    slug: "tpo-free-gels-european-salons",
    title: "TPO-Free Gels: Why European Salons Are Making the Switch",
    excerpt:
      "Understanding the science behind TPO-free formulas and why they're becoming the new industry standard for professional nail technicians.",
    category: "Education",
    date: "Feb 20, 2026",
    readTime: "5 min",
    image:
      "https://images.unsplash.com/photo-1766940095250-5c7715ab57ea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3NtZXRpYyUyMGxhYm9yYXRvcnklMjBzY2llbmNlJTIwc2tpbmNhcmV8ZW58MXx8fHwxNzcyMTE4NjA1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    author: { name: "Dr. Laura Kask", role: "Product Scientist" },
    featured: true,
    tags: ["TPO-Free", "EU Regulation", "Safety", "Gel Polish"],
    content: [
      "The European nail industry is undergoing a significant shift. As regulatory bodies tighten requirements around photoinitiators in UV/LED-cured cosmetics, one ingredient has come under particular scrutiny: Trimethylbenzoyl Diphenylphosphine Oxide, commonly known as TPO.",
      "TPO has been a staple photoinitiator in gel polishes for years, prized for its efficient curing properties under LED light. However, growing evidence suggests that TPO can cause skin sensitisation, particularly in clients with prolonged or repeated exposure. The European Commission's Scientific Committee on Consumer Safety (SCCS) has flagged concerns, leading many professional brands to reformulate.",
      "## What Makes TPO-Free Formulas Different?",
      "TPO-free gels use alternative photoinitiators that maintain excellent curing performance without the sensitisation risk. These next-generation formulas typically employ a blend of safer initiators that work synergistically to achieve full cure depth, proper adhesion, and long-lasting wear.",
      "The key advantages of TPO-free formulations include reduced risk of contact allergies for both technicians and clients, compliance with upcoming EU cosmetic regulations, same or improved wear time compared to traditional formulas, and better compatibility with sensitive skin clients.",
      "## The Professional Perspective",
      "For salon owners and independent nail technicians, switching to TPO-free products isn't just about compliance — it's a business advantage. Clients are increasingly informed about ingredient safety. Offering TPO-free services positions your salon as forward-thinking and client-focused.",
      "\"We switched our entire gel line to TPO-free six months ago,\" shares Maria Tamm, owner of Studio M in Tallinn. \"Not a single client has reported any sensitivity issues since. The wear time is actually better than what we had before.\"",
      "## Making the Switch",
      "Transitioning doesn't have to be overwhelming. Start by auditing your current product lineup. Check ingredient lists for TPO and BAPO (another photoinitiator under review). Then, test TPO-free alternatives from trusted brands in your workflow.",
      "At nanails.eu, our entire Holy Molly gel polish line is formulated without TPO. Each shade is EU-certified, salon-tested, and available in both full-size and trial formats so you can experience the difference firsthand.",
    ],
  },
  {
    id: "2",
    slug: "spring-2026-colour-forecast",
    title: "Spring 2026 Colour Forecast: Shades Every Nail Pro Should Stock",
    excerpt:
      "From soft lavenders to warm terracotta — the trending palettes that clients will be requesting this season.",
    category: "Trends",
    date: "Feb 14, 2026",
    readTime: "4 min",
    image:
      "https://images.unsplash.com/photo-1769867360185-0f91f999d571?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcHJpbmclMjBwYXN0ZWwlMjBjb2xvciUyMHBhbGV0dGUlMjBhZXN0aGV0aWN8ZW58MXx8fHwxNzcyMTE4NjAzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    author: { name: "Sofia Reins", role: "Colour Trend Analyst" },
    trending: true,
    tags: ["Trends", "Spring 2026", "Colour", "Palette"],
    content: [
      "Every season brings a fresh wave of colour inspiration, and Spring 2026 is no exception. After a winter dominated by deep burgundies and moody neutrals, clients are ready for something brighter — but still sophisticated.",
      "This season's palette is a study in contrasts: ethereal pastels meet earthy warmth, while unexpected pops of saturated colour add drama to even the simplest nail sets.",
      "## The Key Palettes",
      "**Soft Lavender & Lilac** — Pantone's influence continues with dreamy purple tones. Think soft lilac crèmes paired with sheer shimmer topcoats. Perfect for the client who wants colour without commitment. Our Pantone 9 and Pantone 12 shades nail this trend perfectly.",
      "**Warm Terracotta & Sienna** — Earthy clay tones are having a major moment. These warm neutrals work across all skin tones and feel both modern and timeless. Stock up on rust, adobe, and warm nude shades.",
      "**Pistachio & Sage** — Green continues its reign, but this season it's softer and more muted. Sage and pistachio greens read as sophisticated neutrals, perfect for clients who want something different without being too bold.",
      "**Butter Yellow & Vanilla** — Replacing the stark whites of last season, creamy yellows and warm vanillas bring a sunlit quality to nail sets. Pair with gold chrome accents for a luxury finish.",
      "## How to Stock Smart",
      "Don't overhaul your entire colour wall at once. Instead, add 2–3 key shades from each palette family. Focus on versatile crème finishes first, then supplement with shimmer and glitter options for nail art clients.",
      "Pro tip: Create a \"Spring Menu\" card for your station highlighting seasonal colour combinations. Clients love visual inspiration, and it helps drive sales of specific shades.",
      "Browse our full Spring 2026 collection at nanails.eu — with shade-matching guides and combination suggestions for every palette.",
    ],
  },
  {
    id: "3",
    slug: "profitable-nail-station-equipment",
    title: "How to Set Up a Profitable Nail Station: Equipment Checklist",
    excerpt:
      "Essential salon equipment guide — from LED lamps to dust collectors — curated for professionals starting out.",
    category: "Business",
    date: "Feb 8, 2026",
    readTime: "6 min",
    image:
      "https://images.unsplash.com/photo-1763873993447-1d0be71a96d9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWF1dHklMjBzYWxvbiUyMGludGVyaW9yJTIwbWluaW1hbGlzdHxlbnwxfHx8fDE3NzIxMTg2MDR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    author: { name: "Kristina Pärn", role: "Business Consultant" },
    tags: ["Business", "Equipment", "Startup", "Salon"],
    content: [
      "Starting a nail business is exciting, but the initial equipment investment can feel overwhelming. Whether you're setting up a home studio or leasing salon space, having the right tools from day one sets you up for professional results and satisfied clients.",
      "We've compiled this comprehensive checklist based on interviews with 50+ successful nail professionals across the Baltics. Here's everything you need — and what you can skip.",
      "## Essential Equipment (Must-Have)",
      "**LED/UV Lamp** — Invest in a quality 48W+ LED lamp with timer settings. Cheap lamps lead to improper curing, which causes lifting and client complaints. Budget: €80–150. Our recommendation: look for dual-wavelength lamps that cure all gel types.",
      "**E-File / Electric Nail Drill** — A professional-grade e-file speeds up prep and shaping dramatically. Look for variable speed (0–35,000 RPM), low vibration, and a comfortable grip. Budget: €120–250.",
      "**Dust Collector** — Non-negotiable for health and professionalism. Desktop models with HEPA filters start around €60. Built-in table collectors are ideal for permanent stations. Your lungs will thank you.",
      "**Manicure Table & Chair** — Ergonomics matter more than aesthetics initially. Ensure your table height allows relaxed shoulders, and invest in a chair with adjustable height and lumbar support. Budget: €200–500 for both.",
      "## Product Starter Kit",
      "Start with a focused product range rather than buying everything at once. You'll need a base coat, top coat, 12–15 core gel polish colours, builder gel in 2–3 shades, prep and cleanser solutions, and basic nail art supplies (foils, glitter, thin brushes).",
      "## The Smart Investment Strategy",
      "Spend more on equipment that directly affects service quality (lamp, e-file) and save on items you can upgrade later (storage, decor). Track which services generate the most revenue in your first 3 months, then invest accordingly.",
      "Visit nanails.eu/professional for curated starter bundles with everything on this list — plus free shipping on your first professional order.",
    ],
  },
  {
    id: "4",
    slug: "builder-gel-application-mistakes",
    title: "Builder Gel Application: Common Mistakes and How to Fix Them",
    excerpt:
      "Master the apex, avoid lifting, and achieve flawless structure — pro tips from certified educators.",
    category: "Techniques",
    date: "Jan 30, 2026",
    readTime: "7 min",
    image:
      "https://images.unsplash.com/photo-1659391542239-9648f307c0b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuYWlsJTIwc2Fsb24lMjBtYW5pY3VyZSUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NzIxMDgxMzB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    author: { name: "Anna Veeber", role: "Certified Nail Educator" },
    tags: ["Techniques", "Builder Gel", "Education", "Pro Tips"],
    content: [
      "Builder gel is one of the most versatile products in a nail technician's toolkit. It creates structure, adds strength, and allows for beautiful sculpted extensions. But it's also one of the most common sources of frustration for both new and experienced techs.",
      "After teaching over 200 workshops, I've identified the five most common builder gel mistakes — and exactly how to fix them.",
      "## Mistake #1: Applying Too Much Product",
      "The most frequent error. Technicians pile on product thinking more means stronger. In reality, thick applications cure unevenly, create an unnatural-looking nail, and are more prone to cracking. Apply in thin, controlled layers. Build up gradually. Each layer should be no thicker than a credit card.",
      "## Mistake #2: Ignoring the Apex",
      "The apex — the highest point of the nail's arch — is what gives structural integrity. Without a properly placed apex (typically at the stress point, about 1/3 from the cuticle), nails will break at the weakest point. Practice viewing nails from the side to check your apex placement.",
      "## Mistake #3: Flooding the Cuticle Area",
      "Product that touches skin or cuticle will lift. Always leave a tiny margin (0.5–1mm) around the cuticle and sidewalls. If product does flow onto skin, clean it up BEFORE curing. Once cured, lifting is inevitable.",
      "## Mistake #4: Improper Curing",
      "Under-curing is a silent killer of gel manicures. Ensure your lamp is powerful enough, bulbs aren't expired, and you're curing for the full recommended time. Flash-curing (short initial cure) is great for preventing heat spikes, but always follow with a full cure cycle.",
      "## Mistake #5: Skipping Prep",
      "No amount of premium product will compensate for poor nail preparation. A proper prep routine includes pushing and cleaning cuticles, removing the shine from the natural nail, dehydrating, and applying a thin primer layer. Spend 60% of your time on prep and 40% on application — your retention rates will skyrocket.",
      "Practice these fundamentals consistently, and you'll see dramatic improvements in your builder gel results within weeks.",
    ],
  },
  {
    id: "5",
    slug: "client-retention-strategies-nail-salon",
    title: "5 Client Retention Strategies That Actually Work for Nail Salons",
    excerpt:
      "Beyond loyalty cards — data-driven approaches to keep clients rebooking and referring friends.",
    category: "Business",
    date: "Jan 22, 2026",
    readTime: "5 min",
    image:
      "https://images.unsplash.com/photo-1599316329891-19df7fa9580d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMGhhbmRzJTIwbWFuaWN1cmUlMjBlbGVnYW50fGVufDF8fHx8MTc3MjExNjcxNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    author: { name: "Kristina Pärn", role: "Business Consultant" },
    tags: ["Business", "Retention", "Marketing", "Growth"],
    content: [
      "Acquiring a new client costs 5–7 times more than retaining an existing one. Yet most nail salon owners spend the majority of their marketing budget on attraction rather than retention.",
      "Here are five proven strategies that successful Baltic nail salons use to keep their chairs full and their clients loyal.",
      "## 1. The 48-Hour Follow-Up",
      "Send a personalised message 48 hours after each appointment. Not a generic \"thanks for visiting\" — reference specific details. \"Hi Anna, hope you're loving the sage green set! Remember, if you need any repairs in the first week, it's on us.\" This simple gesture dramatically increases rebooking rates.",
      "## 2. Smart Rebooking at Checkout",
      "Train yourself to rebook before the client leaves. \"Your nails will look best with a refresh in 3 weeks — shall I book you in for March 15th?\" Having the next appointment scheduled reduces no-shows by 60%.",
      "## 3. Seasonal Colour Previews",
      "Send existing clients a sneak peek of new seasonal colours before posting on social media. This VIP treatment makes them feel valued and drives bookings around colour launches.",
      "## 4. Referral Rewards That Clients Actually Want",
      "Skip the generic 10% discount. Instead, offer a free nail art upgrade or a premium hand treatment. Experiential rewards feel more valuable and give clients a reason to try something new.",
      "## 5. Birthday Month Perks",
      "A birthday message with a genuine perk (not just a discount code) creates emotional connection. Consider a complimentary hand massage upgrade or a free gel colour change during their birthday month.",
      "Implementing even two of these strategies consistently will noticeably improve your client retention within 60 days.",
    ],
  },
  {
    id: "6",
    slug: "nail-art-chrome-techniques-2026",
    title: "Chrome Nail Art: Advanced Techniques for Mirror-Finish Effects",
    excerpt:
      "From classic silver chrome to aurora powder — mastering reflective nail art that clients love.",
    category: "Techniques",
    date: "Jan 15, 2026",
    readTime: "6 min",
    image:
      "https://images.unsplash.com/photo-1771441580033-3979bc33627b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuYWlsJTIwYXJ0JTIwZGVzaWduJTIwdHJlbmR5fGVufDF8fHx8MTc3MjEwODEzMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    author: { name: "Anna Veeber", role: "Certified Nail Educator" },
    tags: ["Techniques", "Chrome", "Nail Art", "Advanced"],
    content: [
      "Chrome nails remain one of the most requested nail art effects in salons worldwide. The mirror-like finish captivates clients and commands premium pricing. But achieving a flawless chrome application requires understanding the science behind the technique.",
      "## The Foundation Matters",
      "Chrome powder reflects whatever is underneath it. A smooth, even base is non-negotiable. Apply your gel colour in thin, even coats. Cure fully. Then apply a no-wipe top coat and cure completely. The smoother your base, the more mirror-like your chrome will be.",
      "## Application Technique",
      "Use a silicone applicator or eyeshadow sponge — not a brush. Press the chrome powder firmly into the tacky layer using a burnishing motion. Work in one direction for the most uniform reflection. Don't rush this step.",
      "## Sealing the Chrome",
      "This is where most techs fail. Chrome powder is delicate and will dull if the top coat disrupts it. Apply your top coat in a single, deliberate stroke. Don't go back over areas you've already coated. Some professionals apply a thin layer of base coat first as a buffer, then follow with top coat.",
      "## Trending Chrome Variations",
      "**Aurora Chrome** — Creates a holographic, colour-shifting effect. Apply over a black base for maximum impact. **Cat Eye Chrome** — Combine magnetic gel with chrome powder for a depth effect that's trending globally. **French Chrome Tips** — Apply chrome only to the free edge for a sophisticated, wearable look.",
      "Master the basics first, then experiment with layering techniques. Chrome nail art is where creativity meets technical skill.",
    ],
  },
  {
    id: "7",
    slug: "eu-cosmetic-regulations-2026-update",
    title: "EU Cosmetic Regulations 2026: What Nail Professionals Need to Know",
    excerpt:
      "Key regulatory changes affecting nail products in the European market — and how to stay compliant.",
    category: "Education",
    date: "Jan 8, 2026",
    readTime: "8 min",
    image:
      "https://images.unsplash.com/photo-1573876568501-f41ab1a667af?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnZWwlMjBuYWlsJTIwcG9saXNoJTIwYm90dGxlcyUyMGNvbG9yZnVsfGVufDF8fHx8MTc3MjExODYwMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    author: { name: "Dr. Laura Kask", role: "Product Scientist" },
    tags: ["Education", "EU Regulation", "Compliance", "Safety"],
    content: [
      "2026 brings significant changes to the European cosmetic regulatory landscape. For nail professionals and salon owners, understanding these changes isn't optional — it's essential for legal compliance and client safety.",
      "## The HEMA Restriction",
      "Starting from 2026, products containing HEMA (2-Hydroxyethyl methacrylate) above 1% concentration must carry specific warnings and are restricted to professional use only. This affects many base coats, builder gels, and acrylic systems.",
      "## What This Means for Your Salon",
      "You'll need to verify that all products in your salon are compliant. Check labels for HEMA content, request Safety Data Sheets from suppliers, and ensure proper ventilation in your workspace. Products sold directly to consumers must not contain HEMA above the threshold.",
      "## Choosing Compliant Suppliers",
      "Work with suppliers who proactively reformulate and clearly label their products. At nanails.eu, every product page displays full ingredient lists and compliance status, making it easy to verify before you buy.",
      "## Documentation Requirements",
      "Maintain records of product purchases, Safety Data Sheets, and compliance certificates. In case of inspection, you'll need to demonstrate that all products in use meet current EU standards.",
      "Stay informed, stay compliant, and protect both your clients and your business. We'll continue updating this guide as new regulations are announced.",
    ],
  },
  {
    id: "8",
    slug: "ergonomics-nail-technicians-guide",
    title: "Ergonomics for Nail Technicians: Prevent Pain, Extend Your Career",
    excerpt:
      "Practical positioning tips and exercises to avoid repetitive strain injuries common in the nail industry.",
    category: "Education",
    date: "Jan 2, 2026",
    readTime: "5 min",
    image:
      "https://images.unsplash.com/photo-1760009436767-d154e930e55c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuYWlsJTIwZXF1aXBtZW50JTIwdG9vbHMlMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzcyMTE4NjAzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    author: { name: "Kristina Pärn", role: "Business Consultant" },
    tags: ["Education", "Health", "Ergonomics", "Career"],
    content: [
      "Nail technicians spend 6–10 hours daily in positions that put significant strain on the neck, shoulders, wrists, and lower back. Without proper ergonomic awareness, repetitive strain injuries can cut careers short.",
      "## Workspace Setup",
      "Your table height should allow your forearms to rest at a 90-degree angle. Your chair should support your lower back, and your feet should be flat on the floor. The client's hand should be at a height where you don't need to hunch your shoulders.",
      "## The 20-Minute Rule",
      "Every 20 minutes, shift your position slightly. Roll your shoulders, flex your wrists, and look away from your work for 20 seconds. These micro-breaks prevent tension from building up throughout the day.",
      "## Essential Stretches",
      "Perform these stretches between each client: wrist flexor stretch (hold 15 seconds each side), neck lateral flexion (hold 10 seconds each side), shoulder rolls (10 forward, 10 backward), and finger spreads (open and close hands 10 times).",
      "## Investing in Quality Tools",
      "Ergonomic tools make a real difference. Look for e-files with balanced weight distribution, brushes with cushioned grips, and magnification lamps that reduce eye strain. The upfront investment pays for itself in career longevity.",
      "Your body is your most important business tool. Treat it with the same care you give your clients' nails.",
    ],
  },
];

export const categories = [
  "All",
  "Education",
  "Trends",
  "Business",
  "Techniques",
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

export function getRelatedPosts(
  currentSlug: string,
  category: string,
  count = 3
): BlogPost[] {
  return blogPosts
    .filter((p) => p.slug !== currentSlug)
    .sort((a, b) => (a.category === category ? -1 : b.category === category ? 1 : 0))
    .slice(0, count);
}
