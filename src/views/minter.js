import React from 'react'

import { Helmet } from 'react-helmet'

import './minter.css'

const Minter = (props) => {
  return (
    <div className="minter-container">
      <Helmet>
        <title>Minter - exported project</title>
        <meta property="og:title" content="Minter - exported project" />
      </Helmet>
    </div>
  )
}

export default Minter
