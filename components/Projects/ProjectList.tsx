import { BoxArrowUpRight, StarFill } from "react-bootstrap-icons"

import projectsJSON from "../../projects/projects.json"


const ProjectList = ({ moreControls = false, listFilter = "" }: any) => {




  var projects = projectsJSON

  if (listFilter == "featured") {
    projects = projects.filter(project => project.featured == true)
  }

  return (
    <div className="grid grid-cols-1 gap-5 md:grid-cols-2 mt-8 mb-16">
      {projects.map((project: any) => (

        <a rel="noreferrer" className="transition-transform duration-120 p-4 border dark:border-zinc-700 hover:shadow-lg hover:-translate-y-1" target="_blank" href={project.link} key={project.name}>
          <div className="relative">
            <div className="absolute right-0">

              <BoxArrowUpRight className="w-4 h-4" />

            </div>
          </div>
          <div className="flex gap-1 items-center">
            <h1 className="font-semibold text-lg flex gap-1 items-center">{
              project.featured && <StarFill className="h-4 w-4 fill-amber-500" />
            }
              <div>{project.name}</div></h1>
            {!project.released && <div className="text-[14px] text-zinc-500 dark:text-zinc-400">(Unreleased)</div>}
          </div>

          <p>{project.description}</p>
          <p className="text-[12px] mt-1 text-zinc-500 dark:text-zinc-400">{project.tools}</p>
        </a>
      ))}
    </div>
  )
}

export default ProjectList



export async function getServerSideProps() {





}