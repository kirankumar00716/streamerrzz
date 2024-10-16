
import Footer from "./components/Footer"
import HeroSection from "./components/HeroSection"
import HowItWorks from "./components/HowItWorks"
import KeyFeatures from "./components/KeyFeatures"
import NavBar from "./components/NavBar"
import PricingPlans from "./components/PricingPlans"
import Testimonials from "./components/Testimonials"

function App() {


  return (
    <div>
   <main className="text-sm text-neutral-300 anti
   ">
    <NavBar/>
    <HeroSection/>
    <HowItWorks/>
    <KeyFeatures/>
    <PricingPlans/>
    <Testimonials/>
    <Footer/>
   </main>
    </div>
  )
}

export default App
