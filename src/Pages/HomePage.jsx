import React from 'react'
import HeroSection from '../components/Hero Section/HeroSection'
import IntroSection1 from '../components/Intro Section 1/IntroSection1'
import GallerySection from '../components/Gallery Section/GallerySection'
import IntroSection2 from '../components/Intro Section 2/IntroSection2'
import WorkbenchSection from '../components/Workbench Section/WorkbenchSection'
import ProductsSection from '../components/Products Section/ProductsSection'
import Project from '../components/Small Components/Project'
import ManufacturingSection from '../components/Manufacturing Section/ManufacturingSection'
import FooterSection from '../components/Footer Section/FooterSection'
import image1 from '../assets/images/image1.png'
import image2 from '../assets/images/image2.png'
import image3 from '../assets/images/image3.png'
import image4 from '../assets/images/image4.png'
import image5 from '../assets/images/image5.png'
import image6 from '../assets/images/image6.png'
import { ABOUT_LIST, ALL_LISTS, AWARDS_LIST, COLORS, CORPORATE_LIST, FLOOR_LIST, MAINTENANCE_LIST, VALUES_LIST, INTRO_SECTION_1, INTRO_SECTION_2, MANUFACTURING_SECTION, MANUFACTURING, WORKBENCH_SECTION, PRODUCTS_SECTION } from '../components/utils'


const HomePage = () => {
  return (
    <>
      <HeroSection />
      <IntroSection1 heading={INTRO_SECTION_1.heading} paraBig={INTRO_SECTION_1.paraBig} paraSmall={INTRO_SECTION_1.paraSmall} />
      <GallerySection image1={image1} image2={image2} image3={image3} />
      <IntroSection2 heading={INTRO_SECTION_2.heading} />
      <WorkbenchSection heading1={WORKBENCH_SECTION.heading1} heading2={WORKBENCH_SECTION.heading2} paraBig={WORKBENCH_SECTION.paraBig} paraSmall1={WORKBENCH_SECTION.paraSmall1} paraSmall2={WORKBENCH_SECTION.paraSmall2} />
      <ProductsSection heading={PRODUCTS_SECTION.heading} para={PRODUCTS_SECTION.para} />
      <GallerySection image1={image4} image2={image5} image3={image6} />
      <Project />
      <ManufacturingSection heading={MANUFACTURING_SECTION.heading} paraHead1={MANUFACTURING_SECTION.paraHead1} para1={MANUFACTURING_SECTION.para1} paraHead2={MANUFACTURING_SECTION.paraHead2} para2={MANUFACTURING_SECTION.para2} manufacturing={MANUFACTURING} />
      <FooterSection colors={COLORS} list1={ABOUT_LIST} list2={CORPORATE_LIST} list3={MAINTENANCE_LIST} list4={FLOOR_LIST} list5={VALUES_LIST} list6={AWARDS_LIST} allList={ALL_LISTS} />
    </>
  )
}

export default HomePage