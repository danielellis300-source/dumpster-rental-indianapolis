// Blog content data. Phone/business tokens ({{PHONE}}, {{TEL}}, {{BIZ}}) are replaced
// globally by generate-blog.js so a phone number or name change is a one-line fix.

const CATEGORIES = [
  'Pricing & Costs',
  'Regulations & Permits',
  'Seasonal & Maintenance',
  'Choosing a Company',
  'Moving & Selling',
  'DIY vs. Professional',
  'Property Managers & Contractors',
];

const articles = [

// ───────────────────────── 1 ─────────────────────────
{
  slug: 'fall-yard-cleanup-dumpster-rental-guide',
  title: 'Fall Yard Cleanup in Indianapolis: Dumpster Rental Guide for Leaves & Brush',
  metaTitle: 'Fall Yard Cleanup Dumpster Rental Guide | Indianapolis, IN',
  metaDescription: 'Planning a fall yard cleanup in Indianapolis? Here’s how to size a dumpster for leaves, brush and branches, what’s allowed, and how to avoid overpaying.',
  category: 'Seasonal & Maintenance',
  publishDate: '2025-10-01',
  readTimeMin: 5,
  excerpt: 'Leaves, brush, and storm-downed branches pile up fast every October in Indianapolis. Here’s how to pick the right dumpster size and avoid rookie mistakes.',
  intro: `Between the silver maples lining older Indianapolis neighborhoods and the fast-growing trees in newer subdivisions out toward Fishers and Westfield, fall yard waste adds up quickly. A single mature tree can drop 20+ bags of leaves over a few weekends, and if you’re also cutting back perennials, trimming shrubs, or taking down a dead limb, bags stop making sense. A dumpster does the job in one trip.`,
  sections: [
    { h2: 'How much yard waste actually fits in a dumpster', html: [
      `Leaves and brush are bulky but light, so volume runs out before weight does — the opposite problem you’ll have with concrete or shingles. A <strong>10-yard dumpster</strong> holds roughly 40–50 leaf bags worth of material and suits a typical quarter-acre city lot. A <strong>20-yard dumpster</strong> is the better call if you’re clearing a larger yard, removing several shrubs, or combining leaf cleanup with a fence or deck teardown.`,
      `Branches and brush compact less efficiently than leaves, so if your pile is mostly limbs and prunings rather than bagged leaves, size up one tier from what the square footage alone would suggest.`,
    ]},
    { h2: 'What you can and can’t put in with yard waste', html: [
      `Leaves, grass clippings, branches, brush, sod, and small stumps are all fine in a standard dumpster. Whole tree trunks over about 4 feet long or 12 inches in diameter can be a problem for weight distribution and pickup — call ahead if you’ve got a big one down.`,
      `One thing people don’t expect: dirt and heavy wet leaf mulch left over the winter can push you into overage weight fees fast because they’re far denser than dry leaves. If your pile has been sitting and composting, mention that when you book so we can recommend the right size.`,
    ]},
    { h2: 'Timing your rental around Indianapolis weather', html: [
      `Peak leaf drop across Marion County usually runs from mid-October through mid-November, with a second wave after the first hard frost. Booking early in October, before the rush, gets you better slot availability for a next-day or same-day drop-off. If you wait until Thanksgiving week, expect longer lead times.`,
    ]},
    { h2: 'DIY bagging vs. renting a dumpster', html: [
      `Bagging leaves for city collection works fine for a small lot and a light year, but curbside yard waste pickup schedules are limited and bags you miss the pickup window on sit at the curb for two more weeks. A dumpster lets you work at your own pace over the full rental period and skip the bag-buying expense entirely — usually a wash on cost once you’re past a half-dozen bags.`,
    ]},
  ],
  ctaAfterSection: 2,
  relatedSlugs: ['dumpster-size-guide-10-20-30-40-yard', 'winter-prep-garage-basement-cleanout-guide', 'yard-waste-disposal-rules-indianapolis'],
  relatedSitePages: [{ href: '../index.html#services', label: 'Yard Waste & Green Debris Removal' }],
},

// ───────────────────────── 2 ─────────────────────────
{
  slug: 'how-to-choose-a-dumpster-rental-company-indianapolis',
  title: 'How to Choose a Dumpster Rental Company in Indianapolis: 7 Red Flags to Avoid',
  metaTitle: 'How to Choose a Dumpster Rental Company | Indianapolis, IN',
  metaDescription: 'Not all Indianapolis dumpster companies are equal. Learn the 7 red flags — vague pricing, no insurance proof, bait-and-switch quotes — before you book.',
  category: 'Choosing a Company',
  publishDate: '2025-10-11',
  readTimeMin: 6,
  excerpt: 'A cheap-sounding quote can turn into the most expensive dumpster you’ve ever rented. Here’s what to check before you hand over a credit card.',
  intro: `Indianapolis has no shortage of dumpster rental options, from national franchises to one-truck local operators. Price is the first thing most people compare, but price alone hides a lot of problems. Here’s what actually separates a good rental experience from a frustrating one.`,
  sections: [
    { h2: '1. Pricing that isn’t actually flat', html: [
      `“Starting at $199” ads are common, but ask what’s <em>not</em> included — delivery mileage, fuel surcharges, environmental fees, and the tonnage allowance. A true flat-rate quote covers delivery, pickup, a set rental period, and a specific weight limit, in writing, before the truck shows up.`,
    ]},
    { h2: '2. No proof of licensing or insurance', html: [
      `A dumpster company operating trucks on Indianapolis streets and placing containers in driveways or the public right-of-way should carry commercial auto and general liability insurance. If a company can’t produce proof of insurance when asked, that’s a real risk if a container damages your driveway or a delivery truck damages your property.`,
    ]},
    { h2: '3. Unclear weight limits', html: [
      `Every dumpster size has a tonnage allowance included in the base price, and overage fees per ton for going over it. If a company won’t tell you the included tonnage before delivery, you have no way to budget for a heavy job like a roof tear-off or a full basement cleanout.`,
    ]},
    { h2: '4. Vague delivery windows', html: [
      `“Sometime this week” isn’t a delivery window. Reputable companies commit to a specific day and a reasonably narrow time window, and call or text when the driver is close.`,
    ]},
    { h2: '5. No answer on prohibited items', html: [
      `A company that can’t clearly explain what’s not allowed — tires, paint, batteries, refrigerants, hazardous waste — either doesn’t know their own disposal partner’s rules or isn’t telling you, and you’ll be the one who gets the surcharge if a banned item turns up at the landfill.`,
    ]},
    { h2: '6. Reviews that are all recent and all five-star', html: [
      `A healthy review profile has some spread — mostly positive, a few three- or four-star reviews with reasonable responses from the company. A page of nothing but five-star reviews posted in the same week is a common sign of incentivized or fake reviews.`,
    ]},
    { h2: '7. No local phone number or address', html: [
      `Lead-gen sites route your info to whichever local hauler bids highest that day, which means you don’t actually know who’s showing up. Calling a company directly — like <a href="tel:{{TEL}}">{{PHONE}}</a> for our dispatch — gets you a straight answer about who’s delivering your container.`,
    ]},
  ],
  ctaAfterSection: 4,
  relatedSlugs: ['licensed-insured-dumpster-rental-why-it-matters', 'flat-rate-vs-variable-pricing-dumpster-rental', 'hidden-fees-dumpster-rental'],
  relatedSitePages: [{ href: '../index.html', label: 'Indianapolis Dumpster Rental Co homepage' }],
},

// ───────────────────────── 3 ─────────────────────────
{
  slug: 'dumpster-rental-cost-indianapolis',
  title: 'How Much Does Dumpster Rental Cost in Indianapolis? (2026 Price Guide)',
  metaTitle: 'Dumpster Rental Cost in Indianapolis | 2026 Price Guide',
  metaDescription: 'Real 2026 dumpster rental prices for Indianapolis: $250–$550+ by size, what’s included in flat-rate pricing, and the fees that catch people off guard.',
  category: 'Pricing & Costs',
  publishDate: '2025-10-21',
  readTimeMin: 6,
  excerpt: 'What a 10, 20, 30, and 40-yard dumpster actually costs in the Indianapolis area, and what makes a quote go up.',
  intro: `Dumpster rental pricing in the Indianapolis metro typically runs <strong>$250 to $550+</strong> depending on container size, rental length, and what you’re throwing away. That’s a wide range, so here’s what actually moves the number for your specific project.`,
  sections: [
    { h2: 'Typical price by dumpster size', html: [
      `<ul>
        <li><strong>10-yard:</strong> roughly $250–$325 — small cleanouts, single-room remodels, garage cleanouts</li>
        <li><strong>20-yard:</strong> roughly $325–$425 — our most-booked size, full room renovations, roofing tear-offs</li>
        <li><strong>30-yard:</strong> roughly $400–$500 — whole-home cleanouts, large remodels, new deck/fence removal</li>
        <li><strong>40-yard:</strong> roughly $475–$575+ — major demolition, new construction, large commercial jobs</li>
      </ul>`,
      `These are flat-rate ranges that include delivery, pickup, and a standard 7-day rental. Your exact price depends on debris type and total weight, which is why we ask what you’re disposing of before quoting.`,
    ]},
    { h2: 'What’s included in a flat-rate quote', html: [
      `A proper flat-rate quote bundles delivery, the rental period, pickup, and disposal up to a set tonnage allowance — typically 1–3 tons depending on size. Ask any company to confirm the included tonnage in writing; it’s the single biggest variable in what a job actually costs.`,
    ]},
    { h2: 'What pushes the price up', html: [
      `Heavy materials are the main cost driver, not volume. Concrete, brick, dirt, and roofing shingles are dense — a 20-yard container full of shingles can weigh several tons, while the same container full of furniture and boxes might weigh a fraction of that. Keeping the rental past the included period (usually 7 days) also adds a daily extension fee, and prohibited items like tires, paint cans, or batteries can trigger a per-item surcharge.`,
    ]},
    { h2: 'How your project type maps to typical cost', html: [
      `A single-room remodel or garage cleanout usually lands in the 10-yard range near the low end of the scale. A roof replacement or full kitchen gut usually needs a 20-yard and lands mid-range — see our <a href="dumpster-rental-cost-roof-replacement.html">roof replacement cost breakdown</a> for specifics. Whole-home cleanouts and larger remodels typically need 30 yards.`,
    ]},
    { h2: 'Getting an accurate quote', html: [
      `The fastest way to get a real number instead of a “starting at” figure is to tell us the project type, roughly how much debris, and your ZIP code. Call <a href="tel:{{TEL}}">{{PHONE}}</a> or use the quote form and we’ll confirm size and total price before anything is scheduled — no surprise invoice at pickup.`,
    ]},
  ],
  ctaAfterSection: 3,
  relatedSlugs: ['dumpster-size-guide-10-20-30-40-yard', 'hidden-fees-dumpster-rental', 'dumpster-weight-limits-explained'],
  relatedSitePages: [{ href: '../index.html#quote', label: 'Get a free instant quote' }],
},

// ───────────────────────── 4 ─────────────────────────

{
  slug: 'dumpster-size-guide-10-20-30-40-yard',
  title: '10-Yard vs 20-Yard vs 30-Yard vs 40-Yard Dumpster: Which Size Do You Need?',
  metaTitle: 'Dumpster Size Guide: 10, 20, 30 & 40 Yard | Indianapolis, IN',
  metaDescription: 'A practical guide to choosing between a 10, 20, 30, or 40-yard dumpster in Indianapolis, with dimensions, project examples, and how to avoid renting too small.',
  category: 'Pricing & Costs',
  publishDate: '2025-10-31',
  readTimeMin: 6,
  excerpt: 'Picking too small means paying for a second dumpster. Picking too big wastes money. Here’s how to get it right the first time.',
  intro: `The most common sizing mistake we see is renting too small to save a little upfront, then having to order a second dumpster — which costs more than just booking the right size to begin with. Here’s a straightforward breakdown by project type.`,
  sections: [
    { h2: '10-yard dumpster (approx. 12′ L x 8′ W x 3.5′ H)', html: [
      `Best for: small bathroom or closet remodels, garage or attic cleanouts, a single large piece of furniture plus miscellaneous junk, or a small deck teardown. Fits easily in a standard driveway without blocking a second car. This is the size most homeowners underestimate needing — if your project involves more than one room, size up.`,
    ]},
    { h2: '20-yard dumpster (approx. 22′ L x 8′ W x 4.5′ H)', html: [
      `Our most-rented size. Handles a full kitchen or bathroom gut, a roofing tear-off on an average-size home, flooring removal across several rooms, or a medium estate cleanout. If you’re not sure between 10 and 20, we generally recommend sizing up — the price difference is smaller than the cost of renting twice.`,
    ]},
    { h2: '30-yard dumpster (approx. 22′ L x 8′ W x 6′ H)', html: [
      `Suited to whole-home cleanouts, large additions, sizable deck or shed demolition, and multi-room renovations happening at once. Needs more driveway or curb space — worth confirming placement before delivery, especially on narrower lots common in older Indianapolis neighborhoods like Irvington or Broad Ripple.`,
    ]},
    { h2: '40-yard dumpster (approx. 22′ L x 8′ W x 8′ H)', html: [
      `Reserved for major demolition, new home construction debris, and large commercial cleanouts. Overkill for most residential projects — if a contractor recommends a 40-yard for a single-room job, get a second opinion.`,
    ]},
    { h2: 'When in doubt, call before you order', html: [
      `Describe the project — square footage, what’s being removed, whether it’s demolition or just cleanout — and we’ll tell you the right size instead of upselling you to the biggest available container. Call <a href="tel:{{TEL}}">{{PHONE}}</a> and we’ll walk through it.`,
    ]},
  ],
  ctaAfterSection: 4,
  relatedSlugs: ['dumpster-rental-cost-indianapolis', 'dumpster-weight-limits-explained', 'dumpster-rental-cost-roof-replacement'],
  relatedSitePages: [{ href: '../index.html#services', label: 'View all dumpster sizes' }],
},

// ───────────────────────── 5 ─────────────────────────
{
  slug: 'winter-prep-garage-basement-cleanout-guide',
  title: 'Preparing for an Indiana Winter: Garage & Basement Cleanout Guide',
  metaTitle: 'Winter Garage & Basement Cleanout Guide | Indianapolis, IN',
  metaDescription: 'Clear out the garage and basement before winter hits Indianapolis. What to keep, what to toss, and why a dumpster beats hauling it yourself.',
  category: 'Seasonal & Maintenance',
  publishDate: '2025-11-10',
  readTimeMin: 5,
  excerpt: 'Before the salt trucks and snow tires come out, late fall is the best window to finally clear the garage and basement.',
  intro: `Once winter sets in, the garage becomes storage for snow gear and the basement stays sealed up until spring. Late October through November is the practical window to clear both out in Indianapolis before the weather makes hauling anything unpleasant.`,
  sections: [
    { h2: 'Why late fall is the right timing', html: [
      `Temperatures are still mild enough to work outside comfortably, and getting a cleanout done now means your garage has room for snow blowers, salt, and winter tires instead of years of accumulated boxes. It also means any water-damaged basement items get addressed before winter humidity swings make mold worse.`,
    ]},
    { h2: 'What typically fills a garage or basement dumpster', html: [
      `Old paint cans (empty and dried out only — see below), broken furniture, waterlogged cardboard, worn-out carpet padding, old appliances, and years of “might need it someday” building materials. A 10-yard dumpster handles a single garage; a 20-yard is more realistic if you’re doing both garage and basement in one pass.`,
    ]},
    { h2: 'A few basement-specific items to plan for', html: [
      `Old paint, solvents, and full aerosol cans count as household hazardous waste and can’t go in a standard rental dumpster — Marion County holds periodic household hazardous waste collection events, which is the right place for those. Electronics and CRT TVs also generally need a separate e-waste drop-off. Everything else — furniture, cardboard, old carpet, wood shelving — is fine.`,
    ]},
    { h2: 'DIY hauling vs. a dumpster for this job', html: [
      `Garage and basement cleanouts tend to produce more bulk than weight — lots of boxes, furniture, and awkward-shaped junk that’s a pain to load into a truck bed repeatedly. A dumpster parked in the driveway for a weekend lets you work in from both spaces without multiple dump-run trips.`,
    ]},
  ],
  ctaAfterSection: 3,
  relatedSlugs: ['fall-yard-cleanup-dumpster-rental-guide', 'what-cannot-go-in-a-dumpster-marion-county', 'dumpster-rental-vs-junk-removal-service'],
  relatedSitePages: [{ href: '../index.html#quote', label: 'Get a free quote' }],
},

// ───────────────────────── 6 ─────────────────────────
{
  slug: 'property-manager-guide-dumpster-rental-tenant-turnovers',
  title: 'A Property Manager’s Guide to Dumpster Rental for Tenant Turnovers',
  metaTitle: 'Dumpster Rental for Tenant Turnovers | Property Managers, Indianapolis',
  metaDescription: 'Property managers in Indianapolis: how to budget, schedule, and bill back dumpster rental for tenant turnover cleanouts across multiple units.',
  category: 'Property Managers & Contractors',
  publishDate: '2025-11-20',
  readTimeMin: 6,
  excerpt: 'Turnover season doesn’t wait, and neither should your dumpster. Here’s how to build container rental into a repeatable turnover process.',
  intro: `If you’re managing multiple units around Indianapolis, tenant turnovers are one of the most predictable recurring costs in the business — and one of the easiest to underbudget. Here’s how to build dumpster rental into your turnover process instead of scrambling every time a lease ends.`,
  sections: [
    { h2: 'Sizing for a typical unit turnover', html: [
      `A studio or one-bedroom left in rough condition — abandoned furniture, trash, flooring — usually fits in a 10-yard dumpster. A larger unit or a genuine hoarding-level cleanout often needs a 20-yard. If you manage a multi-unit building with several turnovers happening the same month, one 20 or 30-yard container serving the whole property is usually cheaper than ordering separate small dumpsters per unit.`,
    ]},
    { h2: 'Scheduling around lease-end dates', html: [
      `Turnover volume spikes around the 1st and end of the month, which is when every property management company in town is also calling for delivery. Booking 3–5 business days ahead of your move-out inspection date gets you a reliable slot instead of a same-day scramble that may not be available during peak season.`,
    ]},
    { h2: 'Billing it back and documentation', html: [
      `We can invoice by property or unit, and provide receipts that make it straightforward to bill turnover cleanout costs back against a security deposit when the lease or local ordinance allows it. Keep the invoice with your move-out photos as part of the deposit disposition file.`,
    ]},
    { h2: 'Setting up recurring service', html: [
      `If turnovers are a regular part of your portfolio, a standing account with pre-agreed pricing and priority scheduling saves time over re-quoting every job. See our guide on <a href="bulk-recurring-dumpster-service-contractors-builders.html">bulk and recurring dumpster service</a> for how that works.`,
    ]},
  ],
  ctaAfterSection: 3,
  relatedSlugs: ['bulk-recurring-dumpster-service-contractors-builders', 'eviction-cleanout-landlord-guide-indianapolis', 'dumpster-rental-vs-junk-removal-service'],
  relatedSitePages: [{ href: '../index.html#quote', label: 'Request property management pricing' }],
},

// ───────────────────────── 7 ─────────────────────────
{
  slug: 'licensed-insured-dumpster-rental-why-it-matters',
  title: 'Licensed & Insured: Why It Matters When Renting a Dumpster',
  metaTitle: 'Licensed & Insured Dumpster Rental | Why It Matters | Indianapolis',
  metaDescription: 'What "licensed and insured" actually means for an Indianapolis dumpster rental company, and the real risk you take on if you skip that check.',
  category: 'Choosing a Company',
  publishDate: '2025-11-30',
  readTimeMin: 4,
  excerpt: '"Licensed and insured" gets thrown around a lot. Here’s what it actually protects you from.',
  intro: `Every dumpster company’s website says “licensed and insured.” Few homeowners actually ask what that covers. Here’s what it means in practice and why it’s worth 60 seconds of your time before booking.`,
  sections: [
    { h2: 'What insurance actually covers', html: [
      `A commercial general liability policy covers property damage caused during delivery or pickup — a scraped driveway, a damaged curb, a dented garage door from a truck backing up too close. Commercial auto coverage on the delivery trucks covers accidents in transit. Without either, damage caused by the delivery process becomes your problem to chase down, not theirs.`,
    ]},
    { h2: 'Driveway and pavement damage is the most common claim', html: [
      `A loaded 30 or 40-yard dumpster is heavy, and repeated placement in the same driveway spot over a multi-day rental can crack older or thinner asphalt, especially in the freeze-thaw cycles Indianapolis gets each winter. A reputable company will use protective boards under the container on request and stand behind damage if it happens — ask about this before delivery, not after.`,
    ]},
    { h2: 'What “licensed” means locally', html: [
      `Depending on where the container sits, placement in the public right-of-way (street or alley, as opposed to a private driveway) may require a permit through the city. A company that regularly handles Indianapolis deliveries should know when a permit applies and can tell you before drop-off — see our <a href="dumpster-permit-rules-indianapolis-driveway.html">permit rules guide</a> for the driveway-vs-street distinction.`,
    ]},
    { h2: 'How to verify it in one phone call', html: [
      `Just ask: “Can you confirm you’re insured, and what happens if the truck damages my driveway?” A company with real coverage answers immediately and specifically. Vague answers or a transfer to “customer service” are the signal to keep looking.`,
    ]},
  ],
  ctaAfterSection: 3,
  relatedSlugs: ['how-to-choose-a-dumpster-rental-company-indianapolis', 'dumpster-permit-rules-indianapolis-driveway', 'same-day-dumpster-delivery-indianapolis'],
  relatedSitePages: [{ href: '../index.html', label: 'Indianapolis Dumpster Rental Co homepage' }],
},

// ───────────────────────── 8 ─────────────────────────
{
  slug: 'dumpster-rental-vs-junk-removal-service',
  title: 'Dumpster Rental vs. Junk Removal Service: Which Is Right for Your Project?',
  metaTitle: 'Dumpster Rental vs. Junk Removal | Indianapolis, IN',
  metaDescription: 'Dumpster rental or a junk removal crew? A cost and convenience comparison for Indianapolis homeowners deciding between the two.',
  category: 'DIY vs. Professional',
  publishDate: '2025-12-10',
  readTimeMin: 5,
  excerpt: 'Both get junk gone. They’re not interchangeable — here’s how to pick based on timeline, budget, and how much lifting you want to do.',
  intro: `Both options solve the same basic problem — getting rid of a pile of stuff — but they work very differently, and picking the wrong one usually means paying more or being less satisfied with the result.`,
  sections: [
    { h2: 'How the two actually compare', html: [
      `A dumpster rental gets a container dropped in your driveway and you load it yourself, on your own schedule, over several days. A junk removal service sends a crew that loads everything for you, typically in a single visit. That single difference — who does the lifting — drives almost every other tradeoff.`,
    ]},
    { h2: 'Cost comparison', html: [
      `Dumpster rental in Indianapolis runs roughly $250–$550 depending on size, and you supply the labor. Junk removal crews typically price by truck volume and often land in a similar or higher range for a comparable amount of debris, but the labor is included. For a big job you’re willing to load yourself, a dumpster is usually the better value. For a small job or one where you physically can’t do the lifting, junk removal wins.`,
    ]},
    { h2: 'When a dumpster is the better call', html: [
      `Multi-day renovation projects where debris accumulates over time, projects generating construction material rather than household items, and any job where you want control over pacing — loading nights and weekends instead of on someone else’s schedule.`,
    ]},
    { h2: 'When junk removal makes more sense', html: [
      `A single large cleanout you want done same-day, heavy furniture or appliances you can’t lift, or situations — like an estate cleanout — where you’d rather not spend a week looking at the mess in the driveway.`,
    ]},
    { h2: 'Can you do both?', html: [
      `Sometimes. On larger cleanouts, some homeowners rent a dumpster for the bulk of the debris and separately arrange help hauling a few heavy items to the curb. If you’re not sure which fits your project, call <a href="tel:{{TEL}}">{{PHONE}}</a> and describe it — we’ll tell you honestly if a dumpster is the wrong tool for the job.`,
    ]},
  ],
  ctaAfterSection: 4,
  relatedSlugs: ['diy-renovation-cleanup-dumpster-vs-truck-trips', 'dumpster-rental-vs-curbside-pickup-indianapolis', 'estate-cleanout-guide-dumpster-rental'],
  relatedSitePages: [{ href: '../index.html#quote', label: 'Get a free quote' }],
},

// ───────────────────────── 9 ─────────────────────────
{
  slug: 'decluttering-before-selling-your-home-indianapolis',
  title: 'Decluttering Before Selling Your Indianapolis Home: A Room-by-Room Dumpster Guide',
  metaTitle: 'Decluttering Before Selling Your Home | Indianapolis, IN',
  metaDescription: 'A room-by-room decluttering plan for Indianapolis home sellers, plus how a dumpster rental speeds up prepping for photos and showings.',
  category: 'Moving & Selling',
  publishDate: '2025-12-20',
  readTimeMin: 6,
  excerpt: 'Buyers judge a listing in the first three photos. Here’s how to clear a decade of clutter fast enough to hit your listing date.',
  intro: `Realtors consistently point to decluttering as one of the highest-return prep steps before listing a home — it makes rooms photograph larger and lets buyers picture their own stuff instead of yours. Here’s how to move through it room by room without it eating your whole week.`,
  sections: [
    { h2: 'Start with the rooms buyers scrutinize most', html: [
      `Kitchens and primary bedrooms get the most attention in listing photos. Clear countertops down to a few intentional items, and pull anything oversized or mismatched out of the bedroom — old furniture, exercise equipment, anything that makes the room look smaller than it is.`,
    ]},
    { h2: 'Garages and basements: where the real volume lives', html: [
      `This is usually where years of accumulation actually hides — broken tools, paint cans, furniture you replaced but kept, kids’ outgrown gear. A 10 or 20-yard dumpster parked in the driveway for a weekend clears both spaces without a dozen trips to the transfer station.`,
    ]},
    { h2: 'Closets and storage: sell, donate, toss', html: [
      `Sort into keep-for-the-move, donate, and toss before anything hits a box. Donation runs to Goodwill or Habitat for Humanity ReStore locations around Indianapolis handle the usable stuff; the dumpster handles what’s genuinely worn out or broken.`,
    ]},
    { h2: 'Timing it against your listing date', html: [
      `Book the dumpster to arrive 5–7 days before your photographer, giving yourself a real weekend to work plus a buffer day. Renting too close to the shoot means rushed decisions; renting too early means living with a half-cleared house longer than necessary.`,
    ]},
    { h2: 'What not to toss before checking with your agent', html: [
      `Ask your realtor before discarding anything that could be a staging asset — some outdated furniture is still useful for staging photos even if it’s not what you’ll bring to your next place.`,
    ]},
  ],
  ctaAfterSection: 4,
  relatedSlugs: ['post-move-cleanout-checklist-indianapolis', 'moving-out-dumpster-rental-downsizing-estate-cleanout', 'dumpster-size-guide-10-20-30-40-yard'],
  relatedSitePages: [{ href: '../carmel.html', label: 'Dumpster rental in Carmel, IN' }],
},

// ───────────────────────── 10 ─────────────────────────
{
  slug: 'what-cannot-go-in-a-dumpster-marion-county',
  title: 'What You Can’t Put in a Rental Dumpster in Marion County, Indiana',
  metaTitle: 'Prohibited Items in a Rental Dumpster | Marion County, IN',
  metaDescription: 'The full list of items you can’t put in a rental dumpster in Marion County — hazardous materials, tires, batteries — and where they actually go instead.',
  category: 'Regulations & Permits',
  publishDate: '2025-12-30',
  readTimeMin: 5,
  excerpt: 'One prohibited item can hold up your entire pickup. Here’s the full list and where those items actually belong.',
  intro: `Landfills that serve Marion County dumpster haulers reject certain materials outright, and finding one in a load can delay pickup or trigger a surcharge. Here’s what’s off-limits and where those items actually need to go.`,
  sections: [
    { h2: 'Hazardous materials', html: [
      `Paint (wet, not dried-out), solvents, pesticides, motor oil, antifreeze, and other chemicals can’t go in a standard dumpster. Marion County residents can use household hazardous waste drop-off programs run through the city — check current dates and locations before your project, since they run periodically rather than year-round.`,
    ]},
    { h2: 'Tires', html: [
      `Tires are banned from landfills statewide in Indiana. Most tire shops will take old tires for a small per-tire fee when you buy replacements, which is usually the easiest disposal route.`,
    ]},
    { h2: 'Batteries and electronics', html: [
      `Car batteries, and increasingly household batteries, need separate recycling — auto parts stores commonly take old car batteries for free. Electronics (TVs, monitors, computers) fall under e-waste rules in Indiana and need a dedicated recycling drop-off rather than a landfill-bound dumpster.`,
    ]},
    { h2: 'Appliances with refrigerant', html: [
      `Refrigerators, freezers, and window AC units contain refrigerant that has to be professionally removed before disposal. Let us know if one of these is part of your cleanout — we can usually still take it, but it may need to be handled separately from the main load.`,
    ]},
    { h2: 'What happens if a banned item ends up in your dumpster', html: [
      `The disposal facility flags it during processing, which can delay your pickup and typically comes with a per-item surcharge passed back to you. If you’re not sure whether something is allowed, it’s always faster to call <a href="tel:{{TEL}}">{{PHONE}}</a> and ask before it goes in.`,
    ]},
  ],
  ctaAfterSection: 4,
  relatedSlugs: ['yard-waste-disposal-rules-indianapolis', 'construction-debris-regulations-hamilton-marion-county', 'dumpster-weight-limits-explained'],
  relatedSitePages: [{ href: '../index.html#faq', label: 'Dumpster rental FAQs' }],
},

// ───────────────────────── 11 ─────────────────────────
{
  slug: 'hidden-fees-dumpster-rental',
  title: 'Hidden Fees to Watch for When Renting a Dumpster (and How Flat-Rate Pricing Avoids Them)',
  metaTitle: 'Hidden Dumpster Rental Fees to Watch For | Indianapolis, IN',
  metaDescription: 'The fees that turn a cheap dumpster quote into an expensive invoice — fuel surcharges, overage weight, extension fees — and how to avoid them.',
  category: 'Pricing & Costs',
  publishDate: '2026-01-09',
  readTimeMin: 5,
  excerpt: 'The lowest quote isn’t always the cheapest dumpster. Here’s where the extra charges usually hide.',
  intro: `A quote that looks $50 cheaper than everyone else’s sometimes ends up being the most expensive dumpster you rent, once the add-on fees show up on the final invoice. Here’s where to look.`,
  sections: [
    { h2: 'Fuel and delivery surcharges', html: [
      `Some companies quote a low base price, then add a separate delivery or fuel surcharge that isn’t mentioned until checkout. Ask directly: “Is delivery and pickup included in that number?” A true flat-rate quote already has it baked in.`,
    ]},
    { h2: 'Overage weight fees', html: [
      `Every dumpster includes a set tonnage allowance. Go over it and you’re billed per additional ton, sometimes at a steep rate. This is the single most common source of a surprise invoice, especially on jobs with concrete, dirt, or shingles. Ask for the included tonnage in writing before you book — see our <a href="dumpster-weight-limits-explained.html">weight limits guide</a> for typical allowances by size.`,
    ]},
    { h2: 'Rental extension fees', html: [
      `Standard rentals run about 7 days. Keep the container longer and most companies charge a daily extension fee. That’s reasonable and expected — the problem is companies that don’t disclose the rate upfront, so you find out only after you’ve already gone over.`,
    ]},
    { h2: 'Prohibited item surcharges', html: [
      `Certain items — mattresses, tires, appliances with refrigerant — sometimes carry a per-item fee even when a company will technically take them. Ask about specific items before loading them, not after.`,
    ]},
    { h2: 'How to get a quote with no surprises', html: [
      `Ask for size, included tonnage, rental length, and what a day of extension costs, all before delivery. We quote all four upfront by phone or through the online form — call <a href="tel:{{TEL}}">{{PHONE}}</a> and get a real number in a couple minutes.`,
    ]},
  ],
  ctaAfterSection: 4,
  relatedSlugs: ['dumpster-rental-cost-indianapolis', 'flat-rate-vs-variable-pricing-dumpster-rental', 'dumpster-weight-limits-explained'],
  relatedSitePages: [{ href: '../index.html#quote', label: 'Get a flat-rate quote' }],
},

// ───────────────────────── 12 ─────────────────────────
{
  slug: 'bulk-recurring-dumpster-service-contractors-builders',
  title: 'Bulk Ordering & Recurring Dumpster Service for Contractors and Builders',
  metaTitle: 'Recurring Dumpster Service for Contractors | Indianapolis, IN',
  metaDescription: 'How Indianapolis contractors and builders set up recurring dumpster service and swap-out scheduling across multiple active job sites.',
  category: 'Property Managers & Contractors',
  publishDate: '2026-01-19',
  readTimeMin: 5,
  excerpt: 'Re-quoting every job wastes time. Here’s how a standing account and swap-out schedule works for contractors running multiple sites.',
  intro: `If you’re running more than one active job site around Indianapolis at a time, calling in a one-off dumpster order for each project stops making sense pretty quickly. Here’s how recurring service actually works.`,
  sections: [
    { h2: 'How swap-out scheduling works', html: [
      `Instead of a single delivery and pickup, a swap-out schedule has us pulling a full container and dropping an empty one on a set cadence — weekly, biweekly, or tied to project milestones — so debris never sits on site long enough to become a hazard or an eyesore for the client.`,
    ]},
    { h2: 'Standing pricing across multiple sites', html: [
      `A standing account lets us agree on pricing per size once, rather than re-quoting every job. That makes bidding faster since debris removal cost is a known number instead of a phone call away, and it simplifies your accounting with consistent monthly invoicing instead of scattered one-off charges.`,
    ]},
    { h2: 'Sizing for different phases of a build', html: [
      `Framing and demo debris is usually bulky but lighter — a 30 or 40-yard makes sense. Drywall, tile, and finish-stage debris is denser for the same volume, so you may get more value swapping to a 20-yard with more frequent pulls rather than one giant container sitting mostly full of heavy material.`,
    ]},
    { h2: 'Setting it up', html: [
      `Call <a href="tel:{{TEL}}">{{PHONE}}</a> with your typical number of active sites and rough monthly volume, and we’ll put together standing pricing and a swap-out cadence that fits your schedule instead of ours.`,
    ]},
  ],
  ctaAfterSection: 3,
  relatedSlugs: ['construction-site-dumpster-management-general-contractors', 'construction-debris-regulations-hamilton-marion-county', 'property-manager-guide-dumpster-rental-tenant-turnovers'],
  relatedSitePages: [{ href: '../index.html#quote', label: 'Request contractor pricing' }],
},

// ───────────────────────── 13 ─────────────────────────
{
  slug: 'dumpster-permit-rules-indianapolis-driveway',
  title: 'Do You Need a Permit to Put a Dumpster in Your Driveway in Indianapolis?',
  metaTitle: 'Do You Need a Dumpster Permit in Indianapolis? | Driveway vs. Street',
  metaDescription: 'When you do and don’t need a permit for a rental dumpster in Indianapolis — the driveway vs. public right-of-way distinction, explained simply.',
  category: 'Regulations & Permits',
  publishDate: '2026-01-29',
  readTimeMin: 5,
  excerpt: 'The short answer: driveway, no. Street or alley, usually yes. Here’s the distinction that actually matters.',
  intro: `This is one of the most common questions we get, and the answer comes down to one distinction: is the dumpster sitting entirely on your private property, or is any part of it in the public right-of-way?`,
  sections: [
    { h2: 'On your own driveway: generally no permit needed', html: [
      `If the container sits entirely on your driveway or other private property, most Indianapolis homeowners don’t need a permit. This covers the large majority of residential rentals we deliver.`,
    ]},
    { h2: 'On the street or in an alley: usually yes', html: [
      `If there’s no driveway space — common on older Indianapolis streets with tight lots — and the dumpster needs to sit on the street or in a public alley, that’s the public right-of-way, and placement there typically requires a permit through the city’s Department of Business and Neighborhood Services. Rules and fees can change, so confirm current requirements with the city before delivery day if street placement is your only option.`,
    ]},
    { h2: 'HOA neighborhoods add another layer', html: [
      `Separately from city permitting, many HOA communities around Carmel, Fishers, and Westfield have their own rules about how long a dumpster can sit in a driveway or whether it needs to be behind a fence line. Check your HOA’s covenants before booking if you’re in a managed community — see our <a href="dumpster-placement-rules-streets-alleys-hoa.html">placement rules guide</a> for more detail.`,
    ]},
    { h2: 'What happens if you skip a required permit', html: [
      `An unpermitted dumpster in the right-of-way can be cited or, in some cases, tagged for removal, which delays your project and adds cost. It’s a quick check worth doing before delivery rather than after.`,
    ]},
    { h2: 'When you book with us', html: [
      `Tell us where the container is going — driveway, street, or alley — when you book, and we’ll flag if your situation likely needs a permit so there are no surprises on delivery day. Call <a href="tel:{{TEL}}">{{PHONE}}</a> to talk through your specific property.`,
    ]},
  ],
  ctaAfterSection: 4,
  relatedSlugs: ['dumpster-placement-rules-streets-alleys-hoa', 'what-cannot-go-in-a-dumpster-marion-county', 'licensed-insured-dumpster-rental-why-it-matters'],
  relatedSitePages: [{ href: '../carmel.html', label: 'Dumpster rental in Carmel, IN' }],
},

// ───────────────────────── 14 ─────────────────────────
{
  slug: 'moving-out-dumpster-rental-downsizing-estate-cleanout',
  title: 'Moving Out? How a Dumpster Rental Simplifies Downsizing and Estate Cleanouts',
  metaTitle: 'Dumpster Rental for Downsizing & Moving Out | Indianapolis, IN',
  metaDescription: 'Downsizing or moving out of an Indianapolis home? Here’s how a dumpster rental fits into the process and how to size it for a full-house move.',
  category: 'Moving & Selling',
  publishDate: '2026-02-08',
  readTimeMin: 5,
  excerpt: 'Downsizing means deciding what doesn’t come with you. A dumpster is usually faster than a dozen donation runs.',
  intro: `Whether you’re downsizing to a smaller place or helping a parent move out of a longtime family home, the volume of stuff that isn’t coming with you is usually bigger than expected. Here’s how to plan for it.`,
  sections: [
    { h2: 'Sorting before you rent', html: [
      `Before the dumpster arrives, do a first pass sort into keep, donate, sell, and discard. This isn’t about being thorough — it’s about not paying to haul away something you’d actually have sold or donated with a bit more time. The dumpster is for the “definitely not” pile.`,
    ]},
    { h2: 'Sizing for a full-house downsize', html: [
      `A studio or one-bedroom downsize usually fits a 10-yard. A full single-family home typically needs a 20 or 30-yard, especially if furniture that won’t fit the new place is part of the discard pile. If the move is spread over a few weekends rather than one, ask about a longer rental period upfront rather than paying extension fees later.`,
    ]},
    { h2: 'Coordinating with movers', html: [
      `Schedule the dumpster to arrive before the movers’ packing day, not after. Sorting and discarding first means the movers are only touching things that are actually going with you, which usually keeps the moving quote lower too.`,
    ]},
    { h2: 'For estate situations specifically', html: [
      `Estate cleanouts carry extra emotional weight on top of the logistics. If you’re handling this for a family member, our <a href="estate-cleanout-guide-dumpster-rental.html">estate cleanout guide</a> covers the specific considerations — documents, keepsakes, and pacing the work over the timeline you actually have.`,
    ]},
  ],
  ctaAfterSection: 3,
  relatedSlugs: ['estate-cleanout-guide-dumpster-rental', 'post-move-cleanout-checklist-indianapolis', 'decluttering-before-selling-your-home-indianapolis'],
  relatedSitePages: [{ href: '../index.html#quote', label: 'Get a free quote' }],
},

// ───────────────────────── 15 ─────────────────────────
{
  slug: 'flat-rate-vs-variable-pricing-dumpster-rental',
  title: 'Flat-Rate vs. Variable Pricing: Questions to Ask Before You Book',
  metaTitle: 'Flat-Rate vs Variable Dumpster Pricing | Indianapolis, IN',
  metaDescription: 'Understand the difference between flat-rate and variable dumpster pricing before you book, and the questions that reveal which one you’re actually getting.',
  category: 'Choosing a Company',
  publishDate: '2026-02-18',
  readTimeMin: 4,
  excerpt: 'Two quotes for the same size dumpster can mean two very different final bills. Here’s the difference.',
  intro: `“Flat-rate” gets used loosely in this industry. Some companies mean it literally; others use it as a marketing term for a base price that still has variable add-ons layered on top. Here’s how to tell which you’re getting.`,
  sections: [
    { h2: 'What true flat-rate pricing includes', html: [
      `A real flat-rate quote covers delivery, pickup, a defined rental period, and a specific tonnage allowance, all disclosed before you book. The number you’re quoted is the number on the invoice, assuming you stay within the weight and time limits agreed upfront.`,
    ]},
    { h2: 'What variable pricing looks like', html: [
      `Variable pricing quotes a base container price and bills separately for delivery mileage, disposal by actual weight (rather than an included allowance), and time on-site. It can work out cheaper for a very light load, but it makes the final cost hard to predict before pickup.`,
    ]},
    { h2: 'Five questions that reveal which one you’re getting', html: [
      `<ul>
        <li>Is delivery and pickup included in this price?</li>
        <li>What’s the included weight allowance, and what’s the overage rate per ton?</li>
        <li>How many rental days are included, and what’s the extension fee?</li>
        <li>Are there any items that carry a separate surcharge?</li>
        <li>Will I get an invoice that matches this quote, or is this an estimate?</li>
      </ul>`,
    ]},
    { h2: 'Why we quote flat-rate', html: [
      `We’d rather tell you the real number upfront than have you find out at pickup. Call <a href="tel:{{TEL}}">{{PHONE}}</a> and we’ll walk through exactly what’s included before you commit to anything.`,
    ]},
  ],
  ctaAfterSection: 3,
  relatedSlugs: ['hidden-fees-dumpster-rental', 'how-to-choose-a-dumpster-rental-company-indianapolis', 'dumpster-rental-cost-indianapolis'],
  relatedSitePages: [{ href: '../index.html#quote', label: 'Get a flat-rate quote' }],
},

// ───────────────────────── 16 ─────────────────────────
{
  slug: 'yard-waste-disposal-rules-indianapolis',
  title: 'Yard Waste Disposal Rules in Indianapolis: What’s Allowed and What Isn’t',
  metaTitle: 'Yard Waste Disposal Rules | Indianapolis, IN',
  metaDescription: 'What counts as yard waste in Indianapolis, what’s allowed in a rental dumpster, and how curbside yard waste collection compares.',
  category: 'Regulations & Permits',
  publishDate: '2026-02-28',
  readTimeMin: 4,
  excerpt: 'Yard waste has its own set of rules separate from household trash. Here’s what applies in Indianapolis.',
  intro: `Yard waste is treated differently from household trash and construction debris in most of Marion County, with its own collection programs and its own disposal facilities. Here’s what that means if you’re renting a dumpster for a landscaping project.`,
  sections: [
    { h2: 'What counts as yard waste', html: [
      `Grass clippings, leaves, small branches and brush, plant trimmings, and garden waste. Larger tree limbs, stumps, and sod are generally fine in a rental dumpster but can affect weight calculations — wet sod and dirt-heavy root balls are much denser than they look.`,
    ]},
    { h2: 'Curbside yard waste collection vs. a dumpster', html: [
      `Indianapolis residential curbside collection has specific rules on bagging and container limits, and a set pickup schedule you have to hit. For a small trim job, that’s usually fine. For a larger landscaping overhaul, tree removal, or a yard that’s been neglected for a season or more, a dumpster lets you clear everything in one go instead of spreading it across multiple collection weeks.`,
    ]},
    { h2: 'Chemically treated wood and landscape material', html: [
      `Pressure-treated lumber from an old deck or fence, along with railroad ties, is typically fine to include with construction debris in a dumpster but should not be burned or mixed into mulch — flag it when booking if it’s a large portion of your load.`,
    ]},
    { h2: 'Combining yard waste with a larger cleanout', html: [
      `If your project spans both yard debris and household junk — say, a landscaping overhaul alongside a garage cleanout — one dumpster can usually handle both, but tell us the mix when booking so we size it correctly. See our <a href="fall-yard-cleanup-dumpster-rental-guide.html">fall yard cleanup guide</a> for seasonal sizing specifics.`,
    ]},
  ],
  ctaAfterSection: 3,
  relatedSlugs: ['fall-yard-cleanup-dumpster-rental-guide', 'what-cannot-go-in-a-dumpster-marion-county', 'storm-debris-cleanup-dumpster-rental-indianapolis'],
  relatedSitePages: [{ href: '../index.html#services', label: 'Yard Waste & Green Debris Removal' }],
},

// ───────────────────────── 17 ─────────────────────────
{
  slug: 'dumpster-weight-limits-explained',
  title: 'Weight Limits Explained: What Happens If You Overfill a Dumpster',
  metaTitle: 'Dumpster Weight Limits Explained | Indianapolis, IN',
  metaDescription: 'How dumpster weight limits work, typical tonnage allowances by size, and what overage fees actually cost if you go over in Indianapolis.',
  category: 'Pricing & Costs',
  publishDate: '2026-03-10',
  readTimeMin: 5,
  excerpt: 'A dumpster can look half-empty and still be over its weight limit. Here’s why, and how to avoid the surcharge.',
  intro: `Weight, not volume, is the number one source of surprise fees on a dumpster rental. A container that looks far from full by volume can already be at its tonnage limit if the material is dense — concrete, dirt, and shingles are the usual culprits.`,
  sections: [
    { h2: 'Typical included tonnage by size', html: [
      `<ul>
        <li><strong>10-yard:</strong> around 1–2 tons included</li>
        <li><strong>20-yard:</strong> around 2–3 tons included</li>
        <li><strong>30-yard:</strong> around 3–4 tons included</li>
        <li><strong>40-yard:</strong> around 4–5 tons included</li>
      </ul>
      These are typical allowances — confirm the exact tonnage in your quote, since it can vary by material type and local disposal rates.`,
    ]},
    { h2: 'Why light-looking loads can still be heavy', html: [
      `A dumpster half-full of shingles or broken concrete can already weigh more than one completely full of furniture and cardboard. If your project involves roofing, concrete, brick, tile, or dirt, mention it when booking — we may recommend a different size specifically to manage weight rather than volume.`,
    ]},
    { h2: 'What overage fees typically look like', html: [
      `Going over the included tonnage is billed per additional ton at a rate disclosed in your quote — typically somewhere in the $50–$100+ per ton range depending on material. On a heavy job like a full tear-off roof, this can add up fast if you didn’t size correctly from the start.`,
    ]},
    { h2: 'How to avoid an overage surcharge', html: [
      `Tell us the material type and rough quantity when booking, not just “a lot of stuff.” For known-heavy jobs like concrete removal or a roof tear-off, we’ll often recommend a size specifically calibrated for weight rather than defaulting to what fits visually. Call <a href="tel:{{TEL}}">{{PHONE}}</a> before booking if you’re unsure.`,
    ]},
  ],
  ctaAfterSection: 3,
  relatedSlugs: ['dumpster-rental-cost-roof-replacement', 'hidden-fees-dumpster-rental', 'dumpster-size-guide-10-20-30-40-yard'],
  relatedSitePages: [{ href: '../index.html#quote', label: 'Get a flat-rate quote' }],
},

// ───────────────────────── 18 ─────────────────────────
{
  slug: 'spring-cleaning-dumpster-rental-checklist',
  title: 'Spring Cleaning Checklist: When to Rent a Dumpster for Decluttering',
  metaTitle: 'Spring Cleaning Dumpster Rental Checklist | Indianapolis, IN',
  metaDescription: 'A room-by-room spring cleaning checklist for Indianapolis homeowners, and when it makes sense to rent a dumpster instead of bagging it all.',
  category: 'Seasonal & Maintenance',
  publishDate: '2026-03-20',
  readTimeMin: 5,
  excerpt: 'Spring cleaning that goes beyond wiping down baseboards usually means more junk than your trash service will take.',
  intro: `March through May is our busiest season for residential dumpster bookings, and it’s not a coincidence — spring is when a mild winter’s worth of “deal with it later” finally gets dealt with.`,
  sections: [
    { h2: 'A practical room-by-room order', html: [
      `Start with the garage and any storage areas — they tend to hold the bulkiest items and set the tone for how much you’re actually discarding. Move to closets and spare rooms next, then finish with general living spaces. Doing bulky spaces first means you know your dumpster size before you’re halfway through and realize you’ve underestimated.`,
    ]},
    { h2: 'Signs you need a dumpster, not trash bags', html: [
      `If you’re filling more than 8–10 trash bags, discarding furniture or appliances, or clearing out a garage or basement rather than just a closet, your city trash pickup likely won’t take it all or will require special bulk pickup scheduling. A dumpster sidesteps both problems.`,
    ]},
    { h2: 'Combining spring cleaning with small repairs', html: [
      `Spring is also when a lot of homeowners tackle small deferred maintenance — replacing a fence section, tearing out old deck boards, swapping flooring in one room. If that’s part of your plan, size up from what pure decluttering alone would need; construction debris adds weight fast even in small quantities.`,
    ]},
    { h2: 'Booking during peak season', html: [
      `Because spring is our busiest stretch, booking a week or more ahead gets you your preferred delivery date. If you need something sooner, call <a href="tel:{{TEL}}">{{PHONE}}</a> — we keep same-day and next-day slots open when we can.`,
    ]},
  ],
  ctaAfterSection: 3,
  relatedSlugs: ['decluttering-before-selling-your-home-indianapolis', 'dumpster-rental-vs-junk-removal-service', 'winter-prep-garage-basement-cleanout-guide'],
  relatedSitePages: [{ href: '../fishers.html', label: 'Dumpster rental in Fishers, IN' }],
},

// ───────────────────────── 19 ─────────────────────────
{
  slug: 'eviction-cleanout-landlord-guide-indianapolis',
  title: 'Eviction Cleanouts: A Landlord’s Guide to Fast Junk Removal in Indianapolis',
  metaTitle: 'Eviction Cleanout Guide for Landlords | Indianapolis, IN',
  metaDescription: 'A practical guide for Indianapolis landlords handling an eviction cleanout — timing, documentation, and how to turn the unit around fast.',
  category: 'Property Managers & Contractors',
  publishDate: '2026-03-30',
  readTimeMin: 5,
  excerpt: 'Every day a unit sits unrentable after an eviction is lost income. Here’s how to move fast without cutting corners.',
  intro: `Eviction cleanouts come with tighter timelines and higher stakes than a routine turnover — you need the unit clean, documented, and back on the market as fast as possible. Here’s a straightforward approach.`,
  sections: [
    { h2: 'Know Indiana’s abandoned property rules first', html: [
      `Indiana law has specific requirements around handling a former tenant’s left-behind property, including notice periods before disposal in many cases. Confirm your obligations with your attorney or property management counsel before discarding anything — this matters more than speed in the first stage.`,
    ]},
    { h2: 'Document before you touch anything', html: [
      `Photograph every room before cleanout starts. This protects you on deposit disputes, damage claims, and any question about the unit’s condition, and it takes ten minutes with a phone camera.`,
    ]},
    { h2: 'Sizing the dumpster for an eviction cleanout', html: [
      `Eviction units often have more left behind than a standard turnover — full furniture sets, appliances, sometimes years of accumulated belongings. A 20-yard is a safer default than a 10-yard for this specific scenario; ordering a second dumpster mid-cleanout costs more time than sizing up from the start.`,
    ]},
    { h2: 'Same-day and next-day scheduling', html: [
      `Because eviction timelines are often set by a court date, we prioritize fast turnaround for these jobs — see our <a href="same-day-dumpster-delivery-indianapolis.html">same-day delivery guide</a> for what’s realistic. Call <a href="tel:{{TEL}}">{{PHONE}}</a> as soon as you have a confirmed possession date.`,
    ]},
  ],
  ctaAfterSection: 3,
  relatedSlugs: ['same-day-dumpster-delivery-indianapolis', 'property-manager-guide-dumpster-rental-tenant-turnovers', 'bulk-recurring-dumpster-service-contractors-builders'],
  relatedSitePages: [{ href: '../index.html#quote', label: 'Request a fast turnaround quote' }],
},

// ───────────────────────── 20 ─────────────────────────
{
  slug: 'dumpster-placement-rules-streets-alleys-hoa',
  title: 'Indianapolis Dumpster Placement Rules: Streets, Alleys & HOA Restrictions',
  metaTitle: 'Dumpster Placement Rules: Streets, Alleys & HOA | Indianapolis',
  metaDescription: 'Where you can and can’t place a rental dumpster in Indianapolis — driveways, streets, alleys, and common HOA restrictions in the suburbs.',
  category: 'Regulations & Permits',
  publishDate: '2026-04-09',
  readTimeMin: 5,
  excerpt: 'Placement rules change depending on whether the container sits on your property, the street, or inside an HOA community.',
  intro: `Where a dumpster can legally sit depends on three things: whether it’s on private property, whether your neighborhood has an HOA, and how much clearance the location provides for the delivery truck. Here’s the breakdown.`,
  sections: [
    { h2: 'Driveways: the default and easiest option', html: [
      `Placing the container fully on your driveway avoids right-of-way permitting in most cases and is the fastest, simplest option. Make sure there’s enough clearance — the delivery truck needs a straight approach and roughly the container’s length plus a few extra feet to maneuver.`,
    ]},
    { h2: 'Streets and public right-of-way', html: [
      `If a driveway isn’t available or long enough, street placement is possible in many cases but usually requires a permit through the city, since you’re occupying part of the public right-of-way. See our <a href="dumpster-permit-rules-indianapolis-driveway.html">permit guide</a> for how that process works, and note that some streets have parking restrictions that affect where a container can legally sit even with a permit.`,
    ]},
    { h2: 'Alleys', html: [
      `Common in older Indianapolis neighborhoods, alley placement has its own access considerations — alleys are often narrower and may be used by neighbors for garage access, so placement needs to avoid blocking through-traffic.`,
    ]},
    { h2: 'HOA-governed communities', html: [
      `Many HOA neighborhoods around Carmel, Fishers, Westfield, and Noblesville have covenants restricting how long a dumpster can be visible from the street, sometimes requiring it be placed behind a fence line or removed within a set number of days. These rules exist independently of city permitting — check your HOA’s documents or ask your HOA management company before booking.`,
    ]},
    { h2: 'When you’re not sure', html: [
      `Tell us your address and where you’re planning to place the container when you book — we deliver across the whole metro and can flag common issues for your specific area before the truck shows up. Call <a href="tel:{{TEL}}">{{PHONE}}</a> with questions.`,
    ]},
  ],
  ctaAfterSection: 4,
  relatedSlugs: ['dumpster-permit-rules-indianapolis-driveway', 'what-cannot-go-in-a-dumpster-marion-county', 'licensed-insured-dumpster-rental-why-it-matters'],
  relatedSitePages: [{ href: '../westfield.html', label: 'Dumpster rental in Westfield, IN' }],
},

// ───────────────────────── 21 ─────────────────────────
{
  slug: 'dumpster-rental-cost-roof-replacement',
  title: 'Dumpster Rental Cost for a Roof Replacement in Indianapolis',
  metaTitle: 'Dumpster Cost for Roof Replacement | Indianapolis, IN',
  metaDescription: 'What size dumpster a roof replacement needs and what it costs in Indianapolis, including how shingle weight affects your final price.',
  category: 'Pricing & Costs',
  publishDate: '2026-04-19',
  readTimeMin: 5,
  excerpt: 'Shingles are heavier than most homeowners expect. Here’s how to size and budget a dumpster for a roof tear-off correctly.',
  intro: `Roofing debris is one of the densest materials a residential dumpster rental typically handles, which makes weight — not size — the number one factor in what a roof replacement dumpster actually costs.`,
  sections: [
    { h2: 'Why shingles are heavier than they look', html: [
      `A single square (100 sq ft) of asphalt shingles weighs roughly 200–300+ lbs depending on layers and shingle type. A typical 2,000 sq ft roof with one layer of shingles being torn off can generate 2–3 tons of debris — more if there are multiple layers underneath, which is common on older homes.`,
    ]},
    { h2: 'Sizing for a tear-off', html: [
      `A 20-yard dumpster is the standard recommendation for a single-layer tear-off on an average-size home. If your roofer confirms multiple layers, or your home is larger than about 2,500 sq ft, a 30-yard avoids running out of weight allowance partway through the job.`,
    ]},
    { h2: 'Typical cost range', html: [
      `Budget roughly $350–$500 for a roofing dumpster in the Indianapolis area, weighted toward the higher end for multi-layer tear-offs or larger homes. Confirm the included tonnage with your quote — see our <a href="dumpster-weight-limits-explained.html">weight limits guide</a> for typical allowances — since going over is the main way this job exceeds budget.`,
    ]},
    { h2: 'Coordinating delivery with your roofing crew', html: [
      `Have the dumpster on-site and positioned before the crew starts tear-off, ideally as close to the house as the driveway allows to minimize how far shingles get carried or thrown. Confirm with your roofer whether they’re handling disposal logistics or if you’re booking the dumpster directly — miscommunication here is the most common scheduling issue we see.`,
    ]},
  ],
  ctaAfterSection: 3,
  relatedSlugs: ['dumpster-weight-limits-explained', 'dumpster-size-guide-10-20-30-40-yard', 'dumpster-rental-cost-indianapolis'],
  relatedSitePages: [{ href: '../index.html#quote', label: 'Get a roofing dumpster quote' }],
},

// ───────────────────────── 22 ─────────────────────────
{
  slug: 'diy-renovation-cleanup-dumpster-vs-truck-trips',
  title: 'DIY Home Renovation Cleanup: When a Dumpster Beats Multiple Truck Trips',
  metaTitle: 'DIY Renovation Cleanup: Dumpster vs. Truck Trips | Indianapolis',
  metaDescription: 'Renovating yourself in Indianapolis? Here’s the real cost and time comparison between renting a dumpster and hauling debris in a pickup truck.',
  category: 'DIY vs. Professional',
  publishDate: '2026-04-29',
  readTimeMin: 5,
  excerpt: 'Truck trips feel free because you’re not writing a check for them. They almost never actually are.',
  intro: `If you own a pickup truck, hauling your own renovation debris feels like the free option. Once you count gas, dump fees, and your own time, it usually isn’t — here’s the actual math.`,
  sections: [
    { h2: 'What a truck trip really costs', html: [
      `Between gas, a per-load fee at a transfer station or landfill (often $20–$50+ per trip depending on volume and material), and the time to load, drive, unload, and drive back, a single trip easily runs an hour or more. A mid-size renovation — one bathroom, say — can take 3–5 truck trips once you account for demo debris, old fixtures, and packaging from new materials.`,
    ]},
    { h2: 'Where the math tips toward a dumpster', html: [
      `Once you’re past 2–3 truck trips worth of debris, a 10-yard dumpster is usually cost-competitive or cheaper once you value your own time at all, and it removes the scheduling headache of coordinating dump-run trips around your renovation timeline.`,
    ]},
    { h2: 'Where truck trips still make sense', html: [
      `A very small project — replacing a single fixture, a minor patch job — that generates less than a truck bed’s worth of debris usually isn’t worth a dumpster rental. One trip to a transfer station is the more efficient option there.`,
    ]},
    { h2: 'The hidden cost people miss: project pace', html: [
      `A dumpster sitting in the driveway for the length of your project also changes how you work — debris gets tossed as you go instead of piling up in a room or garage waiting for the next dump run, which noticeably speeds up DIY renovation timelines.`,
    ]},
  ],
  ctaAfterSection: 3,
  relatedSlugs: ['dumpster-rental-vs-junk-removal-service', 'dumpster-size-guide-10-20-30-40-yard', 'dumpster-rental-cost-indianapolis'],
  relatedSitePages: [{ href: '../index.html#quote', label: 'Get a free quote' }],
},

// ───────────────────────── 23 ─────────────────────────
{
  slug: 'post-move-cleanout-checklist-indianapolis',
  title: 'Post-Move Cleanout Checklist for Indianapolis Renters and Homeowners',
  metaTitle: 'Post-Move Cleanout Checklist | Indianapolis, IN',
  metaDescription: 'What to do with leftover boxes, packing debris, and unwanted furniture after a move in Indianapolis — a practical post-move cleanout checklist.',
  category: 'Moving & Selling',
  publishDate: '2026-05-09',
  readTimeMin: 4,
  excerpt: 'The move is done, but your old place — or your new garage — is still full of boxes and things you decided not to keep.',
  intro: `Moving day gets all the attention, but the cleanout afterward — flattened boxes, packing material, furniture that didn’t make the cut — is its own project. Here’s a simple way to handle it.`,
  sections: [
    { h2: 'At your old place: security deposit considerations', html: [
      `If you’re a renter, most leases require the unit left broom-clean with nothing left behind. A dumpster ordered for your move-out day handles leftover furniture, trash, and anything you’re not taking, and gives you documentation (via our invoice) that debris was properly removed if there’s ever a deposit dispute.`,
    ]},
    { h2: 'At your new place: packing material adds up fast', html: [
      `Cardboard boxes, packing paper, and bubble wrap from a full-house move are bulkier than they seem once flattened and piled. A significant portion breaks down for recycling, but a lot of moving-specific material (packing peanuts, damaged boxes, furniture blankets that didn’t survive) doesn’t — a small dumpster clears it in one pass instead of weeks of curbside recycling pickups.`,
    ]},
    { h2: 'What size to book', html: [
      `A 10-yard typically covers packing debris plus a few pieces of unwanted furniture for a standard move. If you’re also doing a larger downsizing purge at the same time, see our <a href="moving-out-dumpster-rental-downsizing-estate-cleanout.html">downsizing guide</a> for sizing a bigger combined cleanout.`,
    ]},
    { h2: 'Timing it right', html: [
      `Book delivery for your actual move-out or move-in day rather than “sometime that week” — having the container there while you’re already unpacking or clearing out means debris never has to sit around waiting for a second pass.`,
    ]},
  ],
  ctaAfterSection: 3,
  relatedSlugs: ['moving-out-dumpster-rental-downsizing-estate-cleanout', 'decluttering-before-selling-your-home-indianapolis', 'dumpster-rental-vs-curbside-pickup-indianapolis'],
  relatedSitePages: [{ href: '../index.html#quote', label: 'Get a free quote' }],
},

// ───────────────────────── 24 ─────────────────────────
{
  slug: 'same-day-dumpster-delivery-indianapolis',
  title: 'Same-Day Dumpster Delivery in Indianapolis: What to Expect',
  metaTitle: 'Same-Day Dumpster Delivery | Indianapolis, IN',
  metaDescription: 'How same-day and next-day dumpster delivery actually works in Indianapolis — cutoff times, availability, and how to book one quickly.',
  category: 'Choosing a Company',
  publishDate: '2026-05-19',
  readTimeMin: 4,
  excerpt: 'Need a dumpster today? Here’s what actually determines whether that’s possible, and how to improve your odds.',
  intro: `Same-day delivery is one of our most-asked-about services, and the honest answer is: it depends on when you call, where you are, and what’s already on the schedule. Here’s what actually drives it.`,
  sections: [
    { h2: 'The cutoff that matters most', html: [
      `Calling before noon gives us the best shot at same-day delivery, since it leaves a full route window to fit you in. Calls later in the afternoon are more realistically next-day, though we’ll always tell you honestly rather than overpromise and show up late.`,
    ]},
    { h2: 'What affects availability day to day', html: [
      `Delivery volume varies — Mondays after a weekend of DIY projects and the start/end of the month (moving and turnover season) are our busiest windows. Calling early in the day, even for next-day service, locks in a better time slot than waiting.`,
    ]},
    { h2: 'What we need from you to move fast', html: [
      `Have your address, a rough idea of project type and debris volume, and your preferred placement spot (driveway, street) ready when you call. That lets us quote and confirm size in one call instead of a back-and-forth that costs you time.`,
    ]},
    { h2: 'When same-day isn’t realistic', html: [
      `If your job needs street placement and a permit, same-day generally isn’t possible since permitting takes its own processing time — see our <a href="dumpster-permit-rules-indianapolis-driveway.html">permit guide</a>. For anything time-sensitive like an eviction cleanout or closing deadline, call as early as possible: <a href="tel:{{TEL}}">{{PHONE}}</a>.`,
    ]},
  ],
  ctaAfterSection: 3,
  relatedSlugs: ['how-to-choose-a-dumpster-rental-company-indianapolis', 'eviction-cleanout-landlord-guide-indianapolis', 'dumpster-permit-rules-indianapolis-driveway'],
  relatedSitePages: [{ href: '../index.html#quote', label: 'Request same-day delivery' }],
},

// ───────────────────────── 25 ─────────────────────────
{
  slug: 'construction-debris-regulations-hamilton-marion-county',
  title: 'Construction Debris Disposal Regulations for Hamilton & Marion County Contractors',
  metaTitle: 'Construction Debris Regulations | Hamilton & Marion County, IN',
  metaDescription: 'What Indianapolis-area contractors need to know about construction and demolition debris disposal rules across Marion and Hamilton County.',
  category: 'Regulations & Permits',
  publishDate: '2026-05-29',
  readTimeMin: 5,
  excerpt: 'C&D debris has its own disposal rules separate from household trash. Here’s what contractors working across the metro need to know.',
  intro: `Construction and demolition (C&D) debris is handled differently from household waste at the facility level, and requirements can vary slightly as you move between Marion County and the surrounding counties where a lot of our contractor clients are working — Hamilton County especially, given the pace of building in Carmel, Fishers, Westfield, and Noblesville.`,
  sections: [
    { h2: 'What counts as C&D debris', html: [
      `Lumber, drywall, concrete, brick, roofing materials, flooring, and metal from construction, renovation, or demolition. Most standard rental dumpsters handle mixed C&D loads without issue, but very heavy single-material loads — pure concrete or brick, for instance — sometimes need a dedicated heavy-debris container due to weight limits rather than a standard mixed dumpster.`,
    ]},
    { h2: 'Separating materials can save money', html: [
      `Some disposal facilities offer lower per-ton rates for clean, separated loads — concrete-only, metal-only — versus mixed C&D. On larger commercial jobs, ask us whether separating heavy materials into their own container is worth it for your specific job before defaulting to one mixed dumpster.`,
    ]},
    { h2: 'Permits for job-site placement', html: [
      `Job sites in the public right-of-way, or projects where the container needs to sit on a street rather than the lot itself, generally need the same municipal permitting as a residential street placement — requirements are set locally, so confirm with the relevant city or county office before mobilizing rather than assuming Marion County rules apply the same way in Hamilton County.`,
    ]},
    { h2: 'Recurring pickup for active job sites', html: [
      `For multi-week or multi-month jobs generating debris continuously, a swap-out schedule keeps a site compliant and safe rather than letting debris accumulate past what one container can hold. See our <a href="bulk-recurring-dumpster-service-contractors-builders.html">recurring service guide</a> for how that’s typically set up.`,
    ]},
  ],
  ctaAfterSection: 3,
  relatedSlugs: ['bulk-recurring-dumpster-service-contractors-builders', 'construction-site-dumpster-management-general-contractors', 'what-cannot-go-in-a-dumpster-marion-county'],
  relatedSitePages: [{ href: '../noblesville.html', label: 'Dumpster rental in Noblesville, IN' }],
},

// ───────────────────────── 26 ─────────────────────────
{
  slug: 'storm-debris-cleanup-dumpster-rental-indianapolis',
  title: 'Storm Debris Cleanup After Indianapolis Severe Weather: Dumpster Rental Tips',
  metaTitle: 'Storm Debris Cleanup Dumpster Rental | Indianapolis, IN',
  metaDescription: 'Cleaning up storm debris after Indianapolis severe weather? What size dumpster to rent, insurance documentation tips, and how fast we can deliver.',
  category: 'Seasonal & Maintenance',
  publishDate: '2026-06-08',
  readTimeMin: 5,
  excerpt: 'Central Indiana storm season brings down limbs, fences, and sometimes roofs. Here’s how to handle the cleanup efficiently.',
  intro: `Late spring and summer storm systems moving through central Indiana regularly bring down tree limbs, fencing, and occasionally cause roof or siding damage. If you’re dealing with storm debris, here’s how to approach cleanup without adding stress to an already stressful week.`,
  sections: [
    { h2: 'Document before you clear anything', html: [
      `If you’re filing an insurance claim for storm damage, photograph everything — downed limbs against the house, fence damage, roof or siding issues — before debris is cleared. Adjusters generally want to see the damage as it happened, not just the aftermath of cleanup.`,
    ]},
    { h2: 'Sizing for storm debris', html: [
      `A single large downed tree with its branches can fill a 20-yard dumpster on its own. If you’re dealing with a full property’s worth of storm damage — several trees plus fence sections — a 30-yard is more realistic. Whole trunk sections over about 4 feet or 12 inches in diameter can be a challenge; call ahead if you’ve got large sections down.`,
    ]},
    { h2: 'Speed matters after a storm', html: [
      `Storm debris left too long can become a hazard — blocking access, harboring pests, or becoming a tripping hazard for kids and pets. We prioritize fast delivery after major weather events; see our <a href="same-day-dumpster-delivery-indianapolis.html">same-day delivery guide</a> for what to expect, and call <a href="tel:{{TEL}}">{{PHONE}}</a> as soon as it’s safe to do so.`,
    ]},
    { h2: 'Working with contractors on repairs', html: [
      `If you’re also having roof or fence repairs done as part of the cleanup, coordinate dumpster delivery with your contractor’s schedule so debris from repairs goes straight into the same container rather than needing a second pickup.`,
    ]},
  ],
  ctaAfterSection: 3,
  relatedSlugs: ['same-day-dumpster-delivery-indianapolis', 'yard-waste-disposal-rules-indianapolis', 'dumpster-rental-cost-roof-replacement'],
  relatedSitePages: [{ href: '../index.html#quote', label: 'Request fast storm cleanup delivery' }],
},

// ───────────────────────── 27 ─────────────────────────
{
  slug: 'construction-site-dumpster-management-general-contractors',
  title: 'Construction Site Dumpster Management: Tips for General Contractors in Central Indiana',
  metaTitle: 'Construction Site Dumpster Management | Central Indiana Contractors',
  metaDescription: 'Practical dumpster management tips for general contractors running active job sites across Indianapolis and the surrounding suburbs.',
  category: 'Property Managers & Contractors',
  publishDate: '2026-06-18',
  readTimeMin: 5,
  excerpt: 'A poorly placed dumpster slows down every trade on site. Here’s how experienced GCs manage debris removal on active builds.',
  intro: `On an active job site, dumpster placement and swap-out timing affect every trade working there — a container in the wrong spot or one that fills up mid-week without a scheduled pull becomes everyone’s problem, not just the GC’s.`,
  sections: [
    { h2: 'Placement that doesn’t block the site', html: [
      `Position the container where it’s reachable for debris disposal from multiple work areas but doesn’t block equipment access, material deliveries, or the path subcontractors use most. On tighter urban lots common in Indianapolis infill projects, this sometimes means placing the container curbside rather than on-lot — which brings permitting into play, covered in our <a href="dumpster-permit-rules-indianapolis-driveway.html">permit guide</a>.`,
    ]},
    { h2: 'Matching container size to build phase', html: [
      `Demo and framing debris is bulky and moderately heavy — a 30 or 40-yard suits this phase. As the project moves into drywall, tile, and finish work, debris gets denser per square foot; switching to a 20-yard with more frequent swaps often controls cost better than one oversized container sitting mostly full of heavy scrap.`,
    ]},
    { h2: 'Avoiding weight overage on heavy-material phases', html: [
      `Concrete, tile, and stone finish work generate dense debris that can hit a container’s weight limit well before it looks full. Flag these phases when scheduling pulls so we can plan for more frequent swaps rather than one container sitting overloaded.`,
    ]},
    { h2: 'Standing service for multiple concurrent sites', html: [
      `If you’re running several active builds around the metro at once, a standing account with pre-set pricing and swap-out scheduling removes the need to re-quote every site. See our <a href="bulk-recurring-dumpster-service-contractors-builders.html">recurring service guide</a>, or call <a href="tel:{{TEL}}">{{PHONE}}</a> to set one up.`,
    ]},
  ],
  ctaAfterSection: 3,
  relatedSlugs: ['bulk-recurring-dumpster-service-contractors-builders', 'construction-debris-regulations-hamilton-marion-county', 'dumpster-permit-rules-indianapolis-driveway'],
  relatedSitePages: [{ href: '../index.html#quote', label: 'Request contractor pricing' }],
},

// ───────────────────────── 28 ─────────────────────────
{
  slug: 'dumpster-rental-cost-kitchen-bathroom-remodel',
  title: 'How Much Does It Cost to Rent a Dumpster for a Kitchen or Bathroom Remodel?',
  metaTitle: 'Dumpster Cost for Kitchen & Bathroom Remodel | Indianapolis',
  metaDescription: 'What size dumpster a kitchen or bathroom remodel needs in Indianapolis, typical cost, and what makes cabinet and tile debris heavier than expected.',
  category: 'Pricing & Costs',
  publishDate: '2026-06-28',
  readTimeMin: 5,
  excerpt: 'Cabinets, tile, and old fixtures add up fast. Here’s how to size and budget a remodel dumpster correctly.',
  intro: `Kitchen and bathroom remodels are two of our most common residential jobs, and the debris mix — cabinets, tile, drywall, old fixtures — is different enough from general junk that it’s worth sizing separately from a generic cleanout.`,
  sections: [
    { h2: 'Bathroom remodel: typical sizing', html: [
      `A single bathroom gut — old tile, vanity, tub or shower surround, toilet, subfloor if it’s being replaced — usually fits a 10-yard dumpster, occasionally a 20-yard if tile demo is extensive or there are two bathrooms being done at once. Tile and old cast-iron tubs are heavier than they look; mention these when booking.`,
    ]},
    { h2: 'Kitchen remodel: typical sizing', html: [
      `A full kitchen gut — cabinets, countertops, flooring, appliances, and often some drywall — typically needs a 20-yard dumpster. Kitchens generate a lot of bulky-but-light debris (cabinet boxes) alongside a few genuinely heavy items (stone or quartz countertops, old appliances), so a mid-size container balances both.`,
    ]},
    { h2: 'Typical cost range', html: [
      `Budget roughly $300–$450 for a bathroom remodel dumpster and $325–$450 for a kitchen remodel, depending on final size and whether the load includes stone countertops or cast-iron fixtures, which push weight up. See our <a href="dumpster-size-guide-10-20-30-40-yard.html">size guide</a> if you’re combining the remodel with other work.`,
    ]},
    { h2: 'A note on old countertops and tubs', html: [
      `Granite, quartz, and cast-iron are dramatically heavier per square foot than laminate or fiberglass. If your remodel includes swapping out either, tell us specifically — it’s often the single biggest weight factor in an otherwise mid-size remodel job and can be the difference between staying under your tonnage allowance or not.`,
    ]},
  ],
  ctaAfterSection: 3,
  relatedSlugs: ['dumpster-weight-limits-explained', 'dumpster-size-guide-10-20-30-40-yard', 'dumpster-rental-cost-indianapolis'],
  relatedSitePages: [{ href: '../index.html#quote', label: 'Get a remodel dumpster quote' }],
},

// ───────────────────────── 29 ─────────────────────────
{
  slug: 'estate-cleanout-guide-dumpster-rental',
  title: 'Estate Cleanout Guide: Renting a Dumpster After a Loved One’s Passing',
  metaTitle: 'Estate Cleanout Dumpster Rental Guide | Indianapolis, IN',
  metaDescription: 'A compassionate, practical guide to estate cleanouts in Indianapolis — sorting keepsakes from discard, sizing a dumpster, and pacing the work.',
  category: 'Moving & Selling',
  publishDate: '2026-07-08',
  readTimeMin: 5,
  excerpt: 'Estate cleanouts are logistically similar to a move, but emotionally they’re not. Here’s how to approach the work at a pace that respects that.',
  intro: `Clearing out a family member’s home is one of the harder practical tasks that comes after a loss, and it’s often on a timeline you didn’t choose — a lease ending, a house going on the market, or family traveling in from out of town for a limited window. Here’s how to approach it.`,
  sections: [
    { h2: 'Separate the keepsake pass from the discard pass', html: [
      `Do a first pass focused only on documents, photos, jewelry, and anything with sentimental or financial value — wills, deeds, financial statements. Don’t rush this step or combine it with discarding; it’s worth doing carefully even if it slows down the overall timeline.`,
    ]},
    { h2: 'What usually goes in the dumpster', html: [
      `Worn furniture, old mattresses, expired household goods, and general accumulated belongings that family has already agreed not to keep or donate. A full single-family home cleanout typically needs a 20 or 30-yard dumpster depending on how much furniture is being discarded versus donated.`,
    ]},
    { h2: 'Donation first, when there’s time', html: [
      `Furniture in good condition, clothing, and housewares are often welcomed by local donation centers, which can also feel like a better outcome than discarding when the timeline allows for a donation pickup to be scheduled. When the timeline is tight, the dumpster becomes the practical choice for everything that can’t be sorted and donated in time.`,
    ]},
    { h2: 'Pacing the work over a rental period', html: [
      `A standard 7-day rental gives most families enough time to work through a full house without rushing, especially if multiple family members are splitting the work across a weekend or two. If you need more time, ask about extending the rental rather than feeling pressured to finish on the original schedule — see our <a href="moving-out-dumpster-rental-downsizing-estate-cleanout.html">downsizing guide</a> for related planning tips.`,
    ]},
    { h2: 'We’re here to make this part easier', html: [
      `If you’re not sure what size you need or how the process works, call <a href="tel:{{TEL}}">{{PHONE}}</a> — we handle estate cleanout calls regularly and can walk you through it without any pressure on timing.`,
    ]},
  ],
  ctaAfterSection: 4,
  relatedSlugs: ['moving-out-dumpster-rental-downsizing-estate-cleanout', 'decluttering-before-selling-your-home-indianapolis', 'dumpster-rental-vs-junk-removal-service'],
  relatedSitePages: [{ href: '../index.html#quote', label: 'Get a free quote' }],
},

// ───────────────────────── 30 ─────────────────────────
{
  slug: 'dumpster-rental-vs-curbside-pickup-indianapolis',
  title: 'Renting a Dumpster vs. Curbside Pickup: What Indianapolis Residents Should Know',
  metaTitle: 'Dumpster Rental vs. Curbside Bulk Pickup | Indianapolis, IN',
  metaDescription: 'How Indianapolis curbside bulk trash pickup compares to renting a dumpster — limits, timing, and when each option actually makes sense.',
  category: 'DIY vs. Professional',
  publishDate: '2026-07-18',
  readTimeMin: 4,
  excerpt: 'Curbside pickup feels free. It comes with limits that a dumpster doesn’t have — here’s when each option fits.',
  intro: `Indianapolis residential trash service includes provisions for bulk item pickup, and for a single old couch or mattress, that’s often the simplest option. For anything bigger, the limits start to matter.`,
  sections: [
    { h2: 'What curbside bulk pickup typically covers', html: [
      `Bulk pickup programs are generally designed for a limited number of large items per collection — furniture, mattresses, appliances — not open-ended volumes of mixed debris. Check current item limits and scheduling requirements with your collection provider, since rules and any associated fees can change.`,
    ]},
    { h2: 'Where curbside pickup falls short', html: [
      `Renovation debris, yard waste beyond normal limits, and general cleanout volume from clearing a garage or basement usually exceed what bulk pickup is designed to handle. You’re also locked into a fixed collection schedule, which means items sit at the curb until the next pickup date rather than being gone on your timeline.`,
    ]},
    { h2: 'Where a dumpster is clearly the better fit', html: [
      `Any project generating debris continuously over several days — a renovation, a multi-room decluttering push, a garage-and-basement cleanout — fits a dumpster’s model much better than a once-a-month bulk pickup. You load on your schedule and it’s gone on a schedule you control, not the city’s.`,
    ]},
    { h2: 'The simplest way to decide', html: [
      `If everything you’re discarding fits in a short list of large items and you can wait for the next scheduled pickup, curbside is fine and free. If you’re not sure it’ll all fit, or the timeline doesn’t work, a 10-yard dumpster starts around the same cost as some bulk pickup service fees once you’re past a couple of large items — call <a href="tel:{{TEL}}">{{PHONE}}</a> and we’ll help you figure out which makes more sense for your specific pile.`,
    ]},
  ],
  ctaAfterSection: 3,
  relatedSlugs: ['dumpster-rental-vs-junk-removal-service', 'post-move-cleanout-checklist-indianapolis', 'dumpster-size-guide-10-20-30-40-yard'],
  relatedSitePages: [{ href: '../index.html#quote', label: 'Get a free quote' }],
},

];

module.exports = { articles, CATEGORIES };
