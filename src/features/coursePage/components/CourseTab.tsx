import React from 'react'
import Link from '../../baseComponents/Link'
import { connect } from 'react-redux'
import { InitialState, CoursePageState } from '../../../types/InitialState'

interface Props {
  courseTabId: number
  tabId: number
  header: JSX.Element
  courseId: number
}

const CourseTab = ({tabId, courseTabId, header, courseId}: Props) => {
  return (
    <Link href={`/courses/${courseId}/tab/${tabId}`}>
      <div className={courseTabId !== tabId ? 'section' : 'section-active'}>
        {header}
      </div>
    </Link>
  )
}

const mapStateToProps = (state: { pageState: InitialState; coursePageState: CoursePageState }) => ({
  courseTabId: Number(state.pageState.pageParams.pathParams.tabId),
  courseId: state.pageState.pageParams.pathParams.id
})

const ConnectedCoursTab = connect(
  mapStateToProps
)(CourseTab)

export default ConnectedCoursTab
