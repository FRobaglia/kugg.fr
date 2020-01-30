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
        <div className={`tag tag-${this.props.data.color} ${this.state.checked ? 'checked' : ''}`} onClick={this.handleClick}>
          {this.props.data.name}
        </div> 
    )
  }

  handleClick() {
    this.setState(state => ({
      checked: !state.checked
    }));
  }
}

export default Tag