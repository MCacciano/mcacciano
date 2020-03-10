import React from 'react'
import PropTypes from 'prop-types'

import { Link } from 'gatsby'
import Img from 'gatsby-image'
// import BackgroundImage from 'gatsby-background-image'

import { Projects, Project } from './ProjectList.styles'

const ProjectList = ({ projects }) => {
  const rgba = (rgb, opacity = '0.7') => {
    if (rgb) {
      const { r, g, b } = rgb
      return `rgba(${r}, ${g}, ${b}, ${opacity})`
    }
    return `rgba(0, 0, 0, ${opacity})`
  }

  return (
    <Projects>
      {projects.edges.map(({ node: project }, i) => {
        return (
          <>
            <Project key={i} overlay={rgba(project.overlay.rgb)}>
              <Img fluid={project.image.asset.fluid} alt={project.title} />
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
