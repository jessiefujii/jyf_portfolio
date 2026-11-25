// Content for the /about page. Edit text here; app/about/page.tsx only lays it out.

export const bio = [
  "Hi, I'm Jessie Fujii, a Tokyo-based urban planner and designer with a degree in Urban and Regional Studies from Cornell University. I love figuring out how neighborhoods and cities work, and turning that understanding into plans that actually help the people who live there.",
  "Right now I'm a product engineering intern at Quzilla Capital, working remotely on an HR and payroll platform. I take fixes and features from client needs to production, plan and run the quality assurance that protects clients' payroll and privacy data, and demo the product to clients in Japanese.",
  "My work has included mapping and data analysis to spot long-term trends in cities, surveying and documenting historic buildings by hand, and building community input, like resident surveys and interviews, directly into planning recommendations. I'm comfortable with the tools that bring this work to life too, from mapping software to design programs like Photoshop and InDesign, and I can present findings clearly to everyone from neighbors to city officials, in both English and Japanese.",
  "I'm particularly interested in roles where data, business insight and structured problem-solving intersect.",
];

export const education = [
  {
    school: "Cornell University",
    detail: "College of Architecture, Art, and Planning",
    degree: "B.S. in Urban and Regional Studies, Business minor",
    dates: "Class of 2025",
  },
];

export const skills: { label: string; items: string[] }[] = [
  {
    label: "Spatial",
    items: ["ArcGIS Pro", "QGIS", "GeoPandas", "AutoCAD", "SketchUp"],
  },
  {
    label: "Data",
    items: [
      "SQL (SQLite; UC Davis SQL for Data Science certificate)",
      "Python (pandas, NumPy, SciPy, statsmodels, scikit-learn)",
      "Java",
    ],
  },
  {
    label: "Visualization & reporting",
    items: [
      "Power BI (Microsoft certificates)",
      "Excel (Microsoft Office Specialist)",
      "PowerPoint",
      "Adobe Suite",
    ],
  },
  {
    label: "Languages",
    items: [
      "English (native)",
      "Japanese (native, JLPT N1)",
      "Italian (elementary)",
    ],
  },
];

export const interests = [
  "Basketball",
  "Volleyball",
  "Cities and urban design",
  "Travel",
  "Restaurant reviewing",
  "Video games",
];

export type Role = {
  title: string;
  org: string;
  dates: string;
  location?: string;
  points: string[];
};

export const experience: Role[] = [
  {
    title: "Product Engineering Intern",
    org: "Quzilla Capital",
    dates: "Jul 2026 – present",
    location: "Remote",
    points: [
      "Shipped 165 tested fixes and features to an HR and payroll platform, taking each from client needs to production.",
      "Protected client payroll and privacy data by producing and executing a quality assurance plan that caught 4 serious data-integrity errors before release.",
      "Demonstrated the product in regular client meetings in Japanese, launched beta testing with clients, and gathered feedback.",
    ],
  },
  {
    title: "Sales and Planning Associate (part-time)",
    org: "MLJ Incorporated",
    dates: "Feb 2025 – Sep 2026",
    location: "Remote",
    points: [
      "Coordinated with U.S. and China-based suppliers on logistics for inventory orders serving the Japanese market, including lead time calculations, international shipping and payment processing.",
      "Developed and executed sales strategies for Tuffy pet toys on Amazon Japan and Rakuten.",
      "Used industry events and trade shows, including Auto Salon and Interpet, to drive sales growth.",
    ],
  },
  {
    title: "Assistant English Language Teacher",
    org: "NOVA Holdings",
    dates: "Dec 2025 – Mar 2026",
    location: "Tokyo, Japan",
    points: [
      "Assisted with and independently led English lessons for classes of 25–40 students.",
      "Designed lesson plans with Japanese English teachers and coached students on speeches and presentations.",
    ],
  },
  {
    title: "Research Assistant",
    org: "Cornell University",
    dates: "Jul 2024 – Dec 2024",
    location: "Remote",
    points: [
      "Digitized Home Owners' Loan Corporation redlining maps in QGIS for the Legacy of Redlining project.",
      "Helped visualize US Census data against historical socioeconomic development patterns across 147 U.S. cities, from the 1930s to 2016.",
    ],
  },
  {
    title: "Student Library Assistant (part-time)",
    org: "Cornell University",
    dates: "Jun 2024 – Dec 2024",
    location: "Ithaca, NY",
    points: [
      "Catalogued 600+ missing and existing books in Excel and maintained inventory statistics ahead of a book sale.",
    ],
  },
  {
    title: "Urban Planner",
    org: "Cornell Design Connect",
    dates: "Aug 2023 – Dec 2023",
    location: "Ithaca, NY",
    points: [
      "Worked on a 72-page comprehensive plan for the Town of Candor, focused on economic development and infrastructure.",
      "Analyzed American Community Survey and Data Axle data in Excel and ArcGIS Pro, and interviewed community leaders and academic experts.",
      "Designed and distributed a Qualtrics survey that reached more than 200 residents, and presented findings to stakeholders.",
    ],
  },
  {
    title: "Sales and Marketing Intern",
    org: "MLJ Inc.",
    dates: "Jan 2022",
    location: "Tokyo, Japan",
    points: [
      "Prepared bilingual (Japanese and English) sales material and managed sales activities at Tokyo Auto Salon 2022.",
    ],
  },
  {
    title: "Games Services Intern",
    org: "Olympic Broadcasting Services",
    dates: "Jun 2021 – Aug 2021",
    location: "Tokyo, Japan",
    points: [
      "Coordinated distribution of food, uniforms and supplies to 3,000+ employees across 13 Olympic venues and the International Broadcasting Centre.",
      "Translated between English and Japanese across five departments to arrange lodging for 1,000+ incoming overseas employees.",
      "Compiled COVID-19 entry and exit procedures for 30+ countries.",
    ],
  },
  {
    title: "Junior Counselor",
    org: "ASIJ Summer Day Camp",
    dates: "Jul 2019 – Aug 2019",
    location: "Tokyo, Japan",
    points: [
      "Taught English to local Japanese students and supervised 40 second-grade students.",
    ],
  },
];
