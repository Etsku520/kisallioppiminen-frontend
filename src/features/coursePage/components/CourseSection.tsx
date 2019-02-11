import React from 'react'
import { InitialState, CoursePageState } from '../../../types/InitialState'
import { connect } from 'react-redux'

const CourseSection = (props: {sectionId: number, courseTabId: number, children: any}) => {
 return props.sectionId === props.courseTabId ? <div id="CourseSection">{props.children}</div> : <div style={{ display: 'none' }}></div>
}

const mapStateToProps = (state: { pageState: InitialState; coursePageState: CoursePageState }) => ({
  courseTabId: Number(state.pageState.pageParams.pathParams.tabId)
})

const ConnectedCourseSection = connect(
  mapStateToProps
)(CourseSection)

export default ConnectedCourseSection
