import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Image from "./image"

const Header = ({ siteTitle }) => {
  const [dark, setDark] = React.useState()
  React.useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      setDark(true)
      localStorage.theme = "dark"
      document.querySelector("html").classList.add("dark")
    } else {
      setDark(false)
      localStorage.theme = "light"
      document.querySelector("html").classList.remove("dark")
    }
  }, [])

  const toggle = () => {
    const htmlClasses = document.querySelector("html").classList
    if (dark) {
      htmlClasses.remove("dark")
      localStorage.theme = "light"
      setDark(false)
    } else {
      htmlClasses.add("dark")
      localStorage.theme = "dark"
      setDark(true)
    }
  }
  const isActive = ({ isCurrent }) => {
    if (isCurrent) {
      return {
        className:
          " h-2/4 px-2 md:px-4 mr-2 rounded flex items-center bg-pink-700 text-white dark:text-gray-300",
      }
    }

    return null
  }
  return (
    <header className={`px-4 lg:px-0 bg-gray-50 dark:bg-gray-900 mb-4`}>
      <div className={`container mx-auto flex justify-between`}>
        <Link to="/" className={`h-full py-4 flex items-center justify-center`}>
          <Image name="logoImage" type="fixed" className={`mr-4`} />
          <span className={`hidden md:inline-block`}>About Isnur.com</span>
        </Link>
        <div className={`flex justify-end items-center`}>
          <Link
            to="/"
            getProps={isActive}
            className={`dark:text-gray-300 h-2/4 px-2 md:px-4 mr-2 rounded flex items-center hover:bg-pink-700 hover:text-white dark:hover:text-gray-300`}
          >
            Home
          </Link>
          <Link
            to="/page-2"
            getProps={isActive}
            className={`dark:text-gray-300 h-2/4 px-2 md:px-4 mr-2 rounded flex items-center hover:bg-pink-700 hover:text-white dark:hover:text-gray-300`}
          >
            Portfolio
          </Link>
          <button onClick={toggle} className={`md:pl-2 focus:outline-none`}>
            {dark ? (
              <span role="img" aria-label="Sun">
                ☀️
              </span>
            ) : (
              <span role="img" aria-label="Crescent Moon">
                🌙
              </span>
            )}
          </button>
        </div>
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
