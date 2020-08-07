import React from "react"
import { gitHubApi } from "./api/githubApi"
import "./App.css"
import User from "./components/user/User"

class App extends React.Component {
  state = {
    user: [],
    searchedUser: "devbrunopaula",
    loading: false,
  }

  fetchUser = async () => {
    try {
      this.setState({ loading: true })
      const response = await gitHubApi.get(`users/${this.state.searchedUser}`)
      this.setState({
        user: response.data,
        loading: false,
        searchedUse: response.Login,
      })
    } catch (error) {
      console.log(error)
      this.setState({ loading: true })
    }
  }

  componentDidMount() {
    this.fetchUser()
    // setTimeout(() => {
    //   this.fetchUser()
    // }, 2000)
  }
  componentDidUpdate(prevProps, prevState) {
    if (this.state.searchedUser !== prevState.searchedUser) {
      this.fetchUser()
    }
  }

  render() {
    return (
      <div className='app'>
        <h1 className='app__title'>Github User Card</h1>
        <form>
          <div className='user__searchConainter'>
            <input
              className='user__searchInput'
              name='s'
              type='search'
              results={5}
              placeholder='Search a User...'
              value={this.state.searchedUser}
              onChange={e => this.setState({ searchedUser: e.target.value })}
            />
          </div>
        </form>
        <User data={this.state.user} />

        <div className='app__status'>
          {this.state.searchedUser.length > 1 ? (
            <img
              src={`http://ghchart.rshah.org/${this.state.searchedUser}`}
              alt={`${this.state.searchedUser}'s Github chart`}
            />
          ) : (
            ""
          )}
        </div>
      </div>
    )
  }
}

export default App
