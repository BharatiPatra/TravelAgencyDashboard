import Navbar from "./Navbar"
import Footer from "./Footer"


export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  )
}
