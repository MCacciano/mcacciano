import React from "react"
// import BlockContent from '@sanity/block-content-to-react'

import { graphql } from "gatsby"

import MainLayout from "../components/main-layout/MainLayout"

export default ({ data }) => {
  const posts = data.allSanityBlogPost.nodes.map(post => {
    console.log("post", post)
    return (
      <div>
        <h1>{post.name}</h1>
        {/* <BlockContent blocks={post._rawBody} /> */}
      </div>
    )
  })

  return (
    <MainLayout>
      <div>Blog</div>
      <div>{posts}</div>
    </MainLayout>
  )
}

export const pageQuery = graphql`
  query {
    allSanityBlogPost(sort: { order: ASC }) {
      nodes {
        name
      }
    }
  }
`
