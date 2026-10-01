import BlogSection from "@/components/BlogsSection";
import LocationPage from "./LocationPage";

const TITLE = "Assetz Naru and Nami Location | Whitefield-Hoskote Road";
const DESCRIPTION =
  "Assetz Naru and Nami location: Whitefield-Hoskote Road (SH-35), East Bangalore. 725 apartments in 6 towers on 15 acres, between Whitefield and Hoskote.";
const URL = "https://www.assetznarunami.co/location";
const IMAGE = "https://www.assetznarunami.co/images/location-map-view.webp";

export const metadata = {
  title: {
    absolute: TITLE,
  },

  description: DESCRIPTION,

  keywords: [
    "Assetz Naru and Nami location",
    "Assetz Naru and Nami address",
    "Assetz Naru and Nami location map",
    "Assetz Naru and Nami Whitefield-Hoskote Road",
    "Assetz Naru and Nami SH-35",
    "Assetz Naru and Nami connectivity",
    "Assetz Naru and Nami East Bangalore",
    "apartments on Whitefield-Hoskote Road",
    "new launch apartments East Bangalore",
    "apartments between Whitefield and Hoskote",
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
        width: 1676,
        height: 875,
        alt: "Assetz Naru and Nami location map on Whitefield-Hoskote Road (SH-35), East Bangalore",
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
            name: "Location",
            item: URL,
          },
        ],
      },
      {
        "@type": "ApartmentComplex",
        name: "Assetz Naru & Nami",
        description:
          "Assetz Naru & Nami by Assetz Property is located on Whitefield-Hoskote Road (SH-35), East Bangalore, with 725 apartments in six towers on about 15 acres.",
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
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "Where is Assetz Naru & Nami located?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Assetz Naru & Nami is located on Whitefield–Hoskote Road (SH-35), East Bangalore.",
            },
          },
          {
            "@type": "Question",
            name: "Which developer is developing Assetz Naru & Nami?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "The project is developed by Assetz Property.",
            },
          },
          {
            "@type": "Question",
            name: "What type of residential development is planned?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Assetz Naru & Nami is a residential apartment project offering 2, 3, and 4 BHK configurations.",
            },
          },
          {
            "@type": "Question",
            name: "How large is the project?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "The development covers approximately 15 acres and comprises six towers with a total of 725 apartments.",
            },
          },
          {
            "@type": "Question",
            name: "What is the possession timeline?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Possession is scheduled from 2032 onwards, according to the provided project details.",
            },
          },
          {
            "@type": "Question",
            name: "How should buyers evaluate the location?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Buyers should examine the project's approach roads, daily commuting routes, nearby essential services, public transport availability, and actual travel times.",
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
      <LocationPage />
      <BlogSection/>
    </>
  );
}
