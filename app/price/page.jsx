import BlogSection from "@/components/BlogsSection";
import PricePage from "./PricePage";

export const metadata = {
  title: {
    absolute: "Assetz Naru & Nami Price | 2, 3 & 4 BHK Price List",
  },

  description:
    "Assetz Naru & Nami price starts at ₹1.38 Cr* (2 BHK), ₹1.90 Cr* (3 BHK) and ₹2.65 Cr* (4 BHK) on Whitefield-Hoskote Road, Bangalore East.",

  keywords: [
    "Assetz Naru & Nami price",
    "Assetz Naru & Nami price list",
    "Assetz Naru & Nami cost sheet",
    "Assetz Naru & Nami 2 BHK price",
    "Assetz Naru & Nami 3 BHK price",
    "Assetz Naru & Nami 4 BHK price",
    "Assetz Naru & Nami price per sq ft",
    "apartment price Whitefield-Hoskote Road",
    "new launch apartment price Bangalore East"
  ],

  alternates: {
    canonical: "https://www.assetznarunami.co/price",
  },

  openGraph: {
    title: "Assetz Naru & Nami Price List | 2, 3 & 4 BHK Apartments",
    description:
      "Assetz Naru & Nami price starts at ₹1.38 Cr* (2 BHK), ₹1.90 Cr* (3 BHK) and ₹2.65 Cr* (4 BHK) on Whitefield-Hoskote Road, Bangalore East.",
    url: "https://www.assetznarunami.co/price",
    siteName: "Assetz Naru & Nami",
    images: [
      {
        url: "https://www.assetznarunami.co/images/costing-details.webp",
        alt: "Assetz Naru & Nami Price List",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Assetz Naru & Nami Price List | 2, 3 & 4 BHK Apartments",
    description:
      "Assetz Naru & Nami price starts at ₹1.38 Cr* (2 BHK), ₹1.90 Cr* (3 BHK) and ₹2.65 Cr* (4 BHK) on Whitefield-Hoskote Road, Bangalore East.",
    images: ["https://www.assetznarunami.co/images/costing-details.webp"],
  },

  category: "Real Estate",
};

export default function Page() {
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
            "name": "Price",
            "item": "https://www.assetznarunami.co/price"
          }
        ]
      },
      {
        "@type": "ApartmentComplex",
        "name": "Assetz Naru & Nami",
        "description": "Assetz Naru & Nami offers 2, 3 and 4 BHK apartments on Whitefield-Hoskote Road (SH-35), Bangalore East, with indicative prices from ₹1.38 Cr* onwards.",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Whitefield-Hoskote Road (SH-35), Bangalore East",
          "addressLocality": "Bangalore",
          "addressRegion": "Karnataka",
          "postalCode": "560115",
          "addressCountry": "IN"
        },
        "offers": {
          "@type": "Offer",
          "priceCurrency": "INR",
          "price": "13800000",
          "availability": "https://schema.org/PreOrder",
          "url": "https://www.assetznarunami.co/price"
        },
        "url": "https://www.assetznarunami.co/price",
        "image": "https://www.assetznarunami.co/images/costing-details.webp"
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is the starting price of Assetz Naru & Nami?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Indicative prices start from about ₹1.38 Cr* for a 2 BHK (around 1,200 sq. ft.), ₹1.90 Cr* for a 3 BHK (around 1,650 sq. ft.) and ₹2.65 Cr* for a 4 BHK (around 2,300 sq. ft.). The developer has not yet released an official cost sheet."
            }
          },
          {
            "@type": "Question",
            "name": "What is the price per sq. ft. at Assetz Naru & Nami?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Based on comparable projects on Whitefield-Hoskote Road, the indicative rate band is ₹10,800 to ₹12,600 per sq. ft., with about ₹11,500 per sq. ft. used as a working reference."
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
      <PricePage />
      <BlogSection/>
    </>
  );
}