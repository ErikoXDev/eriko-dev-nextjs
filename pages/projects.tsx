import type { NextPage } from 'next'

import ProjectList from '../components/Projects/ProjectList'


const Projects: NextPage = () => {
  return (
    <>
      <div>
        <h1 className="text-xl md:text-2xl font-bold">All Projects</h1>
        <p>Here is a list of all my publicly available projects.<br></br>Click on the cards to open a project.</p>
      </div>
      <ProjectList ></ProjectList>
    </>
  )
}

export default Projects