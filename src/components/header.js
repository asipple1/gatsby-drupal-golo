import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header className="header">
    <div className="container header__container">
      <div className="header__inner">
        <div className="header__logo">
          <Link to="/">Home</Link>
        </div>
        <div className="header__navigation">
          <nav>
            <Link to="/about">About</Link>
            <Link to="/articles">Articles</Link>
          </nav>
        </div>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
