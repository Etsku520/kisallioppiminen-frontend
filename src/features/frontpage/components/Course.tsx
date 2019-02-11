import React, { Component } from 'react'
import Link from '../../baseComponents/Link'

interface Props {
  id: string
  courseName: string
  quickLinks: string[]
  version: number
}

export default class Course extends Component<Props, any> {
  render() {
    const { id, courseName, quickLinks, version } = this.props
    return (
      <div className="course">
        <Link href={`/courses/${id}/tab/1`}>
          <h2 className="course-title">{courseName}</h2>
        </Link>
        <span className="course-version">{version}</span>
        <ol className="course-parts">{createQuickLinks(quickLinks)}</ol>
      </div>
    )
  }
}

function createQuickLinks(links: string[]) {
  return links.map((link, index) => (
    <li key={index}>
      <span className="course-content">{link}</span>
    </li>
  ))
}
