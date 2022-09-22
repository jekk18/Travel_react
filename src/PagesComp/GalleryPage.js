import React, { Fragment } from 'react'
import Gallery from '../pages/Gallery/Gallery'
import Journals from '../pages/Journals/Journals'
import Header from '../pages/PageComponents/Header/Header'

const GalleryPage = () => {
  return (
    <Fragment>
        <Header/>
        <main>
            <Gallery/>
            <Journals/>
        </main>
    </Fragment>
  )
}

export default GalleryPage