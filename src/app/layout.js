import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Your App Title",
  description: "A brief description of your app for better SEO.",
  openGraph: {
    title: "Your App Title",
    description: "A brief description of your app.",
    url: "https://yourwebsite.com", // Ensure this is your actual URL
    siteName: "Your App Name",
    images: [
      {
        url: "https://yourwebsite.com/og-image.jpg", // URL of the Open Graph image
        width: 1200,
        height: 630,
        alt: "An image that represents your app",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Your App Title",
    description: "A brief description of your app.",
    image: "https://yourwebsite.com/twitter-image.jpg", // URL of the Twitter card image
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content={metadata.description} />
        <meta name="robots" content="index, follow" />
        <link rel="icon" href="/favicon.ico" />
        {/* Include additional meta tags here */}
      </head>
      <body className={`${inter.className} bg-#EAF0F1`}>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
