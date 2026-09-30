import { IntLink, ExtLink } from "./SeoLinks";
import EMICalculator from "./Emicalculator";
import DownloadCostSheetActions from "./DownloadCostSheetActions";

const priceData = [
  { type: "2 BHK",        size: "1200 sq. ft.",    price: "₹ 1.38 Cr* onwards" },
  { type: "3 BHK",        size: "1600 sq. ft",  price: "₹ 1.90 Cr* onwards" },
  { type: "4 BHK",  size: "2300 sq. ft",  price: "₹ 2.65 Cr* onwards" },
];

export default function PriceListSection() {

  return (
    <section
      id="price-table"
      aria-labelledby="price-list-heading"
      className="w-full bg-white pt-14"
    >
      <div className="max-w-5xl mx-auto">

        <h2
          id="price-list-heading"
          className="text-xl md:text-2xl font-semibold text-gray-900 text-center mb-2"
        >
          Configuration and Price
        </h2>

        <div className="w-full h-px bg-gray-200 mb-5" />

        <div className="flex flex-col lg:flex-row gap-0 ">

<div className="flex-1 overflow-x-auto">
  <table
    className="w-full text-sm md:text-base"
    role="table"
    aria-label="Apartment types and pricing"
  >
    <thead>
      <tr className="border bg-primary text-white border-gray-200">
        <th className="py-1 px-2 font-bold text-center w-1/4">Unit Type</th>
        <th className="py-1 px-2 font-bold text-center w-1/3">Size</th>
        <th className="py-1 px-2 font-bold text-center w-1/3">Price</th>
      </tr>
    </thead>
    <tbody>
      {priceData.map((row, i) => (
        <tr
          key={i}
          className="border-b border-gray-300 hover:bg-gray-50 transition"
        >
          <td className="py-2 px-2 text-center text-black">{row.type}</td>
          <td className="py-2 px-2 text-center text-black">{row.size}</td>
          <td className="py-2 px-2 text-center font-medium text-primary">
            {row.price}
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>
          <div className="px-4 md:px-0">
            <img 
            className="w-full"
            loading="lazy"
            src="/images/costing-details.webp" alt="Costing Details" />
            <DownloadCostSheetActions/>
          </div>

        </div>
        <div className="mt-6 space-y-6">
          <div className="space-y-6 text-gray-800">
  <h2 className="text-2xl font-bold">Assetz Naru &amp; Nami Price – A Derived Band, Not a Developer Rate Card</h2>

  <h3 className="text-xl font-bold">Understanding the Indicative Price Range</h3>

  <p>The Assetz Naru &amp; Nami pricing discussion should be taken with a pinch of salt as the project has not yet released any official developer cost sheet. Therefore, the numbers currently circulating online should not be considered confirmed launch prices.</p>

  <p>Available market data indicates an indicative rate band of <strong>₹10,800 to ₹12,600 per sq. feet</strong>. This range is based on similar residential projects on Whitefield Hoskote Road and in the wider East Bangalore market. A central working rate of around <strong>Rs 11,500 per sq ft</strong> gives a good indication to estimate the possible ticket size of the apartments.</p>

  <p>This is not the same as quoting an official Assetz Naru &amp; Nami price. No rate card is published by the project confirming the final base price, floor-rise charges, parking charges, preferential location charges, maintenance deposit, taxes, or any other charges applicable to the project.</p>

  <h3 className="text-xl font-bold">How the Indicative Rate Has Been Worked Out</h3>

  <p>The derived range uses prices from comparable projects in the surrounding corridor. On the same road, <strong>Assetz Bloom &amp; Dell</strong> is priced at approximately ₹10,800 per sq. feet. Godrej Parkshire is priced at approximately ₹11,100 per sq. feet. Sattva Songbird is priced higher at approximately ₹12,600 per sq. ft. Other projects such as Brigade Belvedere and Sobha One World are even higher priced, but they are in different micro-markets, so the comparison is less direct.</p>

  <p>Now, on the basis of these comparisons, ₹11,500 per sq. ft. is considered as a middle reference and not a claimed Assetz Naru &amp; Nami launch rate.</p>

  <p>Buyers need to know this difference. However, a derived rate can help to understand the possible price level of a new project, but it cannot substitute the official cost sheet issued by the developer.</p>

  <h3 className="text-xl font-bold">What Are Indicative Apartment Prices?</h3>

  <p>This works out to ₹11,500 per sq. ft and with the indicative apartment sizes, gives a broad picture of the possible ticket prices.</p>

  <p>This is easy math. For instance, a 1,650 sq. ft. 3 BHK multiplied by ₹11,500 per sq. ft works out to around ₹1.90 crore. The actual price of an apartment can vary greatly once the developer releases the final unit sizes and rate card.</p>
</div>
<div className="space-y-6 text-gray-800">
  <h2 className="text-2xl font-bold">The More Useful Way to Look at Assetz Naru &amp; Nami Pricing</h2>

  <p>Rather than focusing on a single final price before launch, potential buyers can use prices from surrounding projects as a guide.</p>

  <p>A <strong>2 BHK of around 1,200 sq ft</strong> works out to <strong>Rs 1.38 crore</strong>, at an indicative rate of Rs 11,500 per sq ft. A <strong>3 BHK of around 1,650 sq. ft.</strong> would cost around <strong>₹1.90 crore</strong> and <strong>4 BHK of around 2,300 sq. ft.</strong> would cost around <strong>₹2.65 crore</strong>. Compare these sizes with the <IntLink href="/floor-plan">floor plans</IntLink>.</p>

  <p>They are not a ticket price or an official quote from Assetz. The exact amount may change depending on which apartment is chosen. The total cost may differ depending on project specific charges such as floor level, orientation, corner position, view, balcony configuration, parking and others.</p>

  <h3 className="text-xl font-bold">What Buyers Should Expect</h3>

  <p>The <strong>official cost sheet</strong> is the most important document for understanding the real Assetz Naru &amp; Nami price. It should specify the apartment&apos;s super builtup area and carpet area, the base rate and the additional charges.</p>

  <p>With this information, buyers can calculate the right price per sq. feet, themselves and avoid relying on figures thrown around through pre-launch channels.</p>

  <p>Till then, the range of ₹10,800-₹12,600 per sq. ft. and the figure of ₹11,500 per sq. ft. should be treated as market led references only. They help set a potential price level using nearby projects but are not an official Assetz Property Group rate card.</p>

  <h2 className="text-2xl font-bold">Karnataka RERA Status- All You Need to Know as Buyers</h2>

  <p>Assetz Naru &amp; Nami is currently shown as a pre-launch business and is not listed with <ExtLink href="https://rera.karnataka.gov.in/">Karnataka RERA</ExtLink>. The notice also says the state register has no open registration applications.</p>

  <p>This is an important point for anyone considering an early expression of interest. <ExtLink href="https://en.wikipedia.org/wiki/Real_Estate_(Regulation_and_Development)_Act,_2016">RERA registration</ExtLink> is more than a project detail. It gives buyers key information on the registered land, approved project details, the number of units, and the declared completion timeline. These details are not final until the project is registered.</p>

  <p>The lack of a RERA number also means buyers should not take anything they hear about current possession timelines, apartment configuration, price, or <IntLink href="/master-plan">master-plan details</IntLink> as final. Today, most of the information available on Assetz Naru &amp; Nami is based on pre-launch material and derived estimates, not a registered project record.</p>

  <h2 className="text-2xl font-bold">No Confirmed Possession Date Yet</h2>

  <p>Assetz Naru &amp; Nami has not yet made the possession date public. Therefore, treat any year or month quoted at the pre-launch stage as indicative, not a committed delivery date.</p>

  <p>As an estimate, we extrapolated a <strong>December 2032</strong> timeline based on the completion timelines attached to some of Assetz’s recent Karnataka registrations. This prediction is based on a possible registration time in 2027 and a growth period of about 5 years. It also gives us a bigger window of opportunity from about the middle of 2031 to the end of 2033.</p>

  <p>This figure will help you understand how the estimate was made, but it should not be taken as the date the developer said you could move in.</p>
</div>
<div className="space-y-6 text-gray-800">
  <h2 className="text-2xl font-bold">Why RERA Registration Matters for the Possession Timeline</h2>

  <p>RERA registration is a much more reliable reference point for the possession schedule. Official documents enable buyers to choose completion dates instead of depending on pre-launch estimates.</p>

  <p>The reference says the specific plot, survey number, approved plan and final project documents have not yet been made public.</p>

  <p>Until those details are available, buyers should view the project as an early stage opportunity rather than a development with an established construction and handover schedule.</p>

  <h2 className="text-2xl font-bold">What Buyers Should Verify After RERA Registration</h2>

  <p>Buyers should verify the registration details directly once Assetz Naru &amp; Nami receives its Karnataka RERA registration. Some of the important details to compare are</p>

  <ul className="list-disc space-y-2 pl-6">
    <li>Karnataka RERA registration number</li>
    <li>Registered land extent</li>
    <li>Survey numbers and project address</li>
    <li>Number of apartments</li>
    <li>Approved project layout</li>
    <li>Configuration and unit details</li>
    <li>Declared completion date</li>
    <li>Project phase, if developed in multiple phases</li>
    <li>Promoter details</li>
    <li>Registered specifications and amenities</li>
  </ul>

  <p>You can then compare those details with the information sales reps or channel partners provide.</p>
</div>
<div className="space-y-6 text-gray-800">
  <h2 className="text-2xl font-bold">Possession Should Be Based on Official Project Documents</h2>

  <p>For a project in its pre-launch phase like Assetz Naru &amp; Nami, it is better to separate three types of information: what is officially registered, what is being circulated in the market, and what has been calculated from available data.</p>

  <p>The December 2032 possession number now falls into the third category. This is a derived figure, not a firm pledge to hand over.</p>

  <p>Hence, the buyers should wait for the official RERA registration and registered completion schedule before considering possession as a fixed project milestone. And the same applies to the final number of apartments in the project, master plan, <IntLink href="/amenities">amenities</IntLink>, pricing, and exact site details.</p>

  <p>The bottom line for anyone considering an early expression of interest is simple: Assetz Naru &amp; Nami doesn’t have a <strong>verified Karnataka RERA registration</strong>. Also, it hasn&apos;t declared an official possession date. The project may go to registration and launch but final legal, planning and delivery details should be checked from the registered documents before making any financial commitment.</p>
</div>
        </div>
      </div>
    </section>
  );
}