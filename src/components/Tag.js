import React from 'react'

class Tag extends React.Component {
  render() {
    return (
        <li onClick={this.props.onClick} className={`tag tag-${this.props.tag.slug} ${this.props.tag.checked ? 'checked' : ''}`}>
          <div className="tooltip"> {this.props.tag.tooltip} </div>
          {this.props.tag.name}
        </li> 
    )
  }
}

export default Tag