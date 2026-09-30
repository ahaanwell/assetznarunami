/* eslint-disable react/no-unescaped-entities */
import { IntLink } from "./SeoLinks";

import FloorPlanClient from "./FloorPlanClient";

const floorPlans = [
  {
    id: 1,
    label: "2 BHK Floor Plan",
    image: "./images/2bhk-floorplan.webp",
    alt: "2 BHK Floor Plan",
  },
  {
    id: 2,
    label: "3 BHK Floor Plan",
    image: "./images/3bhk-floorplan.webp",
    alt: "3BHK Floor Plan",
  },
  {
    id: 3,
    label: "4 BHK Floor Plan",
    image: "./images/4bhk-floorplan.webp",
    alt: "4 BHK Floor Plan",
  },
];

export default function FloorPlanSection() {
  return (
    <section
      id="floor-plan"
      aria-labelledby="floor-plan-heading"
      className="w-full bg-white pt-14 px-4 md:px-0"
    >
      <div className="max-w-5xl mx-auto">

        <h2
          id="floor-plan-heading"
          className="text-xl md:text-2xl font-semibold text-gray-900 text-center mb-2"
        >
          Floor Plan
        </h2>

        <div className="w-full h-px bg-gray-200 mb-5" />
        <div className="space-y-6 text-gray-800 mb-6">
  <p>The <IntLink href="/floor-plan"><strong>Assetz Naru &amp; Nami Floor Plan</strong></IntLink> helps homebuyers understand the apartment layouts, available configurations, and residential space planning before choosing a home. Located on <strong>Whitefield–Hoskote Road (SH-35), East Bangalore</strong>, the project offers <strong>2, 3, and 4 BHK apartments</strong> developed by <strong>Assetz Property</strong>.</p>

  <p>When reviewing a floor plan, buyers should focus on the arrangement of bedrooms, living and dining areas, kitchen, bathrooms, balconies, and overall usable space. These details help determine whether an apartment suits their family size, daily routine, and furniture requirements.</p>
</div>
        <ul
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          aria-label="Assetz Naru & Nami floor plans"
        >
          {floorPlans.map((plan) => (
            <li
              key={plan.id}
              className="rounded overflow-hidden border border-gray-200 shadow-sm cursor-pointer"
            >
              <div className="relative w-full aspect-[4/3] overflow-hidden bg-gray-100">
                <img
                  src={plan.image}
                  alt={plan.alt}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />

                <FloorPlanClient plan={plan} />
              </div>

              <div className="bg-primary text-white text-center font-semibold text-base md:text-lg py-3 px-4">
                {plan.label}
              </div>
            </li>
          ))}
        </ul>
        <div className="space-y-6 text-gray-800 mt-6">
  <h3 className="text-xl font-bold">Available Apartment Configurations</h3>

  <p>Assetz Naru &amp; Nami offers three apartment configurations:</p>

  <ul className="list-disc space-y-2 pl-6">
    <li><strong>2 BHK Apartments:</strong> Suitable for individuals, couples, or smaller families looking for a two-bedroom layout.</li>
    <li><strong>3 BHK Apartments:</strong> Provide an additional bedroom for families requiring more flexibility in their living arrangements.</li>
    <li><strong>4 BHK Apartments:</strong> Offer a larger configuration for households requiring additional bedrooms and living space.</li>
  </ul>

  <h3 className="text-xl font-bold">What Should Buyers Check in the Floor Plan?</h3>

  <p>Before selecting an apartment, customers should compare the <strong>carpet area</strong>, <strong>room dimensions</strong>, balcony space, ventilation, and overall layout efficiency. Checking the placement of doors, windows, and bathrooms can also help buyers understand how the available space can be used.</p>

  <p>The project comprises <strong>725 apartments across six towers</strong>, with each tower planned with <strong>two basements, a ground floor, and 30 upper floors</strong>, as shown in the <IntLink href="/master-plan">master plan</IntLink>.</p>

  <p>Buyers should refer to the official floor plans for exact apartment dimensions, carpet areas, and configuration-wise availability, and the <IntLink href="/price">latest price list</IntLink> for costs. These details provide a clearer understanding of the residential options before making a purchase decision.</p>
</div>
      </div>
    </section>
  );
}