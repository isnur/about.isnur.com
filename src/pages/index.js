import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout
    className={`content-area h-full flex justify-center align-center flex-col`}
  >
    <SEO title="Home" />
    <h1
      className={`text-xl lg:text-4xl font-bold text-gray-500 dark:text-gray-100`}
    >
      Hi people,
    </h1>
    <p className={`text-lg lg:text-2xl text-gray-500 dark:text-gray-100`}>
      Welcome to my personal website.
      <br />
      My name is Isnur Muhammad Suryo Margono.
      <br />I am a Frontend Developer with almost 4 years of experience.
    </p>
  </Layout>
)

export default IndexPage
