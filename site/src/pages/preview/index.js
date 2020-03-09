import React from 'react'
import { Router } from '@reach/router'

import BlogPostPreview from '../../components/blog-post-preview/BlogPostPreview'

import MainLayout from '../../components/main-layout/MainLayout'

const PreviewPage = () => {
  return (
    <MainLayout>
      <Router>
        <BlogPostPreview path="/app/preview/:id" />
      </Router>
    </MainLayout>
  )
}

export default PreviewPage
