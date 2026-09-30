import AmenitiesSection from "@/components/AmenitiesSection";
import AssetzPropertyGroup from "@/components/AssetzPropertyGroup";
import BlogSection from "@/components/BlogsSection";
import FaqSection from "@/components/FaqSection";
import FloorPlanSection from "@/components/FloorPlanSection";
import GallerySection from "@/components/GallerySection";
import HeroSection from "@/components/HeroSection";
import LocationSection from "@/components/LocationSection";
import MasterPlanSection from "@/components/MasterPlanSection";
import PriceListSection from "@/components/PriceListSection";
import ProjectHighlights from "@/components/ProjectHighlights";
import TopAssetzProjects from "@/components/TopAssetzProjects";
import TopHospitals from "@/components/TopHospitals";
import TopSchools from "@/components/TopSchools";
import TopShoppingMalls from "@/components/TopShoppingMalls";
const homeSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ApartmentComplex",
      name: "Assetz Naru & Nami",
      description:
        "Assetz Naru & Nami is a luxury residential gated community located on Whitefield-Hoskote Road (SH-35), Bangalore East, offering 2 BHK, 3 BHK and 4 BHK apartments across 6 high-rise towers on 15 acres.",
      url: "https://www.assetznarunami.co/",
      image:
        "https://www.assetznarunami.co/images/banners/assetznarunami.webp",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Whitefield-Hoskote Road (SH-35), Bangalore East",
        addressLocality: "Bangalore",
        addressRegion: "Karnataka",
        postalCode: "560115",
        addressCountry: "IN",
      },
      numberOfAccommodationUnits: "725",
      amenityFeature: [
        {
          "@type": "LocationFeatureSpecification",
          name: "Swimming Pool",
          value: true,
        },
        {
          "@type": "LocationFeatureSpecification",
          name: "Gym",
          value: true,
        },
        {
          "@type": "LocationFeatureSpecification",
          name: "Clubhouse",
          value: true,
        },
        {
          "@type": "LocationFeatureSpecification",
          name: "Children Play Area",
          value: true,
        },
      ],
      offers: {
        "@type": "Offer",
        price: "13800000",
        priceCurrency: "INR",
        availability: "https://schema.org/PreSale",
        url: "https://www.assetznarunami.co/",
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
            text: "Assetz Naru & Nami is located on Whitefield-Hoskote Road (SH-35), Bangalore East.",
          },
        },
        {
          "@type": "Question",
          name: "What is the starting price of Assetz Naru & Nami apartments?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The starting price of apartments at Assetz Naru & Nami is approximately ₹1.38 Crore* onwards for a 2 BHK.",
          },
        },
        {
          "@type": "Question",
          name: "What apartment types are available in Assetz Naru & Nami?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The project offers 2 BHK, 3 BHK and 4 BHK apartments.",
          },
        },
      ],
    },
  ],
};

export default function Home() {
  return (
    <>
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(homeSchema) }}
    />
    <HeroSection/>
    <ProjectHighlights/>
    <PriceListSection/>
    <FloorPlanSection/>
    <MasterPlanSection/>
    <AmenitiesSection/>
    <GallerySection/>
    <LocationSection/>
    <AssetzPropertyGroup/>
    <TopSchools/>
    <TopHospitals/>
    <TopShoppingMalls/>
    <TopAssetzProjects/>
    <FaqSection/>
    <BlogSection/>
    </>
  );
}
