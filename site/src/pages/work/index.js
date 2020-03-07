import React from "react"

import MainLayout from "../../components/main-layout/MainLayout"

// components
import ProjectList from "../../components/project-list/ProjectList"

// styled components
import { WorkWrapper, TitleWrapper, Title } from "./work.styles"

export default () => {
  return (
    <MainLayout>
      <WorkWrapper>
        <ProjectList />
      </WorkWrapper>
    </MainLayout>
  )
}
