// All project content lives here. To add a project:
//   1. Add an entry to the `projects` array below.
//   2. Put its images (and PDF) in public/projects/<slug>/.
// The home page, the /projects grid and /projects/<slug> all read from this list,
// so nothing else needs to change. Entries appear in the order written here.

export type ProjectImage = {
  /** Path under /public, e.g. "/projects/my-slug/chart.png" */
  src: string;
  /** Describes the image for screen readers. */
  alt: string;
  caption?: string;
};

/** Sections on /projects, in display order. */
export const categories = [
  { id: "data", label: "Data analysis" },
  { id: "planning", label: "Urban planning & design" },
] as const;

export type CategoryId = (typeof categories)[number]["id"];

export type Project = {
  /** URL segment: /projects/<slug>. Lowercase, hyphens, unique. */
  slug: string;
  title: string;
  category: CategoryId;
  /** One or two sentences shown on project cards. */
  summary: string;
  year?: string;
  /** Shown on project cards and at the top of the case study. */
  cover: ProjectImage;
  /** Show on the home page. */
  featured?: boolean;
  /** Keep off the site (lists and its page) until it's ready. */
  hidden?: boolean;

  // Case-study sections. Empty lists are hidden on the page.
  question: string;
  whatIDid: string[];
  result: string[];
  tools: string[];
  gallery: ProjectImage[];
  links: {
    repo?: string;
    /** Path under /public, e.g. "/projects/my-slug/report.pdf" */
    pdf?: string;
  };
};

/** Placeholder content for a project that hasn't been written up yet. */
function draft(
  slug: string,
  title: string,
  category: CategoryId,
): Project {
  return {
    slug,
    title,
    category,
    summary: "TODO: one-line summary of the project.",
    cover: {
      src: `/projects/${slug}/cover.svg`,
      alt: `Cover image for ${title}`,
    },
    question: "TODO: the question this project set out to answer.",
    whatIDid: ["TODO: the main steps you took."],
    result: ["TODO: what you found or produced."],
    tools: [],
    gallery: [],
    links: {},
  };
}

const allProjects: Project[] = [
  // ── Data analysis ────────────────────────────────────────────────
  {
    slug: "genshin-team-optimizer",
    title: "Genshin Team Optimizer",
    category: "data",
    summary:
      "A web app that ranks the strongest four-character teams in Genshin Impact from the characters a player owns, using a damage model built from each character's kit.",
    year: "2026",
    featured: true,
    cover: {
      src: "/projects/genshin-team-optimizer/cover.svg",
      alt: "Cover image for Genshin Team Optimizer",
    },
    question:
      "Given the characters a player owns, which four-character teams deal the most damage, and can a model built from game data agree with expert guides without copying tier lists?",
    whatIDid: [
      "Built a damage model that scores each team over one rotation using the game's damage formula: buffs, resistance shred, weapon passives, artifact sets, and elemental reactions drawn from a shared aura budget.",
      "Merged data for 129 characters from genshin-db, the live Enka.Network API and hand-written tags, recording a source for every hand-filled value.",
      "Let players import their real builds by in-game UID, falling back to benchmark builds from expert guides when none are available.",
      "Checked the model against expert guide teams, and wrote invariant tests (scores stay in realistic ranges, never drop when a character gets stronger, don't depend on member order) over 600 randomly sampled teams.",
      "Ran the team search in Web Workers so results update as players tick characters.",
    ],
    result: [
      "For 15 of 16 main characters, a team recommended by expert guides ranks in the app's top 100, up from 3 of 16 on the first run. For current meta teams it's 10 of 13.",
      "304 unit tests cover the scoring rules.",
    ],
    tools: [
      "TypeScript",
      "Next.js",
      "React",
      "Tailwind CSS",
      "Vitest",
      "Web Workers",
      "Enka.Network API",
      "genshin-db",
    ],
    gallery: [],
    links: {
      repo: "https://github.com/jessiefujii/genshin-team-optimizer",
    },
  },
  {
    slug: "yelp-nashville-analysis",
    title: "Yelp Nashville Analysis",
    category: "data",
    summary:
      "SQL and Python analysis of what drives Yelp ratings in Nashville, for a fictional coffee startup deciding where and how to open. Capstone project for the University of California, Davis SQL for Data Science specialization (Coursera).",
    year: "2026",
    featured: true,
    cover: {
      src: "/projects/yelp-nashville-analysis/cover.png",
      alt: "Slide titled The Headline Finding, showing correlations of -0.377 for all Nashville businesses and -0.523 for coffee shops",
    },
    question:
      "What drives strong Yelp ratings for food and drink businesses in Nashville (location, business attributes or operating hours), and what should a new coffee company invest in first?",
    whatIDid: [
      "Imported the Yelp Open Dataset's Nashville tables into SQLite and explored them in SQL, extracting business attributes and hours from JSON and catching empty JSON objects that a plain NULL check misses (14.9% of businesses had empty hours).",
      "Caught a data-quality problem before trusting the numbers: a standard deviation of 193.7 on a 1–5 star scale. The review table was uncleaned (78% NULL stars, about 189,000 corrupted rows, 90.5% outside Nashville), and an inner join to Nashville businesses left 141,670 clean reviews.",
      "Tested three hypotheses in Python with Pearson correlation, linear regression and TF-IDF text analysis.",
      "Designed two custom metrics: a Service Word Ratio (share of service-narrative words like asked, told, minutes and wait in each review) and a Profile Completeness Score.",
      "Re-tested every key finding on Nashville coffee shops and cafes alone, the client's own category.",
    ],
    result: [
      "Service experience, not product quality, is the strongest driver of low ratings: the Service Word Ratio correlates with stars at r = −0.377 across 4,757 food and drink businesses, and r = −0.523 for coffee shops (both p < 0.0001).",
      "Outdoor seating is the strongest single physical attribute, worth +0.33 stars on average: a real but modest effect (R² = 0.042).",
      "Business density doesn't predict ratings (r = −0.087, p = 0.66). The densest postal code rates mid-pack, while 37206 and 37208 rate highest.",
      "Recommendation: invest first in service speed and staff consistency, add outdoor seating where feasible, and don't chase location density or a fully filled-out Yelp profile.",
    ],
    tools: [
      "SQL",
      "SQLite",
      "DBeaver",
      "Python",
      "pandas",
      "SciPy",
      "statsmodels",
      "scikit-learn",
      "Jupyter",
    ],
    gallery: [
      {
        src: "/projects/yelp-nashville-analysis/data-at-a-glance.png",
        alt: "Slide with 6,971 businesses, a 3.64 average rating and 141,670 reviews, above a bar chart of star ratings",
        caption: "The data at a glance, before any hypothesis testing.",
      },
      {
        src: "/projects/yelp-nashville-analysis/trusting-the-data.png",
        alt: "Slide showing 1,496,906 review rows narrowed to 141,670 clean Nashville reviews",
        caption:
          "An impossible standard deviation led to a data-quality discovery.",
      },
      {
        src: "/projects/yelp-nashville-analysis/hypothesis-1-review-language.png",
        alt: "Slide comparing words in high-rated reviews with words in low-rated reviews",
        caption:
          "Hypothesis 1: high-rated reviews praise; low-rated reviews narrate events.",
      },
      {
        src: "/projects/yelp-nashville-analysis/hypothesis-2-attributes.png",
        alt: "Slide with a bar chart of attribute correlations with rating, highlighting +0.33 stars for outdoor seating",
        caption: "Hypothesis 2: outdoor seating is the strongest attribute.",
      },
      {
        src: "/projects/yelp-nashville-analysis/hypothesis-3-location.png",
        alt: "Slide with bar charts of business counts and average ratings by postal code",
        caption: "Hypothesis 3: business density doesn't predict ratings.",
      },
      {
        src: "/projects/yelp-nashville-analysis/recommendations.png",
        alt: "Slide listing three recommendations for Coffee King in priority order",
        caption: "Recommendations for Coffee King.",
      },
    ],
    links: {
      repo: "https://github.com/jessiefujii/yelp-nashville-analysis",
      pdf: "/projects/yelp-nashville-analysis/coffee-king-findings.pdf",
    },
  },
  {
    slug: "nyc-housing-school-location-analysis",
    title: "NYC Housing and School Location Analysis",
    category: "data",
    summary:
      "Spatial analysis in Python of whether New York City's affordable housing is located near public schools. Final project for CRP 3850 at Cornell University, with statistical tests added later that reversed the original conclusion.",
    year: "2024",
    cover: {
      src: "/projects/nyc-housing-school-location-analysis/cover.png",
      alt: "Map of New York City with affordable housing projects plotted as red points, concentrated in the Bronx, upper Manhattan and central Brooklyn",
    },
    question:
      "Is affordable housing in New York City located near public schools?",
    whatIDid: [
      "Loaded four NYC Open Data sets (affordable housing production, census tracts, school districts and public school locations) and converted them to a common coordinate system.",
      "Built point geometries for affordable housing projects and counted public schools per school district.",
      "Mapped local spatial clusters with local Moran's I (LISA) using k-nearest-neighbor weights, and measured overall clustering with global Moran's I.",
      "In October 2026, went back and tested the relationship directly: joined housing buildings to school districts, totaled affordable rental units per district, and ran Spearman correlations plus a partial correlation holding district area constant.",
      "Caught two traps along the way: one district stored as two shapes (33 rows for 32 districts), and a density-vs-density comparison (ρ = 0.923) that was inflated because both measures were divided by the same area.",
    ],
    result: [
      "Districts with more public schools also have more affordable rental units, even with district size held constant (partial Spearman ρ = 0.770, p < 0.001, 32 districts).",
      "This reversed the 2024 poster's conclusion, which judged by eye from the cluster maps that housing \"seems to not be related\" to school locations.",
      "Both layers are spatially clustered: affordable housing at Moran's I = 0.351 (p = 0.001) and public schools at 0.203 (p = 0.019).",
      "Limitation: population is the likely common cause, so this shows co-location at the district level, not that housing is deliberately built near schools. Next step: control for population and measure distance from each building to its nearest school.",
    ],
    tools: [
      "Python",
      "GeoPandas",
      "PySAL",
      "SciPy",
      "Matplotlib",
      "Jupyter",
    ],
    gallery: [
      {
        src: "/projects/nyc-housing-school-location-analysis/lisa_clusters.png",
        alt: "Two side-by-side LISA cluster maps of NYC, one for affordable rental units and one for public schools",
        caption:
          "Local spatial clusters (p < 0.05). HH: high values near high; LL: low near low; ns: not significant.",
      },
      {
        src: "/projects/nyc-housing-school-location-analysis/units_vs_schools.png",
        alt: "Scatter plot of affordable rental units against public schools for each school district, trending upward",
        caption:
          "Affordable rental units vs. public schools by school district.",
      },
      {
        src: "/projects/nyc-housing-school-location-analysis/public_schools.png",
        alt: "Map of New York City with public schools plotted as blue points",
        caption: "NYC public school locations.",
      },
      {
        src: "/projects/nyc-housing-school-location-analysis/districts_by_school_count.png",
        alt: "Map of NYC school districts shaded green, darker where a district has more public schools",
        caption: "School districts shaded by number of public schools.",
      },
      {
        src: "/projects/nyc-housing-school-location-analysis/affordable_housing_production.png",
        alt: "Map of New York City with affordable housing projects plotted as red points",
        caption: "Affordable housing projects, 2014 to present.",
      },
    ],
    links: {
      repo: "https://github.com/jessiefujii/nyc-housing-school-access",
      pdf: "/projects/nyc-housing-school-location-analysis/poster.pdf",
    },
  },
  // In progress: remove `hidden: true` when it's ready to show.
  { ...draft("la-metro-analysis", "LA Metro Analysis", "data"), hidden: true },

  // ── Urban planning & design ──────────────────────────────────────
  {
    slug: "town-of-candor-comprehensive-plan",
    title: "Town of Candor Comprehensive Plan",
    category: "planning",
    summary:
      "A 72-page comprehensive plan for the Town of Candor Planning Board in New York, made with a Cornell Design Connect team in Fall 2023. I wrote the economic development section.",
    year: "2023",
    featured: true,
    cover: {
      src: "/projects/town-of-candor-comprehensive-plan/cover.jpg",
      alt: "Wooded hills and farm fields in Candor, New York, under a pale sky",
    },
    question:
      "What does Candor's economy look like today, where is it heading, and what can the town do to encourage economic growth?",
    whatIDid: [
      "Joined a Cornell Design Connect team creating a comprehensive plan for the Town of Candor, through site visits, academic research, US Census data analysis, mapping and interviews.",
      "Designed and distributed a Qualtrics survey that reached more than 200 residents, and interviewed community leaders and academic experts.",
      "Contributed to researching the town's history for the plan's community profile: Cayuga land along Catatonk Creek, settlement in the 1790s, the railroad's arrival in 1854, and Candor's post-war shift into a bedroom community as highways made commuting easier, a pattern the economic analysis then measured.",
      "Wrote Part 5, Economic Development (10 of the plan's 72 pages), drawing on ACS 5-Year Estimates (2012–2021), BEA 2022 data, Data Axle business data and the community survey: existing conditions from survey responses and historical research, and statistical analysis of employment, commuting, income and local businesses.",
      "Documented the town's main tourism events, projected the key economic indicators forward, and set out next steps that address issues residents raised in the survey.",
    ],
    result: [
      "Candor is a bedroom community: only 26% of working residents work in the town itself, while 30% commute to the Ithaca area and 11% to Binghamton.",
      "Labor participation rose to 69.2% before the pandemic, well above the state (58.6%) and national (62.6%) averages, then fell to 59.3% in 2021. Unemployment has hovered around 7.5%, above state and national levels.",
      "Median household income peaked at about $59,300 in 2019, then fell more steeply than in neighboring counties.",
      "Most local businesses have 1–4 employees, and over 70% have under $500,000 in sales.",
      "Six recommendations: a shared venue for community events, village business signage, a Candor tourism website, nonprofit grants and crowdfunding, policies supporting local businesses and remote workers, and a grant writer shared with neighboring towns.",
    ],
    tools: [
      "ArcGIS Pro",
      "Microsoft Excel",
      "Qualtrics",
      "Adobe InDesign",
      "Adobe Illustrator",
      "Adobe Photoshop",
      "Canva",
    ],
    gallery: [
      {
        src: "/projects/town-of-candor-comprehensive-plan/commuting-patterns.png",
        alt: "Diagram of where Candor's working residents work: 26% in the Town of Candor, 30% in the Greater Ithaca area, 11% in the Greater Binghamton area, 2% in the Greater Elmira area and 31% elsewhere",
        caption:
          "Commuting patterns for working residents of Candor, from the community survey.",
      },
      {
        src: "/projects/town-of-candor-comprehensive-plan/median-income.png",
        alt: "Line chart of Candor's median household income from 2012 to 2021 peaking in 2019, beside a bar chart comparing 2016 and 2021 median income for Candor and four neighboring counties",
        caption:
          "Median household income: Candor's trend, and its 2016–2021 change against neighboring counties (ACS 5-Year Estimates).",
      },
      {
        src: "/projects/town-of-candor-comprehensive-plan/final-review-poster.jpg",
        alt: "Full Town of Candor Comprehensive Plan final review poster with sections on open space, natural resources, economic development, land use and a SWOT analysis",
        caption: "Final review poster.",
      },
      {
        src: "/projects/town-of-candor-comprehensive-plan/employment.jpg",
        alt: "Plan page on existing economic conditions with a line chart of Candor's unemployment rate, 2012 to 2021",
        caption: "Existing conditions: employment (ACS 5-Year Estimates, 2012–2021).",
      },
      {
        src: "/projects/town-of-candor-comprehensive-plan/transportation.jpg",
        alt: "Plan page with bar charts of mean commute times and ways of commuting in Candor",
        caption: "Existing conditions: work commutes.",
      },
      {
        src: "/projects/town-of-candor-comprehensive-plan/recommendations.jpg",
        alt: "Plan page with objectives and anticipated results for village signage and a Candor tourism website",
        caption: "Recommendations: village signage and a tourism website.",
      },
    ],
    links: {
      pdf: "/projects/town-of-candor-comprehensive-plan/portfolio-pages.pdf",
    },
  },
  {
    slug: "rome-neighborhood-analysis",
    title: "Rome Neighborhood Analysis",
    category: "planning",
    summary:
      "An in-depth study of Vigne Nuove, a neighborhood on the periphery of Rome: a 73-page booklet, Vigne Nuove: Redefining Public Perceptions Through the Evolution of Housing, made with four classmates for CRP 4160: Rome Workshop. I designed the booklet.",
    year: "2024",
    cover: {
      src: "/projects/rome-neighborhood-analysis/cover.jpg",
      alt: "Two maps of Vigne Nuove, Rome, coloring buildings by ownership and by function",
    },
    question:
      "How is Vigne Nuove built, who owns it, and how well is it served by transit?",
    whatIDid: [
      "Studied the neighborhood from January to May 2024 with other students in the Class of 2025 cohort, through academic research, weekly site visits, and building and street surveys.",
      "Led the five-person team: delegated roles and was the team's main point of contact with professors and TAs.",
      "Worked with 20 years of Italian National Institute of Statistics (ISTAT) census data, 2001–2021, by census tract in Excel, for the team's statistical analysis.",
      "Modeled the areas within walking distance of bus stops, and mapped transit access and traffic patterns in ArcGIS, Excel and Illustrator.",
      "Interviewed 5+ stakeholders and residents in English, Italian and Japanese. The team's interviewees ranged from a local bar owner, community activists and parish pastors to the president of Municipio III.",
      "Drew my own Lynch map, a hand-drawn mental map of the neighborhood's paths, edges and landmarks, for the booklet's community engagement chapter, alongside teammates' and residents' maps.",
      "Mapped building ownership (public low-income housing, cooperatives and private housing) and building function, drew elevations of the area's three main building types, and classified the street network into four typologies.",
      "Designed and laid out the whole 73-page booklet in InDesign, bringing every chapter's text, maps, charts and photos into one consistent design, and designed the team's three exhibition posters.",
    ],
    result: [
      "A 73-page neighborhood analysis booklet and three exhibition posters, all of which I designed, plus midterm and final presentations.",
      "The whole neighborhood is within 400 m of a bus stop, but only the western half is within walking distance of the 80 express bus, the main link to central Rome.",
      "Most of the western half is within a two-minute walk of a bus stop, while many public perimeter buildings in the east are three or four minutes away.",
    ],
    tools: [
      "ArcGIS Pro",
      "Microsoft Excel",
      "Adobe InDesign",
      "Adobe Illustrator",
      "Adobe Photoshop",
      "Adobe Lightroom",
    ],
    gallery: [
      {
        src: "/projects/rome-neighborhood-analysis/exhibition-poster-1.jpg",
        alt: "Exhibition poster titled Vigne Nuove: History, with a 1849 to 2024 timeline, sections on the 1960s to the present and squatting, and study area and planning zone maps",
        caption: "Exhibition poster 1 of 3, which I designed: history and context.",
      },
      {
        src: "/projects/rome-neighborhood-analysis/exhibition-poster-2.jpg",
        alt: "Exhibition poster titled Vigne Nuove: Built Environment, with maps of building form, ownership, function and streets, and descriptions of linear, perimeter and palazzine buildings",
        caption:
          "Exhibition poster 2 of 3, which I designed: the built environment.",
      },
      {
        src: "/projects/rome-neighborhood-analysis/exhibition-poster-3.jpg",
        alt: "Exhibition poster titled Vigne Nuove: Transportation, with bus access and walkshed maps, a landmarks map with photos, and a looking-forward section",
        caption:
          "Exhibition poster 3 of 3, which I designed: transportation, landmarks and looking forward.",
      },
      {
        src: "/projects/rome-neighborhood-analysis/building-ownership.jpg",
        alt: "Map of Vigne Nuove buildings colored by ownership: private, cooperative and public",
        caption:
          "Building ownership: public low-income housing, cooperatives and private housing.",
      },
      {
        src: "/projects/rome-neighborhood-analysis/building-function.jpg",
        alt: "Map of Vigne Nuove buildings colored by function: commercial, institutional and residential",
        caption:
          "Building function: residential is the most common type; all commercial buildings are mixed-use residential.",
      },
      {
        src: "/projects/rome-neighborhood-analysis/building-typologies.png",
        alt: "Line-drawn elevations of a perimeter block, a palazzina and a linear building, with descriptions",
        caption: "Building typologies: perimeter, palazzine and linear.",
      },
      {
        src: "/projects/rome-neighborhood-analysis/walksheds-400m.jpg",
        alt: "Map of 400 meter walksheds around bus stops in Vigne Nuove, showing the 80 express bus route",
        caption: "400 m walksheds around bus stops and the 80 express bus.",
      },
      {
        src: "/projects/rome-neighborhood-analysis/walksheds-minutes.jpg",
        alt: "Map of concentric 1 to 5 minute walksheds around bus stops in Vigne Nuove",
        caption:
          "1–5 minute walksheds (80 m rings, about one minute of walking each).",
      },
      {
        src: "/projects/rome-neighborhood-analysis/street-typologies.jpg",
        alt: "Street map of Vigne Nuove colored by primary, secondary and tertiary streets and foot or bike paths",
        caption:
          "Street typologies: primary, secondary and tertiary streets, and foot/bike paths.",
      },
      {
        src: "/projects/rome-neighborhood-analysis/lynch-map.jpg",
        alt: "Hand-drawn ink map of Vigne Nuove showing the roundabouts, main roads, housing blocks, the church, the Porta di Roma mall and the original 1970s public housing",
        caption:
          "My Lynch map of Vigne Nuove: roundabouts, main roads, the church, the mall and the original 1970s public housing.",
      },
      {
        src: "/projects/rome-neighborhood-analysis/notes-and-drawings.jpg",
        alt: "An open notebook of handwritten field notes and a hand-drawn building elevation on graph paper, beside an archival housing-funding document in a plastic sleeve",
        caption:
          "My notes and drawings: field notes and a hand-drawn elevation, with an archival document from the team's research.",
      },
    ],
    links: {
      pdf: "/projects/rome-neighborhood-analysis/portfolio-pages.pdf",
    },
  },
  {
    slug: "ithaca-savings-and-loan-building-survey",
    title: "Ithaca Savings and Loan Association Building Survey",
    category: "planning",
    summary:
      "Measured drawings of the former Ithaca Savings and Loan Association building at 300 N. Tioga St, made with a partner for CRP 5670: Measured Drawing for submission to the Historic American Buildings Survey.",
    year: "2024",
    cover: {
      src: "/projects/ithaca-savings-and-loan-building-survey/field-notes.jpg",
      alt: "Hand-drawn field notes on graph paper of two window types and their cross-sections",
    },
    question:
      "How can the Ithaca Savings and Loan Association building be documented accurately enough for the Historic American Buildings Survey collection in the Library of Congress?",
    whatIDid: [
      "Made weekly site visits with my project partner from August to December 2024 to measure the building and record field notes.",
      "Digitized the field notes in AutoCAD as outside elevations, noting conditions such as a cracked window and rust on the southeast corner.",
      "Built a window schedule covering all 130 windows, by type, location, dimensions and glazing.",
    ],
    result: [
      "Field notes, site photos, a window schedule and outside elevations, prepared for submission to the Historic American Buildings Survey.",
      "Small variations among the window types pointed to where original windows had been replaced, showing that the original building remains largely intact.",
    ],
    tools: ["AutoCAD", "Microsoft Excel"],
    gallery: [
      {
        src: "/projects/ithaca-savings-and-loan-building-survey/field-notes.jpg",
        alt: "Hand-drawn field notes on graph paper of two window types and their cross-sections",
        caption: "Field notes of two window types and their cross-sections.",
      },
      {
        src: "/projects/ithaca-savings-and-loan-building-survey/west-elevation.png",
        alt: "AutoCAD west elevation of the two-story glass building, with an inset photo of a cracked window corner",
        caption:
          "West elevation. Noted: a crack in the bottom left corner of the window with a mail slot.",
      },
      {
        src: "/projects/ithaca-savings-and-loan-building-survey/east-elevation.png",
        alt: "AutoCAD east elevation of the building, with an inset photo of its blue-paneled southeast corner",
        caption: "East elevation. Noted: rust on the southeast corner.",
      },
      {
        src: "/projects/ithaca-savings-and-loan-building-survey/window-schedule.png",
        alt: "Window schedule table listing 130 windows, beside dimensioned drawings of window types A to D",
        caption: "Window schedule from the final set of survey drawings.",
      },
    ],
    links: {
      pdf: "/projects/ithaca-savings-and-loan-building-survey/portfolio-pages.pdf",
    },
  },
  {
    slug: "ideal-sustainable-city-design",
    title: "Ideal Sustainable City Design",
    category: "planning",
    summary:
      "Vista Celeste, a hypothetical transit-oriented community on a 22-acre site, designed for CRP 5861: Graphic Communications from hand sketches through AutoCAD, SketchUp and Photoshop renderings.",
    year: "2023",
    cover: {
      src: "/projects/ideal-sustainable-city-design/observatory.jpg",
      alt: "Rendering of Phoebe's Observatory, a white building with blue domes beside a tree-lined plaza",
    },
    question:
      "How would you design, and visually communicate to the public, a sustainable, walkable community built around a train station?",
    whatIDid: [
      "Designed a 22-acre (800 ft by 1,200 ft) hypothetical site in Fall 2023, as the culmination of a semester studying graphic communication theory and how sustainable and resilient development projects are presented to the public.",
      "Modeled the community after La Défense in Paris: a train hub as the gateway to a mixed-use neighborhood, with offices, ground-floor privately owned public spaces, and restaurants and shops leading to a local observatory.",
      "Took the plan from hand-drafting to AutoCAD linework, a 3D SketchUp model, and Photoshop renderings.",
      "Mapped pedestrian flow, land use and walkability frameworks, with elevated rail lines so cars can pass underneath on the mountainous terrain.",
    ],
    result: [
      "A complete visual package for Vista Celeste: an ideation sketch, a digitized plan, a 3D model, a rendered plan, street-level renderings of the station plaza and observatory, and framework diagrams.",
      "The design balances nature and the built environment, with the train station as the primary hub and the observatory as a secondary hub with public space and a scenic viewpoint.",
    ],
    tools: [
      "AutoCAD",
      "SketchUp",
      "Adobe Photoshop",
      "Adobe Illustrator",
      "Adobe InDesign",
    ],
    gallery: [
      {
        src: "/projects/ideal-sustainable-city-design/hand-drafting.jpg",
        alt: "Pencil hand-drafting of the community plan",
        caption:
          "Initial hand-drafting of a community built around transit-oriented design.",
      },
      {
        src: "/projects/ideal-sustainable-city-design/autocad-plan.png",
        alt: "AutoCAD line drawing of the plan with curved rail lines",
        caption: "AutoCAD digitization of the plan.",
      },
      {
        src: "/projects/ideal-sustainable-city-design/sketchup-model.jpg",
        alt: "Aerial view of a white 3D SketchUp massing model of the community",
        caption: "3D SketchUp model built from the AutoCAD linework.",
      },
      {
        src: "/projects/ideal-sustainable-city-design/rendered-plan.jpg",
        alt: "Photoshop-rendered top-view plan of Vista Celeste, with a train station, plaza, market, residences and observatory",
        caption:
          "Rendered plan. Points of interest: Etoile d'Astrale Station, Vista Celeste Market, the station plaza, Vista Celeste Residences and Phoebe's Observatory.",
      },
      {
        src: "/projects/ideal-sustainable-city-design/station-plaza.jpg",
        alt: "Street-level rendering of a pedestrian plaza with people, trees and a blue-framed station entrance",
        caption: "Etoile d'Astrale Station Plaza.",
      },
      {
        src: "/projects/ideal-sustainable-city-design/observatory.jpg",
        alt: "Rendering of a white observatory with blue domes and a tree-lined plaza",
        caption: "Phoebe's Observatory, the community's secondary hub.",
      },
      {
        src: "/projects/ideal-sustainable-city-design/pedestrian-flow.png",
        alt: "Plan diagram marking the primary hub at the station, the secondary hub at the observatory, and major and minor walkways",
        caption: "Activity hubs and main walkways.",
      },
      {
        src: "/projects/ideal-sustainable-city-design/land-use.png",
        alt: "Land use map with public, mixed-use, office, park, commercial and residential areas",
        caption: "Land use patterns.",
      },
      {
        src: "/projects/ideal-sustainable-city-design/pathways.png",
        alt: "Plan diagram of alleys, roads, transit lines and walkways",
        caption: "Pathways: alleys, roads, transit and walkways.",
      },
    ],
    links: {
      pdf: "/projects/ideal-sustainable-city-design/portfolio-pages.pdf",
    },
  },
];

/** Every project shown on the site, in the order written above. */
export const projects = allProjects.filter((p) => !p.hidden);

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
