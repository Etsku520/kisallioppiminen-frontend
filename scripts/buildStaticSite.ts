import ReactServer from 'react-dom/server'
import {readContent} from '../src/server/initialStateResolver'
import {createApp} from '../src/features/application'
import {writeFileSync} from 'fs'
import {createTemplate} from '../src/server/basePage'

const initialState = readContent()
const app = createApp(initialState)
const staticHtml = ReactServer.renderToString(app)
const wrappedHtml = createTemplate({
  title: 'Kisällioppiminen.fi',
  body: staticHtml,
  initialState: JSON.stringify(initialState),
  isStatic: true
})

writeFileSync('./dist/static/index.html', wrappedHtml)
