import Footer from "@/components/layouts/Footer/Footer";
import { Montserrat } from "next/font/google";
import "../globals.css";
import { NavHeader } from "@/components/layouts/Header/NavHeader";
import AosSetup from "@/config/aos";

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
});

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
