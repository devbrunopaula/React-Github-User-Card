import React from "react"
import "./home.css"
import User from "../user/User"

class Home extends React.Component {
  state = {
    search: "devbrunopaula",
    status: true,
  }
  handleChange = e => {
    const inputValue = e.target.value
    this.setState({ search: inputValue })
    this.setState({ status: false })
  }

  handleSubtmit = e => {
    e.preventDefault()
    this.props.fetchUser()
    this.setState({ status: true })
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.search !== prevState.search) {
      this.props.handleInputChange(this.state.search)
    }
  }

  render() {
    return (
      <div className='app'>
        <form onSubmit={this.handleSubtmit}>
          <div className='user__searchConainter'>
            <input
              className='user__searchInput'
              name='search'
              type='text'
              results={5}
              placeholder='Search a User...'
              value={this.state.search}
              onChange={this.handleChange}
            />
            <button
              onClick={e => this.props.handleInputChange}
              className='app__search--button'
              type='submit'
            >
              Search
            </button>
          </div>
        </form>
        <User data={this.props.user} />

        <div className='app__status'>
          {this.state.status ? (
            <img
              src={`http://ghchart.rshah.org/${this.state.search}`}
              alt={`${this.props.searchedUser}'s Github chart`}
            />
          ) : (
            ""
          )}
        </div>
      </div>
    )
  }
}

export default Home
