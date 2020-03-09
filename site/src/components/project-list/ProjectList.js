import React from 'react'

import { useStaticQuery, graphql, useQuery } from 'gatsby'
import Img from 'gatsby-image'
// import BackgroundImage from 'gatsby-background-image'

import { Projects, Project } from './ProjectList.styles'

const ProjectList = () => {
  const query = useStaticQuery(graphql`
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
                fluid {
                  aspectRatio
                }
              }
            }
            author {
              name
              image {
                asset {
                  fluid {
                    src
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
  `)

  console.log('query', query)
  const { projects } = query
  return (
    <Projects>
      <h1>placeholder</h1>
      {projects.edges.map(({ node: project }, i) => {
        return (
          // <BackgroundImage key={i} Tag="li" fluid={project.image.asset.fluid}>
          //   <a href="/">
          //     <div>
          //       <span>{project.title}</span>
          //     </div>
          //   </a>
          // </BackgroundImage>
          <Project key={i}>
            <h2>{project.title}</h2>
            <Img fluid={project.image.asset.fluid} alt={project.title} />
          </Project>
        )
      })}
    </Projects>
  )
}

export default ProjectList
