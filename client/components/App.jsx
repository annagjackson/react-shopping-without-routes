import React from 'react'

import products from '../products'

import Header from './Header'
import Content from './Content'
import Footer from './Footer'

export default React.createClass({
  pageState: {
    activePage: 'home',
    selectedCategory: '',
    selectedProduct: ''
  },

  render () {
    return (
      <div className='app'>
        <Header />
        <Content pageState={this.pageState} products={products} />
        <Footer />
      </div>
    )
  },

  navigateTo (destination, category) {
    this.setState({
      activePage: destination,
      selectedCategory: category
    })
  }
})
