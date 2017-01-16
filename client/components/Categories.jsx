import React from 'react'

export default React.createClass({
  render () {
    return (
      <div className='categories'>
        <ul>
          <li className='selected'><a href='/listing.html'>Action figures</a></li>
          {this.props.categories.map(category => {
            <li><a
              href='#'
              className={this.props.selected ? 'selected' : ''}
              onClick={() => this.props.navigateTo(category)}>category</a></li>
          })}
        </ul>
      </div>
    )
  }
})
