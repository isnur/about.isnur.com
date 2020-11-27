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
          "h-2/4 px-2 md:px-4 mr-2 rounded flex items-center bg-pink-700 text-white dark:text-gray-300",
      }
    }

    return null
  }
  return (
    <header className={`px-4 lg:px-0 bg-gray-50 dark:bg-gray-900 mb-4`}>
      <div className={`container mx-auto flex justify-between`}>
        <Link
          aria-label="Logo"
          to="/"
          className={`h-full py-4 flex items-center justify-center`}
        >
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
          <button
            onClick={toggle}
            className={`p-4 -mr-4 focus:outline-none hover:text-yellow-500`}
            aria-label={`theme`}
          >
            {dark ? (
              <svg
                stroke="currentColor"
                fill="none"
                strokeWidth="2"
                viewBox="0 0 24 24"
                strokeLinecap="round"
                strokeLinejoin="round"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="12" cy="12" r="5"></circle>
                <line x1="12" y1="1" x2="12" y2="3"></line>
                <line x1="12" y1="21" x2="12" y2="23"></line>
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                <line x1="1" y1="12" x2="3" y2="12"></line>
                <line x1="21" y1="12" x2="23" y2="12"></line>
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
              </svg>
            ) : (
              <svg
                stroke="currentColor"
                fill="none"
                strokeWidth="2"
                viewBox="0 0 24 24"
                strokeLinecap="round"
                strokeLinejoin="round"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
              </svg>
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
