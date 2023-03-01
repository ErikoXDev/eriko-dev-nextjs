import * as React from "react"
import Footer from "./Footer/Footer"
import NavBar from "./Navbar/NavBar"
import SEO from "./SEO"


interface PageLayoutProps {
  children: React.ReactNode
}
const PageLayout = ({ children }: PageLayoutProps) => {
  return (
    <div className="relative flex min-h-screen bg-white dark:bg-zinc-900 text-zinc-900 dark:text-white flex flex-col items-center">
      <SEO />
      <div className="w-full md:w-3/4 min-h-[80vh]">
        <NavBar />

        <div className="mt-16 mb-8 px-6 md:px-0">
          {children}
        </div>
      </div>
      <div>
        <Footer />
      </div>

    </div>
  )
}

export default PageLayout