import BlogSection from "@/components/BlogsSection";
import AmenitiesPage from "./AmenitiesPage";

const TITLE = "Assetz Naru and Nami Amenities | Clubhouse, Rooftop Pool";
const DESCRIPTION =
  "Assetz Naru and Nami amenities: signature clubhouse, rooftop pool, yoga deck, co-working pods, vehicle-free podium, rainwater harvesting and 75% open space.";
const URL = "https://www.assetznarunami.co/amenities";
const IMAGE = "https://www.assetznarunami.co/images/amenities.webp";

export const metadata = {
  title: {
    absolute: TITLE,
  },

  description: DESCRIPTION,

  keywords: [
    "Assetz Naru and Nami amenities",
    "Assetz Naru and Nami clubhouse",
    "Assetz Naru and Nami rooftop swimming pool",
    "Assetz Naru and Nami yoga deck",
    "Assetz Naru and Nami co-working pods",
    "Assetz Naru and Nami vehicle-free podium",
    "Assetz Naru and Nami open space",
    "Assetz Naru and Nami sustainability features",
    "Assetz Naru and Nami parking",
    "apartment amenities Whitefield-Hoskote Road",
  ],

  alternates: {
    canonical: URL,
  },

  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: URL,
    siteName: "Assetz Naru and Nami",
    images: [
      {
        url: IMAGE,
        width: 1272,
        height: 709,
        alt: "Assetz Naru and Nami amenities including clubhouse, rooftop pool and landscaped podium",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: [IMAGE],
  },

  category: "Real Estate",
};

const amenity = (name) => ({ "@type": "LocationFeatureSpecification", name, value: true });

export default function page() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://www.assetznarunami.co/",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Amenities",
            item: URL,
          },
        ],
      },
      {
        "@type": "ApartmentComplex",
        name: "Assetz Naru & Nami",
        description:
          "Assetz Naru & Nami amenities include a standalone signature clubhouse, vehicle-free central podium, rooftop swimming pool, open-air wellness and yoga deck, co-working pods and sustainable water management, with 75% open space.",
        url: URL,
        image: IMAGE,
        numberOfAccommodationUnits: "725",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Whitefield-Hoskote Road (SH-35), Bangalore East",
          addressLocality: "Bangalore",
          addressRegion: "Karnataka",
          postalCode: "560115",
          addressCountry: "IN",
        },
        amenityFeature: [
          amenity("Standalone Signature Clubhouse"),
          amenity("Vehicle-Free Central Podium"),
          amenity("Rooftop Swimming Pool"),
          amenity("Open-Air Wellness and Yoga Deck"),
          amenity("Co-working Pods"),
          amenity("Native Tree Lines and Micro-climate Landscaping"),
          amenity("Rainwater Harvesting"),
          amenity("Greywater Recycling"),
          amenity("Basement and Podium Parking"),
          amenity("Carbon-Healing Homes Programme"),
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "What are the main amenities at Assetz Naru & Nami?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "The listed amenities include a standalone clubhouse, vehicle-free central podium, rooftop swimming pool, wellness and yoga deck, co-working pods, landscaped green areas, and sustainable water management systems.",
            },
          },
          {
            "@type": "Question",
            name: "Does Assetz Naru & Nami have a swimming pool?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. A rooftop swimming pool is included in the provided amenity list.",
            },
          },
          {
            "@type": "Question",
            name: "What sustainability features are planned?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "The listed features include native tree lines, micro-climate landscaping, rainwater harvesting, greywater recycling, and the Carbon-Healing Homes programme.",
            },
          },
          {
            "@type": "Question",
            name: "What is the open space allocation?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "The project has a stated open space allocation of 75% across its approximately 15-acre development.",
            },
          },
          {
            "@type": "Question",
            name: "Does the project provide parking facilities?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. Basement and podium parking are included in the project's listed infrastructure provisions.",
            },
          },
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <AmenitiesPage />
      <BlogSection/>
    </>
  );
}
