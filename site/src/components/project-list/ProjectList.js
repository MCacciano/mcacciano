import React from 'react'
import PropTypes from 'prop-types'

import { Link } from 'gatsby'
import Img from 'gatsby-image'
// import BackgroundImage from 'gatsby-background-image'

import { Projects, Project } from './ProjectList.styles'

const ProjectList = ({ projects }) => {
  console.log('ProjectList', projects)
  return (
    <Projects>
      {projects.edges.map(({ node: project }, i) => {
        return (
          <>
            <Project key={i}>
              <Img fluid={project.image.asset.fluid} alt={project.title} />
              {/* <div>Tech List</div>
            <div>Description</div> */}
            </Project>
            <Project key={i + 1}>
              <Img fluid={project.image.asset.fluid} alt={project.title} />
              {/* <div>Tech List</div>
            <div>Description</div> */}
            </Project>
            <Project key={i + 2}>
              <Img fluid={project.image.asset.fluid} alt={project.title} />
              {/* <div>Tech List</div>
            <div>Description</div> */}
            </Project>
          </>
        )
      })}
    </Projects>
  )
}

ProjectList.propTypes = {
  projects: PropTypes.object,
}

export default ProjectList
