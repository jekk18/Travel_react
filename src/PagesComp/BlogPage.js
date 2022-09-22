import React, { Fragment } from 'react'
import Blogs from '../pages/Blogs/Blogs'
import Header from '../pages/PageComponents/Header/Header'
import Radio from '../pages/Radio/Radio'

const BlogPage = () => {
  return (
    <Fragment>
        <Header/>
        <main>
            <Blogs/>
            <Radio/>
        </main>
    </Fragment>
  )
}

export default BlogPage