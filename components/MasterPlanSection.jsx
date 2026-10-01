/* eslint-disable react/no-unescaped-entities */
import { IntLink } from "./SeoLinks";

import MasterPlanClient from "./MasterPlanClient";

export default function MasterPlanSection() {
  return (
    <section
      id="master-plan"
      aria-labelledby="master-plan-heading"
      className="w-full bg-white pt-14 px-4 md:px-0"
    >
      <div className="max-w-5xl mx-auto">
        <h2
          id="master-plan-heading"
          className="text-xl md:text-2xl font-semibold text-gray-900 text-center mb-2"
        >
          Master Plan
        </h2>

        <div className="w-full h-px bg-gray-200 mb-5" />
        <div className="space-y-6 text-gray-800 mb-6">
  <p>The <IntLink href="/master-plan"><strong>Assetz Naru and Nami Master Plan</strong></IntLink> gives prospective buyers an overall view of how the residential development is arranged within its approximately <strong>15-acre site</strong> on <strong>Whitefield–Hoskote Road (SH-35), East Bangalore</strong>.</p>

  <p>Unlike an <IntLink href="/floor-plan">apartment floor plan</IntLink>, which explains the internal layout of an individual home, the master plan focuses on the complete project. It helps customers understand the positioning of residential towers, open spaces, and the overall development arrangement.</p>
</div>
        <div className="max-w-2xl mx-auto">
          <div
          
            className="relative w-full aspect-[5/3] bg-gray-100 overflow-hidden"
          >
            <img
              src="./images/master-plan.webp"
              alt="Master Plan"
              className="w-full h-full object-cover"
              loading="lazy"
            />

            <MasterPlanClient/>
          </div>

          <div className="bg-primary text-white text-center font-semibold text-lg md:text-xl py-4 px-4">
            Master Plan
          </div>

        </div>
        <div className="space-y-6 text-gray-800 mt-6">
  <h3 className="text-xl font-bold">Understanding the Project Layout</h3>

  <p>Assetz Naru &amp; Nami comprises <strong>six residential towers</strong> with a total of <strong>725 apartments</strong>. Each tower is planned with two basement levels, a ground floor, and 30 upper floors.</p>

  <p>By examining the master plan, buyers can understand how the residential buildings are positioned within the available land area and how the different sections of the development are organised.</p>

  <h3 className="text-xl font-bold">Open Space and Site Planning</h3>

  <p>The project has a stated open space allocation of <strong>75%</strong>. This is an important detail for customers evaluating the overall site layout and the relationship between residential buildings and outdoor areas.</p>

  <p>The master plan should be checked to understand the distribution of these spaces and the arrangement of internal access routes.</p>

  <h3 className="text-xl font-bold">What Should Buyers Check?</h3>

  <p>Before purchasing an apartment, customers should review the following details in the official master plan:</p>

  <ul className="list-disc space-y-2 pl-6">
    <li>Position and arrangement of all six residential towers.</li>
    <li>Overall project boundaries and land area.</li>
    <li>Distribution of designated open spaces.</li>
    <li>Internal circulation and access arrangements.</li>
    <li>Location of facilities shown in the approved layout.</li>
  </ul>

  <p>Understanding these elements helps buyers assess the project's overall planning rather than focusing only on the apartment they intend to purchase.</p>
</div>
      </div>
    </section>
  );
}