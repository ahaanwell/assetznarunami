/* eslint-disable react/no-unescaped-entities */
import { IntLink, ExtLink } from "./SeoLinks";
export default function FaqSection() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="w-full bg-white py-14 px-4 border-t border-gray-100"
    >
      <div className="max-w-4xl mx-auto">
        <h2
          id="faq-heading"
          className="text-2xl font-semibold text-gray-900 text-center mb-3"
        >
          Frequently Asked Questions
        </h2>
        <p className="text-center text-gray-500 text-sm md:text-base mb-10">
          Everything you need to know about Assetz Naru & Nami.
        </p>
        <div className="space-y-6 text-gray-800 mt-6">
  <h3 className="text-xl font-bold">Where in Bangalore is Assetz Naru &amp; Nami located?</h3>

  <p><strong>Assetz Naru &amp; Nami</strong> is based in <ExtLink href="https://en.wikipedia.org/wiki/Bangalore">Bangalore</ExtLink>. More information about the micro-market and <IntLink href="/location">address</IntLink> will be shared as the project gets closer to its official start.</p>

  <h3 className="text-xl font-bold">Is Assetz Naru &amp; Nami RERA approved?</h3>

  <p>Assetz Naru &amp; Nami is in the pre-launch phase. <ExtLink href="https://rera.karnataka.gov.in/">Karnataka RERA</ExtLink> registration is likely to be completed before the official launch, as per the usual process the developer uses for its Bangalore projects.</p>

  <h3 className="text-xl font-bold">What will be the configurations of Assetz Naru &amp; Nami?</h3>

  <p><strong>Assetz Naru &amp; Nami</strong> <IntLink href="/floor-plan">unit size and configuration details</IntLink> are being finalized and will be released as the project moves from pre-launch to launch.</p>

  <h3 className="text-xl font-bold">Assetz Naru &amp; Nami comprises of how many towers?</h3>

  <p>The project has <strong>6 residential towers</strong> with a structure of <strong>2 basements + ground + 30 floors</strong>.</p>

  <h3 className="text-xl font-bold">Is Assetz Naru &amp; Nami family-friendly?</h3>

  <p>With <strong>2, 3 and 4 BHK flats</strong>, the project is great for client who need to buy a home for their family. It's also close to schools, hospitals, shopping centers, and job centers in and around <ExtLink href="https://en.wikipedia.org/wiki/Whitefield,_Bengaluru">Whitefield</ExtLink>.</p>

  <h3 className="text-xl font-bold">Is Assetz Naru &amp; Nami a good investment?</h3>

  <p>The project may be suitable for investors looking for long term investment especially those looking at the growing residential market in <strong>East Bangalore</strong>. Before investing, buyers should consider the <IntLink href="/price">purchase price</IntLink>, payment schedule, holding period and future competitive supply.</p>
</div>
      </div>
    </section>
  );
}