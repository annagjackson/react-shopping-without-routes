import React from 'react'

import Nav from './Nav'

export default React.createClass({
  render () {
    if (this.props.isActive) {
      return (
        <div className='home'>
          <Nav />
          <p>home</p>
        </div>
      )
    }
  }
})
