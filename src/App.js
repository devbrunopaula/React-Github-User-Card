import React from "react"
import { gitHubApi } from "./api/githubApi"
import "./App.css"

import { Switch, Route } from "react-router-dom"
import Home from "./components/Home/Home"
import Followers from "./components/Followers/Followers"
import Nav from "./components/Nav/Nav"

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

  handleInputChange = inputValue => {
    this.setState({ searchedUser: inputValue })
  }

  componentDidMount() {
    this.fetchUser()
  }
  // componentDidUpdate(prevProps, prevState) {
  //   if (this.state.searchedUser !== prevState.searchedUser) {
  //     // this.fetchUser()
  //   }
  // }

  render() {
    return (
      <>
        <Nav />
        <Switch>
          <Route path='/followers'>
            <Followers searchedUser={this.state.user.login} />
          </Route>
          <Route path='/'>
            <Home
              user={this.state.user}
              searchedUser={this.state.searchedUser}
              handleInputChange={this.handleInputChange}
              fetchUser={this.fetchUser}
            />
          </Route>
        </Switch>
      </>
    )
  }
}

export default App
