/* eslint-disable react/no-unescaped-entities */
import { IntLink, ExtLink } from "./SeoLinks";
export default function TopShoppingMalls() {
  return (
    <section
      id="TopShoppingMalls"
      aria-labelledby="TopShoppingMalls-heading"
      className="w-full bg-white pt-14 px-4 md:px-0"
    >
      <div className="max-w-5xl mx-auto">
        <h2
          id="TopShoppingMalls-heading"
          className="text-xl md:text-2xl font-semibold text-gray-900 text-center mb-2"
        >
          Top 10 Shopping Malls Near Assetz Naru &amp; Nami
        </h2>

        <div className="w-full h-px bg-gray-200 mb-5" />
        <img
              className="w-full"
              src="/images/shoppingmall.webp"
              alt="Shopping Malls"
              loading="lazy"
            />
        <div className="space-y-6 text-gray-800 mt-6">

  <p><IntLink href="/"><strong>Assetz Naru &amp; Nami</strong></IntLink> is located along <strong>Whitefield-Hoskote Road (SH-35), Bangalore East</strong>, placing it within the growing retail corridor connecting Kannamangala, Whitefield, Kadugodi, Hoskote and Old Madras Road. Residents have access to neighbourhood shopping around Kannamangala and larger organised retail destinations towards Whitefield and the Old Madras Road side.</p>

  <p>The approximate distances below are intended to give homebuyers a practical idea of the surrounding shopping network. Since the exact <IntLink href="/location">project entrance</IntLink> can affect the driving route, distances should be treated as approximate rather than fixed measurements.</p>

  <div className="overflow-x-auto">
    <table className="w-full border-collapse border border-gray-300 text-left">
      <thead>
        <tr>
          <th className="border border-gray-300 px-4 py-3 font-bold">Shopping Destination</th>
          <th className="border border-gray-300 px-4 py-3 font-bold">Approx. Distance from Assetz Naru &amp; Nami</th>
          <th className="border border-gray-300 px-4 py-3 font-bold">Location</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="border border-gray-300 px-4 py-3"><strong>Uptown Square</strong></td>
          <td className="border border-gray-300 px-4 py-3">Approx. 2–4 km</td>
          <td className="border border-gray-300 px-4 py-3">Kannamangala</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-3"><strong>Orion UPTOWN Mall</strong></td>
          <td className="border border-gray-300 px-4 py-3">Approx. 4–6 km</td>
          <td className="border border-gray-300 px-4 py-3">Old Madras Road</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-3"><strong>Nexus Whitefield</strong></td>
          <td className="border border-gray-300 px-4 py-3">Approx. 8–11 km</td>
          <td className="border border-gray-300 px-4 py-3">Whitefield Main Road</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-3"><strong>Park Square Mall</strong></td>
          <td className="border border-gray-300 px-4 py-3">Approx. 9–12 km</td>
          <td className="border border-gray-300 px-4 py-3">ITPL, Whitefield</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-3"><strong>Virginia Mall</strong></td>
          <td className="border border-gray-300 px-4 py-3">Approx. 9–12 km</td>
          <td className="border border-gray-300 px-4 py-3">Whitefield Main Road</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-3"><strong>Nexus Shantiniketan</strong></td>
          <td className="border border-gray-300 px-4 py-3">Approx. 10–13 km</td>
          <td className="border border-gray-300 px-4 py-3">Whitefield</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-3"><strong>Dress Circle Shopping Mall</strong></td>
          <td className="border border-gray-300 px-4 py-3">Approx. 10–13 km</td>
          <td className="border border-gray-300 px-4 py-3">Whitefield Main Road</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-3"><strong>VR Bengaluru</strong></td>
          <td className="border border-gray-300 px-4 py-3">Approx. 11–14 km</td>
          <td className="border border-gray-300 px-4 py-3">Whitefield</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-3"><ExtLink href="https://en.wikipedia.org/wiki/Phoenix_Marketcity_(Bengaluru)"><strong>Phoenix Marketcity</strong></ExtLink></td>
          <td className="border border-gray-300 px-4 py-3">Approx. 13–16 km</td>
          <td className="border border-gray-300 px-4 py-3">Mahadevapura</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-3"><strong>Hoskote Town Retail &amp; Shopping Area</strong></td>
          <td className="border border-gray-300 px-4 py-3">Approx. 6–9 km</td>
          <td className="border border-gray-300 px-4 py-3">Hoskote</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>
      </div>
    </section>
  );
}