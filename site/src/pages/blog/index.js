import React from 'react'
import BlockContent from '@sanity/block-content-to-react'

import { graphql } from 'gatsby'

import MainLayout from '../../components/main-layout/MainLayout'

// const client = require('@sanity/client')({
//   projectId: 'ye5mguwx',
//   dataset: 'production',
//   useCdn: true,
// })

export default ({ data }) => {
  const { posts } = data
  // const posts = .nodes.map(post => {
  //   console.log("post", post)
  //   return (
  //     <div>
  //       <h1>{post.name}</h1>
  //       {/* <BlockContent blocks={post._rawBody} /> */}
  //     </div>
  //   )
  // })

  return (
    <MainLayout>
      <div>Blog</div>
      {posts.edges.map(({ node: post }) => {
        console.log('post', post)
        return (
          <div>
            <h1>{post.title}</h1>
            <BlockContent blocks={post._rawBody} />
          </div>
        )
      })}
      {/* <div>{posts}</div> */}
    </MainLayout>
  )
}

export const pageQuery = graphql`
  query {
    posts: allSanityBlogPost(sort: { order: ASC }) {
      edges {
        node {
          title
          slug {
            current
          }
          author {
            name
            slug {
              current
            }
          }
          _rawBody
        }
      }
    }
  }
`
