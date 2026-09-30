import BlogSection from "@/components/BlogsSection";
import AmenitiesPage from "./AmenitiesPage";

export const metadata = {
  title: {
    absolute: "Assetz Naru & Nami Amenities | Clubhouse, Pool & More",
  },

  description:
    "Assetz Naru & Nami amenities include a signature clubhouse, rooftop pool, wellness and yoga deck, co-working pods, gym, jogging track and 75% open space.",

  keywords: [
    "Assetz Naru & Nami amenities",
    "Assetz Naru & Nami clubhouse",
    "Assetz Naru & Nami swimming pool",
    "Assetz Naru & Nami gym",
    "Assetz Naru & Nami co-working",
    "Assetz Naru & Nami kids play area",
    "apartment amenities Whitefield-Hoskote Road"
  ],

  alternates: {
    canonical: "https://www.assetznarunami.co/amenities",
  },

  openGraph: {
    title: "Assetz Naru & Nami Amenities & Lifestyle Facilities",
    description:
      "Assetz Naru & Nami amenities include a signature clubhouse, rooftop pool, wellness and yoga deck, co-working pods, gym, jogging track and 75% open space.",
    url: "https://www.assetznarunami.co/amenities",
    siteName: "Assetz Naru & Nami",
    images: [
      {
        url: "https://www.assetznarunami.co/images/banners/assetznarunami.webp",
        alt: "Assetz Naru & Nami Amenities",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Assetz Naru & Nami Amenities & Lifestyle Facilities",
    description:
      "Assetz Naru & Nami amenities include a signature clubhouse, rooftop pool, wellness and yoga deck, co-working pods, gym, jogging track and 75% open space.",
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
            "name": "Amenities",
            "item": "https://www.assetznarunami.co/amenities"
          }
        ]
      },
      {
        "@type": "ApartmentComplex",
        "name": "Assetz Naru & Nami",
        "description": "Assetz Naru & Nami amenities include a signature clubhouse, rooftop swimming pool, open-air wellness and yoga deck, co-working pods and landscaped open spaces.",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Whitefield-Hoskote Road (SH-35), Bangalore East",
          "addressLocality": "Bangalore",
          "addressRegion": "Karnataka",
          "postalCode": "560115",
          "addressCountry": "IN"
        },
        "amenityFeature": [
          {
            "@type": "LocationFeatureSpecification",
            "name": "Clubhouse",
            "value": true
          },
          {
            "@type": "LocationFeatureSpecification",
            "name": "Rooftop Swimming Pool",
            "value": true
          },
          {
            "@type": "LocationFeatureSpecification",
            "name": "Gymnasium",
            "value": true
          },
          {
            "@type": "LocationFeatureSpecification",
            "name": "Yoga Deck",
            "value": true
          },
          {
            "@type": "LocationFeatureSpecification",
            "name": "Co-working Pods",
            "value": true
          },
          {
            "@type": "LocationFeatureSpecification",
            "name": "Jogging Track",
            "value": true
          },
          {
            "@type": "LocationFeatureSpecification",
            "name": "Children Play Area",
            "value": true
          },
          {
            "@type": "LocationFeatureSpecification",
            "name": "Badminton Court",
            "value": true
          },
          {
            "@type": "LocationFeatureSpecification",
            "name": "Indoor Games Room",
            "value": true
          }
        ],
        "url": "https://www.assetznarunami.co/amenities",
        "image": "https://www.assetznarunami.co/images/banners/assetznarunami.webp"
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What amenities are available at Assetz Naru & Nami?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Planned amenities include a standalone signature clubhouse, rooftop swimming pool, open-air wellness and yoga deck, co-working pods, gym, jogging track, children’s play area and landscaped open spaces."
            }
          },
          {
            "@type": "Question",
            "name": "Does Assetz Naru & Nami have a clubhouse?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. A standalone signature clubhouse is planned for community activities and recreation."
            }
          },
          {
            "@type": "Question",
            "name": "What sustainability features does Assetz Naru & Nami have?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Listed features include rainwater harvesting, greywater recycling and the developer’s Carbon-Healing Homes programme."
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
      <AmenitiesPage />
      <BlogSection/>
    </>
  );
}