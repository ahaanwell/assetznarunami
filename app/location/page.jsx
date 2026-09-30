import BlogSection from "@/components/BlogsSection";
import LocationPage from "./LocationPage";

export const metadata = {
  title: {
    absolute: "Assetz Naru & Nami Location | Whitefield-Hoskote Road",
  },

  description:
    "Assetz Naru & Nami is on Whitefield-Hoskote Road (SH-35), about 8–10 km from Whitefield, 9–11 km from ITPL and 7–9 km from Kadugodi Metro.",

  keywords: [
    "Assetz Naru & Nami location",
    "Assetz Naru & Nami address",
    "Assetz Naru & Nami Whitefield-Hoskote Road",
    "Assetz Naru & Nami SH-35",
    "Assetz Naru & Nami connectivity",
    "apartments near Whitefield",
    "apartments near Hoskote",
    "apartments near Kadugodi Metro",
    "new launch apartments Bangalore East"
  ],

  alternates: {
    canonical: "https://www.assetznarunami.co/location",
  },

  openGraph: {
    title: "Assetz Naru & Nami Location & Connectivity | Bangalore East",
    description:
      "Assetz Naru & Nami is on Whitefield-Hoskote Road (SH-35), about 8–10 km from Whitefield, 9–11 km from ITPL and 7–9 km from Kadugodi Metro.",
    url: "https://www.assetznarunami.co/location",
    siteName: "Assetz Naru & Nami",
    images: [
      {
        url: "https://www.assetznarunami.co/images/banners/assetznarunami.webp",
        alt: "Assetz Naru & Nami Location on Whitefield-Hoskote Road",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Assetz Naru & Nami Location & Connectivity | Bangalore East",
    description:
      "Assetz Naru & Nami is on Whitefield-Hoskote Road (SH-35), about 8–10 km from Whitefield, 9–11 km from ITPL and 7–9 km from Kadugodi Metro.",
    images: ["https://www.assetznarunami.co/images/banners/assetznarunami.webp"],
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
            "name": "Location",
            "item": "https://www.assetznarunami.co/location"
          }
        ]
      },
      {
        "@type": "ApartmentComplex",
        "name": "Assetz Naru & Nami",
        "description": "Assetz Naru & Nami is located on Whitefield-Hoskote Road (SH-35), Bangalore East, with road access to Whitefield, ITPL, Kadugodi Metro, KR Puram, Hoskote and Kempegowda International Airport.",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Whitefield-Hoskote Road (SH-35), Bangalore East",
          "addressLocality": "Bangalore",
          "addressRegion": "Karnataka",
          "postalCode": "560115",
          "addressCountry": "IN"
        },
        "url": "https://www.assetznarunami.co/location",
        "image": "https://www.assetznarunami.co/images/banners/assetznarunami.webp"
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Where is Assetz Naru & Nami located?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Assetz Naru & Nami is located on Whitefield-Hoskote Road (SH-35), Bangalore East, between Whitefield and Hoskote."
            }
          },
          {
            "@type": "Question",
            "name": "How far is Whitefield from Assetz Naru & Nami?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Whitefield is about 8–10 km and ITPL about 9–11 km from the project, depending on the final access point and traffic."
            }
          },
          {
            "@type": "Question",
            "name": "How far is Kempegowda International Airport from Assetz Naru & Nami?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Kempegowda International Airport is about 35–45 km away, a drive of roughly 45–70 minutes depending on traffic."
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
      <LocationPage />
      <BlogSection/>
    </>
  );
}