import type { NextPage } from 'next'
import Navbar from '../components/Navbar'
import BannerSection from '../components/BannerSection'
import DiscoverSection from '../components/DiscoverSection'
import ProductSection from '../components/ProductSection'
import Newsletter from '../components/Newsletter'

const Home: NextPage = () => {
  return (
    <>
      <Navbar />
      <BannerSection />
      <DiscoverSection />
      <ProductSection />
      <Newsletter />
    </>
  )
}
export default Home
