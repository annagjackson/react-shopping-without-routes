import React from 'react'

import Home from './Home'
import Categories from './Categories'
import ProductListing from './ProductListing'
import ProductDetails from './ProductDetails'

export default React.createClass({
  render () {
    let active = <Home />

    if (this.props.pageState.activePage === 'listing') {
      active = <ProductListing />
    }

    if (this.props.pageState.activePage === 'details') {
      active = <ProductDetails />
    }

    return (
      <div className='content'>
        <Categories categories={this.props.products.categories.map(category => category.name)} />
        { active }
      </div>
    )
  }
})
