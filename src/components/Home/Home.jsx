import React from "react"
import "./home.css"
import User from "../user/User"

class Home extends React.Component {
  state = {
    search: "",
  }
  handleChange = e => {
    const inputValue = e.target.value
    this.setState({ search: inputValue })
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.search !== prevState.search) {
      this.props.handleInputChange(this.state.search)
    }
  }
  render() {
    return (
      <div className='app'>
        <form>
          <div className='user__searchConainter'>
            <input
              className='user__searchInput'
              name='search'
              type='search'
              results={5}
              placeholder='Search a User...'
              value={this.state.search}
              onChange={this.handleChange}
            />
          </div>
        </form>
        <User data={this.props.user} />

        <div className='app__status'>
          {this.props.searchedUser.length > 1 ? (
            <img
              src={`http://ghchart.rshah.org/${this.props.searchedUser}`}
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
