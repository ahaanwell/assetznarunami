import BlogSection from "@/components/BlogsSection";
import MasterPlanPage from "./MasterPlanPage";

export const metadata = {
  title: {
    absolute: "Assetz Naru & Nami Master Plan | 15 Acres, 6 Towers",
  },

  description:
    "Assetz Naru & Nami master plan: 725 apartments in 6 towers (2B+G+30) on about 15 acres with 75% open space, on Whitefield-Hoskote Road (SH-35), Bangalore East.",

  keywords: [
    "Assetz Naru & Nami master plan",
    "Assetz Naru & Nami site plan",
    "Assetz Naru & Nami layout",
    "Assetz Naru & Nami towers",
    "Assetz Naru & Nami open space",
    "Assetz Naru & Nami land area",
    "master plan Whitefield-Hoskote Road apartments"
  ],

  alternates: {
    canonical: "https://www.assetznarunami.co/master-plan",
  },

  openGraph: {
    title: "Assetz Naru & Nami Master Plan & Site Layout",
    description:
      "Assetz Naru & Nami master plan: 725 apartments in 6 towers (2B+G+30) on about 15 acres with 75% open space, on Whitefield-Hoskote Road (SH-35), Bangalore East.",
    url: "https://www.assetznarunami.co/master-plan",
    siteName: "Assetz Naru & Nami",
    images: [
      {
        url: "https://www.assetznarunami.co/images/master-plan.webp",
        alt: "Assetz Naru & Nami Master Plan",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Assetz Naru & Nami Master Plan & Site Layout",
    description:
      "Assetz Naru & Nami master plan: 725 apartments in 6 towers (2B+G+30) on about 15 acres with 75% open space, on Whitefield-Hoskote Road (SH-35), Bangalore East.",
    images: ["https://www.assetznarunami.co/images/master-plan.webp"],
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
            "name": "Master Plan",
            "item": "https://www.assetznarunami.co/master-plan"
          }
        ]
      },
      {
        "@type": "ApartmentComplex",
        "name": "Assetz Naru & Nami",
        "description": "Assetz Naru & Nami is planned as 6 residential towers (2B+G+30) with 725 apartments on about 15 acres, with 75% open space, on Whitefield-Hoskote Road (SH-35), Bangalore East.",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Whitefield-Hoskote Road (SH-35), Bangalore East",
          "addressLocality": "Bangalore",
          "addressRegion": "Karnataka",
          "postalCode": "560115",
          "addressCountry": "IN"
        },
        "numberOfAccommodationUnits": "725",
        "amenityFeature": [
          {
            "@type": "LocationFeatureSpecification",
            "name": "Clubhouse",
            "value": true
          },
          {
            "@type": "LocationFeatureSpecification",
            "name": "Swimming Pool",
            "value": true
          },
          {
            "@type": "LocationFeatureSpecification",
            "name": "Landscaped Gardens",
            "value": true
          },
          {
            "@type": "LocationFeatureSpecification",
            "name": "Children Play Area",
            "value": true
          }
        ],
        "url": "https://www.assetznarunami.co/master-plan",
        "image": "https://www.assetznarunami.co/images/master-plan.webp"
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How many towers are in Assetz Naru & Nami?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The project has 6 residential towers, each planned with two basements, a ground floor and 30 upper floors (2B+G+30)."
            }
          },
          {
            "@type": "Question",
            "name": "How much open space does Assetz Naru & Nami have?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "About 75% of the approximately 15-acre site is planned as open space."
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
      <MasterPlanPage />
      <BlogSection/>
    </>
  );
}