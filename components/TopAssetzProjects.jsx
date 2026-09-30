import { FaMapMarkerAlt } from "react-icons/fa";
import { ExtLink, IntLink } from "./SeoLinks";

const projects = [
  {
    name: "Assetz Sora and Saki",
    location: "Bagalur, Bangalore",
    type: "Apartments",
    summary: (
      <>
        <strong>Assetz Sora and Saki</strong> stands out for its wide choice of home sizes. Spread across <strong>11.28 acres</strong> in <ExtLink href="https://en.wikipedia.org/wiki/Bagalur,_Bengaluru_Urban_district">Bagalur</ExtLink>, North Bangalore, it offers everything from compact <strong>studios to spacious 4 BHK apartments</strong>, which makes it a practical pick for first-time buyers, growing families and rental investors alike. Nearly three-fourths of the land (<strong>74% open space</strong>) is kept free of buildings, and the layout is approved by the <ExtLink href="https://kiadb.karnataka.gov.in/">Karnataka Industrial Areas Development Board (KIADB)</ExtLink>.
      </>
    ),
    specs: [
      ["Developer", "Assetz Property"],
      ["Land Area", "11.28 Acres"],
      ["Configuration", "Studio, 2, 3 & 4 BHK Apartments"],
      ["Open Space", "74%"],
      ["Amenities", "25+"],
      ["Possession", "July 2029"],
      ["Approving Authority", "KIADB – Karnataka Industrial Areas Development Board"],
    ],
  },
  {
    name: "Assetz Canvas and Cove",
    location: "Begur, Bangalore",
    type: "Apartments",
    summary: (
      <>
        <strong>Assetz Canvas and Cove</strong> is a <strong>17-acre community</strong> in <ExtLink href="https://en.wikipedia.org/wiki/Begur,_Bengaluru">Begur</ExtLink>, South Bangalore, built around one focused offering: <strong>3 BHK homes between 1,505 and 1,825 sq. ft.</strong> Phase 1 is scheduled for handover from 2025, while Phase 2 adds 274 residences across three B+G+25 towers. With <strong>70% of the site set aside as open area</strong> and prices from <strong>₹1.6 Cr onwards</strong>, it suits buyers who want a larger 3 BHK in an established southern neighbourhood.
      </>
    ),
    specs: [
      ["Developer", "Assetz Property"],
      ["Property Type", "Apartments"],
      ["Configuration", "3 BHK"],
      ["Unit Sizes", "1,505 - 1,825 sq. ft."],
      ["Total Land Area", "17 Acres"],
      ["Phase 2 Units", "274"],
      ["Total Towers", "3"],
      ["Structure", "B+G+25"],
      ["Open Space", "70%"],
      ["Price", "₹1.6 Cr Onwards"],
      ["Phase 1 Possession", "2025 Onwards"],
      ["Phase 2 Possession", "2028 Onwards"],
    ],
  },
  {
    name: "Assetz Codename Micropolis",
    location: "Kudlu, Bangalore",
    type: "Apartments",
    summary: (
      <>
        <strong>Assetz Codename Micropolis</strong> is the largest development on this list. Phase 1 alone covers <strong>25 acres of an 80-acre master plan</strong> in Kudlu, with around <strong>2,000 homes</strong> across five B+G+23 towers. Buyers can choose between <strong>3 and 4 BHK apartments</strong>, and a <strong>63,000 sq. ft. clubhouse</strong> anchors the lifestyle offering. It is best suited to families who want the scale and facilities of a mini-township. To see how a large Assetz layout is planned, you can also explore the <IntLink href="/master-plan">Assetz Naru & Nami master plan</IntLink>.
      </>
    ),
    specs: [
      ["Developer", "Assetz Property"],
      ["Phase 1 Land Area", "25 Acres"],
      ["Overall Development", "80 Acres"],
      ["Phase 1 Towers", "5"],
      ["Total Units", "2,000"],
      ["Configuration", "3 & 4 BHK Apartments"],
      ["Structure", "B+G+23"],
      ["Open Space", "70%"],
      ["Clubhouse", "63,000 sq. ft."],
      ["Possession", "December 2029 Onwards"],
    ],
  },
  {
    name: "Assetz Ren and Rei",
    location: "Gattahalli, Bangalore",
    type: "Apartments",
    summary: (
      <>
        <strong>Assetz Ren and Rei</strong> takes the opposite approach to Micropolis: a <strong>boutique community of just 218 homes on 3.8 acres</strong> in Gattahalli. Its two B+G+13 towers hold <strong>3 BHK apartments of roughly 1,800 sq. ft.</strong>, and 73% of the land stays open. Low density, a 14,000 sq. ft. clubhouse, generous covered parking and a plan approved by the <ExtLink href="https://en.wikipedia.org/wiki/Bangalore_Development_Authority">Bangalore Development Authority (BDA)</ExtLink> make it a strong choice for buyers who prefer a quieter, more private setting. The project is also registered with <ExtLink href="https://rera.karnataka.gov.in/">Karnataka RERA</ExtLink>.
      </>
    ),
    specs: [
      ["Developer", "Assetz Property"],
      ["Property Type", "Apartments"],
      ["Configuration", "3 BHK"],
      ["Unit Sizes", "1,796 - 1,821 sq. ft."],
      ["Land Area", "3.8 Acres"],
      ["Total Units", "218"],
      ["Total Towers", "2"],
      ["Structure", "B+G+13"],
      ["Open Space", "73%"],
      ["Clubhouse", "14,000 sq. ft."],
      ["Amenities", "20+"],
      ["Parking", "240 Covered, 26 Open"],
      ["Possession", "January 2029"],
      ["Price", "₹1.80 Cr Onwards"],
      ["Approving Authority", "BDA – Bangalore Development Authority"],
      ["RERA Number", "PRM/KA/RERA/1251/446/PR/130225/007501"],
    ],
  },
  {
    name: "Assetz Promise of Spring",
    location: "Devanahalli, Bangalore",
    type: "Residential Plots",
    summary: (
      <>
        <strong>Assetz Promise of Spring</strong> is the only <strong>plotted development</strong> in this list, giving buyers the freedom to build a home to their own design. The 20-acre layout in <ExtLink href="https://en.wikipedia.org/wiki/Devanahalli">Devanahalli</ExtLink>, the town that is home to <ExtLink href="https://en.wikipedia.org/wiki/Kempegowda_International_Airport">Kempegowda International Airport</ExtLink>, has <strong>291 plots of 1,200 to 1,500 sq. ft.</strong>, a 3-acre clubhouse zone and more than 5,000 trees. It is also the earliest to be handed over, with <strong>possession due in October 2026</strong>, and plots start at <strong>₹78 Lakhs onwards</strong>.
      </>
    ),
    specs: [
      ["Developer", "Assetz Property"],
      ["Property Type", "Residential Plots"],
      ["Plot Sizes", "1,200 - 1,500 sq. ft."],
      ["Land Area", "20 Acres"],
      ["Total Units", "291 Plots"],
      ["Clubhouse", "3 Acres"],
      ["Open Space", "47%"],
      ["Trees", "5,000+"],
      ["Possession", "October 2026"],
      ["Price", "₹78 Lakhs Onwards"],
      ["Approving Authority", "BIAPPA – Bangalore Airport Area Planning Authority"],
      ["RERA Number", "PRM/KA/RERA/1251/309/PR/030424/006771"],
    ],
  },
];

const itemListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Top 5 Best Assetz Projects in Bangalore",
  itemListElement: projects.map((p, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: `${p.name}, ${p.location}`,
  })),
};

export default function TopAssetzProjects() {
  return (
    <section
      id="top-assetz-projects"
      aria-labelledby="top-assetz-projects-heading"
      className="w-full bg-white py-14 px-4 border-t border-gray-100"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />
      <div className="max-w-5xl mx-auto">
        <h2
          id="top-assetz-projects-heading"
          className="text-2xl font-semibold text-gray-900 text-center mb-3"
        >
          Top 5 Best Assetz Projects in Bangalore
        </h2>
        <div className="w-full h-px bg-gray-200 mb-5" />

        <p className=" text-gray-800 text-sm md:text-base mb-6">
          Beyond <IntLink href="/">Assetz Naru & Nami</IntLink>,{" "}
          <strong>Assetz Property</strong> has several other residential projects
          across <ExtLink href="https://en.wikipedia.org/wiki/Bangalore">Bangalore</ExtLink>,
          from studio apartments in the north to plotted layouts near the airport.
          Here are the <strong>top 5 best Assetz projects in Bangalore</strong>,
          with the land area, configurations, prices and possession dates you need
          to compare them. To see how they stack up against Naru & Nami, check its{" "}
          <IntLink href="/price">latest price list</IntLink>,{" "}
          <IntLink href="/floor-plan">floor plans</IntLink>,{" "}
          <IntLink href="/amenities">amenities</IntLink> and{" "}
          <IntLink href="/location">location advantages</IntLink>.
        </p>

        <div className="space-y-8">
          {projects.map((p, i) => (
            <article
              key={p.name}
              className="border border-gray-200 rounded-lg overflow-hidden"
            >
              <div className="bg-primary text-white px-5 py-4 flex items-start gap-4">
                <span className="text-2xl font-bold opacity-60 leading-none pt-1">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="flex-1">
                  <h3 className="text-lg md:text-xl font-bold">{p.name}</h3>
                  <p className="text-sm flex items-center gap-1.5 opacity-90 mt-1">
                    <FaMapMarkerAlt className="shrink-0" /> {p.location}
                    <span className="opacity-60">·</span> {p.type}
                  </p>
                </div>
              </div>

              <div className="p-5">
                <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-5">
                  {p.summary}
                </p>
                <dl className="grid sm:grid-cols-2 gap-x-8 text-sm">
                  {p.specs.map(([label, value]) => (
                    <div
                      key={label}
                      className="flex justify-between gap-4 py-2 border-b border-gray-100"
                    >
                      <dt className="font-semibold text-gray-600">{label}</dt>
                      <dd className="text-gray-900 text-right break-all sm:break-normal">
                        {value}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </article>
          ))}
        </div>

        <p className="text-gray-500 text-xs md:text-sm mt-8 text-center max-w-3xl mx-auto">
          Prices, possession timelines and specifications are indicative and may
          change. Buyers should confirm the latest details with the developer and
          verify each project&apos;s registration on the official{" "}
          <ExtLink href="https://rera.karnataka.gov.in/">Karnataka RERA portal</ExtLink>{" "}
          before booking. Learn more about the{" "}
          <ExtLink href="https://en.wikipedia.org/wiki/Real_Estate_(Regulation_and_Development)_Act,_2016">
            Real Estate (Regulation and Development) Act, 2016
          </ExtLink>
          .
        </p>
      </div>
    </section>
  );
}
