import { projects } from "../data/projects"
import { hyphenateWords } from "./hyphenateWords"

function findProject(str) {
  const project = projects.filter(project => hyphenateWords(project.title) === str
  )
  return project
}

export {findProject}