import BlogSection from "@/components/BlogsSection";
import FloorPlanPage from "./FloorPlanPage";

export const metadata = {
  title: {
    absolute: "Assetz Naru & Nami Floor Plan | 2, 3 & 4 BHK Layouts",
  },

  description:
    "Assetz Naru & Nami floor plans: 2 BHK (~1,200 sq. ft.), 3 BHK (~1,650 sq. ft.) and 4 BHK (~2,300 sq. ft.) on Whitefield-Hoskote Road, Bangalore East.",

  keywords: [
    "Assetz Naru & Nami floor plan",
    "Assetz Naru & Nami unit plan",
    "Assetz Naru & Nami 2 BHK floor plan",
    "Assetz Naru & Nami 3 BHK floor plan",
    "Assetz Naru & Nami 4 BHK floor plan",
    "Assetz Naru & Nami apartment sizes",
    "apartment floor plan Whitefield-Hoskote Road"
  ],

  alternates: {
    canonical: "https://www.assetznarunami.co/floor-plan",
  },

  openGraph: {
    title: "Assetz Naru & Nami Floor Plans | 2, 3 & 4 BHK Apartments",
    description:
      "Assetz Naru & Nami floor plans: 2 BHK (~1,200 sq. ft.), 3 BHK (~1,650 sq. ft.) and 4 BHK (~2,300 sq. ft.) on Whitefield-Hoskote Road, Bangalore East.",
    url: "https://www.assetznarunami.co/floor-plan",
    siteName: "Assetz Naru & Nami",
    images: [
      {
        url: "https://www.assetznarunami.co/images/3bhk-floorplan.webp",
        alt: "Assetz Naru & Nami 3 BHK Floor Plan",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Assetz Naru & Nami Floor Plans | 2, 3 & 4 BHK Apartments",
    description:
      "Assetz Naru & Nami floor plans: 2 BHK (~1,200 sq. ft.), 3 BHK (~1,650 sq. ft.) and 4 BHK (~2,300 sq. ft.) on Whitefield-Hoskote Road, Bangalore East.",
    images: ["https://www.assetznarunami.co/images/3bhk-floorplan.webp"],
  },

  category: "Real Estate",
};

export default function page() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://www.assetznarunami.co/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Floor Plan",
            "item": "https://www.assetznarunami.co/floor-plan"
          }
        ]
      },
      {
        "@type": "ApartmentComplex",
        "name": "Assetz Naru & Nami",
        "description": "Assetz Naru & Nami offers 2, 3 and 4 BHK apartments across 6 towers on Whitefield-Hoskote Road (SH-35), Bangalore East.",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Whitefield-Hoskote Road (SH-35), Bangalore East",
          "addressLocality": "Bangalore",
          "addressRegion": "Karnataka",
          "postalCode": "560115",
          "addressCountry": "IN"
        },
        "numberOfAccommodationUnits": "725",
        "url": "https://www.assetznarunami.co/floor-plan",
        "image": "https://www.assetznarunami.co/images/3bhk-floorplan.webp"
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What apartment types are available at Assetz Naru & Nami?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Assetz Naru & Nami offers 2 BHK, 3 BHK and 4 BHK apartments."
            }
          },
          {
            "@type": "Question",
            "name": "What are the apartment sizes at Assetz Naru & Nami?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Published sizes are about 1,200 sq. ft. for 2 BHK, 1,650 sq. ft. for 3 BHK and 2,300 sq. ft. for 4 BHK. Exact carpet areas will be confirmed in the final unit plans."
            }
          },
          {
            "@type": "Question",
            "name": "Where is Assetz Naru & Nami located?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Assetz Naru & Nami is located on Whitefield-Hoskote Road (SH-35), Bangalore East, between Whitefield and Hoskote."
            }
          }
        ]
      }
    ]
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