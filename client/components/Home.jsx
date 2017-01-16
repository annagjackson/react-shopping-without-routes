import React from 'react'

import Nav from './Nav'

export default React.createClass({
  render () {
    return (
      <div className='home'>
        <Nav history={[]} />
        <h2>Welcome to the React Toy Store</h2>
        <blockquote>
          Shopping for the person who really likes to play? You've come to the right place!
        </blockquote>
        <p>Select a category on the left to see a list of toys in that category.</p>
      </div>
    )
  }
})
