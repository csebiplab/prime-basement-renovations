import Footer from "@/components/layouts/Footer/Footer";
import { Montserrat } from "next/font/google";
import "../globals.css";
import { NavHeader } from "@/components/layouts/Header/NavHeader";
import AosSetup from "@/config/aos";
import { headers } from "next/headers";
import { projectfor } from "@/constants/projectfor";

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
});

export async function generateMetadata() {

  const headerList = headers();
  const pathname = headerList.get("x-current-path");
  const clientUrlWithPath = process.env.NEXT_PUBLIC_CLIENT_URL + pathname

  // console.log(clientUrlWithPath, 'clientUrlWithPath')

  try {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;

    const response = await fetch(`${apiUrl}/api/metadata?projectFor=${projectfor}&pageLink=${clientUrlWithPath}`, {
      cache: "no-store",
    });
    const data = await response.json();

    const { title, description, keywords } = data?.data[0] ?? {};

    const gglverificationResponse = await fetch(`${apiUrl}/api/site-verification?projectFor=${projectfor}`, {
      cache: "no-store",
    });

    const gVerificationData = await gglverificationResponse.json();

    const verificationContent = gVerificationData?.data?.[0]?.url

    return {
      title: title || "Prime Basement",
      description: description || "Prime Basement",
      keywords: keywords || "Prime basement",
      openGraph: {
        title: title || "Prime Basement",
        description: description || "Prime Basement",
      },
      verification: {
        google: verificationContent || "ABCDEFGH",
      },
      alternates: {
        canonical: clientUrlWithPath,
      },
      robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
    };

  } catch (error) {
    return {
      title: "Home",
      description: "Home",
      keywords: "Home",
    }
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable}`}>
        <AosSetup />
        <>
          <NavHeader />
        </>
        <>{children}</>
        <>
          <Footer />
        </>
      </body>
    </html>
  );
}
