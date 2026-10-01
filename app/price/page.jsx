import BlogSection from "@/components/BlogsSection";
import PricePage from "./PricePage";

const TITLE = "Assetz Naru and Nami Price List | 2, 3 and 4 BHK from ₹1.38 Cr";
const DESCRIPTION =
  "Assetz Naru and Nami price list: 2 BHK ~₹1.38 Cr, 3 BHK ~₹1.90 Cr and 4 BHK ~₹2.65 Cr at ₹11,500/sq. ft. on Whitefield-Hoskote Road (SH-35).";
const URL = "https://www.assetznarunami.co/price";
const IMAGE = "https://www.assetznarunami.co/images/assetznarunami-price.webp";

export const metadata = {
  title: {
    absolute: TITLE,
  },

  description: DESCRIPTION,

  keywords: [
    "Assetz Naru and Nami price",
    "Assetz Naru and Nami price list",
    "Assetz Naru and Nami 2 BHK price",
    "Assetz Naru and Nami 3 BHK price",
    "Assetz Naru and Nami 4 BHK price",
    "Assetz Naru and Nami price per sq ft",
    "Assetz Naru and Nami cost sheet",
    "Assetz Naru and Nami price comparison",
    "Assetz Naru and Nami apartment cost",
    "apartment price Whitefield-Hoskote Road",
    "new launch apartment price East Bangalore",
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
        width: 1400,
        height: 850,
        alt: "Assetz Naru and Nami price list for 2, 3 and 4 BHK apartments",
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

export default function Page() {
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
            name: "Price",
            item: URL,
          },
        ],
      },
      {
        "@type": "ApartmentComplex",
        name: "Assetz Naru & Nami",
        description:
          "Assetz Naru & Nami by Assetz Property offers 2, 3 and 4 BHK apartments across six towers on about 15 acres on Whitefield-Hoskote Road (SH-35), East Bangalore, with indicative prices from ₹1.38 Cr.",
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
        offers: {
          "@type": "AggregateOffer",
          priceCurrency: "INR",
          lowPrice: "13800000",
          highPrice: "26500000",
          offerCount: "3",
          availability: "https://schema.org/PreOrder",
          url: URL,
        },
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "What is the starting price of Assetz Naru & Nami?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Indicative apartment prices at Assetz Naru & Nami start at approximately ₹1.38 Cr for a 2 BHK of about 1,200 sq. ft. super built-up area.",
            },
          },
          {
            "@type": "Question",
            name: "What is the price of 2, 3 and 4 BHK apartments at Assetz Naru & Nami?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "The indicative prices are about ₹1.38 Cr for a 2 BHK (1,200 sq. ft.), ₹1.90 Cr for a 3 BHK (1,650 sq. ft.) and ₹2.65 Cr for a 4 BHK (2,300 sq. ft.).",
            },
          },
          {
            "@type": "Question",
            name: "What is the price per sq. ft. at Assetz Naru & Nami?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "The estimates use a derived rate of ₹11,500 per sq. ft. on the indicative super built-up area. These are not confirmed developer quotations or an official price list.",
            },
          },
          {
            "@type": "Question",
            name: "What charges are added to the Assetz Naru & Nami apartment price?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "The indicative prices are not the complete purchase cost. Buyers should request a detailed cost sheet covering GST, registration and stamp duty, parking charges, maintenance deposits and other development-related charges.",
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
      <PricePage />
      <BlogSection/>
    </>
  );
}
