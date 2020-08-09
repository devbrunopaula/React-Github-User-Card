import React, { Component } from "react"
import "./user.css"
import GitHubLogo from "../../assets/imgages/github-logo.png"
import { Link } from "react-router-dom"
import Axios from "axios"
const defaultAvatar = "https://www.w3schools.com/howto/img_avatar.png"

class User extends Component {
  state = {
    user: {},
  }

  getUserData = () => {
    if (window.location.pathname === "/") return
    Axios.get(this.props.data.url).then(res =>
      this.setState({ user: res.data })
    )
  }

  componentDidMount() {
    this.getUserData()
  }

  render() {
    const HomeScreen = () => {
      return (
        <>
          <div className='user__info'>
            <div className='user__Followers user__stats'>
              <h3>Followers</h3>
              <Link
                to={{
                  pathname: "/followers",
                  search: `?${this.props.data.login}`,
                }}
              >
                <p>{this.props.data.followers}</p>
              </Link>
            </div>
            <div className='user__Following user__stats'>
              <h3>Following</h3>
              <p>{this.props.data.following}</p>
            </div>
            <div className='user__Repositories user__stats'>
              <h3>Repositories</h3>
              <p>{this.props.data.public_repos}</p>
            </div>
          </div>
        </>
      )
    }

    const FollowerScreen = () => {
      return (
        <>
          <div className='user__info'>
            <div className='user__Followers user__stats'>
              <h3>Followers</h3>
              <Link
                to={{
                  pathname: "/followers",
                }}
              >
                <p>{this.state.user.followers}</p>
              </Link>
            </div>
            <div className='user__Following user__stats'>
              <h3>Following</h3>
              <p>{this.state.user.following}</p>
            </div>
            <div className='user__Repositories user__stats'>
              <h3>Repositories</h3>
              <p>{this.state.user.public_repos}</p>
            </div>
          </div>
        </>
      )
    }

    return (
      <>
        <div className='user'>
          <div className='user__container'>
            <img
              className='user__avatar'
              src={
                this.props.data.avatar_url
                  ? this.props.data.avatar_url
                  : defaultAvatar
              }
              alt='avatar'
            />

            <div className='user__title--container'>
              <h3>
                {window.location.pathname === "/followers"
                  ? this.state.user.name
                  : this.props.data.name}
              </h3>
              <p>@{this.props.data.login}</p>
              <button
                className='user__link--button'
                onClick={() =>
                  (window.location.href = this.props.data.html_url)
                }
              >
                <img src={GitHubLogo} alt='github logo' />
              </button>
            </div>
          </div>

          {window.location.pathname === "/" ? (
            <HomeScreen />
          ) : (
            <FollowerScreen />
          )}
        </div>
      </>
    )
  }
}

export default User
