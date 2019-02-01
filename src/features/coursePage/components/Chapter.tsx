import React from 'react'

export class Chapter extends React.Component<any, any> {
  constructor(props: any) {
    super(props)
    this.state = { header: this.props.header}
  }
  toggleVisibility = (id: string) => {
    const pageContent = document.getElementById(id)
    // console.log('funktiota kutsuttiin')
    if (pageContent) {
      console.log(pageContent.style.display)
      if (pageContent.style.display === 'none' || pageContent.style.display === '') {
        pageContent.style.display = 'block'
      } else {
        pageContent.style.display = 'none'
      }
    }
  }
  // const { idyll, hasError, updateProps, ...props } = content

  render() {
    return (
      <div>
        <div className="chapter" onClick={() => this.toggleVisibility(this.state.header)}>
          {this.state.header}
        </div>
        <div id={this.state.header} className="chapter_content">
          {this.props.children}
          <div className="close_chapter" onClick={() => this.toggleVisibility(this.state.header)}>
            Sulje kappale
          </div>
        </div>
      </div>
    )
  }
}
export default Chapter
