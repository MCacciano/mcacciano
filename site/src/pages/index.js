import React from 'react'

import SEO from '../components/seo'
import MainLayout from '../components/main-layout/MainLayout'
import Hero from '../components/hero/Hero'

const IndexPage = () => (
  <MainLayout>
    <SEO title="Home" />
    <Hero />
  </MainLayout>
)

export default IndexPage
