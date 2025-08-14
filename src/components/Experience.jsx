import React from "react";

const Experience = () => {
  const roles = [
    {
      emoji: "🛠️",
      title: "Associate Software Engineer",
      company: "Hightechx Software Solutions (Pvt) Ltd",
      link: "http://hightechx.lk/",
      period: "Jan 2025 – Present",
      summary:
        "Promoted from intern and continued full-stack delivery for the company’s end-to-end ERP web application using React UIs and reusable components, implemented Spring Boot REST services, and designed MySQL schemas and queries for core workflows. Also handled reporting via Jasper Reports ported from Crystal Reports, integrated in Spring Boot with React parameter screens, and migrated report procedures from SQL Server to MySQL.",
      badges: ["React (TS)", "Spring Boot", "MySQL", "JasperReports", "Agile/Jira", "Crystal report", "MSSQL"],
      bullets: [
        "Continued core ERP responsibilities: React UI, Spring Boot APIs, and MySQL schema/queries under Agile cadence (Jira + daily stand-ups via Google Meet).",
        "Created and maintained Jasper Reports (JRXML) templates aligned with ERP workflows and branding.",
        "Integrated reporting into Spring Boot services, exposing secure endpoints for on-demand PDF generation.",
        "Built React screens to capture report parameters/filters and trigger generation/download flows.",
        "Migrated MS SQL Server (T–SQL) stored procedures to MySQL for reporting datasets; validated output parity and performance.",
        "Authored supporting MySQL tables, stored procedures, CRUD, and documentation for report usage and troubleshooting.",
      ],
    },
    {
      emoji: "👩‍💻",
      title: "Software Engineer Intern",
      company: "Hightechx Software Solutions (Pvt) Ltd",
      link: "http://hightechx.lk/",
      period: "Jul 2024 – Dec 2024",
      summary:
        "Completed a 6-month remote internship delivering full-stack features for an ERP web application using React with TypeScript, Spring Boot, and MySQL. Converted PM-provided sample screens and field specifications into production-ready UI, REST APIs, and database queries, working in Agile with Jira and daily stand-ups.",
      badges: ["React (TS)", "Spring Boot", "MySQL", "Remote", "Agile/Jira"],
      bullets: [
        "Implemented end-to-end ERP screens: React UI components, Spring Boot endpoints, and MySQL tables/queries.",
        "Translated sample screens into responsive, reusable pages aligned with ERP workflow requirements.",
        "Designed relational schema elements and wrote CRUD queries to support ERP entities and transactions.",
        "Integrated frontend with backend REST services; aligned data models and debugged request/response issues.",
        "Tracked and updated tasks in Jira (ticket ownership, status transitions, estimates, and notes).",
        "Reported progress, blockers, and next steps in daily stand-up meetings via Google Meet.",
      ],
    },
    {
      emoji: "📝",
      title: "Document Specialist",
      company: "RR Donnelley Outsource (Pvt) Ltd",
      link: "https://www.rrd.com/locations/rrd-go-colombo",
      period: "Dec 2019 – May 2020",
      summary:
        "Created and formatted client-facing financial documents with RRD tools and Microsoft Office, delivering on-time, error-free files with consistent, brand-aligned layouts.",
      badges: ["PowerPoint", "MS Office", "QA/Proofing"],
      bullets: [
        "Produced financial documents using template and style-guide standards.",
        "Performed final QA and exported PDF under tight deadlines.",
        "Coordinated with project teams to clarify requirements and meet tight turnarounds.",
      ],
    },
  ];

  return (
    <div
      name="experience"
      className="w-full min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white relative overflow-hidden"
    >
      {/* Decorative gradient orbs */}
      <div className="pointer-events-none absolute -top-20 -left-20 h-72 w-72 rounded-full bg-fuchsia-600/20 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl" />

      <div className="max-w-screen-lg p-6 sm:p-10 mx-auto w-full">
        <div className="pb-6">
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 via-fuchsia-300 to-indigo-300">
              Experience 💼
            </span>
          </h2>
          <p className="mt-2 text-gray-300 text-sm sm:text-base">
            A quick timeline of roles, responsibilities, and impact.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative pl-6 sm:pl-10">
          {/* Vertical line */}
          <div className="absolute top-0 left-3 sm:left-5 h-full w-1 bg-gradient-to-b from-cyan-500 via-fuchsia-500 to-indigo-500 rounded-full" />

          <div className="space-y-10">
            {roles.map((r, idx) => (
              <article
                key={idx}
                className="relative group"
              >
                {/* Emoji pin */}
                <div className="absolute -left-1.5 sm:-left-0.5 -top-1 text-2xl select-none">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 ring-2 ring-white/20 backdrop-blur-sm">
                    {r.emoji}
                  </span>
                </div>

                {/* Card */}
                <div className="ml-6 sm:ml-12 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-5 sm:p-6 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.6)] transition-transform duration-200 group-hover:-translate-y-0.5">
                  <header className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                    <h3 className="text-2xl sm:text-3xl font-semibold">
                      {r.title} <span className="text-white/50">•</span>{" "}
                      {r.link ? (
                        <a
                          href={r.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="underline decoration-dotted underline-offset-4 text-cyan-300 hover:text-cyan-200 transition-colors"
                        >
                          {r.company} ↗
                        </a>
                      ) : (
                        <span className="text-gray-300">{r.company}</span>
                      )}
                    </h3>
                    <div className="mt-1 sm:mt-0 text-sm sm:text-base text-gray-300 flex items-center gap-2">
                      <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-white/10 ring-1 ring-white/10">
                        <span role="img" aria-hidden>📅</span> {r.period}
                      </span>
                    </div>
                  </header>

                  <p className="mt-3 text-base sm:text-lg leading-relaxed text-gray-200">
                    {r.summary}
                  </p>

                  {/* Badges */}
                  <div className="mt-3 flex flex-wrap gap-2">
                    {r.badges.map((b, i) => (
                      <span
                        key={i}
                        className="text-xs sm:text-sm px-2.5 py-1 rounded-full bg-gradient-to-r from-cyan-600/30 to-fuchsia-600/30 ring-1 ring-white/10"
                      >
                        {b}
                      </span>
                    ))}
                  </div>

                  <ul className="mt-4 space-y-2 text-sm sm:text-base text-gray-100">
                    {r.bullets.map((li, i) => (
                      <li key={i} className="flex gap-2">
                        <span className="pt-1.5 text-cyan-300" aria-hidden>
                          ✅
                        </span>
                        <span>{li}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
