import React from 'react'

export default React.createClass({
  render () {
    return (
      <div className='nav'>
        {this.props.history.map(page => {
          return <a href='#' onClick={() => this.props.navigateTo(page)}>page</a>
        })}
      </div>
    )
  }
})
