import React from "react"
import "./followers.css"
import { gitHubApi } from "../../api/githubApi"
import User from "../user/User"

class Followers extends React.Component {
  state = {
    followers: [],
    loading: false,
  }
  fetchFollowers = async () => {
    try {
      this.setState({ loading: true })
      const response = await gitHubApi.get(
        `users/${this.props.searchedUser}/followers`
      )
      this.setState({
        followers: response.data,
        loading: false,
      })
    } catch (error) {
      console.log(error)
      this.setState({ loading: true })
    }
  }

  componentDidMount() {
    this.fetchFollowers()
  }

  render() {
    return (
      <>
        <div className='followers'>
          <h1 className='followers__title'>Followers</h1>
          <div className='followers__container'>
            {this.state.followers.length < 0 ? (
              <h1>Loading</h1>
            ) : (
              this.state.followers.map(follower => (
                <User
                  className='follower__userCard'
                  key={follower.id}
                  data={follower}
                />
              ))
            )}
          </div>
        </div>
      </>
    )
  }
}

export default Followers
