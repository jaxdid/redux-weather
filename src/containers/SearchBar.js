import React, { Component } from 'react'
import { connect } from 'react-redux'

class SearchBar extends Component {
  constructor (props) {
    super(props)

    this.state = { term: '' }

    this.handleInputChange = this.handleInputChange.bind(this)
  }
  
  handleInputChange (event) {
    this.setState({ term: event.target.value })
  }

  handleSubmit (event) {
    event.preventDefault()
  }

  render () {
    return (
      <form className="input-group" onSubmit={this.handleSubmit}>
        <input
          className="form-control"
          placeholder="Get a 5-day forecast in your favorite cities"
          value={this.state.term}
          onChange={this.handleInputChange}
        />
        <span className="input-group-btn">
          <button className="btn btn-secondary" type="submit">Search</button>
        </span>
      </form>
    )
  }
}

function mapStateToProps (state) {
  return {}
}

export default connect(mapStateToProps)(SearchBar)