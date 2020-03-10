import React from 'react'
import { graphql } from 'gatsby'

import MainLayout from '../../components/main-layout/MainLayout'

// components
import ProjectList from '../../components/project-list/ProjectList'

export default ({ data }) => {
  return (
    <MainLayout>
      <div
        style={{ display: 'flex', justifyContent: 'center', margin: '50px' }}
      >
        <h1
          style={{
            fontSize: '3rem',
            fontFamily: 'Rubik',
            fontWeight: '700',
            color: 'rgba(15, 76, 117, 1)',
          }}
        >
          Work
        </h1>
      </div>
      <ProjectList projects={data.projects} />
    </MainLayout>
  )
}

export const pageQuery = graphql`
  query {
    projects: allSanityProject {
      edges {
        node {
          description
          title
          tech {
            title
            shortname
          }
          slug {
            current
          }
          image {
            asset {
              fluid(maxWidth: 800) {
                ...GatsbySanityImageFluid
              }
            }
          }
          author {
            name
            image {
              asset {
                fluid {
                  src
                  srcSet
                }
              }
            }
            slug {
              current
            }
          }
          id
        }
      }
    }
  }
`
