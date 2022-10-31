import type { NextPage } from 'next'
import Navbar from '../components/Navbar'
import BannerSection from '../components/BannerSection'
import DiscoverSection from '../components/DiscoverSection'
import ProductSection from '../components/ProductSection'
import SimpleSlider from '../components/Testimonial'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'

const Home: NextPage = () => {
  return (
    <>
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
