/* eslint-disable react/no-unescaped-entities */
"use client";
import {
  FaBuilding,
  FaRupeeSign,
  FaVectorSquare,
  FaDoorOpen,
  FaLayerGroup,
  FaCity,
  FaHelmetSafety,
  FaCertificate,
  FaCalendarDay,
} from "react-icons/fa6";
import { MdApartment } from "react-icons/md";
import { ExtLink, IntLink } from "./SeoLinks";

const highlights = [
  {
    icon: <FaBuilding className="text-3xl text-primary" />,
    label: "Project Type",
    value: "Apartment",
  },
  {
    icon: <FaRupeeSign className="text-3xl text-primary" />,
    label: "Starting Price",
    value: "₹ 1.38 Cr* Onwards",
  },
  {
    icon: <MdApartment className="text-3xl text-primary" />,
    label: "Unit Type",
    value: "2, 3 & 4 BHK",
  },
  {
    icon: <FaVectorSquare className="text-3xl text-primary" />,
    label: "Unit Sizes",
    value: "1200 to 2300 sq. ft.",
  },
  {
    icon: <FaDoorOpen className="text-3xl text-primary" />,
    label: "Project Status",
    value: "New Launch",
  },
  {
    icon: <FaLayerGroup className="text-3xl text-primary" />,
    label: "Land Area",
    value: "15 Acres",
  },
  {
    icon: <FaCity className="text-3xl text-primary" />,
    label: "Total Units",
    value: "725 Units",
  },
  {
    icon: <FaBuilding className="text-3xl text-primary" />,
    label: "Floor Structure",
    value: "2B+G+30 Floors",
  },
  {
    icon: <FaBuilding className="text-3xl text-primary" />,
    label: "No Of Towers",
    value: "6",
  },
  {
    icon: <FaHelmetSafety className="text-3xl text-primary" />,
    label: "Builder",
    value: "Assetz Property",
  },
  {
    icon: <FaCertificate className="text-3xl text-primary" />,
    label: "Rera No",
    value: "Coming Soon",
  },
  {
    icon: <FaCalendarDay className="text-3xl text-primary" />,
    label: "Possession",
    value: "2032 Onwards",
  },
];

export default function ProjectHighlights() {
  return (
    <section
      id="project-highlights"
      aria-labelledby="highlights-heading"
      className="w-full bg-white pt-8 px-4 md:px-0"
    >
      <div className="max-w-5xl mx-auto">
        <div
          className="grid grid-cols-2 lg:grid-cols-4 gap-4"
          aria-label="Assetz Naru & Nami project highlights"
        >
          {highlights.map((item, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-2xl px-1 sm:px-5 py-3 sm:py-5 flex items-start gap-1 sm:gap-4 hover:shadow-sm transition-shadow duration-300"
            >
              <div aria-hidden="true" className="mt-1 flex-shrink-0">
                {item.icon}
              </div>

              <div>
                <p className="text-sm text-gray-500 leading-tight mb-1">
                  {item.label}
                </p>
                <p className="text-sm font-semibold text-gray-800 leading-snug">
                  {item.value}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-6 space-y-6">
          <div className="space-y-6 text-gray-800">
  <h2 className="text-2xl font-bold">
    Assetz Naru and Nami At Whitefield-Hoskote Road (SH-35), Bangalore
  </h2>

  <h2 className="text-2xl font-bold">
    2, 3 &amp; 4 BHK Homes
  </h2>

  <p>
    <strong>Assetz Naru &amp; Nami</strong> is a new residential property by <ExtLink href="https://www.assetzproperty.com/"><strong>Assetz Property</strong></ExtLink>. It is a new innovative property situated on <strong>Whitefield Hoskote Road SH 35 in the Eastern part of Bangalore</strong>. This project will be over <strong>15 acres</strong> and will have a vibrant neighborhood with <strong>725 homes</strong>.
  </p>

  <p>
    The project will include a mix of <strong>2, 3 and 4 BHK apartments</strong> across <strong>six towers</strong>. The towers will have two basements, a ground floor, and thirty floors. The towers are designed in a <strong>2B+G+30 floor layout</strong>, with about <strong>75% of the area dedicated to open space</strong>. This careful planning ensures the builtup areas, beautifully landscaped areas and shared community spaces work well together. People can move in starting in <strong>2032</strong>. This project is part of the <ExtLink href="https://en.wikipedia.org/wiki/Whitefield,_Bengaluru">Whitefield</ExtLink>-<ExtLink href="https://en.wikipedia.org/wiki/Hoskote">Hoskote</ExtLink> corridor's longer growth path.
  </p>

  <p>
    It is in the Seegehalli–Kannamangala–Doddabanahalli belt of <strong>Bidarahalli Hobli, Bengaluru East Taluk, PIN 560115</strong>. The talk is that it will be 15 to 18 acres and have 700 to 750 homes, a mix of 2, 3, and 4 BHK. Another book that you can read in Bengaluru is Assetz Sublime Hoskote, which helps you ground the project story in buyer fit, product type, and the level of document clarity you need before moving forward.
  </p>

  <p>
    Today, four things are true about it, and each page here is built around them. <ExtLink href="https://rera.karnataka.gov.in/">Karnataka RERA</ExtLink> has no record of it. No cost sheet is out yet. No possession date has been given. They haven't given a parcel number, survey number, or street address anywhere. When written out in full as Assetz Naru and Nami, it means the same thing.
  </p>

  <h2 className="text-2xl font-bold">
    An Address That's Worth Having
  </h2>

  <p>
    Assetz's newest pre-launch residential project in Bangalore is called Naru &amp; Nami. Its name follows the developer's now-familiar pattern of using two short words to describe a community, as seen in <IntLink href="/#top-assetz-projects">Ren &amp; Rei, Sora &amp; Saki</IntLink>, and Zen &amp; Sato. Assetz has slowly built up its business in Bangalore since it was founded in 2006. <strong>The Assetz Property Group</strong> is one of the biggest real estate companies in <ExtLink href="https://en.wikipedia.org/wiki/Bangalore">Bangalore</ExtLink>, India.
  </p>

  <p>
    An Assetz address is often seen as a promise of balance between crowding and open space, as well as modern flat living and community-first landscaping design. The group's most recent launches in Bangalore have all centred on courtyards, clubs, and gardens meant to slow down daily life in a rapidly growing city. Naru &amp; Nami is set to bring the same design language to its own site and community.
  </p>

  <p>
    Assetz's design has been guided by what the company calls "intelligent design and consumer-focused quality." This is evident in the wide range of products the group has produced, from eco-friendly flats to waterfront and planned communities. With a history of quality and creativity, Assetz has changed the look of cities with its modern business, residential, and warehouse projects. The company is based in Singapore and has offices worldwide. The planning brief for Naru &amp; Nami follows the same design discipline through pre-launch.
  </p>

  <p>
    Bangalore’s real estate market is booming, thanks to its tech and innovation economy. This is attracting both end users and premium buyers who want to buy from established developers with a track record of closing deals. Assetz is one of India’s top international developers, with <strong>more than 10 million square feet</strong> of new projects underway. The business develops and manages real estate assets across the Commercial, Residential, Warehousing and fund management sectors. Assetz Naru &amp; Nami can leverage the scale and institutional experience it gained during its pre-launch phase since entering the market.
  </p>

  <p>
    As the project moves closer to its official launch in Bangalore, we will share more information about the <IntLink href="/location">exact address</IntLink>, <IntLink href="/price">prices</IntLink>, and <IntLink href="/floor-plan">configurations</IntLink> for <strong>Assetz Naru &amp; Nami</strong>.
  </p>
</div>
<div className="space-y-6 text-gray-800">
  <h2 className="text-2xl font-bold">
    Assetz Naru and Nami - 2, 3 &amp; 4 BHK Apartments on Whitefield-Hoskote Road
  </h2>

  <h2 className="text-2xl font-bold">
    Assetz Naru &amp; Nami Project Overview
  </h2>

  <div className="overflow-x-auto">
    <table className="w-full border-collapse border border-gray-300">
      <thead>
        <tr>
          <th className="border border-gray-300 px-4 py-3 text-left font-bold">
            Project Detail
          </th>
          <th className="border border-gray-300 px-4 py-3 text-left font-bold">
            Information
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="border border-gray-300 px-4 py-3">Project Name</td>
          <td className="border border-gray-300 px-4 py-3"><strong>Assetz Naru &amp; Nami</strong></td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-3">Developer</td>
          <td className="border border-gray-300 px-4 py-3"><strong>Assetz Property</strong></td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-3">Location</td>
          <td className="border border-gray-300 px-4 py-3">
            Whitefield-Hoskote Road (SH-35), East Bangalore
          </td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-3">Configuration</td>
          <td className="border border-gray-300 px-4 py-3">
            2, 3 &amp; 4 BHK Apartments
          </td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-3">Land Area</td>
          <td className="border border-gray-300 px-4 py-3">Approx. 15 Acres</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-3">Total Units</td>
          <td className="border border-gray-300 px-4 py-3">725</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-3">Total Towers</td>
          <td className="border border-gray-300 px-4 py-3">6</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-3">Tower Structure</td>
          <td className="border border-gray-300 px-4 py-3">2B+G+30 Floors</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-3">Open Space</td>
          <td className="border border-gray-300 px-4 py-3">75%</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-3">Possession</td>
          <td className="border border-gray-300 px-4 py-3">2032 Onwards</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-3">Project Type</td>
          <td className="border border-gray-300 px-4 py-3">
            Residential Apartments
          </td>
        </tr>
      </tbody>
    </table>
  </div>

  <p>
    This is a great place to live for people who want to be close to Whitefield's established job market and social amenities, while also living in a newer neighbourhood in one of East Bangalore's main growth zones.
  </p>
</div>
<div className="space-y-6 text-gray-800">
  <h2 className="text-2xl font-bold">
    A Home Address on Whitefield-Hoskote Road
  </h2>

  <p>
    Whitefield-Hoskote Road is gradually becoming an important residential area in East Bangalore. It is important as it links the established neighborhoods of <strong>Whitefield</strong> with the fast-growing area of <strong>Hoskote</strong>.
  </p>

  <p>
    This gives residents access to two different urban environments. Whitefield is rich in IT job opportunities, schools, hospitals, shopping centers and essential services, whereas Hoskote features a developing landscape with enhancing connectivity.
  </p>

  <h2 className="text-2xl font-bold">
    Assetz Naru &amp; Nami is located in this transitional zone
  </h2>

  <p>
    Rather than building a cluster of apartments, this project aims to create a substantial residential community. This generous <strong>15-acre site</strong> accommodates <strong>six residential towers</strong> while preserving ample open space.
  </p>

  <p>
    Families looking for a long-term home in East Bangalore will find this project attractive because of its prime location, variety of apartment choice and community size.
  </p>
</div>
<div className="space-y-6 text-gray-800">
  <h2 className="text-2xl font-bold">
    2, 3 and 4 BHK Apartments for Different Family Requirements
  </h2>

  <p>
    Buyers may pick the right house for themselves based on a home’s size, space requirements and future goals with the <IntLink href="/floor-plan">2, 3 and 4 BHK flats</IntLink> at <strong>Assetz Naru &amp; Nami</strong>.
  </p>

  <h3 className="text-xl font-bold">
    2 BHK Homes – Practical Space for Small Families
  </h3>

  <p>
    The 2 BHK flats are a convenient residential option for buyers who want sufficient space for their day-to-day living, without moving into a bigger four-bedroom configuration.
  </p>

  <p>
    A typical two-bedroom home can have a living and dining space, two bedrooms, bathrooms, kitchen and utility space, option for buyers who want enough space for day-to-day living without moving into a larger subject to the final approved plan. The layout can also work well for couples who need one bedroom for regular use and another room for guests or work.
  </p>

  <p>
    For professionals working in Whitefield and nearby employment zones, 2 BHK apartment can be an perfect an option for buyers who want enough space for day to-day living without moving into a larger one, choice, balancing private residential space with access to a large community. The location is in the Whitefield-Hoskote corridor that offers access to existing social infrastructure, making it relevant for people who want to stay connected to the eastern business belt.
  </p>

  <h3 className="text-xl font-bold">
    3 BHK Homes - A Family-Friendly Living Space
  </h3>

  <p>
    The 3 BHK configuration will likely attract many family buyers because it offers more flexibility than a two-bedroom home.
  </p>

  <p>
    The extra bedroom can serve different needs over the years. A young family could use it as a children’s room, while professionals could set up a work area in part of the house. It can also serve as a guest bedroom for families who have regular visitors.
  </p>

  <p>
    The published project info lists the <strong>3 BHK size as approximately 1,650 sq. ft.</strong> Since super built-up area and usable carpet area are different measurements, the exact carpet area and internal room dimensions will be verified through the final unit plan.
  </p>

  <h3 className="text-xl font-bold">
    4 BHK Homes – More Space For Bigger Families
  </h3>

  <p>
    The 4 BHK homes are targeted at buyers who value space and flexibility more.
  </p>

  <p>
    A larger plan might allow a better separation of private and common areas. Families can have separate bedrooms for children and parents, while still having room for guests, work, or other personal needs.
  </p>

  <p>
    The size currently published for the <strong>4 BHK is about 2,300 sq. ft.</strong> The final floor plans will determine how this area is divided into bedrooms, living areas, balconies, bathrooms, kitchen, and utility areas.
  </p>
</div>
<div className="space-y-6 text-gray-800">
  <h2 className="text-2xl font-bold">
    A Community Designed with Open Space in Mind
  </h2>

  <p>
    <strong>Assetz Naru &amp; Nami</strong> boasts an impressive <strong>75% open space</strong> across its approximately <strong>15-acre site</strong>, which is a remarkable feature.
  </p>

  <p>
    In a high rise residential environment, open space has a practical function. It accommodates landscaped areas, walking paths, recreational spaces and community interaction, all while visually separating buildings from one another.
  </p>

  <p>
    6 towers will go up to 30 floors, so the overall <IntLink href="/master-plan">master plan</IntLink> has to be perfectly organized. Once residents move in, the relationship between the towers, along with internal roads, pedestrian pathways, green spaces and recreational amenities, will define their community experience.
  </p>

  <p>
    Families can greatly improve their daily lives with common areas designed with care. Children require secure areas to play, grown-ups enjoy having places to stroll and relax, and community members often choose to use public spaces for casual meet-ups rather than just for organized events.
  </p>

  <p>
    For this reason, planning open spaces in a project should be part of the overall living environment, not just a box to check off in the project specs.
  </p>

  <h2 className="text-2xl font-bold">
    Open Spaces Form a Major Part of the Development
  </h2>

  <p>
    One of the major highlights associated with Assetz Naru &amp; Nami is the approximately 75% open space. This large open-space element can help create a more balanced relationship between built and open space on a high-rise residential site.
  </p>

  <p>
    Available project material connects open space planning with landscaped settings, walking spaces, recreational areas and shared community spaces.
  </p>

  <p>
    Open spaces also provide visual separation between towers. Replacing residential blocks that dominate the whole site with landscaped zones could create a more open internal environment.
  </p>

  <p>
    This can create more opportunities for residents to step outdoors without leaving the gated community. Morning walks, children’s playtime, casual chat, and weekend family activities can all happen inside the development.
  </p>
</div>
<div className="space-y-6 text-gray-800">
  <h2 className="text-2xl font-bold">
    A Clubhouse for Community &amp; Recreation Activities
  </h2>

  <p>
    The clubhouse is designed as a core lifestyle facility at Assetz Naru &amp; Nami.
  </p>

  <p>
    The project references describe a <strong>clubhouse</strong> backed by <IntLink href="/amenities">recreational and social amenities</IntLink>. Another project reference lists a multipurpose hall, indoor games room, amphitheatre and co-working lounge as part of the lifestyle offering.
  </p>

  <p>
    In a large residential community, a clubhouse can serve many functions. Residents can use indoor spaces for gatherings, community events, recreational activities and social meetings.
  </p>

  <p>
    The multipurpose hall is ideal for celebrations, workshops, resident meetings, and private events. The indoor games room offers an alternative for residents who don’t want to use the outdoor facilities.
  </p>

  <p>
    The co-working lounge is particularly relevant to today’s apartment lifestyle. Many professionals now work from home, either partially or completely. Instead of always working inside the apartment, a shared and dedicated space can be an alternative.
  </p>

  <h3 className="text-xl font-bold">
    Swimming Pool for Daily Recreation
  </h3>

  <p>
    One of the key amenities mentioned for the project is the swimming pool. The available information also mentions a swimming pool in the amenity’s description and the project page aimed at developers lists a swimming pool as a facility.
  </p>

  <p>
    A swimming pool is a recreational option for families and adults. It suits leisure swimming, relaxation and exercise.
  </p>

  <p>
    The project material also lists a pool for toddlers. If included in the final approved amenity plan, a separate shallow water area will offer a more suitable environment for younger children.
  </p>

  <p>
    Check the pool design, size, operational hours and rules when the final amenity plan is issued so residents have an easy-to-access place to stay active and play casual games.
  </p>

  <h3 className="text-xl font-bold">
    Gymnasium for Fitness and Active Living
  </h3>

  <p>
    The proposed gym gives residents an indoor fitness option.
  </p>

  <p>
    A community gym can also help residents develop workout habits, as they won’t need to leave the property for every workout. It could support everything from simple exercise to an all out strength and cardio program.
  </p>

  <p>
    Final project specifications should determine the final equipment list, floor area, operating hours and membership or access rules.
  </p>

  <h3 className="text-xl font-bold">
    Yoga and meditation areas
  </h3>

  <p>
    Project references mention a yoga and meditation deck or wellness space. The amenity set in circulation includes an open-air wellness and yoga deck.
  </p>

  <p>
    Such a space can offer a quieter outdoor setting for stretching, yoga, breathing exercises, and meditation.
  </p>

  <p>
    A dedicated wellness area also offers the added benefit of being separate from the community’s more active recreation areas.
  </p>

  <h3 className="text-xl font-bold">
    Jogging and Walking Trails
  </h3>

  <p>
    Available project materials include outdoor facilities such as walking paths and a jogging track.
  </p>

  <p>
    The walking area is often one of the most popular amenities in a residential community because it requires no special equipment or reservations.
  </p>

  <p>
    Residents use these paths for morning walks, evening walks, or light exercise. Tree lined avenues and landscaped surroundings can also make the walk more enjoyable.
  </p>

  <p>
    The final length and configuration of the jogging or walking track shall be verified against the approved master plan.
  </p>
</div>
<div className="space-y-6 text-gray-800">
  <h2 className="text-2xl font-bold">
    Multipurpose Sports Facilities and Badminton
  </h2>

  <p>
    The project is equipped with amenities like Badminton Court and Multipurpose Court.
  </p>

  <p>
    Badminton is a favorite indoor and outdoor game of children and adults. The designated court makes it easy for people to stay busy and play relaxed games.
  </p>

  <p>
    With the right lines and rules, a flexible court can be used for a lot of different sports and events.A multipurpose court can support many types of recreation, depending on how it is marked and designed.
  </p>

  <p>
    They are very helpful for larger communities because they let people do active recreation without leaving the property.
  </p>

  <h3 className="text-xl font-bold">
    Children’s Play Area
  </h3>

  <p>
    Families with children will enjoy the dedicated children's play area.
  </p>

  <p>
    residential play zone gives children a place to play outside in the community. It can also provide an informal meeting point for families and assist children to socialize with other residents of a similar age.
  </p>

  <p>
    Final play equipment, safety flooring and age group zoning should be checked against the final landscape and amenity plan.
  </p>

  <h3 className="text-xl font-bold">
    A Toddlers Pool
  </h3>

  <p>
    Among community facilities on the project reference is a toddlers’ pool.
  </p>

  <p>
    Different needs are required for little children than for bigger swimsuits and so a separate toddlers’ zone can be helpful. This allows for a shallower recreational environment whilst still keeping the main pool area aimed at older users.
  </p>

  <p>
    Parents should check final arrangements for safety, supervision and access rules before using the facility.
  </p>

  <h3 className="text-xl font-bold">
    Games Room (Inside)
  </h3>

  <p>
    The project provides an indoor games room as one of its recreation facilities.
  </p>

  <p>
    This space gives residents an alternative way to spend leisure time during hot weather, on rainy days, or when they want indoor activities.
  </p>

  <p>
    The room will be used for various games and community activities, depending on the final design. Individual games are not confirmed as amenities so buyers should check exactly what equipment and facilities are provided<strong>.</strong>
  </p>
</div>
<div className="space-y-6 text-gray-800">
  <h2 className="text-2xl font-bold">
    Community hall for multiple purposes
  </h2>

  <p>
    A multipurpose hall can serve as a versatile indoor venue for residents.
  </p>

  <p>
    The large residential community needs spaces for meetings, celebrations, cultural activities, and private parties. A multipurpose hall could reduce the need to plan all events outside the community.
  </p>

  <p>
    Once operational, the hall can also serve as a common space for resident associations and community programs.
  </p>

  <h3 className="text-xl font-bold">
    Outdoor Gathering Amphitheater
  </h3>

  <p>
    The project reference also mentions an amphitheater.
  </p>

  <p>
    An outdoor amphitheater can be used for cultural programs, small performances, community celebrations and resident activities.
  </p>

  <p>
    The value is providing a dedicated outdoor gathering space, instead of using the clubhouse for every event.
  </p>

  <h3 className="text-xl font-bold">
    Co-Working Lounge for the New Age Professionals
  </h3>

  <p>
    Another lifestyle amenity included in the project is a co-working lounge.
  </p>

  <p>
    For those working from home, a co-working space can provide an alternative workspace outside the apartment. This can be especially useful if one family member needs to attend meetings while someone else uses the home for everyday activities.
  </p>

  <p>
    A dedicated workspace also reflects the changing needs of city apartment buyers. Today we have higher expectations for the home as a place to live as well as work.
  </p>

  <h3 className="text-xl font-bold">
    Community spaces for children and families
  </h3>

  <p>
    Assetz Naru &amp; Nami provides a combination of leisure facilities and family centric zones. Children's play areas, a toddlers' pool, landscaped gardens, open lawns, and community facilities cater to different age groups.
  </p>

  <p>
    The benefits to families aren't limited to a single facility. This mix of spaces offers residents active recreation, quiet outdoor time and social activities.
  </p>

  <p>
    This strain can be especially helpful in a community of hundreds of homes with residents on different schedules and preferences.
  </p>

  <h3 className="text-xl font-bold">
    Senior Citizen Areas
  </h3>

  <p>
    The project amenities also have a sitting area for senior citizens.
  </p>

  <p>
    By adding seating areas to the landscaping, you can give older people a comfortable place to hang out outside.
  </p>

  <p>
    These places can also help people get to know each other and offer a less busy option to play and sports areas.
  </p>

  <h3 className="text-xl font-bold">
    Landscaped Gardens &amp; Central Open Lawn
  </h3>

  <p>
    The project’s outdoor amenity offering comprises landscaped gardens and a central open lawn.
  </p>

  <p>
    The central lawn could serve as a gathering space for residents. Depending on the final landscape plan, it may also support community activities, informal gatherings and outdoor recreation.
  </p>

  <p>
    Landscape gardens help define the visual character of the overall community and can help separate different functional areas.
  </p>

  <h3 className="text-xl font-bold">
    Themed Walking Paths and Tree-Lined Areas
  </h3>

  <p>
    The project material also notes themed walking paths and tree-lined avenues.
  </p>

  <p>
    These features might make moving around inside the community more fun and give it a stronger sense of its landscape identity.
  </p>

  <p>
    Shaded walking and outdoor relaxation are also possible on tree lined routes. But the landscape's long term evolution depends on the final planting plan and the tree species chosen.
  </p>

  <h3 className="text-xl font-bold">
    Party Lawn for Outdoor Celebrations
  </h3>

  <p>
    The project amenities include a party lawn. An outdoor celebration space can be an asset for birthday parties, family functions, festive gatherings and resident events for a community of this size.
  </p>

  <p>
    A dedicated lawn also keeps larger gatherings away from quieter parts of residential areas.
  </p>

  <h3 className="text-xl font-bold">
    Community Hall and Social Spaces
  </h3>

  <p>
    The project includes a community hall with its clubhouse facilities.
  </p>

  <p>
    Social infrastructure is an important component of large gated developments since residents typically require spaces beyond their own homes.
  </p>

  <p>
    Community spaces can host festivals, residents’ meetings, workshops, children's activities and other events. Their usefulness will ultimately depend on the final size, operating rules and management after transfer.
  </p>

  <h3 className="text-xl font-bold">
    Parking Facilities
  </h3>

  <p>
    Parking is planned for the project's facilities. The general amenity description includes basement and podium parking.
  </p>

  <p>
    Parking planning is an important part of daily convenience in a high rise community of hundreds of homes.
  </p>

  <p>
    The final parking allocation, visitor parking, two wheeler parking, electric vehicle provisions and charging infrastructure should be checked against the approved plans and sale documentation.
  </p>

  <h3 className="text-xl font-bold">
    Security and Controlled Entry
  </h3>

  <p>
    Another project facility listed is security. The project reference specifically mentions security and CCTV related infrastructure.
  </p>

  <p>
    A gated residential community is meant to keep residents, guests, service workers, and supplies from getting in without permission. CCTV can supplement security personnel and access-control systems.
  </p>

  <p>
    The final specifications need to confirm the exact security system, camera coverage, entry procedures, and visitor management procedures.
  </p>

  <h3 className="text-xl font-bold">
    Sustainability and Water Management
  </h3>

  <p>
    Assetz Naru &amp; Nami is also associated with sustainability. The data provided relates to <ExtLink href="https://en.wikipedia.org/wiki/Rainwater_harvesting">rainwater harvesting</ExtLink>, <strong>greywater recycling</strong>, landscaped open spaces and a Carbon-Healing Homes program as described by the developer.
  </p>

  <p>
    Rainwater collection will help the society incharge to collect and use rainwater. When wastewater is recycled, it can be treated so it can be used for non-drinking purposes.
  </p>

  <p>
    These systems can help with responsible resource management in a big residential area, but approved project documents should be used to check the final capacity and technical specs.
  </p>

  <p>
    The Carbon-Healing Homes language is framed as a developer-driven sustainability concept rather than an independent third-party certification. Therefore, buyers should differentiate between the developer’s sustainability positioning and any independently certified environmental standard.
  </p>
</div>
        </div>
      </div>
    </section>
  );
}
