import BlogSection from "@/components/BlogsSection";
import FloorPlanPage from "./FloorPlanPage";

const TITLE = "Assetz Naru and Nami Floor Plan | 2, 3 and 4 BHK Layouts";
const DESCRIPTION =
  "Assetz Naru and Nami floor plan: 2, 3 and 4 BHK apartment layouts in 6 towers (2B+G+30) with 725 units on 15 acres, Whitefield-Hoskote Road (SH-35).";
const URL = "https://www.assetznarunami.co/floor-plan";
const IMAGE = "https://www.assetznarunami.co/images/3bhk-floorplan.webp";

export const metadata = {
  title: {
    absolute: TITLE,
  },

  description: DESCRIPTION,

  keywords: [
    "Assetz Naru and Nami floor plan",
    "Assetz Naru and Nami 2 BHK floor plan",
    "Assetz Naru and Nami 3 BHK floor plan",
    "Assetz Naru and Nami 4 BHK floor plan",
    "Assetz Naru and Nami unit plan",
    "Assetz Naru and Nami tower plan",
    "Assetz Naru and Nami apartment layout",
    "Assetz Naru and Nami carpet area",
    "apartment floor plan Whitefield-Hoskote Road",
    "2, 3 and 4 BHK floor plan East Bangalore",
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
        width: 720,
        height: 400,
        alt: "Assetz Naru and Nami 3 BHK floor plan",
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
            name: "Floor Plan",
            item: URL,
          },
        ],
      },
      {
        "@type": "ApartmentComplex",
        name: "Assetz Naru & Nami",
        description:
          "Assetz Naru & Nami by Assetz Property offers 2, 3 and 4 BHK apartments in six towers (2B+G+30) on about 15 acres with 75% open space on Whitefield-Hoskote Road (SH-35), East Bangalore.",
        url: URL,
        image: [
          "https://www.assetznarunami.co/images/2bhk-floorplan.webp",
          "https://www.assetznarunami.co/images/3bhk-floorplan.webp",
          "https://www.assetznarunami.co/images/4bhk-floorplan.webp",
        ],
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
            name: "What floor plans are available at Assetz Naru & Nami?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Assetz Naru & Nami offers three configurations: 2 BHK, 3 BHK and 4 BHK apartments, with 725 apartments in total.",
            },
          },
          {
            "@type": "Question",
            name: "What is the tower structure of Assetz Naru & Nami?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "The project has six residential towers, each planned with two basements, a ground floor and 30 upper floors (2B+G+30).",
            },
          },
          {
            "@type": "Question",
            name: "What should buyers check in the Assetz Naru & Nami floor plan?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Buyers should check the carpet area, room dimensions, natural light, ventilation, balcony access, privacy and the apartment's position within the tower, and confirm them against the official floor plan drawings.",
            },
          },
          {
            "@type": "Question",
            name: "When is possession of Assetz Naru & Nami expected?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Possession of Assetz Naru & Nami is scheduled from 2032 onwards.",
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
      <FloorPlanPage />
      <BlogSection/>
    </>
  );
}
