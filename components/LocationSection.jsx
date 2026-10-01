/* eslint-disable react/no-unescaped-entities */
import { IntLink, ExtLink } from "./SeoLinks";
import Link from "next/link";

const MAP_EMBED_URL =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.814120641986!2d77.75246659999999!3d12.983737699999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae0e04f337a7ed%3A0x2ecabd34a3a9e533!2sSH%2035%20%26%20Whitefield%20-%20Hoskote%20Rd%2C%20Maithri%20Layout%2C%20Kadugodi%2C%20Bengaluru%2C%20Karnataka%20560066!5e0!3m2!1sen!2sin!4v1790658757080!5m2!1sen!2sin";

export default function LocationSection() {
  return (
    <section
      id="location"
      aria-labelledby="location-heading"
      className="w-full bg-white pt-14 px-3 md:px-0"
    >
      <div className="max-w-5xl mx-auto">
        <h2
          id="location-heading"
          className="text-xl md:text-2xl font-semibold text-gray-900 text-center mb-2"
        >
          Location of Assetz Naru and Nami
        </h2>

        <div className="w-full h-px bg-gray-200 mb-5" />
        <div className="space-y-6 text-gray-800 mb-6">
  <p>
    <strong>Assetz Naru and Nami</strong> is located in <strong>East Bangalore on Whitefield-Hoskote Road or SH-35</strong>. The project references connect it to the wider <strong>Seegehalli-Kannamangala-Doddabanahalli belt</strong> and to Kannamangala.
  </p>
</div>
        <div className="rounded-xl overflow-hidden border border-gray-200 shadow-sm mb-8">
          <div className="w-full h-[380px] md:h-[460px]">
            <iframe
              src={MAP_EMBED_URL}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Assetz Naru & Nami location map — Whitefield-Hoskote Road, Bangalore East"
              aria-label="Google Maps showing Assetz Naru & Nami location on Whitefield-Hoskote Road, Bangalore East"
            />
          </div>

          <Link
            href="https://maps.app.goo.gl/mgHt22xpDC33Br8B9"
            target="_blank"
            rel="nofollow noopener noreferrer"
            aria-label="Know more about Assetz Naru & Nami location on Whitefield-Hoskote Road"
            className="block w-full bg-primary hover:bg-primary-dark text-white text-center font-semibold text-lg py-4 transition-colors duration-200"
          >
            Know More About Location
          </Link>
        </div>
        <div className="mt-6 space-y-6">
          <div className="space-y-6 text-gray-800">
  <h2 className="text-2xl font-bold">
    Connectivity
  </h2>

  <h3 className="text-xl font-bold">
    Location Advantages
  </h3>

  <h3 className="text-xl font-bold">
    Thoroughfares
  </h3>

  <ul className="list-disc space-y-2 pl-6">
    <li>
      <strong>Outer Ring Road</strong> — City-wide arterial
    </li>
    <li>
      <strong>NICE Road</strong> — City-wide arterial
    </li>
    <li>
      <ExtLink href="https://en.wikipedia.org/wiki/Kempegowda_International_Airport"><strong>Kempegowda International Airport</strong></ExtLink> — Bangalore North
    </li>
  </ul>

  <h3 className="text-xl font-bold">
    Corporate
  </h3>

  <ul className="list-disc space-y-2 pl-6">
    <li>
      <ExtLink href="https://en.wikipedia.org/wiki/International_Tech_Park,_Bengaluru"><strong>Whitefield ITPL</strong></ExtLink> — East Bangalore
    </li>
    <li>
      <strong>Manyata Tech Park</strong> — North Bangalore
    </li>
    <li>
      <strong>Electronic City</strong> — South Bangalore
    </li>
  </ul>

  <h3 className="text-xl font-bold">
    Hospitality
  </h3>

  <ul className="list-disc space-y-2 pl-6">
    <li>
      <strong>The Leela Palace Bengaluru</strong> — Central Bangalore
    </li>
    <li>
      <strong>ITC Gardenia</strong> — Central Bangalore
    </li>
  </ul>

  <h3 className="text-xl font-bold">
    Education
  </h3>

  <ul className="list-disc space-y-2 pl-6">
    <li>
      <strong>National Public School</strong> — Bangalore
    </li>
    <li>
      <strong>Deens Academy</strong> — Bangalore
    </li>
  </ul>

  <h3 className="text-xl font-bold">
    Healthcare
  </h3>

  <ul className="list-disc space-y-2 pl-6">
    <li>
      <ExtLink href="https://en.wikipedia.org/wiki/Manipal_Hospitals"><strong>Manipal Hospital</strong></ExtLink> — Bangalore
    </li>
    <li>
      <strong>Columbia Asia Hospital</strong> — Bangalore
    </li>
  </ul>

  <p>
    This corridor connects the well-developed Whitefield side of Bangalore with Hoskote and the eastern growth belt.
  </p>

  <p>
    <ExtLink href="https://en.wikipedia.org/wiki/Whitefield,_Bengaluru">Whitefield</ExtLink> has grown into one of Bangalore's key technology and employment hubs. Residential and infrastructure development continues outside the Whitefield core.
  </p>

  <p>
    This location provides buyers with a mix of access to a settled employment hub and proximity to a growing residential corridor.
  </p>
</div>
<div className="space-y-6 text-gray-800">
  <h2 className="text-2xl font-bold">
    Whitefield-Hoskote Road – The Larger Connectivity Advantage
  </h2>

  <p>
    Whitefield-Hoskote Road is a major driver of the project's location story.
  </p>

  <p>
    The corridor connects Whitefield to Hoskote and provides access to the eastern road network. The nearby areas are <strong>Kannamangala</strong>, <ExtLink href="https://en.wikipedia.org/wiki/Kadugodi"><strong>Kadugodi</strong></ExtLink>, <strong>Seegehalli</strong>, <ExtLink href="https://en.wikipedia.org/wiki/Hoskote"><strong>Hoskote</strong></ExtLink>.
  </p>

  <p>
    Developer-centric references to reach Whitefield, ITPL, Kadugodi, KR Puram and Hoskote.
  </p>

  <p>
    This makes the place relevant for professionals whose daily routines are concentrated in East Bangalore.
  </p>

  <h2 className="text-2xl font-bold">
    Connectivity to Whitefield
  </h2>

  <p>
    Whitefield is one of Bangalore's important residential and employment hubs.
  </p>

  <p>
    It has a large ecosystem of technology companies, office campuses, educational institutions, healthcare facilities, shopping malls, restaurants and residential communities.
  </p>

  <p>
    The project is outside the most congested parts of Whitefield but linked to the area through the <IntLink href="/location">Whitefield-Hoskote Road corridor</IntLink>.
  </p>

  <p>
    The developer focused source says Whitefield is <strong>about 8 to 10 km away</strong>, but the exact distance will depend on the project's access point and final site address.
  </p>
</div>
<div className="space-y-6 text-gray-800">
  <h2 className="text-2xl font-bold">Access to ITPL and East Bangalore Employment Hubs</h2>

  <p>East Bangalore has a lot of job centers, including ITPL and the larger Whitefield technology belt.</p>

  <p>For professionals in these verticals, a home on the Whitefield-Hoskote corridor provides access to the established business ecosystem without the Whitefield hustle.</p>

  <p>The currently published location information says ITPL is <strong>about 9-11 km away</strong>, and travel time depends heavily on traffic.</p>

  <p>This is a major consideration for buyers. Commute time in Bangalore isn't just a function of road distance. Peak-hour congestion can significantly affect travel time.</p>

  <h3 className="text-xl font-bold">Hope Farm, Junction</h3>

  <p>Whitefield area- Another key landmark mentioned in the project information is Hope Farm Junction.</p>

  <p>Source - developer-oriented. The project is <strong>about 6 to 8 km away</strong> from the project site, with an approximate travel time of <strong>15 to 25 minutes</strong>.</p>

  <p>The junction is a strong reference point for connectivity, as it connects residential areas to the larger Whitefield road network.</p>

  <h3 className="text-xl font-bold">Kadugodi Metro Connectivity</h3>

  <p>Kadugodi is significant as it is linked with the eastern terminus of the operational <ExtLink href="https://en.wikipedia.org/wiki/Purple_Line_(Namma_Metro)">Purple Line</ExtLink> of <ExtLink href="https://en.wikipedia.org/wiki/Namma_Metro">Namma Metro</ExtLink>.</p>

  <p>The research on available corridors indicates that the Whitefield/Kadugodi Purple Line terminus is the relevant metro connection for this side of SH-35. The Purple Line was extended up to Whitefield on <strong>26 March 2023</strong>.</p>

  <p><strong>Kadugodi Metro Station</strong> is <strong>about 7-9 km away</strong>, according to the developer’s project page for developers.</p>

  <p>The exact route and travel time will depend on the final project entrance and traffic conditions.</p>

  <h3 className="text-xl font-bold">Whitefield Railway Station</h3>

  <p>Another transport option, outside the area, is Whitefield Railroad Station.</p>

  <p>The source close to the developer puts the railroad station <strong>8-10 km</strong> from the project.</p>

  <p>Rail links can support regional travel and offer residents another transport option.</p>

  <h3 className="text-xl font-bold">Connectivity to Hoskote</h3>

  <p>Another major reference point is Hoskote, on the eastern side of the corridor.</p>

  <p>Developer-focused project details put Hoskote at <strong>about 8-12 km</strong> away.</p>

  <p>Hoskote has grown into an important eastern growth center with industrial, logistics and residential activity.</p>

  <h3 className="text-xl font-bold">KR Puram Connectivity</h3>

  <p><ExtLink href="https://en.wikipedia.org/wiki/Krishnarajapuram">KR Puram</ExtLink> is another key connectivity point from East Bangalore.</p>

  <p>Project material puts the distance to KR Puram at <strong>about 14-17 km</strong>.</p>

  <p>KR Puram offers access to central Bangalore and other major parts of the city, but actual journey times can be very different in rush-hour traffic.</p>

  <h3 className="text-xl font-bold">Kempegowda International Airport.</h3>

  <p>The airport provides one of the big advantages of long distance connectivity to Bangalore’s eastern and northern growth corridors.</p>

  <p>The developer-focused source says <ExtLink href="https://en.wikipedia.org/wiki/Kempegowda_International_Airport">Kempegowda International Airport</ExtLink> is <strong>about 35-45 km</strong> from the project, with a travel time of <strong>45-70 minutes</strong>.</p>

  <p>When travelling by road to the airport, always consider the time of day, as Bangalore traffic can make road travel challenging.</p>

  <p>The eastern road network also connects to Hoskote and higher regional roads.</p>

  <h3 className="text-xl font-bold">NH-75 and Wider Eastern Road Network</h3>

  <p>The Whitefield-Hoskote corridor connects to the wider eastern road network, including links to Hoskote and <ExtLink href="https://en.wikipedia.org/wiki/National_Highway_75_(India)">NH-75</ExtLink>.</p>

  <p>This provides connectivity beyond Whitefield and makes the location relevant for residents whose work or family travel extends toward the eastern and south-eastern parts of the Bengaluru region.</p>

  <h3 className="text-xl font-bold">Satellite Town Ring Road and Bengaluru-Chennai Expressway</h3>

  <p>The larger Hoskote region has also become important with major regional infrastructure.</p>

  <p>The corridor study said the opening of <ExtLink href="https://en.wikipedia.org/wiki/Satellite_Town_Ring_Road">Satellite Town Ring Road</ExtLink>’s <strong>80 km Dabaspete-Hoskote stretch</strong> in March 2024 was a good move. It also mentions that the Hoskote-Bethamangala stretch of the <ExtLink href="https://en.wikipedia.org/wiki/Bengaluru%E2%80%93Chennai_Expressway">Bengaluru-Chennai Expressway</ExtLink> was inaugurated in December 2024.</p>

  <p>These are primarily regional and intercity transport assets, not direct local commuter roads, but they strengthen Hoskote’s position in the wider transportation network.</p>

  <h3 className="text-xl font-bold">Schools and Educational Infrastructure</h3>

  <p>Access to schools is a key factor families looking to buy a home in East Bangalore usually consider.</p>

  <p>There are a lot of educational institutions around the Whitefield ecosystem and the wider corridor around Kadugodi, Kannamangala and Hoskote is also growing.</p>

  <p>In the developer oriented material, the wider Bangalore location also refers to educational institutions like <strong>National Public School</strong> and <strong>Deens Academy</strong>.</p>

  <p>The larger town also has schools for various curricula and age groups.</p>

  <p>Parents should consider the real school commute during weekday mornings, not just the straight-line distance.</p>

  <h3 className="text-xl font-bold">Healthcare Facilities Near the Project</h3>

  <p>Another major advantage of being linked to established Whitefield is access to healthcare.</p>

  <p>The project information refers to <strong>Manipal Hospital</strong>, <ExtLink href="https://en.wikipedia.org/wiki/Vydehi_Institute_of_Medical_Sciences_and_Research_Centre">Vydehi Hospital</ExtLink> and other healthcare facilities in the larger area.</p>

  <p>Developer-centric connectivity information indicates Manipal Hospital Whitefield at approximately 9-12 km and Vydehi Hospital at approximately 9-12 km.</p>

  <p>For families, senior citizens and households with children, access to established hospitals can be especially important.</p>

  <h3 className="text-xl font-bold">Shopping &amp; Retail Options</h3>

  <p><strong>Assetz Naru &amp; Nami</strong> Residents are able to utilize the retail ecosystem developed around Whitefield.</p>

  <p>Whitefield has shopping centers, supermarkets, restaurants, cafes, entertainment destinations and daily retail services.</p>

  <ul className="list-disc space-y-2 pl-6">
    <li><ExtLink href="https://en.wikipedia.org/wiki/Phoenix_Marketcity_(Bengaluru)">Phoenix Marketcity</ExtLink> is a big retail destination at a distance of <strong>around 13-16 km</strong> as per the project information.</li>
  </ul>

  <p>A broad network of local stores and daily-needs services along the Whitefield-Kadugodi corridor complements the large malls.</p>

  <h3 className="text-xl font-bold">Everyday Convenience Around Whitefield</h3>

  <p>One of the benefits of selecting a corridor close to an existing urban center is the opportunity to access new residential areas in conjunction with existing social infrastructure.</p>

  <p>Residents can shop, access healthcare and education, dine and work in Whitefield, while living in the less crowded parts of the established IT hub.</p>

  <p>Kannamangala, Seegehalli, Kadugodi, and Hoskote are also developing their own residential and commercial ecosystems.</p>
</div>
<div className="space-y-6 text-gray-800">
  <h2 className="text-2xl font-bold">A Location for IT Professionals</h2>

  <p>This kind of development finds its buyers largely among professionals working in Whitefield, ITPL and the neighboring technology parks.</p>

  <p>The project location keeps the eastern employment belt within road reach while providing a residential environment outside the central Whitefield congestion.</p>

  <p>The proposed <IntLink href="/amenities">co-working lounge</IntLink> can also provide an alternative working option for those who work from home within the community.</p>

  <h2 className="text-2xl font-bold">A Family-Oriented Residential Environment</h2>

  <p>The <IntLink href="/floor-plan"><strong>3 BHK and 4 BHK configurations</strong></IntLink> are available for families looking for bigger homes. For smaller households, the <strong>2 BHK</strong> format can be looked into.</p>

  <p>The inclusion of children’s facilities, landscaping, sports amenities, community spaces, and a clubhouse creates a broader residential environment, rather than focusing only on the interiors of the apartments.</p>

  <p>Family oriented living is supported with schools, hospitals and shopping facilities in the wider Whitefield area.</p>
</div>
        </div>
      </div>
    </section>
  );
}
