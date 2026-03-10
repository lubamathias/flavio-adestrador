import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-montserrat",
});

const siteUrl = "https://flavioadestrador.com.br";
const siteName = "Flávio Adestrador";
const siteDescription =
  "Adestramento de cães em Alto de Pinheiros, São Paulo e proximidades, com foco em obediência, comportamento, socialização e treino para filhotes.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Flávio Adestrador | Adestramento de cães em Alto de Pinheiros",
    template: "%s | Flávio Adestrador",
  },
  description: siteDescription,
  applicationName: siteName,
  manifest: "/manifest.json",
  keywords: [
    "adestrador de cães",
    "adestramento de cães",
    "adestrador em Alto de Pinheiros",
    "adestrador em São Paulo",
    "adestramento canino",
    "comportamento canino",
    "treino de cães",
    "adestramento para filhotes",
    "socialização canina",
    "adestrador alto de pinheiros",
  ],
  authors: [{ name: siteName }],
  creator: "Luciano Mathias",
  publisher: siteName,
  category: "Serviços locais",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName,
    title: "Flávio Adestrador | Adestramento de cães em Alto de Pinheiros",
    description: siteDescription,
    locale: "pt_BR",
    images: [
      {
        url: "/perfil/fotoCapaIa.png",
        width: 1200,
        height: 630,
        alt: "Flávio Adestrador em atendimento",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Flávio Adestrador | Adestramento de cães em Alto de Pinheiros",
    description: siteDescription,
    images: ["/perfil/fotoCapaIa.png"],
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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const localBusinessJsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${siteUrl}/#organization`,
    name: siteName,
    url: siteUrl,
    image: `${siteUrl}/perfil/fotoCapaIa.png`,
    logo: `${siteUrl}/icon.png`,
    telephone: "+55 11 96159-7682",
    email: "flavio.sp2024@gmail.com",
    inLanguage: "pt-BR",
    areaServed: [
      {
        "@type": "City",
        name: "São Paulo",
      },
      {
        "@type": "Place",
        name: "Alto de Pinheiros",
      },
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "São Paulo",
      addressRegion: "SP",
      addressCountry: "BR",
    },
    sameAs: [
      "https://www.instagram.com/flavio.adestra/",
      "https://www.youtube.com/@Flavio-y9d",
    ],
    serviceOffered: [
      {
        "@type": "Service",
        name: "Adestramento de cães",
        description:
          "Treinamento de obediência, comportamento e socialização para cães.",
        areaServed: "São Paulo",
      },
      {
        "@type": "Service",
        name: "Adestramento para filhotes",
        description:
          "Treinamento inicial para filhotes com foco em socialização e obediência.",
      },
    ],
  };

  return (
    <html lang="pt-BR">
      <body className={`${inter.variable} ${montserrat.variable}`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessJsonLd),
          }}
        />
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}