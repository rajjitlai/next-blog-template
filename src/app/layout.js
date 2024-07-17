import Navbar from "@/components/navbar/Navbar"
import "./globals.css"
import { Poppins } from "next/font/google"
import Footer from "@/components/footer/Footer"
import { ThemeContextProvider } from "@/context/ThemeContext"
import ThemeProvider from "@/providers/ThemeProvider"
import FloatingNavbar from "@/components/floatingnavbar/FloatingNavbar"
import BottomNavigation from "@/components/bottomnavigation/BottomNavigation"

const poppins = Poppins({ subsets: ['latin'], weight: "400" })

export const metadata = {
  title: "RJ's BLOG.",
  description: "RJ's BLOG. is a blogging site for programming coding, and skills development.",
  keywords: ["programming", "coding", "blog", "skills development"],
  image: "/favicon.ico",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <ThemeContextProvider>
          <ThemeProvider>
            <div className="container">
              <div className="wrapper">
                <Navbar />
                <FloatingNavbar />
                {children}
                <Footer />
                <BottomNavigation />
              </div>
            </div>
          </ThemeProvider>
        </ThemeContextProvider>
      </body>
    </html>
  )
}
