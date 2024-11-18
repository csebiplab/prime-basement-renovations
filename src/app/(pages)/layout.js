import Footer from "@/components/layouts/Footer/Footer";
import { Roboto_Slab } from "next/font/google";
import "../globals.css"
import { NavHeader } from "@/components/layouts/Header/NavHeader";
import AosSetup from "@/config/aos";



const robotoSlab = Roboto_Slab({ subsets: ["latin"] });


export default function RootLayout({ children }) {



  return (
    <html lang="en">
      <body className={robotoSlab.className}>
        <AosSetup/>
        <>
          <NavHeader />
        </>
        <>
          {children}
        </>
        <>
          <Footer />
        </>
      </body>
    </html>
  );
}
