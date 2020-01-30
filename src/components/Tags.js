import React from 'react'
import Tag from './Tag'

class Tags extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      tags: [
        { name: 'Lorem', color: 'yellow', id: 1 },
        { name: 'Ipsum', color: 'green', id: 2 },
        { name: 'Dolor', color: 'purple', id: 3 },
        { name: 'Sit', color: 'red', id: 4 },
        { name: 'Amet', color: 'cyan', id: 5 }
      ]
    }
  }

  render() {
    return (
      this.state.tags.map(tagData => {
        return <Tag key={tagData.id} data={tagData} />
      })
    )
  }

  handleClick() {
    
  }
}

export default Tags