import BlogSection from "@/components/BlogsSection";
import MasterPlanPage from "./MasterPlanPage";

const TITLE = "Assetz Naru and Nami Master Plan | 15 Acres, 6 Towers";
const DESCRIPTION =
  "Assetz Naru and Nami master plan: 725 apartments in 6 towers (2B+G+30) on about 15 acres with 75% open space on Whitefield-Hoskote Road (SH-35).";
const URL = "https://www.assetznarunami.co/master-plan";
const IMAGE = "https://www.assetznarunami.co/images/master-plan.webp";

export const metadata = {
  title: {
    absolute: TITLE,
  },

  description: DESCRIPTION,

  keywords: [
    "Assetz Naru and Nami master plan",
    "Assetz Naru and Nami site plan",
    "Assetz Naru and Nami site layout",
    "Assetz Naru and Nami tower layout",
    "Assetz Naru and Nami land area",
    "Assetz Naru and Nami open space",
    "Assetz Naru and Nami 6 towers",
    "Assetz Naru and Nami 725 apartments",
    "master plan Whitefield-Hoskote Road apartments",
    "residential master plan East Bangalore",
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
        width: 1248,
        height: 768,
        alt: "Assetz Naru and Nami master plan showing six towers and open spaces",
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
            name: "Master Plan",
            item: URL,
          },
        ],
      },
      {
        "@type": "ApartmentComplex",
        name: "Assetz Naru & Nami",
        description:
          "Assetz Naru & Nami by Assetz Property is planned as six residential towers (2B+G+30) with 725 apartments on about 15 acres, with 75% open space, on Whitefield-Hoskote Road (SH-35), East Bangalore.",
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
            name: "What is the land area of Assetz Naru & Nami?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Assetz Naru & Nami is spread across approximately 15 acres on Whitefield-Hoskote Road (SH-35), East Bangalore.",
            },
          },
          {
            "@type": "Question",
            name: "How many towers and apartments are in the Assetz Naru & Nami master plan?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "The master plan includes six residential towers with a combined inventory of 725 apartments. Each tower has two basements, a ground floor and 30 upper floors.",
            },
          },
          {
            "@type": "Question",
            name: "How much open space does Assetz Naru & Nami have?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Assetz Naru & Nami has a stated open space allocation of 75%. The exact distribution of open areas should be verified against the official master plan.",
            },
          },
          {
            "@type": "Question",
            name: "What should buyers check in the Assetz Naru & Nami master plan?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Buyers should check the site boundaries, tower positioning, open space allocation, building configuration, residential distribution and internal circulation shown in the approved drawing.",
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
      <MasterPlanPage />
      <BlogSection/>
    </>
  );
}
