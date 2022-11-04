import type { NextPage } from 'next'
import Meta from "../components/Meta"
import Navbar from '../components/Navbar'
import BannerSection from '../components/BannerSection'
import DiscoverSection from '../components/DiscoverSection'
import ProductSection from '../components/ProductSection'
import SimpleSlider from '../components/Testimonial'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'
import '@fontsource/maven-pro'
import "@fontsource/merriweather"

const Home: NextPage = () => {
  return (
    <>
      <Meta />
      <Navbar />
      <BannerSection />
      <DiscoverSection />
      <ProductSection />
      <SimpleSlider />
      <Newsletter />
      <Footer />
    </>
  )
}
export default Home
