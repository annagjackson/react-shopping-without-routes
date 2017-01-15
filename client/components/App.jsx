import React from 'react'

import Header from './Header'
import Content from './Content'
import Footer from './Footer'

export default React.createClass({
  pageState: {
    activePage: 'details'
  },

  render () {
    return (
      <div className='app'>
        <Header />
        <Content pageState={this.pageState} />
        <Footer />
      </div>
    )
  }
})
