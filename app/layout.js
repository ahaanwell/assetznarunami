import { Poppins, Roboto_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileBottomBar from "@/components/MobileBottomBar";
import BrochureWrapper from "@/components/BrochureWrapper";

const poppins = Poppins({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const robotoMono = Roboto_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: {
    default:
      "Assetz Naru & Nami | Whitefield-Hoskote Road Bangalore | Review | Brochure  | New Launch",
    template: "%s | Assetz Naru & Nami Bangalore",
  },

  description:
    "Assetz Naru & Nami a new launch premium apartment project in Whitefield-Hoskote Road (SH-35), Bangalore East. Covers 15 acres of land, it offers 2 BHK, 3 BHK and 4 BHK apartments over 6 high-rise towers.",

  keywords: [
    "Assetz Naru & Nami",
    "Assetz Naru & Nami Bangalore",
    "Assetz Naru & Nami Whitefield-Hoskote Road",
    "Assetz Naru & Nami SH-35",
    "Assetz Naru & Nami price",
    "Assetz Naru & Nami brochure",
    "Assetz Naru & Nami floor plan",
    "Assetz Naru & Nami review",
    "apartments in Whitefield-Hoskote Road",
    "new launch apartments Bangalore East",
    "luxury apartments Bangalore",
    "2 BHK apartments Whitefield-Hoskote Road",
    "3 BHK apartments Whitefield-Hoskote Road",
    "4 BHK apartments Whitefield-Hoskote Road",
  ],

  metadataBase: new URL("https://www.assetznarunami.co"),

  alternates: {
    canonical: "https://www.assetznarunami.co/",
  },

  openGraph: {
    title:
      "Assetz Naru & Nami | Whitefield-Hoskote Road Bangalore | Review | Brochure  | New Launch",
    description:
      "Assetz Naru & Nami a new launch premium apartment project in Whitefield-Hoskote Road (SH-35), Bangalore East. Covers 15 acres of land, it offers 2 BHK, 3 BHK and 4 BHK apartments over 6 high-rise towers.",
    url: "https://www.assetznarunami.co/",
    siteName: "Assetz Naru & Nami",
    images: [
      {
        url: "https://www.assetznarunami.co/images/banners/assetznarunami.webp",
        width: 1200,
        height: 630,
        alt: "Assetz Naru & Nami Apartments on Whitefield-Hoskote Road, Bangalore East",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Assetz Naru & Nami | Whitefield-Hoskote Road Bangalore | Review | Brochure  | New Launch",
    description:
      "Assetz Naru & Nami a new launch premium apartment project in Whitefield-Hoskote Road (SH-35), Bangalore East. Covers 15 acres of land, it offers 2 BHK, 3 BHK and 4 BHK apartments over 6 high-rise towers.",
    images: [
      "https://www.assetznarunami.co/images/banners/assetznarunami.webp",
    ],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },

  authors: [
    {
      name: "Assetz Naru & Nami",
      url: "https://www.assetznarunami.co/",
    },
  ],

  creator: "Assetz Naru & Nami",
  publisher: "Assetz Naru & Nami",

  category: "Real Estate",

  verification: {
    google: "",
  },
};

export default function RootLayout({ children }) {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        name: "Assetz Naru & Nami",
        url: "https://www.assetznarunami.co/",
        logo: "https://www.assetznarunami.co/images/logo.webp",
      },
    ],
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </head>

      <body
        className={`${poppins.variable} ${robotoMono.variable} antialiased`}
      >
        <Header />
        <BrochureWrapper/>
        {children}
        <Footer />
        <MobileBottomBar />
      </body>
    </html>
  );
}