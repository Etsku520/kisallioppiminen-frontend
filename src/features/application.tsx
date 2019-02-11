import React from 'react'
import { InitialState, CoursePageState } from '../types/InitialState'
import Footer from './baseComponents/Footer'
import Navigation from './baseComponents/Navigation'
import Hero from './baseComponents/Hero'
import { getPage, watchPageChanges } from '../routes'
import { Provider, connect } from 'react-redux'
import { initStore } from '../reducers/store'

export function createApp(initialState: { pageState: InitialState; coursePageState: CoursePageState }) {
  const store = initStore(initialState)
  watchPageChanges(store)

  const mapStateToProps = (state: { pageState: InitialState; coursePageState: CoursePageState }) => {
    return { initialState: state.pageState }
  }

  const app = (props: { initialState: InitialState }) => {
    const { initialState: state } = props
    const {component, pageName} = resolvePageToRender(state)
    return (
      <React.Fragment>
        <Navigation />
        <Hero location={pageName} />
        {component}
        <Footer />
      </React.Fragment>
    )
  }

  const ConnectedApp = connect(mapStateToProps)(app)

  return (
    <Provider store={store}>
      <ConnectedApp />
    </Provider>
  )
}

function resolvePageToRender(initialState: InitialState) {
  const { pageParams } = initialState
  const { path } = pageParams
  const page = getPage(path)

  if (page === undefined) {
    return {component: <h1>404 Not found :(</h1>, pageName: 'Not found'}
  }

  initialState.pageParams.pathParams = page.pathParams
  const {component, pageName} = page

  return {component: component(), pageName}
}
