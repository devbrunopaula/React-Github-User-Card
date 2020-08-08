import React, { Component } from "react"
import "./user.css"
import GitHubLogo from "../../assets/imgages/github-logo.png"
import { Link } from "react-router-dom"
const defaultAvatar = "https://www.w3schools.com/howto/img_avatar.png"

class User extends Component {
  componentDidMount() {}

  render() {
    const {
      avatar_url,
      name,
      login,
      html_url,
      followers,
      following,
      public_repos: repo,
    } = this.props.data

    return (
      <>
        <div className='user'>
          <div className='user__container'>
            <img
              className='user__avatar'
              src={avatar_url ? avatar_url : defaultAvatar}
              alt='avatar'
            />

            <div className='user__title--container'>
              <h3>{name}</h3>
              <p>@{login}</p>
              <button
                className='user__link--button'
                onClick={() => (window.location.href = html_url)}
              >
                <img src={GitHubLogo} alt='github logo' />
              </button>
            </div>
          </div>
          <div className='user__info'>
            <div className='user__Followers user__stats'>
              <Link
                to={{
                  pathname: "/followers",
                  search: `?${login}`,
                }}
              >
                <h3>Followers</h3>
              </Link>
              <p>{followers}</p>
            </div>
            <div className='user__Following user__stats'>
              <h3>Following</h3>
              <p>{following}</p>
            </div>
            <div className='user__Repositories user__stats'>
              <h3>Repositories</h3>
              <p>{repo}</p>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default User
