import fs from 'fs'
import { InitialState, Course, CoursePageState } from '../types/InitialState'

interface ContentConfig {
  id: string
  courseName: string
  quickLinks: string[]
  contentFiles: Array<{ version: number; path: string }>
}

const contentConfig: ContentConfig[] = JSON.parse(fs.readFileSync('./content/content_config.json', 'utf8'))
// const idyllConfig: ContentConfig = JSON.parse(fs.readFileSync('./content/index.idl', 'utf-8'))

export function resolveInitialState(path: string): { pageState: InitialState; coursePageState: CoursePageState } {
  const courses = getCourses()
  return {
    pageState: {
      courses: courses || '',
      pageParams: {
        path,
        pathParams: {}
      }
    },
    coursePageState: {
      selectedCourseVersion: null
    }
  }
}

function getCourses(): Course[] {
  return contentConfig.map(({ id, courseName, quickLinks, contentFiles }) => {
    const courseContent: Array<{ version: number; content: string }> = contentFiles.map(({ version, path }) => ({ version, content: fs.readFileSync(path, 'utf8') }))
    return {
      id,
      courseName,
      quickLinks,
      courseContent
    }
  })
}

function resolveCourseTabFromPath(path: string) {
  return path.split('tab')[1]
}
