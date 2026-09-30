import { IntLink, ExtLink } from "./SeoLinks";

const amenitiesData = [
  { id: 1,  name: "Gymnasium",           image: "./images/gym.svg",    alt: "Gymnasium" },
  { id: 2,  name: "Swimming Pool",       image: "./images/swm.svg",    alt: "Swimming Pool" },
  { id: 3,  name: "Yoga Pavilion",       image: "./images/yoga.svg",   alt: "Yoga Pavilion" },
  { id: 4,  name: "Video Door Phone",    image: "./images/videos.svg", alt: "Video Door Phone" },
  { id: 5,  name: "Kids Activity Zone",  image: "./images/kids.svg",   alt: "Kids Activity Zone" },
  { id: 6,  name: "Mini Theater",        image: "./images/mine.svg",   alt: "Mini Theater" },
  { id: 7,  name: "Aerobics Room",       image: "./images/tennis.svg", alt: "Aerobics Room" },
  { id: 8,  name: "Indoor Games Room",   image: "./images/chess.svg",  alt: "Indoor Games Room" },
  { id: 9,  name: "Club House",          image: "./images/disco-ball.svg", alt: "Club House" },
  { id: 10, name: "Dance/Music",         image: "./images/dance.svg",  alt: "Dance/Music" },
  { id: 11, name: "24/7 CCTV Monitoring",image: "./images/cctv.svg",   alt: "24/7 CCTV Monitoring" },
  { id: 12, name: "Jogging Track",       image: "./images/jog.svg",    alt: "Jogging Track" },
];

export default function AmenitiesSection() {
  return (
    <section
      id="amenities"
      aria-labelledby="amenities-heading"
      className="w-full bg-white pt-14 px-4 md:px-0"
    >
      <div className="max-w-5xl mx-auto">
        <h2
          id="amenities-heading"
          className="text-xl md:text-2xl font-semibold text-gray-900 text-center mb-2"
        >
          Amenities at Assetz Naru & Nami
        </h2>

        <div className="w-full h-px bg-gray-200 mb-5" />
        <div className="space-y-6 text-gray-800 mb-6">
  <p>The <strong>Assetz Naru &amp; Nami Amenities</strong> provide information about the <IntLink href="/amenities">recreational facilities</IntLink>, wellness spaces, community areas, and sustainability features planned within the residential development.</p>

  <p>Located on <strong>Whitefield–Hoskote Road (SH-35), East Bangalore</strong>, the project includes amenities designed to address different aspects of everyday residential living. These include a <strong>standalone signature clubhouse</strong>, <strong>rooftop swimming pool</strong>, <strong>open-air wellness and yoga deck</strong>, <strong>co-working pods</strong>, and landscaped outdoor spaces.</p>
</div>

        <ul
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 lg:gap-4"
          aria-label="Assetz Naru & Nami amenities"
        >
          {amenitiesData.map((item) => (
            <li
              key={item.id}
              className="flex flex-col items-center justify-between w-full h-[150px] lg:h-[180px] shadow-[0_4px_10px_rgba(0,0,0,0.15)] p-3 rounded-xl hover:border hover:border-gray-300 hover:shadow-md transition-all duration-300 bg-white"
            >
              <div className="w-full flex-1 flex items-center justify-center p-3 h-[60%]">
                <img
                  src={item.image}
                  alt={item.alt}
                  className="w-full h-[90%] object-contain"
                  loading="lazy"
                 
                />
              </div>

              <p className="text-center text-sm text-gray-700 font-light leading-tight pb-1">
                {item.name}
              </p>
            </li>
          ))}
        </ul>

        <div className="space-y-6 text-gray-800 mt-6">
  <h3 className="text-xl font-bold">Recreational and Lifestyle Amenities</h3>

  <p>The standalone signature clubhouse provides a dedicated space for community activities and recreation. The rooftop swimming pool offers a designated facility for swimming and leisure, while the open-air wellness and yoga deck is intended for outdoor fitness and relaxation.</p>

  <p>Co-working pods provide an additional workspace option for residents who work remotely or require a separate place for focused tasks.</p>

  <h3 className="text-xl font-bold">Green Spaces and Sustainable Features</h3>

  <p>The project has a stated <strong>75% open space</strong> allocation, supported by native tree lines and micro-climate landscaping.</p>

  <p>Its listed sustainability features include <ExtLink href="https://en.wikipedia.org/wiki/Rainwater_harvesting">rainwater harvesting</ExtLink>, <ExtLink href="https://en.wikipedia.org/wiki/Greywater">greywater recycling</ExtLink>, and the <strong>Carbon-Healing Homes programme</strong>. These provisions form part of the project&apos;s environmental planning approach.</p>

  <h3 className="text-xl font-bold">Parking and Internal Movement</h3>

  <p><strong>Basement and podium parking</strong> are included in the project amenities. The vehicle-free central podium is another feature of the internal layout, providing a designated pedestrian-oriented area.</p>
</div>
      </div>
    </section>
  );
}