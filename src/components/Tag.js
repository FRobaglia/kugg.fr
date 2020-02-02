import React from 'react'

class Tag extends React.Component {
  constructor(props) {
    super(props)
    
    this.state = {
      checked: false
    }

    this.handleClick = this.handleClick.bind(this)
  }
  render() {
    return (
        <li tabIndex="0" className={`tag tag-${this.props.tag.slug} ${this.state.checked ? 'checked' : ''}`} onClick={this.handleClick}>
          <div className="tooltip"> {this.props.tag.tooltip} </div>
          {this.props.tag.name}
        </li> 
    )
  }

  handleClick() {
    this.setState(state => ({
      checked: !state.checked
    }));
  }
}

export default Tag