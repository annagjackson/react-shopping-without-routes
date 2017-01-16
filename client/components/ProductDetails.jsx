import React from 'react'

import Nav from './Nav'

export default React.createClass({
  render () {
    return (
      <div className='product-details'>
        <Nav history={['home', this.props.category]} />
        <h2>{this.props.name}</h2>
        <p className='product-image'><img src='{this.props.image}' /></p>
        <p>{this.props.description}</p>
      </div>
    )
  }
})
